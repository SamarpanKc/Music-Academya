"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import QR from "@/app/images/Test QR.png";
import Link from "next/link";

export default function ClientForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="form flex flex-col items-center justify-center font-inter">
      <form
        className="flex flex-col md:flex-row gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="left flex flex-col gap-4 ">
          <div className="time flex flex-col w-[clamp(16rem,30vw,88rem)]">
            <label htmlFor="courseTime">Choose Compatible Time:</label>
            <select
              id="courseTime"
              name="courseTime"
              {...register("courseTime")}
              
            >
              <option value="">Select</option>
              <option value="7 AM">7 AM</option>
              <option value="10 AM">10 AM</option>
              <option value="3 PM">3 PM</option>
              <option value="7 PM">7 PM</option>
            </select>
          </div>

          <div className="email flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              className=""
              type="email"
              id="email"
              placeholder="youremail@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>

          <div className="name flex flex-col">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Your Full Name"
              {...register("name", { required: "Full Name is required" })}
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>
          <div className="phone flex flex-col">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              placeholder="9779841010101"
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits",
                },
                maxLength: {
                  value: 13,
                  message: "Phone number cannot exceed 13 digits",
                },
              })}
            />
            {errors.phone && (
              <span className="text-red-600">{errors.phone.message}</span>
            )}
          </div>

          <div className="payment flex flex-col">
            <label htmlFor="paymentCode">Payment Code:</label>
            <input
              type="text"
              id="paymentCode"
              placeholder="esewa 0QFS---"
              {...register("paymentCode", {
                required: "Payment Code is Required to Proceed",
              })}
            />
            {errors.paymentCode && (
              <span className="text-red-600">{errors.paymentCode.message}</span>
            )}
          </div>
        </div>
        <div className="right flex flex-col gap-4">
          <div className="payment flex flex-col items-center gap-2">
            <label htmlFor="payment">Payment:</label>
            <Image
              className="rounded-sm"
              src={QR}
              alt="QR Code"
              width={200}
              height={200}
            />
            <Link href="https://esewa.com.np/" target="_blank">
              <button className="py-2 bg-green font-semibold text-white w-52 rounded-lg">
                Pay with eSewa
              </button>
            </Link>
          </div>
          <input
            className="px-10 md:px-20 py-3 my-10 w-full rounded-xl bg-white text-yellow-800 font-bold text-sm md:text-base border-none h-auto cursor-pointer"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
