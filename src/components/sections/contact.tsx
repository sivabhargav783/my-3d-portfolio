"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <Link href={"#contact"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          LET&apos;S WORK <br />
          TOGETHER
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999]">
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20 p-8">
          <CardHeader className="pb-6">
            <CardTitle className="text-4xl">Get In Touch</CardTitle>
            <CardDescription className="text-lg leading-relaxed pt-4">
              Please feel free to reach out to me directly via email at{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                {config.email}
              </a>{" "}
              or contact me by phone at{" "}
              <a
                href="tel:+918897975074"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                +91 88979 75074
              </a>
              . I look forward to connecting with you.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};
export default ContactSection;
