"use server";

import { createTransport } from "nodemailer";
import { validateString, getErrorMessage, validateEmail } from "@/lib/utils";

const transporter = createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PWD,
  },
});

export const sendEmail = async (formData) => {
  const senderEmail = formData.get("senderEmail");
  const senderName = formData.get("senderName");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateEmail(senderEmail)) {
    return {
      error: "Invalid E-Mail address",
    };
  }
  if (!validateString(senderName, 5000)) {
    return {
      error: "Invalid Name",
    };
  }
  if (!validateString(subject, 500)) {
    return {
      error: "Invalid Subject",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }
  let data;

  data = await transporter.sendMail({
    from: senderName + "<me@mxpg.eu>",
    replyTo: senderEmail,
    to: process.env.RECEIVER_EMAIL,
    subject: "[MXPG] " + subject,
    text: message,
  }), (error, info) => {
    if (error) {
      return {
        error: getErrorMessage(error),
      };
    }
  };

  return {
    data,
  };
};