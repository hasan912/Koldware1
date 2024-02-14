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
              <Label htmlFor='destination' className='text-5xl text-[#034EA2]'>Ripening Chambers: Tailored Solutions for Fruit Quality</Label>
              {/* input & icon  */}
              <div className='relative flex text-white font-semibold items-center mb-[20px]'>
                <p>We specialize in designing and installing ripening chambers meticulously crafted to maintain precise conditions for various applications. Whether it's bananas, mangoes, or a variety of fruits, our chambers are engineered from the bottom up to ensure optimal humidity, temperature, ventilation, and specific gas emission levels. Each chamber is customized to meet the unique requirements of our clients' facilities, guaranteeing the perfect ripening environment.</p>
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
              <h2 className='h2 text-[#034EA2] mb-4'>Banana Ripening Chambers: Quality and Flexibility Redefined</h2>
              <p className='text-soft_green text-sm mb-6'>Our Products</p>
              <p className='mb-[20px]'>Our banana ripening chambers are engineered to meet the specific demands of banana ripening processes. With features like safe operation, flexible systems, intelligent control, and programmable ethylene generators, our chambers ensure consistent and efficient ripening. </p>
              <p className="mb-[20px]">Independent settings and intelligent microprocessor controllers enable precise control, while portability and simplicity make them a practical choice for diverse facilities.
              </p>
            </div>

            {/* Image & testinomial */}

            <div className='order-1 xl:order-2 flex-1 justify-center xl:justify-end relative h-[634px]'>
              <div>
                <Image src={"/ourproduct/banana.png"} width={905} height={528} quality={100} alt='' className=' xl:rounded-tl-[25px] xl:rounded-bl-[25px]' />
              
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
              className=" h-[500px] w-[600px] rounded-3xl"
              alt="hero"
              width={540}
              height={540}
              src="/ourproduct/fruit.jpg"
            />
          </motion.div>
          <motion.div      
          variants={FadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }} className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-[#034EA2] font-bold text-5xl mb-4">
            Mango Ripening Chambers: Premium Quality and Performance
            </h1>
            <p className="mb-8 leading-relaxed">
            We offer premium mango ripening chambers renowned for their high performance and quality. Engineered as effective forced draft cooling systems, our mango ripening chambers adhere to stringent quality and health standards. Capable of achieving desired ripening within four to fifteen days, these chambers feature advanced functionalities such as programmable ethylene generators and intelligent control systems.
            </p>
            <h1 className="title-font sm:text-4xl text-[#034EA2] font-bold text-5xl mb-4">
            Fruit Ripening Chambers: Versatile Solutions for Quality Control
            </h1>
            <p className="mb-8 leading-relaxed">Our fruit ripening chambers cater to the diverse needs of fruit processing units, providing prefabricated structures for banana and mango ripening. Assembled at client-specified locations and tailored to dimensional requirements, our chambers ensure consistent and efficient fruit ripening. With safety features, flexible systems, and intelligent controls, our fruit ripening chambers offer competitive pricing without compromising on quality or performance.</p>
          </motion.div>
        </div>

      </section>


    </>

  );
}

export default Page;

