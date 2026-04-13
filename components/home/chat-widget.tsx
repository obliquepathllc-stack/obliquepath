"use client";

// ─── CHAT WIDGET ───────────────────────────────────────────────────────────────
// Floating chat widget — homepage only.
// Calls /api/chat (Anthropic proxy) with full conversation history.
// Detects lead emails and fires /api/chat-lead for team notification.
// Renders a booking CTA button when the bot mentions a strategy call.

import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, Send, ExternalLink } from "lucide-react";

// ─── TYPES ─────────────────────────────────────────────────────────────────────
interface Message {
  role: "user" | "assistant";
  content: string;
}

// ─── OPENING MESSAGE ───────────────────────────────────────────────────────────
const OPENING_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hey — what brings you to Oblique Path today? Are you looking to automate something specific, or still exploring what's possible?",
};

// ─── HELPERS ───────────────────────────────────────────────────────────────────
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

// Show booking CTA button if bot recommends a call
function shouldShowBookingCTA(text: string): boolean {
  const lower = text.toLowerCase();
  return (
    lower.includes("strategy call") ||
    lower.includes("book a call") ||
    lower.includes("book-demo") ||
    lower.includes("schedule a call") ||
    lower.includes("best next step")
  );
}

// Try to extract a name from recent user messages
function extractName(messages: Message[]): string {
  for (const msg of [...messages].reverse()) {
    if (msg.role !== "user") continue;
    const match = msg.content.match(
      /(?:i'?m|i am|my name is|this is|name'?s|call me)\s+([A-Z][a-z]+)/i
    );
    if (match) return match[1];
  }
  return "";
}

