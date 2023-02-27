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
import CommunityCard from "./CommunityCard";

export default function CommunityPreview() {
  return (
    <motion.div
    variants={textVariant(1.0)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    >

<div class="mt-10">
<h1 class="text-center text-2xl font-bold text-[#EEEEEE]">Community</h1>
</div>



<section class="py-10">
  <div class="mx-auto grid max-w-6xl  grid-cols-2 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
<CommunityCard />
<CommunityCard />
<CommunityCard />
<CommunityCard />
<CommunityCard />
<CommunityCard />
<CommunityCard />
<CommunityCard />
<CommunityCard />
<CommunityCard />
<CommunityCard />
<CommunityCard />
<CommunityCard />
<CommunityCard />
<CommunityCard />
<CommunityCard />

    </div>
</section>




  

    </motion.div>
  )
}
