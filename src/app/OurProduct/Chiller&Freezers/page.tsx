'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Image from "next/image";
import logo from '@/../../public/header/KWI logo.png'
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
              <Label htmlFor='destination' className='text-5xl text-[#034EA2]'>Walk-In Chillers and Freezers</Label>
              {/* input & icon  */}
              <div className='relative flex text-white font-semibold items-center mb-[20px]'>
                <p>Walk-In chillers and freezers offer versatile solutions for businesses requiring controlled temperature environments for storing perishable goods. These walk-in units come in various sizes, catering to the specific needs and spatial constraints of different industries.</p>
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
              <h2 className='h2 text-[#034EA2] mb-4'>LOCKING</h2>
              <p className='text-soft_green text-sm mb-6'>Our Products</p>
              <p className='mb-[20px]'>Panels are securely jointed using tongue and groove joints, locked by cam-locks anchored into the rigid polyurethane foam during manufacturing. This ensures a unified assembly, eliminating air crossing and enhancing structural strength and stability.</p>
              <h2 className='h2 text-[#034EA2] mb-4'>FLOOR INSULATION</h2>
              <p className="mb-[20px]">P.U. Boards, recommended for all cold store sizes, deliver optimal results when accompanied by a vapor-proof barrier above and below them. KWI can aid in designing underground pipe ventilation to prevent ice formation.</p>
              <h2 className='h2 text-[#034EA2] mb-4'>ROOM DOORS</h2>
              <p className="mb-[20px]">We offer a diverse range of Polyurethane insulated doors (Hinged and Sliding) tailored to customer specifications. These doors feature high-quality fittings and accessories (safety release handles, gaskets, aluminum or stainless steel railing, etc.) at competitive prices.</p>
            </div>

            {/* Image & testinomial */}

            <div className='order-1 xl:order-2 flex-1 justify-center xl:justify-end relative h-[634px]'>
              <div>
                <Image src={"/ourproduct/looking.png"} width={905} height={528} quality={100} alt='' className=' xl:rounded-tl-[25px] xl:rounded-bl-[25px]' />
                <div className='bg-soft_green p-4 text-white xl:ml-10 text-center xl:text-left xl:max-w-[668px] xl:min-h-[180px] xl:absolute xl:bottom-0 md:flex-col md:max-w-[900px] xl:rounded-xl xl:px-10'>
                  <p className='text-xl font-bold'>PANEL INSULATION</p>
                  <p className='mt-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6'>We utilize "Polyurethane," recognized as the best insulation globally, in our panels. Our panels are CFC-free and ensure high dimensional stability through injection via high/low-pressure systems, resulting in closed cell density.</p>
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
              src="/ourproduct/chiller.jpg"
            />
          </motion.div>
          <motion.div
            variants={FadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }} className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-[#034EA2] font-bold text-5xl mb-4">
              THICKNESS AND DIMENSION
            </h1>
            <p className="mb-8 leading-relaxed">
              We offer panels of varying thicknesses (3, 4, 5, 6, and 8 inches) with a closed cell density of 40-42Kg/m3. Panel length can be adjusted according to project or customer demands.
            </p>
            <h1 className="title-font sm:text-4xl text-[#034EA2] font-bold text-5xl mb-2">
              PRESSURE RELIEF PORT
            </h1>
            <p className="mb-8 leading-relaxed">A Pressure Relief Port is provided to maintain internal pressure within the cold store consistent with external pressure.</p>
            <h1 className="title-font sm:text-4xl text-[#034EA2] font-bold text-5xl mb-2">
              TEMPERATURE RANGE
            </h1>
            <p className="mb-8 leading-relaxed">KOLDWARE cold stores are engineered to maintain internal temperatures ranging between -40°C to +10°C or as per client/project requirements.</p>
            <h1 className="title-font sm:text-4xl text-[#034EA2] font-bold text-5xl mb-2">
              COMPRESSOR
            </h1>
            <p className="mb-8 leading-relaxed">We supply/install compressors from reputable brands like COPELAND or equivalent, tailored to all refrigeration systems or client specifications.</p>

          </motion.div>
        </div>
      </section>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <motion.div variants={FadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }} className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-[#034Ea2] text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              PANEL FINISH
            </h2>
            <p className="mx-auto text-black max-w-screen-md text-center text-gray-500 md:text-lg">
              Interior surfaces are available in various materials or combinations, including.
            </p>
          </div>
          {/* text - end */}
          <div className="mx-auto flex max-w-screen-sm flex-col border-t">
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                  Bright galvanized steel (0.4mm to 0.6mm)
                </span>
              </div>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                  Stucco embossed aluminum (0.6mm to 2mm)
                </span>
              </div>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                  Stainless Steel (0.5mm)
                </span>
              </div>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                  White high-class acrylic baked enamel with epoxy primer
                </span>
              </div>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                  Glass fiber reinforced plastic
                </span>
              </div>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                  Galvanized steel with 200-micron PVC Coating Plastisol
                </span>
              </div>
            </div>
            {/* question - end */}{/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                  ROOM SIZES
                </span>
                <span className="rotate-180 text-indigo-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              <p className="mb-4 text-gray-500">
                We offer customizable room sizes to meet our clients' specific requirements.
              </p>
            </div>
            {/* question - end */}
          </div>
        </motion.div>
      </div>




    </>

  );
}

export default Page;

