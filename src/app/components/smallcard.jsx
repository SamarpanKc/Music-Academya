"use client"
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SmallCard =({featureName, description, icons}) =>{
    return(
        <>
        <motion.div whileHover={{scale:1.02}} className="card text-center md:text-left flex flex-col rounded-2xl gap-2 bg-white border-solid border-2 border-yellow-50 p-4 md:p-8 w-80 md:w-96 text-yellow-950 ">
        <span className="flex justify-center">
        <FontAwesomeIcon icon={icons} size="2xl" />
          </span>
            <h1 className="text-2xl text-center font-inter font-semibold">{featureName}</h1>
            <p className=" text-gray-800 text-center font-inter leading-5">{description}</p>
          </motion.div>
        </>
    )
}
export default SmallCard;