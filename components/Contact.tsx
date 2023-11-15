"use client";
import React from "react";
import Iframe from "react-iframe";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "@radix-ui/react-label";

const Contact = () => {
  return (
    <div className="md:flex md:px-32 md:space-x-8 dark:bg-gray-900">
      <div className="md:w-1/2 md:mt-20">
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1082.1021625879876!2d38.76497380509275!3d9.007700381710036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85ba60ea840d%3A0x21d4319d63f7cd2!2sCooperative%20Bank%20of%20Oromia!5e0!3m2!1sen!2set!4v1687441394262!5m2!1sen!2set"
          width="600"
          height="550"
          styles={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></Iframe>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
          <h2 className="mt-4 mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <div className="m-4">
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="someone@email.com" id="email" />
          </div>
          <div className="m-4">
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              placeholder="Let us know what we can help you"
              id="subject"
            />
          </div>
          <div className="sm:col-span-2 m-4">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              placeholder="Type your message here."
              className="pb-24 md:pb-20"
              id="message"
            />
          </div>
          <Button className="m-4 bg-blue-500 text-white">Send message</Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
