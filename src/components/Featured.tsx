'use client'
import Image from "next/image";
import { motion } from 'framer-motion'

import { FadeIn } from "../../variants";

const Featured = () => {
  return (
    <motion.section
      variants={FadeIn('down', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2}}
      className="bg-soft_green-secondary xl:h-[240px] relative xl:-top-[120px] max-w-[1605px] ml-auto rounded-tl-[30px] rounded-bl-[30px] px-[80px] py-[60px]" >
      <div className="flex flex-col xl:flex-row h-full gap-x-[30px] text-center xl:text-left">
        <Image className="xl:mr-[50px]" src='/featured/icon.svg' width={73} height={84} alt="" />
        <h2 className="h2 flex-1 text-soft_green leading-relaxed"> Book an awesome Service in less than 1 minute</h2>
        <p className="flex-1 text-soft_green leading-loose">
You are welcome to visit our showroom and meet with one of our representative to discuss your specific requirements. We will be pleased to give you a presentation of our range of quality equipment and material and additional information that may assist you in selecting the right equipment.</p>
      </div>
    </motion.section>
  );
}

export default Featured;