// ─── COMPONENT ─────────────────────────────────────────────────────────────────
export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([OPENING_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [showIdlePrompt, setShowIdlePrompt] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [teaserDismissed, setTeaserDismissed] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Stop pulse ring after 6 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowPulse(false), 6000);
    return () => clearTimeout(t);
  }, []);

  // Show teaser bubble after 4 seconds (if chat not opened)
  useEffect(() => {
    const t = setTimeout(() => {
      if (!isOpen && !teaserDismissed) setShowTeaser(true);
    }, 4000);
    return () => clearTimeout(t);
  }, [isOpen, teaserDismissed]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, showIdlePrompt]);

  // Auto-focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // ─── IDLE TIMER — reset on every new message ──────────────────────────────
  const resetIdleTimer = useCallback(() => {
    setShowIdlePrompt(false);
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      setShowIdlePrompt(true);
    }, 120_000); // 2 minutes
  }, []);

  useEffect(() => {
    if (isOpen) resetIdleTimer();
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [isOpen, messages, resetIdleTimer]);

  // ─── LEAD CAPTURE LOGIC ────────────────────────────────────────────────────
  // Fires when a user message contains an email address.
  // Sends name + email + last 3 messages to /api/chat-lead.
  const checkForLead = async (userMessage: string, allMessages: Message[]) => {
    if (leadCaptured) return;

    const emailMatch = userMessage.match(EMAIL_REGEX);
    if (!emailMatch) return;

    const email = emailMatch[0];
    const name = extractName(allMessages);

    const lastThree = allMessages.slice(-3);
    const summary = lastThree
      .map((m) => `${m.role === "user" ? "Visitor" : "Bot"}: ${m.content}`)
      .join("\n\n");

    setLeadCaptured(true);

    try {
      await fetch("/api/chat-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Not provided",
          email,
          summary,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error("Lead capture failed:", err);
    }
  };

  // ─── SEND MESSAGE ──────────────────────────────────────────────────────────
  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMessage: Message = { role: "user", content: text };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput("");
    setIsTyping(true);
    setShowIdlePrompt(false);
    resetIdleTimer();

    // Check for lead email before API call
    await checkForLead(text, newMessages);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.text },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong. Please try again or email us at info@obliquepath.dev",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // ─── RENDER ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Chat panel ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-4 z-50 flex flex-col rounded-2xl border border-border/60 bg-card shadow-2xl overflow-hidden"
            style={{ width: "360px", maxWidth: "calc(100vw - 2rem)", height: "500px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/40 bg-card shrink-0">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="font-semibold text-sm">Chat with us</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-foreground/40 hover:text-foreground transition-colors p-1 rounded-md hover:bg-muted/50"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[82%] text-sm leading-relaxed rounded-2xl px-4 py-2.5 ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted/70 text-foreground rounded-bl-sm"
                    }`}
                  >
                    <p>{msg.content}</p>

                    {/* ── Booking CTA button — shown inside bot bubble ──── */}
                    {msg.role === "assistant" && shouldShowBookingCTA(msg.content) && (
                      <div className="mt-3">
                        <a
                          href="/book-demo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          Book a Strategy Call
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted/70 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="block w-1.5 h-1.5 rounded-full bg-foreground/40"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 0.55,
                          repeat: Infinity,
                          delay: i * 0.15,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Idle prompt */}
              {showIdlePrompt && !isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted/40 border border-border/30 rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm text-foreground/60 italic">
                    Still there? Happy to answer any questions.
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input bar */}
            <div className="shrink-0 border-t border-border/40 px-3 py-3 flex gap-2 items-center bg-card">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isTyping}
                placeholder="Type a message..."
                className="flex-1 bg-muted/40 border border-border/40 rounded-xl px-3 py-2 text-sm outline-none focus:border-primary/60 disabled:opacity-50 transition-colors placeholder:text-foreground/35"
              />
              <button
                onClick={sendMessage}
                disabled={isTyping || !input.trim()}
                aria-label="Send message"
                className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0 hover:bg-primary/90 disabled:opacity-40 transition-all duration-150 hover:scale-105 active:scale-95"
              >
                <Send className="h-4 w-4 text-primary-foreground" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Teaser bubble ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showTeaser && !isOpen && !teaserDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-5 z-50 max-w-[220px]"
          >
            <div className="relative bg-card border border-border/60 shadow-xl rounded-2xl rounded-br-sm px-4 py-3">
              <button
                onClick={() => { setShowTeaser(false); setTeaserDismissed(true); }}
                className="absolute top-1.5 right-1.5 text-foreground/30 hover:text-foreground/60 transition-colors"
                aria-label="Dismiss"
              >
                <X className="h-3 w-3" />
              </button>
              <p className="text-sm font-medium leading-snug pr-3">
                Thinking about automating something?
              </p>
              <p className="text-xs text-foreground/55 mt-1">Ask us — takes 30 seconds.</p>
              <button
                onClick={() => { setShowTeaser(false); setTeaserDismissed(true); setIsOpen(true); }}
                className="mt-2.5 w-full text-xs font-semibold bg-primary text-primary-foreground rounded-lg py-1.5 hover:bg-primary/90 transition-colors"
              >
                Let&apos;s chat
              </button>
            </div>
            {/* Arrow pointing down-right toward button */}
            <div className="w-3 h-3 bg-card border-r border-b border-border/60 rotate-45 ml-auto mr-5 -mt-1.5" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Trigger button ────────────────────────────────────────────────── */}
      <div className="fixed bottom-6 right-5 z-50 group">
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          <div className="bg-card border border-border/50 shadow-lg text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap">
            Chat with us
          </div>
          <div className="w-2 h-2 bg-card border-r border-b border-border/50 rotate-45 ml-auto mr-3 -mt-1" />
        </div>

        {/* Pulse rings — shown for first 6 seconds */}
        {showPulse && !isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-primary/25 animate-ping" />
            <span className="absolute inset-0 rounded-full bg-primary/15 animate-ping [animation-delay:400ms]" />
          </>
        )}

        {/* Button */}
        <button
          onClick={() => { setIsOpen((prev) => !prev); setShowTeaser(false); setTeaserDismissed(true); }}
          aria-label={isOpen ? "Close chat" : "Open chat"}
          className="relative w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </>
  );
}
