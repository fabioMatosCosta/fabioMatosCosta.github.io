import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const envelopeVariants = {
  closed: { scaleY: 0.05, borderRadius: "1.5rem", boxShadow: "0 8px 32px 0 rgba(0,0,0,0.12)" },
  open: { scaleY: 1, borderRadius: "1rem", boxShadow: "0 8px 32px 0 rgba(0,0,0,0.16)" }
};

const letterVariants = {
  closed: { y: -120, opacity: 0 },
  open: { y: 0, opacity: 1, transition: { delay: 0.4, duration: 0.8, ease: "easeOut" } }
};

const AnimatedContact = () => {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef();

  const handleInView = (inView) => {
    if (inView) setOpen(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formRef.current,
      "YOUR_USER_ID"
    ).then(
      () => setSent(true),
      () => alert("Failed to send message. Please try again.")
    );
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-blue-50 px-4 py-24"
      initial="closed"
      animate={open ? "open" : "closed"}
      variants={envelopeVariants}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => setOpen(true)}
    >
      <motion.div
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg border border-blue-100 relative"
        variants={letterVariants}
      >
        <AnimatePresence>
          {!sent ? (
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 font-handwritten text-lg">
              <input name="user_name" type="text" placeholder="Your Name" required className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" />
              <input name="user_email" type="email" placeholder="Your Email" required className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" />
              <textarea name="message" placeholder="Your Message" required className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" rows="5"></textarea>
              <button type="submit" className="bg-blue-500 text-white font-semibold py-3 rounded hover:bg-blue-600 transition">Send</button>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10 font-handwritten text-2xl text-blue-700">
              Thank you for your message!<br />I’ll get back to you soon.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default AnimatedContact;
