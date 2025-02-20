// course/page.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import courses from "./courseData";

const Course = ({ courseName, description, duration, price, imageSrc, id }) => { // Added id prop
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card w-72 md:w-80 h-auto bg-white border-solid border-2 border-yellow-50 rounded-xl flex flex-col justify-between"
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
          {/* Use the course id in the link */}
          <Link href={`/course/${id}`}>  
            <motion.button
              whileHover={{
                opacity: 0.7,
              }}
              className="border-solid border-2 border-yellow-900 text-yellow-950 font-inter font-bold md:py-1 md:px-4 px-1 py-1 rounded-lg"
            >
              Details
            </motion.button>
          </Link>
          <Link href={"../signuppage"}>
            <motion.button
              whileHover={{
                color: "#84341c",
                backgroundColor: "#f8eacd",
                // border: "2px solid #6d2c1a"
                
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-yellow-600 text-yellow-50 font-inter font-bold py-2 px-6 md:px-12 rounded-lg flex items-center gap-2"
            >
              Enroll Now
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

const CoursesPage = () => {
  return (
    <div className="card flex flex-wrap gap-12 justify-around ">
      {courses.map((course) => (
        <Course
          key={course.id}
          id={course.id} // Pass the id as a prop
          courseName={course.courseName}
          description={course.description}
          duration={course.duration}
          price={course.price}
          imageSrc={course.imageSrc}
        />
      ))}
    </div>
  );
};

export default CoursesPage; // Renamed component to CoursesPage for clarity