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
              <Label htmlFor='destination' className='text-5xl text-[#034EA2]'>Refrigeration System</Label>
              {/* input & icon  */}
              <div className='relative flex text-white font-semibold items-center mb-[20px]'>
                <p><span className="text-black font-bold">Koldware Industries (Pvt) Ltd.</span>, is the sole distributor of Refrigeration System of<span className="text-black font-bold"> Alfa laval, Italy.</span>
                  As with every aspect of the design, our refrigeration design centers on your budget, need, and schedule. We have experience in every type of refrigeration system installed for today’s applications. For freon systems this includes split systems, self contained systems, packaged systems, and parallel rack systems.</p>
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
              <h2 className='h2 text-[#034EA2] mb-4'>Refrigeration System</h2>
              <p className='text-soft_green text-sm mb-6'>Our Products</p>
              <p className='mb-[20px]'>Our engineers will objectively and accurately size the refrigeration based upon your product load, its incoming temperature (BTU’s), the time allowed to bring the product to the target temperature, number of people working in the environment, light fixtures in the space and their operating times, defrost methods and cycle times, your average ambient temperature and anticipated heat infiltration, square footage of walls and ceiling, and other common factors that contribute to the required refrigeration load. If you do not have the product load information, our consulting group can get this information out of your operation.</p>

            </div>

            {/* Image & testinomial */}

            <div className='order-1 xl:order-2 flex-1 justify-center xl:justify-end relative h-[634px]'>
              <div>
                <Image src={"/ourproduct/r3.jpg"} width={750} height={528} quality={100} alt='' className=' rounded-3xl' />

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
              width={1000}
              height={1040}
              src="/ourproduct/images-1.jpeg"
            />
          </motion.div>
          <motion.div
            variants={FadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }} className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-[#034EA2] font-bold text-5xl mb-4">
              Panel Finishes:
            </h1>
            <p className="mb-8 leading-relaxed">
              The panels we use come in a variety of colors, facings, and materials. Our material selections include galvanized, Plastisol, Stainless Steel, Aluminum, and others. The facings can be smooth, striated, corrugated, and others. These finishes are designed for interior or exterior use, dependent (depending) upon your application. All are used in food storage beverage and processing applications.
              Panel lengths can be customized, typically come in lengths from 6' to 40 feet.
            </p>
          </motion.div>
        </div>

      </section>

      <motion.div
        variants={FadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.4 }} className=' xl:pt-8 xl:pl-10 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0' >
        <h2 className='h2 text-[#034EA2] mb-4'>Mechanical Enclosure</h2>
        <p className='text-soft_green text-base mb-6'>Non Refrigerated Structures</p>
        <p className='mb-[20px]'>With the cost and tight schedules of today’s construction, many designers are beginning to consider the use of insulated panels versus simple brick, block & mortar, tilt-up, or pre-engineered metal building construction.
          <br />The reason behind this move is simple</p>
      </motion.div>

      <section className="text-black body-font">
        <div className=" px-5 py-24 mx-auto flex flex-wrap">
          <motion.div variants={FadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.4 }} className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <motion.div
                variants={FadeIn('down', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.4 }} className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-lg text-[#034EA2] mb-1 tracking-wider">
                    Speed of construction:
                  </h2>
                  <p className="leading-relaxed">
                    Cam-lock system saves the lot of time
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={FadeIn('down', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.4 }} className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>

                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-lg text-[#034EA2] mb-1 tracking-wider">
                    Cost:
                  </h2>
                  <p className="leading-relaxed">
                    In most markets, insulated panels and all necessary parts associated with their construction will cost less than conventional construction. If supported by storage rack in lieu of a steel superstructure, it can be considered a rack supported building and depreciated as equipment resulting in improved cash flow.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={FadeIn('down', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.4 }} className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-lg text-[#034EA2] mb-1 tracking-wider">
                    Ease of expansion:
                  </h2>
                  <p className="leading-relaxed">
                    Rather than building knock out panels or removing a block wall, these panels are simply relocated. Little is wasted and once again the speed with which the task can be completed is much less than conventional construction
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={FadeIn('down', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.4 }} className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>

                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-lg text-[#034EA2] mb-1 tracking-wider">
                    Housekeeping:
                  </h2>
                  <p className="leading-relaxed">
                    Housekeeping is a necessary cost for those operations that require a clean environment. Anything that can be designed into the facility to minimize the time needed for housekeeping offers a direct payback. Utilizing insulated panels in lieu of conventional wall construction facilitates the cleaning process.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={FadeIn('down', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.4 }} className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>

                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-lg text-[#034EA2] mb-1 tracking-wider">
                    Temperature control in hot climates:
                  </h2>
                  <p className="leading-relaxed">
                    Most dry warehouses/distribution facilities are either not cooled or minimally cooled. Using insulated panels in place of conventional wall construction offers a far superior insulating factor.</p>
                </div>
              </motion.div>
              <motion.div
                variants={FadeIn('down', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.4 }} className="flex relative">

                <motion.div
                  variants={FadeIn('down', 0.2)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.4 }} className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-lg text-[#034EA2] mb-1 tracking-wider">
                    Temperature control in cool climates:
                  </h2>
                  <p className="leading-relaxed">
                    Insulated panels offer a uniform insulation around the entire facility. In pre-engineered metal buildings, the insulation is compressed by the superstructure thereby minimizing any insulation factor. We can design the facility using panels to fit your need, schedule, and budget.

                  </p>
                </motion.div>
              </motion.div>
            </div>
            <Image 
              className="lg:w-3/5 md:w-1/2  rounded-3xl md:mt-0 mt-12"
              width={800}
              height={300}
              src="/ourproduct/r1.jpg"
              alt="step"
            />
          </motion.div>
        </div>
      </section>


    </>

  );
}

export default Page;

