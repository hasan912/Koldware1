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
              <Label htmlFor='destination' className='text-5xl text-[#034EA2]'>Revolutionize Drying with Solar Tunnel Dryers</Label>
              {/* input & icon  */}
              <div className='relative  text-white font-semibold items-center mb-[20px]'>
                <p className="mb-[10px]">Koldware Industries (Pvt) Ltd. introduces state-of-the-art solar tunnel dryers, a groundbreaking solution for drying crops with utmost efficiency and sustainability.</p>
                <p>Solar tunnel dryers harness the energy of the sun and wind to dry agricultural products, facilitating proper storage, processing, and export. The process involves spreading the crop evenly on tables or drying racks within the tunnel. Beneath the semi-transparent collector, the air is heated by solar energy and circulates throughout the tunnel. This elevated temperature reduces the relative humidity, allowing the air to dry the crop effectively</p>
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
              <h2 className='h2 text-[#034EA2] mb-4'>Transforming Crop Drying Methods:</h2>
              <p className='text-soft_green text-sm mb-6'>Our Products</p>
              <p className='mb-[20px]'>Compared to traditional open-air drying methods, solar tunnel dryers revolutionize the crop drying process. They offer significant economic benefits by enhancing efficiency and reducing labor requirements. Solar drying operates continuously, with moisture content, air temperature, and product temperature changing simultaneously. Key factors influencing drying rates include ambient climatic conditions such as temperature, relative humidity, sunshine hours, solar insolations, wind velocity, and frequency and duration of rain showers during the drying period. To ensure high-quality products and minimize wastage, artificial drying methods are essential.</p>
              <h2 className='h2 text-[#034EA2] mb-4'>Embracing Sustainable Energy Solutions:</h2>
              <p className="mb-[20px]">Historically, conventional fuels like electricity, coal, and fossil fuels powered dryers. However, the energy-intensive nature of agricultural product drying, coupled with the high costs and gradual depletion of fossil fuels, has prompted a shift towards sustainable alternatives like solar energy.
              </p>
            </div>

            {/* Image & testinomial */}

            <div className='order-1 xl:order-2 flex-1 justify-center xl:justify-end relative h-[634px]'>
              <div>
                <Image src={"/ourproduct/solar.jpg"} width={805} height={528} quality={100} alt='' className='rounded-[25px]' />
                
              </div>
            </div>
          </div>
        </motion.div>
        <Image src={'/recommendation/pattern.svg'} width={240} height={240} className=' xl:flex absolute left-[135px] -bottom-[120px]' alt='' />
      </motion.section>


      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <motion.div variants={FadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }} className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-[#034Ea2] text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Advantages of Drying Fruits and Vegetables:
            </h2>
          </div>
          {/* text - end */}
          <div className="mx-auto flex max-w-screen-sm flex-col border-t">
            
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Preservation of Nutritional Value: 
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
              Drying minimally affects the main calorie-providing constituents, preserving the nutritional integrity of fruits and vegetables.
              </p>
            </div>
            {/* question - end */}
           {/* question - start */}
           <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Extended Shelf Life: 
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
              Dried fruits and vegetables boast a longer shelf life under proper storage conditions, reducing waste and ensuring product longevity.
              </p>
            </div>
            {/* question - end */}
           {/* question - start */}
           <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Cost Efficiency:
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
              Solar tunnel dryers significantly reduce transportation, handling, and storage costs, offering a cost-effective solution for farmers and producers.
              </p>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Consistent Quality: 
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
              They yield a consistent product, meeting the modern marketing requirements and enhancing consumer satisfaction.
              </p>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Economical Packaging: 
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
              Solar-dried products can be packaged in the most economical and environmentally friendly forms, further enhancing sustainability.
              </p>
              <p> Experience the innovation and sustainability of solar tunnel dryers, optimizing crop drying processes while minimizing environmental impact.</p>
            </div>
            {/* question - end */}
          </div>
        </motion.div>
      </div>

      <section className="text-black body-font">
          <div className=" px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <p className="lg:w-2/3 mx-auto font-bold leading-relaxed text-lg text-[#034ea2]">
              MAX. PERMISSINLE TEMPERATURE FOR DRYING AGRICULTURAL PRODUCE AND THEIR INTIAL FINAL MOISTURE CONTENTS
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
                      Produce 
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-md text-[#034EA2]">
                    Moisture Content (% W.B) Initial
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-md text-[#034EA2]">
                    Moisture Content (% W.B) Final
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-md text-[#034EA2]">
                    Max.Permissible Temperature
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 text-[#034ea2]">Green Peas</td>
                    <td className="px-4 py-3">80</td>
                    <td className="px-4 py-3">5</td>
                    <td className="px-4 py-3 text-lg text-gray-900">5</td>
                    
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">Green Beans</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">70</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">5</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">75</td>
                    
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">Cauliflower</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">80</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">6	</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">	5	</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">Cabbage</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">80</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">4	</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">55	</td>
                  </tr>
                  
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">Onions</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">80</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">4</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">55</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">Chilies</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">80</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">5</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">65</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">Potatoes</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">75</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">13</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">75</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">Tomatoes</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">96</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">10</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">60</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">Brinjal</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">95</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">6</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">60</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">Apple</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">80</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">24</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">70</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">Apricots</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">85</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">18</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">65</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">Peaches</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">85</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">18</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">65</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-[#034ea2]">
                      Grapes
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                      80
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                      15-20
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                      70
                    </td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

    </>

  );
}

export default Page;
