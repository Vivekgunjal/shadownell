"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import {
  navVariants,
  slideIn,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../utils/motion";
import { useEffect, useRef, useState } from "react";
import { ClipboardIcon, CommandLineIcon } from "@heroicons/react/24/outline";
import Typewriter from 'typewriter-effect';


export default function CodeMain() {
  const [code, setCode] = useState(null);
      const [prompt, setPrompt] = useState(`function onLoad(editor) {
        console.log("i've loaded");
      }`);
  const model = "text-davinci-003";
  const [text, setText] = useState(code);
  const containerRef = useRef(null);

  useEffect(() => {
    // Set the text whenever the output prop changes
    setText(code);

    // Scroll to the end of the container
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [code]);
  
  const sendPrompt = async () => {
    setCode(null);
    if(!prompt) return;

    const input = prompt.trim()+'optimize this code give me only code.';
    console.log(input)

    const result = await fetch("api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input,
          model:model,
        }),
      }).then(response => response.json())
      .then(data => setCode(data.res))
      .catch(error => console.error(error));;
  };



  return (
    <motion.div
      className="flex flex-col justify-center items-center gap-[0px] h-full lg:flex-row mt-[230px] lg:mt-[0px] z-10"
      variants={textVariant(1.0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Area where user ask questions */}
      <div className="flex flex-col lg:flex-row mt-[230px] lg:mt-[0px] bg-gradient-to-r from-sky-400 to-blue-500 shadow-2xl rounded-lg">
      <div className="max-w-sm p-6  lg:rounded-tl-lg lg:rounded-bl-lg lg:rounded-tr-none lg:rounded-br-none rounded-lg h-fit">
        <a href="#">
          <h5 className="flex mb-2 text-2xl font-medium tracking-tight text-[#131514]">
            <CommandLineIcon className="w-8 h-8 mr-1" />
            Explain Code
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-600">
          explain some code based on syntax provided.
        </p>

        <p className="mb-3 font-normal text-[#131514] mt-4">
          Paste your code below:
        </p>

        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full resize-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[160px]"
          placeholder="Paste Your Code Here..."
          value={prompt}
          spellCheck="false"
          autoCorrect="false"
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>

        <a
          className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none mt-6"
        onClick={sendPrompt}
        >
          <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span className="relative z-20 flex items-center text-sm">
            <svg
              className="relative w-5 h-5 mr-2 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            Optimize
          </span>
        </a>
      </div>

         {/* Area where user get answer */}
      <div className="max-w-sm p-6 rounded-lg lg:rounded-tr-lg lg:rounded-br-lg lg:rounded-tl-none lg:rounded-bl-none items-center justify-center">
        <a href="#">
          <h5 className="mb-2 text-2xl font-medium tracking-tight text-[#131514]">
            Your Answer:
          </h5>
        </a>
        <p className="mb-3 font-normal h-[210px] lg:h-[260px] text-[#131514] overflow-y-scroll scrollbar-hide cursor-default bg-[#007ADF] p-3 rounded-lg" style={{ whiteSpace: "pre-wrap" }} ref={containerRef}>
            {code ? (
                <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(code)
                    .callFunction(() => {
                      console.log('String typed out!');
                    })
                    .pauseFor(2500)
                    .callFunction(() => {
                      console.log('All strings were deleted');
                    })
                    .start();
                }}
              />
            ):null}
        </p>

        <a
          href="#_"
          className="px-5 py-2.5 relative rounded group font-medium text-white inline-block mt-3"
        >
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
          <span className="relative flex">
            <ClipboardIcon className="w-6 h-6 mr-2" />
            Copy output
          </span>
        </a>
      </div>
      </div>
      
   
     
    </motion.div>
  );
}
