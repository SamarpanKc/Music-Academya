"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";


const Navbar = () => {

    const [isVisible, setisVisible] = useState(true)
    const [lastScrollY, setlastScrollY] = useState(0)

    const handleScroll=()=>{
        const currentScrollY = window.scrollY
        if(currentScrollY > lastScrollY && currentScrollY >40)
            setisVisible(false)
        else
            setisVisible(true)
        setlastScrollY(currentScrollY)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

  return (
    <>
      <motion.div
        initial={{ top: 0 }} // Initial position
        animate={{top: isVisible?0 : -100}}
        transition={{ duration: 0.3 }} // Smooth transition for 0.3s
        className="nav sticky bg-gradient-to-b from-black to-transparent left-0 p-6 flex justify-around items-center w-full z-50"
      >
        <div className="logo font-kanit text-3xl text-white font-semibold">
          <Link href={"./"} ><h1>HMusic<span className="text-yellow-500">.</span></h1> </Link>
        </div>
        <div className="links bg-white bg-opacity-40  w-2/5 h-16 rounded-3xl text-white flex justify-around items-center font-inter backdrop-filter backdrop-blur-md">
          <Link href={"./courses.jsx"} className="">
            Courses
          </Link>
          <Link href={""} className="">
            Features
          </Link>
          <Link href={"#"} className="">
            About Us
          </Link>
        </div>
        <motion.div
          whileHover={{ backgroundColor: "#f8eacd" }}
          whileTap={{ scale: 0.9 }}
          className="btn font-inter font-semibold bg-white px-7 py-3 cursor-pointer rounded-lg "
        >
          <motion.button className="text-yellow-950">Sign In</motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
