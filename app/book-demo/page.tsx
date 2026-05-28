"use client";

import { useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Calendar, Clock, Users, ArrowUpRight } from "lucide-react";
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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  automating: z.string({ required_error: "Please select an option." }),
});

type FormValues = z.infer<typeof formSchema>;

const demoFeatures = [
  {
    icon: Calendar,
    title: "30-Minute Session",
    description: "A focused call scoped to your specific operation — no generic demos.",
  },
  {
    icon: Users,
    title: "Custom to Your Business",
    description: "We come prepared with your industry context and relevant examples.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Pick a time that works. We will confirm within one business day.",
  },
];

export default function BookDemoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", automating: "" },
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
    <PageLayout
      title="Book a Discovery Call"
      subtitle="Tell us what you want off your plate. We will scope it and price it — free."
    >
      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border/50 rounded-xl p-8 shadow-md"
            >
              <h3 className="text-2xl font-bold mb-6">Start a Discovery Call</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-[280px] text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">We got it.</h4>
                  <p className="text-foreground/70">
                    We will reach out within one business day to schedule your call.
                  </p>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="automating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What are you automating?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Pick the closest fit" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Scheduling">Scheduling</SelectItem>
                              <SelectItem value="Invoicing">Invoicing</SelectItem>
                              <SelectItem value="CRM">CRM</SelectItem>
                              <SelectItem value="AI Agents">AI Agents</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full rounded-full bg-foreground text-background font-semibold px-6 py-3.5 flex items-center justify-center gap-2 hover:opacity-80 active:scale-[0.97] transition-all duration-200 disabled:opacity-50"
                    >
                      {isLoading ? "Sending..." : "Start a Discovery Call"}
                      {!isLoading && <ArrowUpRight className="h-4 w-4" />}
                    </button>
                  </form>
                </Form>
              )}
            </motion.div>

            {/* Right column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
                <p className="text-foreground/80 mb-6">
                  No sales pitch. We map out what you actually need, tell you whether it is worth building, and give you a realistic timeline and cost. Then you decide.
                </p>
                <div className="space-y-6 mt-8">
                  {demoFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{feature.title}</h4>
                        <p className="text-foreground/70">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h4 className="font-bold mb-4">Common Questions</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium">Do I need to prepare anything?</p>
                    <p className="text-foreground/70">Just come with the problem. We handle the rest.</p>
                  </div>
                  <div>
                    <p className="font-medium">Is there any obligation?</p>
                    <p className="text-foreground/70">None. If it is not a fit, we will tell you upfront.</p>
                  </div>
                  <div>
                    <p className="font-medium">Can I bring my team?</p>
                    <p className="text-foreground/70">Yes — especially the person who owns the problem day-to-day.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
