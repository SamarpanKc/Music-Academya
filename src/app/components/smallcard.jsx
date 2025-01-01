"use client"
import { motion } from "motion/react";
const SmallCard =(props) =>{
    return(
        <>
        <motion.div whileHover={{scale:1.02}} className="card flex flex-col rounded-2xl gap-2 bg-yellow-100 border-solid border-2 border-yellow-50 p-8 w-96 text-yellow-950 ">
            <h1 className="text-2xl font-inter font-semibold">{props.featureName}</h1>
            <p className="text-lg font-inter font-light leading-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem.</p>
          </motion.div>
        </>
    )
}
export default SmallCard;