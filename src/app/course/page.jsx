"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import CourseDetails from "./[id]/page";

const Course = ({ courseName, description, duration, price, imageSrc }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card w-80 h-auto bg-white border-solid border-2 border-yellow-50 rounded-xl flex flex-col justify-between"
      >
        <motion.div className="card-image flex flex-col justify-center items-center">
          <Image
            className="mt-4 rounded-2xl md:w-72"
            src={imageSrc}
            alt={courseName}
            width={250}
            height={250}
          />
        </motion.div>
        <div className="Title mx-5 my-3">
          <h1 className="text-2xl font-bold text-yellow-950">{courseName}</h1>
          <p className="text-gray-800 leading-5">{description}</p>
        </div>

        <div className="price flex justify-between   items-center mx-5">
          <p className="text-yellow-950 font-inter">{duration}</p>
          <h1 className="text-yellow-950 font-inter font-semibold">{price}</h1>
        </div>

        <div className="buttons flex justify-between items-center m-4">
          <Link href="/course/12">
            <motion.button
              whileHover={{
                opacity: 0.7,
              }}
              className="border-solid border-2 border-yellow-900 text-yellow-950 font-inter font-bold md:py-1 md:px-4 px-1 rounded-lg"
            >
              Details
            </motion.button>
          </Link>
          <Link href={"../signuppage"}>
            <motion.button
              whileHover={{
                color: "#3e150a",
                backgroundColor: "transparent",
                border: "2px solid #6d2c1a",
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-yellow-600 text-yellow-50 font-inter font-bold py-1 px-6 md:px-12 rounded-lg flex items-center gap-2"
            >
              Enroll Now
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};
export default Course;
