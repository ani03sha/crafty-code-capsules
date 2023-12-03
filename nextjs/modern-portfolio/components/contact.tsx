"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast/headless";

export default function Contact() {

    const { ref } = useSectionInView("Contact", 0.5);

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true
            }}>
            <SectionHeading>Contact Me</SectionHeading>
            <p className="text-gray-700 text-center -mt-6">Please contact me directly at <a className="underline" href="mailto:stuart@minions.com">stuart@minons.com</a> or through this form</p>
            <form 
            className="mt-10 flex flex-col"
            action={async (formData) => {
                const {data, error} = await sendEmail(formData);
                if (error) {
                    toast.error(error);
                    return;
                }
                toast.success("Email sent successfully!");
            }}>
                <input
                    name="email"
                    className="h-14 px-4 rounded-lg borderBlack"
                    type="email"
                    required
                    maxLength={100}
                    placeholder="Your email" />
                <textarea
                    name="message"
                    placeholder="Your message"
                    className="h-52 px-4 my-3 rounded-lg borderBlack p-4"
                    required
                    maxLength={500} />
                <SubmitButton />
            </form>
        </motion.section>
    );
}