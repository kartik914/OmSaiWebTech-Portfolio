"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Button } from "../ui/button";

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
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">Contact Form</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
            <div className="relative flex justify-center items-center py-4">
              <span className="absolute w-full h-[1px] z-0 bg-slate-500"></span>
              <span className="z-10 px-2 bg-white/70 dark:bg-black/70">OR</span>
            </div>
            <CardTitle className="text-4xl">Reach Us Directly</CardTitle>
            <div className="pt-4">
              <div className="flex flex-row justify-start items-center gap-2">
                <FaLocationDot /> Address: Sector 8, Manav Chowk, Ambala City
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <FaPhone /> Phone:
                <Button variant={"link"} className="p-0 m-0" size={"sm"}>
                  <Link href="tel:9812389831">98123 89831</Link>
                </Button>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <MdEmail />
                Email:
                <Button variant={"link"} className="p-0 m-0" size={"sm"}>
                  <Link href="mailto:info@omsaiwebtech.com">info@omsaiwebtech.com</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default ContactSection;
