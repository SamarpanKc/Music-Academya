"use client";
import Image from "next/image";
import Card from "./cards";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="main h-screen w-full flex flex-col gap-8 md:gap-16 justify-center items-center relative">
      <div className="bg-hero bg-cover bg-center h-full w-full absolute top-0 left-0">
        <motion.div className="circle w-80 h-48 rounded-full absolute -left-56 top-11 bg-yellow-500 blur-2xl opacity-50"></motion.div>
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="triangle absolute top-56 md:top-32 left-24 md:left-3/4 w-0 h-0 border-l-[150px] border-l-transparent border-r-[50px] border-r-transparent border-b-[150px] bg-gray-400 blur-2xl opacity-30"
        ></motion.div>
      </div>
      <div className="hero-container flex flex-col justify-center items-center px-6 lg:px-36 gap-6 mb-6 -mt-9 md:-mt-0 md:mb-16 z-10 text-center">
        <h1 className="main-txt text-4xl lg:text-7xl font-kanit font-medium bg-gradient-to-l from-gray-100 to-yellow-50 bg-clip-text text-transparent">
          Synth Your Musical Journey!
        </h1>
        <p className="sub-txt text-base lg:text-lg">
          A cutting-edge e-learning platform designed to help students explore
          and develop their musical talents from the comfort of their own space.
          This online music academy provides a range of courses and resources
          for aspiring musicians of all skill levels, combining expert
          instruction with interactive learning tools.
        </p>
      </div>
      <div className="getStart flex justify-center lg:px-60 z-10">
        <motion.button
          whileHover={{ backgroundColor: "#f8eacd" }}
          whileTap={{ scale: 0.9 }}
          className="bg-white px-6 lg:px-12 py-4 cursor-pointer rounded-lg font-inter font-semibold text-xl text-black flex justify-center items-center gap-2"
          onClick={() => {
            const target = document.getElementById("courses"); // Target the "Courses" section
            target?.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
          }}
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
