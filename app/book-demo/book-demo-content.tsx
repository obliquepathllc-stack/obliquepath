"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { CheckCircle2, ArrowUpRight, Clock, Shield, TrendingUp, Phone, Calendar } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { bookDemo } from "@/api/api";
import { toast } from "sonner";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  automating: z.string({ required_error: "Please select an option." }),
});

type FormValues = z.infer<typeof formSchema>;

const results = [
  { stat: "14hrs", label: "saved per week", client: "Healthcare staffing agency" },
  { stat: "70%", label: "fewer no-shows", client: "Cleaning service, Windsor" },
  { stat: "60%", label: "less scheduling time", client: "Junk removal company" },
];

const outcomes = [
  "Exactly which process to automate first — based on your specific operation, not a guess",
  "A realistic cost range and timeline so you can make a real decision",
  "Whether it is actually worth it right now — we will tell you if it isn't",
];

export function BookDemoContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", company: "", automating: "" },
  });

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    const res = await bookDemo(data);
    if (res === null) {
      toast.error("Failed to send. Please try again.");
      setIsLoading(false);
      return;
    }
    setIsSubmitted(true);
    form.reset();
  }

  return (
    <main className="min-h-screen pt-24 pb-24 px-4 lg:px-16">
      <div className="container max-w-6xl mx-auto">

        {/* Hero headline */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            5 discovery calls per week — spots fill quickly
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            In 30 Minutes, You Will Know Exactly<br className="hidden md:block" /> What to Fix First
          </h1>
          <p className="text-lg text-foreground/65 max-w-2xl mx-auto leading-relaxed">
            No generic demos. We map your specific operation, find the highest-value automation, and give you a real cost and timeline. Then you decide.
          </p>
        </div>

        {/* Social proof bar */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-14">
          {results.map((r, i) => (
            <div key={i} className="text-center p-4 rounded-xl bg-card border border-border/50">
              <div className="text-2xl font-black gradient-text leading-none tracking-tighter mb-1">{r.stat}</div>
              <div className="text-xs text-muted-foreground leading-tight">{r.label}</div>
              <div className="text-[10px] text-muted-foreground/60 mt-1">{r.client}</div>
            </div>
          ))}
        </div>

        {/* Direct book CTA */}
        <div className="flex justify-center mb-10">
          <a
            href="https://calendar.app.google/vTDgiUnbzwZ647Cp7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-full hover:bg-primary/90 active:scale-[0.97] transition-all duration-200 shadow-md shadow-primary/20"
          >
            <Calendar className="h-4 w-4" />
            Book directly — pick a time now
          </a>
        </div>

        <div className="flex items-center gap-4 max-w-sm mx-auto mb-10 text-sm text-muted-foreground">
          <div className="flex-1 h-px bg-border" />
          <span>or fill the form and we'll reach out</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-border/50 rounded-2xl p-8 shadow-md"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">You are on the list.</h3>
                <p className="text-foreground/65 mb-6 text-sm leading-relaxed">
                  We will email you within a few hours to lock in a time. Most people hear from us same day.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-left mb-5">
                  <p className="text-sm font-semibold mb-2">Skip the wait and book directly</p>
                  <p className="text-xs text-foreground/65 mb-3">
                    Grab a time that works for you right now. Takes 30 seconds.
                  </p>
                  <a
                    href="https://calendar.app.google/vTDgiUnbzwZ647Cp7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Book a time directly
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                <p className="text-xs text-muted-foreground">
                  While you wait, read{" "}
                  <Link href="/case-studies" className="text-primary hover:underline">
                    what we have built for businesses like yours
                  </Link>
                  .
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-6">Book Your Discovery Call</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your name</FormLabel>
                            <FormControl>
                              <Input placeholder="First Last" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company <span className="text-muted-foreground font-normal">(optional)</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Your business" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone <span className="text-muted-foreground font-normal">(optional — faster scheduling)</span></FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="automating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What do you want to automate?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Pick the closest fit" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Scheduling & Dispatch">Scheduling and dispatch</SelectItem>
                              <SelectItem value="Invoicing & Payments">Invoicing and payments</SelectItem>
                              <SelectItem value="Lead Follow-Up">Lead follow-up</SelectItem>
                              <SelectItem value="CRM & Sales">CRM and sales workflow</SelectItem>
                              <SelectItem value="Healthcare Staffing">Healthcare staffing operations</SelectItem>
                              <SelectItem value="AI Agents">AI voice or chat agents</SelectItem>
                              <SelectItem value="Custom Software">Custom software or platform</SelectItem>
                              <SelectItem value="Other">Not sure yet</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full rounded-full bg-foreground text-background font-semibold px-6 py-4 flex items-center justify-center gap-2 hover:opacity-80 active:scale-[0.97] transition-all duration-200 disabled:opacity-50 text-[15px] mt-2"
                    >
                      {isLoading ? "Sending..." : "Request My Discovery Call"}
                      {!isLoading && <ArrowUpRight className="h-4 w-4" />}
                    </button>

                    <p className="text-xs text-center text-muted-foreground pt-1">
                      No obligation. No pitch. We respond same day.
                    </p>
                  </form>
                </Form>
              </>
            )}
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-8"
          >
            {/* What you'll walk away with */}
            <div>
              <h2 className="text-xl font-bold mb-5">What You Will Walk Away With</h2>
              <div className="space-y-4">
                {outcomes.map((o, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground/80 text-[15px] leading-relaxed">{o}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">30 minutes, scoped to your business</p>
                  <p className="text-xs text-muted-foreground">Not a generic software walkthrough.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">No obligation, ever</p>
                  <p className="text-xs text-muted-foreground">If we are not the right fit, we will say so.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Real numbers before you commit</p>
                  <p className="text-xs text-muted-foreground">Cost range and timeline, on the call.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Same-day response</p>
                  <p className="text-xs text-muted-foreground">We reply within hours, not days.</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="font-bold text-sm mb-4">Common Questions</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium">Do I need to prepare anything?</p>
                  <p className="text-foreground/65 mt-1">Just come with the problem. We handle the rest. The more you can describe your current process, the more specific we can be.</p>
                </div>
                <div>
                  <p className="font-medium">We are a small team. Is this for us?</p>
                  <p className="text-foreground/65 mt-1">Yes. Most of our clients have between 3 and 30 people. Small teams often have the most to gain from automation.</p>
                </div>
                <div>
                  <p className="font-medium">Can I bring someone from my team?</p>
                  <p className="text-foreground/65 mt-1">Please do — especially whoever manages the process you want to fix. Their input makes the call far more useful.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
