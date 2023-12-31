"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { sendEmail } from "@/actions/send-email";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.9);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        You can reach me directly at{" "}
        <a className="underline" href="mailto:me@mxpg.eu">
          me@mxpg.eu
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("E-mail sent! I'll get back to you soon.", {
            duration: 5000,
          });
        }}
      >
        <input
          type="text"
          name="senderFirstName"
          className="h-0 w-0"
          placeholder="First Name"
        />
        <input
          className="h-14 px-4 rounded-lg form-input"
          name="senderName"
          type="text"
          required
          maxLength={500}
          placeholder="Name"
        />
        <input
          className="h-14 my-3 px-4 form-input"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="E-Mail Address"
        />
        <input
          className="h-14 mt-3 px-4 form-input"
          name="subject"
          type="text"
          required
          maxLength={500}
          placeholder="Subject"
        />
        <textarea
          className="h-52 my-3 px-4 py-3 form-input"
          name="message"
          placeholder="Message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
