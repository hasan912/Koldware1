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
              <Label htmlFor='destination' className='text-5xl text-[#034EA2]'>Introducing Easy Fog: The Ultra-Sonic Industrial Humidifier</Label>
              {/* input & icon  */}
              <div className='relative  text-white font-semibold items-center mb-[20px]'>
                <p className="mb-[10px]">Easy Fog brings innovation to industrial humidification with its cutting-edge Ultra-Sonic Industrial Humidifier. Designed for commercial and industrial settings, Easy Fog ensures precise humidity control for optimal working environments.</p>
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




      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <motion.div variants={FadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }} className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-[#034Ea2] text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            PERFORMANCE CHARACTERISTICS
            </h2>
          </div>
          {/* text - end */}
          <div className="mx-auto flex max-w-screen-sm flex-col border-t">
            
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Use the integrated atomization cassette mechanism and switching power supply.
                </span>
              </div>
            </div>
            {/* question - end */}
           {/* question - start */}
           <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Due their non-mechanical design there is no noise by the system.
                </span>
              </div>
            </div>
            {/* question - end */}
           {/* question - start */}
           <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                High Atomization Efficiency.
                </span>
              </div>
              
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Small atomized particles with diameter of about 1 ~ 5μm.
                </span>
              </div>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Automatic Controls for minimum and maximum water levels which ensures uninterrupted.
                </span>
              </div>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Stainless Steel Water tank.
                </span>
              </div>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                24 – 48kg models adapt double taps output with ɸ160mm PVC Pipe for mist spray.
                </span>
              </div>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                54 – 74kg models adapt triple taps output with ɸ160mm PVC Pipe for mist spray.
                </span>
              </div>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Optional capacitive or dry & wet ball type temperature and humidity control meter to apply different environmental application requirements.
                </span>
              </div>
            </div>
            {/* question - end */}
          </div>
        </motion.div>
      </div>

      <section className="text-black body-font">
          <div className=" px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <p className="lg:w-2/3 mx-auto font-bold leading-relaxed text-xl text-[#034ea2]">
              TECHNICAL PARAMETERS
              </p>
            </div>
            <motion.div variants={FadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.4 }} className="container lg:w-4/5 w-full mx-auto overflow-auto">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-md text-[#034EA2]">
                    Model 
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-md text-[#034EA2]">
                    Amount of Mist (Humidity)	Kg/hr
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-md text-[#034EA2]">
                    Fog Particle Diameter μm
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-md text-[#034EA2]">
                    Operating Voltage VAC
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-md text-[#034EA2]">
                    Power W
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-md text-[#034EA2]">
                    Effective Volume for Humidification m3
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 text-[#034ea2]">SUH-EF-024-HC</td>
                    <td className="px-4 py-3">24</td>
                    <td className="px-4 py-3">1 ~ 5</td>
                    <td className="px-4 py-3 text-lg text-gray-900">220, Single Phase, 50Hz</td>
                    <td className="px-4 py-3">2400</td>
                    <td className="px-4 py-3">1500</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">SUH-EF-027-HC</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">27</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">1 ~ 5</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">220, Single Phase, 50Hz</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">2700</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">1688</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">SUH-EF-030-HC</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">30</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">1 ~ 5</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">	220, Single Phase, 50Hz</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">3000</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">1875</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">SUH-EF-036-HC	</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">36</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">1 ~ 5	</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">220, Single Phase, 50Hz</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">3600</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">2250</td>
                  </tr>
                  
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">SUH-EF-042-HC</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">42</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">1 ~ 5</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">220, Single Phase, 50Hz</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">4200</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">2625</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">SUH-EF-048-HC</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">48</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">1 ~ 5</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">220, Single Phase, 50Hz</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">4800</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">3000</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">SUH-EF-054-HC	</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">54</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">1 ~ 5</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">220, Single Phase, 50Hz</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">5400</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">3375</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">SUH-EF-060-HC</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">60</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">1 ~ 5</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">220, Single Phase, 50Hz</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">6000</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">3750</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">SUH-EF-066-HC</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">66</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">1 ~ 5</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">220, Single Phase, 50Hz</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">6600</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">4125</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-[#034ea2]">SUH-EF-072-HC</td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">72</td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">1 ~ 5</td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 ">220, Single Phase, 50Hz</td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">7200</td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">4500</td>
                  </tr>
                </tbody>
              </table>
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
          Applications
            </h2>
          </div>
          {/* text - end */}
          <div className="mx-auto flex max-w-screen-sm flex-col border-t">
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Our HC series Ultrasonic Humidifiers are suitable for large-scale efficient humidification for
                </span>
              </div>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                High-tech agriculture planting, breeding, Large-scale fruits & vegetables preservation storages.
                </span>
              </div>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Large-scale SMT electronic workshops, LCD, IC testing and packaging, semi-conductor components factories.
                </span>
              </div>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Printing, Ceramics, Chemical and Tobacco, Textile gunpowder and High-tech war Industries.
                </span>
              </div>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Artificial Scenery.
                </span>
              </div>
            </div>
            {/* question - end */}
          </div>
        </motion.div>
      </div>
    </>

  );
}

export default Page;
