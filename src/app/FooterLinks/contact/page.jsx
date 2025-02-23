'use client'
import React from 'react';
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-36 font-inter">
      <h1 className="text-3xl font-kanit font-bold text-center mb-8 underline">Contact Harmony Music Academy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-kanit">Get in Touch</h2>
        <p className="text-gray-200 leading-relaxed">
          We'd love to hear from you! Whether you have questions about our courses, need technical support, or just want to say hello, feel free to reach out using the contact information below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-kanit">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-lg mb-2 font-kanit">Email</h3>
            <p className="text-gray-200 leading-relaxed">
              <a href="mailto:info@harmonymusicacademy.com" className="text-blue-500 hover:underline">info@harmonymusicacademy.com</a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 font-kanit">Phone</h3>
            <p className="text-gray-200 leading-relaxed">
              <a href="tel:+9779841010101" className="text-blue-500 hover:underline">+977 9841010101</a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 font-kanit">Address</h3>
            <p className="text-gray-200 leading-relaxed">
              Pokhara, Nepal
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 font-kanit">Social Media</h3>
            <p className="text-gray-200 leading-relaxed">
              {/* Add social media links here */}
              <a href="#" className="text-blue-500 hover:underline">Facebook</a> | <a href="#" className="text-blue-500 hover:underline">Twitter</a> | <a href="#" className="text-blue-500 hover:underline">Instagram</a>
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 font-kanit">Send us a Message</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-200 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-200 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-200 text-sm font-bold mb-2">Message</label>
            <textarea id="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message"></textarea>
          </div>
          <div>
            <motion.button
            whileHover={{backgroundColor: "#f1d296",            }}
            className="px-10 md:px-20 py-3 my-10 w-full rounded-xl bg-white text-yellow-800 font-bold text-sm md:text-base border-none h-auto cursor-pointer" type="submit">
              Send Message
            </motion.button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;