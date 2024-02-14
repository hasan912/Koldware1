'use client'
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import { motion } from "framer-motion";
import { FadeIn } from "../../variants";
const Trusted = () => {
  return (
    <div className="bg-white">
      <motion.div variants={FadeIn('down', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.4 }} className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 gap-6 rounded-lg bg-gray-100 p-6 sm:h-40 sm:content-evenly md:grid-cols-6">
            {/* logo - start */}
            <div className="flex justify-center text-gray-400">

              <Image className="h-6 w-auto sm:h-8 lg:h-10" src={'/trusted/alfa.png'} height={100} width={100} alt='alfa' />
            </div>
            {/* logo - end */}
            {/* logo - start */}
            <div className="flex justify-center text-gray-400">
              <Image className="h-6 w-auto sm:h-8 lg:h-10" src={'/trusted/infraca.png'} height={100} width={100} alt='alfa' />
            </div>
            {/* logo - end */}
            {/* logo - start */}
            <div className="flex justify-center text-gray-400">
              <Image className="h-6 w-auto sm:h-8 lg:h-10" src={'/trusted/greefa.png'} height={100} width={100} alt='alfa' />
            </div>
            {/* logo - end */}
            {/* logo - start */}
            <div className="flex justify-center text-gray-400">
              <Image className="h-6 w-auto sm:h-8 lg:h-10" src={'/trusted/ruukki.jpg'} height={100} width={100} alt='alfa' />
            </div>
            {/* logo - end */}
            {/* logo - start */}
            <div className="flex justify-center text-gray-400">
              <Image className="h-6 w-auto sm:h-8 lg:h-10" src={'/trusted/sensa.gif'} height={100} width={100} alt='alfa' />
            </div>
            {/* logo - end */}
            {/* logo - start */}
            <div className="flex justify-center text-gray-400">
              <Image className="h-6 w-auto sm:h-8 lg:h-10" src={'/trusted/van.png'} height={100} width={100} alt='alfa' />
            </div>
            {/* logo - end */}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={FadeIn('down', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.4 }} className='hidden xl:grid bg-white'>
        <div className="p-10">
          <h1 className="text-3xl font-bold text-soft_green">Major Client</h1>
        </div>
        <Carousel className="" plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}>
          <CarouselContent className="-ml-4 ">
            <CarouselItem className="pl-4 m-10">
              <div className='grid grid-cols-3 m-10 md:grid-cols-9'> {/* Use 3 columns on mobile and 6 columns on medium and larger screens */}
                <div className='flex justify-cneter'><img src="/LOGO/AGP.png" className='h-[90px] object-cover' alt="" /></div>
                <div className='flex justify-cneter'><img src="/LOGO/Lotte.png" alt="" className='h-[70px]' /></div>
                <div className='flex justify-cneter'><img src="/LOGO/Abu-dawood.png" alt="" className='h-[70px] object-fill' /></div>
                <div className='flex justify-cneter'><img src="/LOGO/Angel-Logistics.png" alt="" className='h-[70px] object-fill' /></div>
                <div className='flex justify-cneter'><img src="/LOGO/Bahria-University.png" alt="" className='h-[70px] object-fill' /></div>
                <div className='flex justify-cneter'><img src="/LOGO/K&Ns.png" alt="" className='h-[70px] object-fill' /></div>
                <div className='flex justify-cneter'><img src="/LOGO/KFC.png" alt="" className='h-[70px] object-fill' /></div>
                <div className='flex justify-cneter'><img src="/LOGO/Kolson.png" alt="" className='h-[70px] object-fill' /></div>
                <div className='flex justify-cneter'><img src="/LOGO/Bayer.png" alt="" className='h-[70px] object-fill' /></div>

              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 m-10">
              <div className='grid grid-cols-3 m-10 md:grid-cols-9'> {/* Use 3 columns on mobile and 6 columns on medium and larger screens */}
                <div className='flex justify-cneter'><img src="/LOGO/Bayer.png" alt="" className='h-[70px] object-fill' /></div>
                <div className='flex justify-cneter'><img src="/LOGO/Bosch.png" alt="" className='h-[70px] object-fill' /></div>
                <div className='flex justify-cneter'><img src="/LOGO/Dominos.png" alt="" className='h-[70px] object-fill' /></div>
                <div className='flex justify-cneter'><img src="/LOGO/Efroze.png" alt="" className='h-[70px] object-fill' /></div>
                <div className='flex justify-cneter'><img src="/LOGO/EngroFood.png" alt="" className='h-[70px] object-fill' /></div>
                <div className='flex justify-cneter'><img src="/LOGO/Gambat.png" alt="" className='h-[70px] object-fill' /></div>
                <div className='flex justify-cneter'><img src="/LOGO/Getz=Pharma.png" className='h-[70px] object-fill' alt="" /></div>
                <div className='flex justify-cneter'><img src="/LOGO/Ghazi-Brothers.png" className='h-[70px] object-fill' alt="" /></div>
                <div className='flex justify-cneter'><img src="/LOGO/Coca-Cola.png" alt="" className='h-[70px] object-fill' /></div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </motion.div>
    </div>
  );
}

export default Trusted;
