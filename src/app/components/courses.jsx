"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Singing from "../images/singingman.webp";
import { motion } from "motion/react";

// import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Course = () => {
    const [courseData, setcourseData] = useState(null)
  return (
    <>
      <div className="card w-80 h-96 bg-gray-300 rounded-xl flex flex-col justify-between"> 
        <div className="card-image flex flex-col justify-center items-center">
          <Image
            className=" mt-4 rounded-2xl "
            src={Singing}
            width={290}
            height={290}
            alt="Singing Man"
          />
        </div>
        <div className="Title mx-5">
          <h1 className="text-2xl font-bold text-black">Singing Course</h1>
          <p className="text-gray-600 leading-5">
            Lorem ipsum dolor sit amet conseetur, adipisicing elit. Et,
            doloribus
          </p>
        </div>

        <div className="buttons flex justify-around m-4">
          <motion.button whileHover={{
              opacity: 0.7,
            }} className="border-solid border-2 border-black text-black font-inter font-bold py-1 px-2 rounded-lg">
            Details
          </motion.button>
          <motion.button
            whileHover={{
              color: "#000",
              backgroundColor: "transparent",
              border: "2px solid #000"
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-black text-white font-inter font-bold py-1 px-12 rounded-lg flex items-center gap-2"
          >
            Enroll Now 
          </motion.button>
        </div>
      </div>
    </>
  );
};
export default Course;
