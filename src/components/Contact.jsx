import React from "react";

const Contact = () => (
  <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-blue-50 px-4 py-24">
    <h2 className="text-4xl font-bold mb-8 text-gray-900">Contact</h2>
    {/* The animated unfolding letter form will be implemented here */}
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg border border-blue-100">
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" />
        <input type="email" placeholder="Your Email" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" />
        <textarea placeholder="Your Message" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" rows="5"></textarea>
        <button type="submit" className="bg-blue-500 text-white font-semibold py-3 rounded hover:bg-blue-600 transition">Send</button>
      </form>
    </div>
  </section>
);

export default Contact;
