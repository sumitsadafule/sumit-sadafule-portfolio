import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Check all fields
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      // Get EmailJS settings from .env
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check environment variables
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS settings are missing. Please check your .env file."
        );
      }

      console.log("EmailJS Service ID:", serviceId);
      console.log("EmailJS Template ID:", templateId);
      console.log("EmailJS Public Key:", publicKey ? "Found" : "Missing");

      // Send form
      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      console.log("EmailJS response:", response);

      // Success
      alert(
        "Thank you! Your message has been sent successfully. I will get back to you soon."
      );

      setForm(INITIAL_STATE);
    } catch (error: any) {
      console.error("================================");
      console.error("EMAILJS ERROR");
      console.error("================================");
      console.error(error);

      // Show actual EmailJS error
      const errorMessage =
        error?.text ||
        error?.message ||
        "Unknown EmailJS error. Check the browser console.";

      alert(`Message could not be sent.\n\nError: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        {/* Contact Information */}
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary">
          <a
            href="tel:+919403033133"
            className="transition-colors hover:text-white"
          >
            +91 94030 33133
          </a>

          <a
            href={`mailto:${config.html.email}`}
            className="transition-colors hover:text-white"
          >
            {config.html.email}
          </a>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name */}
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">
              Your Name
            </span>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">
              Your Email
            </span>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              required
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>

          {/* Message */}
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">
              Your Message
            </span>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              rows={7}
              required
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>

          {/* Send Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-fit rounded-xl bg-[#915EFF] px-8 py-3 font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#7c4dff] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* Earth */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");