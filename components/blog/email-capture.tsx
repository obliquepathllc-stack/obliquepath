"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";

export function EmailCapture() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/blog-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      if (!res.ok) throw new Error("Failed");
      setDone(true);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="my-14 rounded-2xl border border-border bg-card px-8 py-10"
    >
      {done ? (
        <div className="flex flex-col items-center text-center gap-3 py-4">
          <CheckCircle size={36} className="text-primary" weight="fill" />
          <p className="font-bold text-lg">You&apos;re in. Check your inbox.</p>
          <p className="text-sm text-muted-foreground">We&apos;ll send you the playbook shortly.</p>
        </div>
      ) : (
        <>
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-3">Free Resource</p>
          <h3 className="text-xl font-bold tracking-tight mb-2">Get the automation playbook.</h3>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Practical guides on what to automate first, sent to your inbox. No fluff.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-foreground text-background font-semibold px-6 py-2.5 text-sm flex items-center gap-2 hover:opacity-80 active:scale-[0.97] transition-all duration-200 disabled:opacity-50 shrink-0"
            >
              {loading ? "Sending..." : "Send me the guide"}
              {!loading && <ArrowRight size={14} weight="bold" />}
            </button>
          </form>
          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
        </>
      )}
    </motion.div>
  );
}
