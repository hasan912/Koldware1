'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Image from "next/image";
import logo from '@/../../public/header/KWI logo.png'
import SearchBox from "@/components/SearchBox";
import { FadeIn } from "../../../../variants";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
const Page = () => {
  return (
    <>
      {/* Navbar */}

      <header className="absolute w-full max-w-auto py-8 xl:py-10" >
        <div className="container mx-auto ">
          {/* logo nav (desktop) btn */}
          <div className="flex items-center justify-between ">
            {/* logo */}
            <Link href='/'>
              <Image
                src={logo}
                width={100}
                height={100}
                alt="KWI"
                className="w-20 h-20"></Image>
            </Link>
            {/* nav btn */}
            <div className="hidden xl:flex">
              <div className="flex items-center gap-x-12">
                <Nav containerStyles='flex items-center justify-between' listStyles='flex gap-x-12 text-white' />
                <Button variant='outline' className="px-10 h-[58px]">download</Button>
              </div>
            </div>
          </div>
          {/* mobile nav */}
          <div className="xl:hidden absolute right-8 top-8"><MobileNav /></div>
        </div>
      </header>

      {/* Hero */}

      <section className="pt-24 pb-12 xl:py-0 xl:h-[1087px] bg-hero3 xl:bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <div className="container mx-auto flex items-center justify-center xl:justify-start">
          <motion.div
            variants={FadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
            className="w-full max-w-[788px] max-h-max flex flex-col  rounded-[20px] p-5">
            {/* input calender date picker */}
            <div className='md-[20px]'>
              {/* label */}
              <Label htmlFor='destination' className='text-5xl text-[#034EA2]'>Innovative Sorting and Grading Solutions by Greefa</Label>
              {/* input & icon  */}
              <div className='relative flex text-white font-semibold items-center mb-[20px]'>
                <p>Koldware Industries (Pvt) Ltd. proudly serves as the exclusive distributor of Greefa Sorting and Grading Machines, originating from the Netherlands. With nearly six decades of expertise in sorting fruits and vegetables, Greefa stands as a paragon of excellence in the industry. Boasting a familial organizational structure and a workforce exceeding 190 individuals, Greefa's commitment to quality and innovation is unwavering.</p>
              </div>
              {/* date picker */}
            </div>
            {/* slect, checkbox, btn */}
            <div className=''>
              {/* btn */}
              <Button size='default' className='px-5 py-5 bg-soft_green text-white hover:bg-soft_green-secondary hover:text-black'>Explore More</Button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Content */}

      <motion.section variants={FadeIn('right', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.4 }}
        className='pb-12 xl:pt-[157px] xl:pb-112[px] bg-soft_green-secondary relative'>
        <motion.div
          variants={FadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
        >

          <div className='flex mt-10 flex-col xl:flex-row xl:pl-[100px] gap-y-12 xl:gap-y-0'>
            {/* text */}
            <div className='max-w-[445px] xl:max-w-[900px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0' >
              <h2 className='h2 text-[#034EA2] mb-4'>Pioneering Solutions</h2>
              <p className='text-soft_green text-sm mb-6'>Our Products</p>
              <p className='mb-[20px]'>We use a variety of insulated wall and ceiling panels dependent upon the specific client needs and budget. Whether refrigerated or non-refrigerated, the panels we use will exceed your requirement and provide the best insulation value for your investment.
                We are able to offer a variety of styles, lengths, thickness, composition, and fastening systems that best fits your requirement. We consider panel manufacturing location as it relates to your project location to minimize the transportation cost associated with panel procurement.
                We make panels in varying thickness, each with many intended uses. These typically range from 2” to 8” or as per requirement of our client, however, other thickness are available upon request. We select the correct thickness for your use to maximize your insulation and investment.</p>
              <p className="mb-[20px]">Panel skins or the metal sides of the panel range in thickness from 22swg to 26 swg (spacing). They have a variety of metal finishes from flat to corrugated to those with vertical lines. All are beneficial to a variety of uses and we select those that will best fit your use.
                Our panels vary in their fastening systems. Some are tongue-in-groove with cam lock system; while still others have a cam lock connected by an internal steel band. In any case, we select the panel with the fastening system that matches your need.
              </p>
            </div>

            {/* Image & testinomial */}

            <div className='order-1 xl:order-2 flex-1 justify-center xl:justify-end relative h-[634px]'>
              <div>
                <Image src={"/ourproduct/sorting.jpg"} width={905} height={528} quality={100} alt='' className=' xl:rounded-tl-[25px] xl:rounded-bl-[25px]' />
                <div className='bg-soft_green p-4 text-white xl:ml-10 text-center xl:text-left xl:max-w-[668px] xl:min-h-[180px] xl:absolute xl:bottom-0 md:flex-col md:max-w-[900px] xl:rounded-xl xl:px-10'>
                <p className='text-xl font-bold'>Uncompromising Quality</p>
                  <p className='mt-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6'>At Greefa, quality is never compromised. Their dedication to excellence ensures that each system delivered meets the highest standards, guaranteeing optimal performance and reliability.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <Image src={'/recommendation/pattern.svg'} width={240} height={240} className=' xl:flex absolute left-[135px] -bottom-[120px]' alt='' />
      </motion.section>


      <section className="text-black">
        <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <motion.div 
               variants={FadeIn('up', 0.2)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.4 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className=" rounded-3xl"
              alt="hero"
              width={540}
              height={540}
              src="/ourproduct/sortings.jpg"
            />
          </motion.div>
          <motion.div      
          variants={FadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }} className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-[#034EA2] font-bold text-5xl mb-4">
            Versatile Capabilities
            </h1>
            <p className="mb-8 leading-relaxed">
              Greefa's sorting and grading machines offer versatility unparalleled in the industry. Whether it's sorting by size, color, or weight, Greefa's modules can handle it all. Furthermore, their technology allows for the assessment of both external and internal quality attributes, including the detection of fruit firmness.
            </p>
            <p>Greefa's commitment to innovation, quality, and versatility has cemented its position as a global leader in sorting and grading solutions for fruits and vegetables.</p>
          </motion.div>
        </div>

      </section>


    </>

  );
}

export default Page;

