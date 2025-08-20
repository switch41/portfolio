"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";

export const send = action({
  args: {
    name: v.string(),
    fromEmail: v.string(),
    message: v.string(),
  },
  handler: async (_, { name, fromEmail, message }) => {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable not set.");
      throw new Error(
        "Email sending is not configured. Please set the RESEND_API_KEY environment variable in your Convex deployment.",
      );
    }

    const resend = new Resend(resendApiKey);
    const toEmail = "kushalparihar013@gmail.com"; // The portfolio owner's email

    try {
      const { data, error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>", // For production, you must verify a domain with Resend.
        to: [toEmail],
        subject: `New Portfolio Message from ${name}`,
        replyTo: fromEmail,
        html: `<div>
                 <h2>New Message via Portfolio</h2>
                 <p><strong>Name:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${fromEmail}</p>
                 <hr>
                 <p><strong>Message:</strong></p>
                 <p>${message}</p>
               </div>`,
      });

      if (error) {
        console.error("Failed to send email:", error);
        throw new Error(`Failed to send email. Error: ${error.message}`);
      }

      return data;
    } catch (e: any) {
      console.error("An exception occurred while sending email:", e);
      throw new Error(
        `Failed to send email. Please try again later. Error: ${e.message}`,
      );
    }
  },
});