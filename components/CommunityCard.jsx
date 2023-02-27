'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import {
  navVariants,
  slideIn,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../utils/motion";
import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";

export default function CommunityCard() {
  return (

        <motion.div class="flex justify-center"
        variants={textVariant(1.0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.20 }}
        >
  <div
    class="block max-w-sm rounded-lg bg-[#1a1a1a] shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
      <img
        class="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
        alt="" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        @user
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Prompt
      </p>
      <div className="flex justify-between text-white px-0 lg:px-2">
      <HeartIcon className="w-7 h-7 hover:transform hover:scale-105"/>
      <ChatBubbleOvalLeftEllipsisIcon className="w-7 h-7 hover:transform hover:scale-105"/>
      </div>
     
    </div>
  </div>

    </motion.div>
  )
}
