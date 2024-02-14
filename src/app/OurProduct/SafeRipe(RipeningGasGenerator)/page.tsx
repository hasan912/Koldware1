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
              <Label htmlFor='destination' className='text-5xl text-[#034EA2]'>Introducing Safe Ripe™: The Ripening Gas Generator</Label>
              {/* input & icon  */}
              <div className='relative flex text-white font-semibold items-center mb-[20px]'>
                <p>Safe Ripe™ by Koldware offers a reliable and economical solution for the uniform ripening and de-greening of fruits through its innovative Ethylene Gas Generator. This machine is designed to generate clean and high-purity ripening gas, ensuring safety without any side effects.</p>
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


      <motion.div
        variants={FadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.4 }} className=' xl:pt-8 xl:pl-10 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0' >
        <h2 className='h2 text-[#034EA2] mb-4'>Key Features:</h2>
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
                    Uniform Ripening and De-greening:
                  </h2>
                  <p className="leading-relaxed">
                    Safe-Ripe™ provides the easiest and safest solution for uniform ripening and de-greening of fruits, ensuring consistent quality.
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
                    Safe Ethylene Gas Generation:
                  </h2>
                  <p className="leading-relaxed">
                    The system generates non-pressurized and safe Ethylene/Ripening Gas based on the dimensions of the ripening room, its occupied volume proportion, and the required level of Ethylene Concentration (ppm) in the room. Users can input these parameters via a High-Quality Color Resistive Touch-screen Console.</p>
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
                    Controlled Monitoring:
                  </h2>
                  <p className="leading-relaxed">
                    The ongoing production of ethylene gas is monitored and controlled through the Touch-screen Console, which is installed with the Control Panel outside the Ripening Room. This setup ensures ease of access and safer operation, minimizing personnel exposure to ethylene.</p>
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
                    Precision Control:
                  </h2>
                  <p className="leading-relaxed">
                    Critical processes are meticulously controlled and monitored using PLC and microprocessor technology, ensuring optimal ripening conditions.</p>
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
                    User-Friendly Operation:
                  </h2>
                  <p className="leading-relaxed">
                    With Safe-Ripe™, operation is simplified—just pour ripening concentrate, provide the right power, and the system is ready-to-go.</p>
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
                    Power Interruption Recovery:
                  </h2>
                  <p className="leading-relaxed">
                    The system resumes its operation from the last state after a power breakdown, preventing excessive feeding of ethylene into the ripening room.
                  </p>
                </motion.div>
              </motion.div>
            </div>
            <Image
              className="lg:w-3/5 h-[1000px] md:w-1/2  rounded-3xl md:mt-0 mt-12"
              width={400}
              height={300}
              src="/ourproduct/saferipe.png"
              alt="step"
            />
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
              Optional Value-Added Features:
            </h2>
          </div>
          {/* text - end */}
          <div className="mx-auto flex max-w-screen-sm flex-col border-t">
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                  Centralized Control:
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
                Monitor and control Ripening Room processes through a High-Quality Color Resistive Touch-screen Console. This includes automated ventilation control based on CO² concentration, temperature, humidity, CO², and ethylene monitoring, along with data logging.
              </p>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                  Alarm Systems
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
                Receive alerts for hi/lo temperature, humidity, and room door opening, with event logging for added security.
              </p>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                  Sync Capability:
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
                Sync with Windows-based Computers for comprehensive monitoring and control of system processes.
              </p>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                  Remote Monitoring:
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
                Access and control the ripening room remotely from anywhere in the world, providing convenience and flexibility.
              </p>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                  Safety Note:
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
                Ethylene becomes explosive at 27,000ppm; hence, it is recommended to use our generator in rooms larger than 500ft³ to ensure safety.
              </p>
              <p className="mb-4 text-gray-500">
                Experience the efficiency and safety of Safe Ripe™ for optimal fruit ripening and de-greening processes.
              </p>
            </div>
            {/* question - end */}
          </div>
        </motion.div>
      </div>

      <>
        <section className="text-black body-font">
          <div className="container px-5 py-24 mx-auto">
            <motion.div variants={FadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.4 }} className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-4xl text-3xl text-[#034EA2] font-bold title-font mb-2 text-gray-900">
                TECHNICAL SPECIFICATIONS
              </h1>
            </motion.div>
            <motion.div variants={FadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.4 }} className="lg:w-2/3 w-full mx-auto overflow-auto">
              <table className="table-auto w-full text-left whitespace-no-wrap">

                <tbody>
                  <tr>
                    <td className="px-4 py-3 text-lg text-[#034EA2] font-semibold">Tank Volume</td>
                    <td className="px-4 py-3">≈ 2.5litres</td>

                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-[#034EA2] font-semibold">Ethylene Output</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">As per required concentration in the room (10 to 60ppm: ±5 — 10%, 61 to 150ppm: ±3 — 5%)</td>

                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-[#034EA2] font-semibold">Minimum Room Volume</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">250ft³ (recommended minimum is 500ft3)</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-[#034EA2] font-semibold">
                      Minimum Room Volume
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                      220 VAC, 50Hz, Single Phase / 200W
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-[#034EA2] font-semibold">
                      Dimensions (L x W x H)
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                      Generator: 12" x 8" x 12", Control Panel: 12" x 8" x 12"
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-[#034EA2] font-semibold">
                      Dry Weight (packed)
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                      15Kg (approx. ±5%)
                    </td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>
      </>

      <>
        <section className="text-black body-font">
          <div className=" px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Adela A.Kader Department of Plant Sciences. University of california , Davis , CA.
              </p>
            </div>
            <motion.div variants={FadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.4 }} className="lg:w-4/5 w-full mx-auto overflow-auto">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-md text-[#034EA2]">
                      Produce Details
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-md text-[#034EA2]">
                      Ethylene Concentration (ppm)
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-md text-[#034EA2]">
                      Ethylene Exposure (hours)
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-md text-[#034EA2]">
                      Ripening Temperature(°c)
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium  text-md text-[#034EA2]">
                      Store Temperature after ripening(°c)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 text-[#034ea2]">Banana</td>
                    <td className="px-4 py-3">100-150</td>
                    <td className="px-4 py-3">24-48</td>
                    <td className="px-4 py-3 text-lg text-gray-900">15-18</td>
                    <td className="px-4 py-3 text-lg text-gray-900">13-14</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">Mango</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">100</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">24</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">20-22</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">10-13</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">Papaya</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">100</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">24-48	</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">	20-25	</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">About at 7	</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-[#034ea2]">Tomato</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">100-150	</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">24-48	</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">	18-20	</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">12.5</td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-[#034ea2]">
                      Pears
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                      100-150
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                      24-72
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                      18-22
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                      About at 0° c
                    </td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>
      </>


    </>

  );
}

export default Page;
