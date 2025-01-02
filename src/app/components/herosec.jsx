"use client";
import Image from "next/image";
import Card from "./cards";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="main h-screen w-full flex flex-col gap-16 justify-center items-center">
      <div className="bg-hero bg-cover bg-center h-full w-full absolute">
        <motion.div 
          className="circle w-80 h-48 rounded-full relative -left-56 top-11 bg-yellow-500 blur-2xl opacity-50"
        ></motion.div>
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="traingle relative top-32 left-44 lg:left-3/4 w-0 h-0 border-l-[150px] border-l-transparent border-r-[50px] border-r-transparent border-b-[150px] bg-gray-400 blur-2xl opacity-30"
        ></motion.div>
      </div>
      <div className="hero-container flex flex-col justify-center items-center px-20 lg:gap-6 mb-16 z-10">
        <h1 className="main-txt text-7xl font-kanit font-medium bg-gradient-to-l from-gray-100 to-yellow-50 bg-clip-text text-transparent text-center">
          Synth Your Musical Journey!
        </h1>
        <p className="sub-txt text-center">
        A cutting-edge e-learning platform designed to help students explore and develop their musical talents from the comfort of their own space. This online music academy provides a range of courses and resources for aspiring musicians of all skill levels, combining expert instruction with interactive learning tools.
        </p>
      </div>
      {/* <div className="cards flex justify-center"></div> */}
      <div className="getStart flex lg:px-60">
        <motion.button
        whileHover={{backgroundColor: "#f8eacd"}}
          whileTap={{ scale: 0.9 }}
          className="bg-white px-6 lg:px-12 py-4 cursor-pointer rounded-lg font-inter font-semibold text-xl text-black flex justify-center items-center gap-2 z-10"
        >
          <span>Get Started</span>
          <span>
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ color: "#171717" }}
            />
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
