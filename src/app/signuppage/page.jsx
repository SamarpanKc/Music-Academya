"use client";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import Cover from "./signupcvr.jpg"

const SignIn = () => {
  return (
    <>
      <div id="signup" className="page w-full h-5/6 mb-40 flex justify-center mt-6 font-inter items-center px-20 gap-2   ">
        <div className="image">
          <Image
            src={Cover}
            alt="Concert in Black and White"
            width={1690}
            height={800} className="rounded-2xl"
          />
        </div>
        <div className="container bg-yellow-800 rounded-2xl w-5/6 h-fit flex flex-col py-10 px-16 gap-4">
        <h1 className="font-semibold text-2xl -mx-px">Create an account.</h1>
        <div className="details flex flex-col gap-4">
          <div className="mail">
            <form action="mail">
              <h1>Email</h1>
              <input
                className="py-2 px-3 rounded-md outline-none bg-gray-100 text-black w-4/5"
                type="email"
                placeholder="example@domain.com"
              />
            </form>
          </div>
          <div className="username">
          <form action="mail">
              <h1>Username</h1>
              <input
                className="py-2 px-3 rounded-md outline-none lowercase bg-gray-100 text-black w-4/5"
                type="text"
                placeholder="@name123"
              />
            </form>
          </div>
          <div className="phone">
          <form action="mail">
              <h1>Phone No.</h1>
              <input
                className="py-2 px-3 rounded-md outline-none bg-gray-100 text-black w-4/5"
                type="tel"
                placeholder="977-9840000000"
              />
            </form>
          </div>
          <div className="password">
          <form action="mail">
              <h1>Create Password</h1>
              <input
                className="py-2 px-3 rounded-md outline-none bg-gray-100 text-black w-4/5"
                type="password"
                placeholder="********"
              />
            </form>
          </div></div>
          <motion.div whileHover={{backgroundColor:"#0f0f9"}} whileTap={{ scale: 0.9 }} className="getStarted bg-black text-white rounded-xl font-semibold cursor-pointer py-4 flex justify-center w-40 px-3">
            <button>Get Started</button>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
