"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonial = ({ Name, comment, imageSrc, icons }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="container p-6 md:p-10 w-full max-w-2xl bg-yellow-100 rounded-2xl text-yellow-950 shadow-md flex flex-col md:flex-row items-center gap-6"
      >
        {/* Left Section */}
        <div className="left flex flex-col items-center">
          <Image
            className="rounded-full"
            src={imageSrc}
            alt={Name}
            width={200}
            height={200}
          />
          <h1 className="text-2xl font-semibold mt-4 text-center">{Name}</h1>
        </div>

        {/* Right Section */}
        <div className="right flex flex-col justify-between w-full">
          {/* Comment Section */}
          <div className="comment mb-4">
            <h1 className="text-xl font-semibold mb-2">Comment</h1>
            <p className="text-sm text-justify text-gray-700">{comment}</p>
          </div>

          {/* Ratings Section */}
          <div className="ratings flex items-center gap-2">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={icons}
                  size="lg"
                  className="text-yellow-500"
                />
              ))}
            <p className="font-semibold text-gray-800 ml-2">5.0</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Testimonial;
