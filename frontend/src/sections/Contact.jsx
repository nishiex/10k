import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-blue-50 py-16 px-6 md:px-20 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input type="text" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" required />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input type="email" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="you@example.com" required />
          </div>

          <div>
            <label className="block mb-2 font-medium">Phone</label>
            <input type="tel" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="+91 12345 67890" />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea className="w-full border rounded px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Type your message..." required></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-blue-700">Get in Touch</h3>
            <p className="mt-2">We’d love to hear from you! Reach out with any questions or project ideas.</p>
          </div>

          <div>
            <p><strong>📍 Address:</strong> 123 TechNova Street, Surat, Gujarat, India</p>
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>📧 Email:</strong> info@technova.com</p>
            <p><strong>🕒 Working Hours:</strong> Mon-Fri, 10:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
