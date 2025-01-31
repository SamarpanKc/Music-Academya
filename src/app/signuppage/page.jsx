"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Cover from "./signupcvr.jpg";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const [passwordStrength, setPasswordStrength] = useState({
    text: "",
    color: "white",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  useEffect(() => {
    const evaluatePasswordStrength = () => {
      let score = 0;
      if (!password) return { text: "", color: "white" };

      if (password.length > 8) score += 1;
      if (/[a-z]/.test(password)) score += 1;
      if (/[A-Z]/.test(password)) score += 1;
      if (/\d/.test(password)) score += 1;
      if (/[^A-Za-z0-9]/.test(password)) score += 1;

      switch (score) {
        case 0:
        case 1:
        case 2:
          return { text: "weak", color: "#ff4444" };
        case 3:
          return { text: "medium", color: "#ffd93e" };
        case 4:
        case 5:
          return { text: "strong", color: "#37ff5d" };
        default:
          return { text: "", color: "white" };
      }
    };

    setPasswordStrength(evaluatePasswordStrength());
  }, [password]);

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div
        id="signup"
        className="page w-full h-5/6 mb-40 flex justify-center mt-6 font-inter items-center px-20 gap-2"
      >
        <div className="image z-10">
          <Image
            src={Cover}
            alt="Concert in Black and White"
            width={1690}
            height={800}
            className="rounded-2xl"
          />
        </div>
        <div className="container relative -left-10 bg-yellow-800 rounded-2xl w-5/6 h-fit flex flex-col py-10 px-16 gap-4">
          <h1 className="font-semibold text-2xl ml-6">Create an account.</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="details flex flex-col ml-12 gap-4">
            <div className="mail">
              <h1>Email</h1>
              <input
                className="py-2 px-3 rounded-md outline-none bg-gray-100 text-black w-4/5"
                type="email"
                placeholder="example@domain.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="flex text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>
            <div className="username">
              <h1>Username</h1>
              <input
                className="py-2 px-3 rounded-md outline-none lowercase bg-gray-100 text-black w-4/5"
                type="text"
                placeholder="@name123"
                {...register("userName", {
                  required: "Username is required",
                  minLength: {
                    value: 4,
                    message: "Username must be at least 4 characters",
                  },
                })}
              />
              {errors.userName && (
                <span className="flex text-red-500 text-sm">{errors.userName.message}</span>
              )}
            </div>
            <div className="phone">
              <h1>Phone No.</h1>
              <input
                className="py-2 px-3 rounded-md outline-none bg-gray-100 text-black w-4/5"
                type="tel"
                placeholder="977-9840-000000"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9-]+$/,
                    message: "Invalid phone number format",
                  },
                })}
              />
              {errors.phone && (
                <span className=" flex text-red-500 text-sm">{errors.phone.message}</span>
              )}
            </div>
            <div className="password">
              <h1>Create Password</h1>
              <input
                className="py-2 px-3 rounded-md outline-none bg-gray-100 text-black w-4/5 tracking-tighter"
                type="password"
                placeholder="********"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              <div className="passwordmeter">
                <small>
                  <span>Password looks </span>
                  <span style={{ fontWeight: "bold", color: passwordStrength.color }}>
                    {passwordStrength.text}
                  </span>
                </small>
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
            </div>
            <motion.button
              type="submit"
              whileHover={{
                backgroundColor: "#ffff",
                color: "#171717",
                fontWeight: "800",
              }}
              whileTap={{ scale: 0.9 }}
              className="getStarted ml-6 mt-2 bg-black text-white rounded-xl font-semibold cursor-pointer py-4 flex justify-center w-40 px-3"
            >
              Get Started
            </motion.button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;