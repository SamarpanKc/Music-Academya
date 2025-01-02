"use client";
import Link from "next/link";
import { motion } from "motion/react";

const SignIn = () => {
  return (
    <>
      <div className="flex items-start mt-10 font-inter justify-center min-h-screen bg-yellow-50 dark:bg-black ">
        <div className="bg-white dark:bg-gray-200 shadow-md rounded-lg p-8 w-full max-w-sm">
          <h1 className="text-2xl text-black font-kanit font-bold text-center mb-2">
            Sign up for HMusic<span className="text-yellow-500">.</span>
          </h1>
          <p className="text-sm text-center text-black mb-6">
            Start your music journey today.
          </p>

          <form>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg mt-1 mb-4 focus:ring-1 focus:ring-yellow-400 focus:outline-none text-black"
            />
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full px-4 py-2 border rounded-lg mt-1 mb-4 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-black"
            />

            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="******"
              className="w-full px-4 py-2 border rounded-lg mt-1 mb-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-black"
            />
            <p className="text-xs text-gray-500 mb-4">Minimum 6 characters.</p>

            <motion.button
              whileHover={{
                backgroundColor: "#a2421b",
              }}
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 rounded-lg transition"
            >
              Get started
            </motion.button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="#" className="text-yellow-700 hover:underline">
              Log in
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};
export default SignIn;
