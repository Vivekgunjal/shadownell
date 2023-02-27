'use client';
import { motion } from "framer-motion";
import styles from '../styles';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2 } from '../utils/motion'

import Typewriter from 'typewriter-effect';
import { useState } from "react";

export default function Banner() {
  
  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25}}
    >

    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

        <motion.h1
        variants={textVariant(1.1)}
        className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 ">
        <Typewriter
  options={{
    strings: ['We invest in the world’s potential.'],
    autoStart: true,
    loop: true,
  }}
/></motion.h1>
        <motion.p 
        variants={textVariant(1.3)}
        className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-[#EEEEEE]">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</motion.p>
        <div className="flex flex-raw mb-8 lg:mb-16 space-y-0 sm:flex-row justify-center sm:space-y-0 sm:space-x-4">

            <motion.a 
            variants={textVariant(1.7)}
            href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative" style={{ whiteSpace: "pre-wrap" }}>Button Text</span>
</motion.a> 
        </div>
      
    </div>
</motion.div>
  )
}





