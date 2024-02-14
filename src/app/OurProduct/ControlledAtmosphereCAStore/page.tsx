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
              <Label htmlFor='destination' className='text-5xl text-[#034EA2]'>Controlled Atmosphere</Label>
              {/* input & icon  */}
              <div className='relative  text-white font-semibold items-center mb-[20px]'>
                <p className="mb-[10px]">Koldware Industries (Pvt) Ltd., is the sole distributor of Controlled Atmosphere Cold Store of Van Amerogen, Netherland.</p>
                <p>Vegetables and fruit respire; they take in oxygen (O2) and give off carbon dioxide (CO2). The storage of fruit and vegetables in a gas-tight environment allows the oxygen level in the air to be lowered and the level of CO2 to increase. Long-term storage of vegetables and fruit actually involves inhibiting the ripening and ageing processes, thus retaining flavour and quality. Ripening is, in fact, postponed. This occurs as a result of modifying the gas conditions in the cool cell so that the respiration of fruit and vegetables is reduced.
Controlled Atmosphere (CA) is a storage technique whereby the level of oxygen is reduced and CO2 is increased. Quality and the freshness of fruit andvegetables are retained under Controlled Atmosphere conditions without the use of any chemicals. Under CA conditions, many products can be stored for 2 to 4 times longer than usual.</p>
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
              <h2 className='h2 text-[#034EA2] mb-4'>International leakage norms for CA / ULO cool cells</h2>
              <p className='text-soft_green text-sm mb-6'>Our Products</p>
              <p className='mb-[20px]'>There are strict, international standards for CA / ULO cool cells that stipulate maximum leakage (expressed in m2 per 100m3 leakagesurface area).

We can provide you with information about these standards. CA storage is not possible in the absence of these standards. Cold stores are tested by the installer for leaks before they are put into operation. In the event of any doubts, Van Amerongen can assist you with an extra test.

<span className="text-[#034ea2] font-bold">The floor and the door are important points when making sure the cell is leak-proof!</span></p>
            </div>

            {/* Image & testinomial */}

            <div className='order-1 xl:order-2 flex-1 justify-center xl:justify-end relative h-[634px]'>
              <div>
                <Image src={"/ourproduct/fresh.png"} width={805} height={528} quality={100} alt='' className='rounded-[25px]' />
                
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
            What do you need for CA storage?
            </h2>
          </div>
          {/* text - end */}
          <div className="mx-auto flex max-w-screen-sm flex-col border-t">
            
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                CO2-scrubbers:
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
              CO2-scrubbers are used to manage the CO2 levels in the cool cell. Air from the storage area is removed by the scrubber, and the CO2 purified air is then fed back in. Read more about our CO2 scrubbers
              </p>
            </div>
            {/* question - end */}
           {/* question - start */}
           <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                O2 scrubbers: 
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
              With a CA scrubber (also known as a nitrogen generator or separator), the fruit can be quickly brought under CA conditions once the space has been filled or after a connecting door, for example, has been opened Read more about our O2 scrubbers
              </p>
            </div>
            {/* question - end */}
           {/* question - start */}
           <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Ethylene converters:
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
              Fruit varieties that are sensitive to ethylene (under CA conditions), such as kiwis, require an ethylene converter. The ethylene converter from Van Amerongen removes ethylene from the cool cells using catalytic combustion; ethylene can thus be maintained at any required level. Read more about our ethylene converters
              </p>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Control system:
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
              A control system measures and registers O2 and CO2 and operates the CO2 and O2 scrubbers. In addition, the same control system can regulate cooling (switching on/off, defrosting, machine room regulation), carry out ethylene measurements and operate the ethylene converter. Read more about our control systems.
              </p>
            </div>
            {/* question - end */}
              {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Humidification:
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
              Fruit that is stored in a CA/ULO cell always loses moisture. This moisture loss reduces if the RH levels (relative humidity) are kept above 90%. Cooling takes water out of the atmosphere, thus limiting the storage period and quality. A humidification system means that relative humidity can be kept up to scratch. read more about our humidification systems.
              </p>
            </div>
            {/* question - end */}
              {/* question - start */}
              <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Gas-tight cool cells:
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
              A gas-tight cool cell is made up of gas-tight insulation panels. A gas-tight environment is created using mould-resistant kit and fleece seals. A CA cool cell is closed with a gas-tight door and a window is fitted into the door, the corridor or the roof of the cool cell. This enables samples to be taken and the fruit to be viewed.
              </p>
            </div>
            {/* question - end */}
            {/* question - start */}
            <div className="border-b text-black">
              <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
                <span className="font-semibold transition duration-100 text-[#034EA2] md:text-lg">
                Accessories:
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
              Finally, the CA cool cell is also fitted with a couple of accessories that are vital for VA storage
              </p>
              <p> a flexible buffer (also called a ‘lung’) absorbs pressure differences in the cool cell without oxygen streaming into the cell.
under and over pressure valves ensure that larger pressure differences (which cannot be accommodated by the air buffer) are evened out so that the cool cell is not damaged.</p>
            </div>
            {/* question - end */}
          </div>
        </motion.div>
      </div>

      

    </>

  );
}

export default Page;

