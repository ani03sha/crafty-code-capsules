"use server";

import React from "react";
import { getErrorMessage, validateInputs } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get("email");
    const message = formData.get("message");

    if (!validateInputs(senderEmail, 100) || !validateInputs(message, 500)) {
        return {
            error: "Invalid input"
        }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "theotheranirudh90@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string
            })
        });
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }
    return {
        data
    };
}