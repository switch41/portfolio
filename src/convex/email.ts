"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";

export const send = action({
  args: {
    name: v.string(),
    fromEmail: v.string(),
    message: v.string(),
  },
  handler: async (_, { name, fromEmail, message }) => {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      // This should not happen if the integration is set up correctly.
      console.error("RESEND_API_KEY environment variable not set.");
      throw new Error("Email sending is not configured.");
    }

    // NOTE: This 'from' address is for testing only.
    // For production, you must verify a domain with Resend.
    // See https://resend.com/docs/introduction
    const from = "onboarding@resend.dev";
    const to = "kushalparihar013@gmail.com"; // The portfolio owner's email

    const response = await fetch("https://api.resend.com/emails", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
            from: from,
            to: to,
            subject: `New Portfolio Message from ${name}`,
            html: `<div>
                     <h2>New Message via Portfolio</h2>
                     <p><strong>Name:</strong> ${name}</p>
                     <p><strong>Email:</strong> ${fromEmail}</p>
                     <hr>
                     <p><strong>Message:</strong></p>
                     <p>${message}</p>
                   </div>`
        })
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error("Failed to send email:", response.status, errorBody);
        throw new Error(`Failed to send email. Please try again later.`);
    }

    return await response.json();
  },
});
