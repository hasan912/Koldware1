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
              <Label htmlFor='destination' className='text-5xl text-[#034EA2]'>Ensuring Optimal Refrigerated Container Solutions with Koldware Industries</Label>
              {/* input & icon  */}
              <div className='relative  text-white font-semibold items-center mb-[20px]'>
                <p className="mb-[10px]">Koldware Industries, dedicated to delivering excellence, offers comprehensive refrigerated container truck and van solutions tailored to your specific needs. From the outset, we prioritize providing comfortable working conditions for your personnel, ensuring a seamless and efficient process from start to finish.</p>
                <p>Our range of refrigerated container trucks and vans, spanning from 6ft to 40ft, presents versatile options for transporting perishable goods including meat, fruits, and vegetables. With our reefer transportation services, we focus on minimizing decay, controlling ripening, and maintaining food quality over extended distances. Moreover, our services extend to handling chemical and pharmaceutical products, ensuring their integrity throughout transit.</p>
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
              <h2 className='h2 text-[#034EA2] mb-4'>Refrigerated Container Truck & Van</h2>
              <p className='text-soft_green text-md mb-6'>Koldware Industries (Pvt) Ltd. is the only company that will work with you on each step of the process to ensure you have the ideal refrigerated van and most comfortable working conditions for your personnel.</p>
              <p className='mb-[20px]'>We provides the size ranges of the Container from 6ft to 40ft. Reefer transportation services are mainly allows us to control the temperature, humidity and even the air composition inside our containers for the used to handle perishable cargoes like meat, fruits and vegetables, with the advantage of minimizingentire voyage, ensuring safe and optimal transportation conditions for the products.</p>
              <p className="mb-[20px]">decay, controlling ripening, and retaining food quality to the best possible condition for consumers, even after being transported long distances. Some chemical and pharmaceutical products are moved by reefer services to avoid decomposition or deterioration of the products which can take place during allweather-exposed transportation. For many cargoes, maintaining an appropriate ambient condition through proper operational handling is indispensable for every step of the supply chain – from packing, storing, loading, transporting, and unpacking, to delivery to the end consumer. Ocean reefer transportation is a key part of this supply chain, and modern technology.
              </p>
            </div>

            {/* Image & testinomial */}

            <div className='order-1 xl:order-2 flex-1 justify-center xl:justify-end relative h-[634px]'>
              <div>
                <Image src={"/ourproduct/truck.png"} width={905} height={528} quality={100} alt='' className=' xl:rounded-tl-[25px] xl:rounded-bl-[25px]' />
              
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
              src="/ourproduct/truck-1.png"
            />
          </motion.div>
          <motion.div      
          variants={FadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }} className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="mb-8 leading-relaxed">
            The most critical function of any reefer services is Temperature Controlling. It has the largest effect on the respiration of produce and bacterial growth. A temperature increase of 10°C will result in an approximate doubling of the respiration rate of fruit; while lowering the temperature will substantially reduce the growth rate of micro-organisms. However, an optimal temperature set point, which is commodity-specific, is needed as too low a temperature may also cause adverse effects like chill injury of fruits, meat texture changes, or crystallization of some chemical products. It should be noted that reefer equipment is designed to regulate temperature inside the container in relation to the cargo preloading condition, rather than removing heat absorbed by cargo before or during its loading. Hence, proper pre-treatment and pre-cooling of cargo, as well as proper handling in the appropriate ambient conditions during container loading and unloading, are crucial to maintain cargoes in the best possible condition.
            </p>
          </motion.div>
        </div>

      </section>


    </>

  );
}

export default Page;
