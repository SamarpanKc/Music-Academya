"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Singing from "../images/singingman.webp";
import { motion } from "motion/react";

// import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Course = (props) => {
  return (
    <>
      <motion.div whileHover={
        {scale: 1.02}
      } className="card w-80 h-auto bg-yellow-100 border-solid border-2 border-yellow-50 rounded-xl flex flex-col justify-between"> 
        <motion.div className="card-image flex flex-col justify-center items-center">
          <Image
            className=" mt-4 rounded-2xl "
            src={Singing}
            width={290}
            height={290}
            alt="Singing Man"
          />
        </motion.div>
        <div className="Title mx-5 my-3">
          <h1 className="text-2xl font-bold text-yellow-950">{props.courseName}</h1>
          <p className="text-yellow-900 leading-5">
            {props.description}
          </p>
        </div>
    
        <div className="price flex justify-end items-center mx-8">
          <h1 className='text-yellow-950 font-inter font-semibold'>{props.price}</h1>
        </div>

        <div className="buttons flex justify-around m-4">
          <motion.button whileHover={{
              opacity: 0.7,
            }} className="border-solid border-2 border-yellow-900 text-yellow-950 font-inter font-bold py-1 px-2 rounded-lg">
            Details
          </motion.button>
          <motion.button
            whileHover={{
              color: "#3e150a",
              backgroundColor: "transparent",
              border: "2px solid #6d2c1a"
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-yellow-600 text-yellow-50 font-inter font-bold py-1 px-12 rounded-lg flex items-center gap-2"
          >
            Enroll Now 
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};
export default Course;
