'use client'
import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import {motion} from 'framer-motion'
import { FadeIn } from '../../variants';
import Link from 'next/link';
const Find = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        Our Product
      </h2>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
      KoldWare provide you, our valuable customer service with product warranty and after sales maintenance services that will keep you satisfied throughout the period that you are using our products.
      </p>
      <motion.div
       variants={FadeIn('down',0.2)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false,amount:0.4}}
      className='text-center mt-10 '>
      <Button size='default' className='px-10 py-5 bg-soft_green text-white hover:bg-soft_green-secondary hover:text-black'><Link href={'/OurProduct/PolyurethaneInsulatedSandwichPanels'}>View More</Link></Button>
      </motion.div>
    </div>
    {/* text - end */}
    <div
    className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      {/* product - start */}
      <motion.div  variants={FadeIn('up',0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.4}}>
        <Link
          href="/OurProduct/PolyurethaneInsulatedSandwichPanels"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg  shadow-lg lg:mb-3"
        >
          <Image
            src='/find/p1.jpg'
            width={200}
            height={200}
           
            alt="Photo by Austin Wade"
            className="h-full rounded-2xl w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
         
        </Link>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a
              href="/OurProduct/PolyurethaneInsulatedSandwichPanels"
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              Polyurethane Insulated Sandwich Panels
            </a>
            
          </div>
          
        </div>
      </motion.div>
      {/* product - end */}
      {/* product - start */}
      <motion.div  variants={FadeIn('up',0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.4}}>
        <Link
          href="/OurProduct/RefrigerationSystem"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <Image
            src='/find/p2.jpg'
            loading="lazy"
            width={200}
            height={200}
           
            alt="Photo by Nick Karvounis"
            className="h-full w-full rounded-2xl  transition duration-200 group-hover:scale-110"
          />
        </Link>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <Link
              href="/OurProduct/RefrigerationSystem"
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
             Refrigeration Systems
            </Link>
            
          </div>
          
        </div>
      </motion.div>
      {/* product - end */}
      {/* product - start */}
      <motion.div  variants={FadeIn('up',0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.4}}>
        <Link
          href="/OurProduct/Chiller&Freezers"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <Image
            src='/find/p3.jpg'
            width={200}
            height={200}
           
            loading="lazy"
            alt="Photo by Austin Wade"
            className="h-full w-full rounded-2xl object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </Link>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <Link
              href="/OurProduct/Chiller&Freezers"
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
             Walk In Chillers & Freezers
            </Link>
            
          </div>
          
        </div>
      </motion.div>
      {/* product - end */}
      {/* product - start */}
      <motion.div  variants={FadeIn('up',0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.4}}>
        <Link
          href="/OurProduct/BlastChillerandFreezer"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <Image
            src='/find/p4.jpg'
            quality={100}
            width={200}
            height={200}
           
            alt="Photo by Vladimir Fedotov"
            className="h-full w-full rounded-2xl object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </Link>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <Link
              href="/OurProduct/BlastChillerandFreezer"
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              Blast Chiller and Freezer
            </Link>
          </div>
          
        </div>
      </motion.div>
      {/* product - end */}
    
    </div>
  </div>
</div>

    </div>
  );
}

export default Find;
