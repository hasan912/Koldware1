'use client'
import Image from "next/image";
import { inView, motion } from 'framer-motion'
import { FadeIn } from "../../variants";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { useMediaQuery } from 'react-responsive';
import Stats from "./Stats";
import Link from "next/link";

const About = () => {
    const isMobile = useMediaQuery({
        query:'(max-widt: 768px)'
    });
    const [ref,inView] = useInView ({
        threshold:!isMobile ? 0.5 : null ,
    })
    return (
        // <section className="py-12 mb-10 xl:px-10 xl:py-18" ref={ref}> {/* Added padding */}
        //     <div className=" mx-auto px-4 ">
        //         <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between">
        //             {/* text */}
        //             <motion.div 
        //             variants={FadeIn('right',0.5)}
        //             initial='hidden'
        //             whileInView={'show'}
        //             viewport={{once:false,amount:0.4}}
        //             className=" xl:mr-10">
        //                 <h2 className="h2 text-4xl mb-4 xl:mb-6">About Koldware</h2> {/* Adjusted heading size */}
        //                 <p>Over 25 Years of Industry Excellence: KOLDWARE INDUSTRIES (PRIVATE) LIMITED boasts a rich history spanning over 25 years in the HVACR industry. From its inception in 1983 by founder Mr. Hamid Ali to its evolution into a leading<br/> player in the Cold Chain industry throughout Pakistan, KOLDWARE has consistently delivered innovative solutions and unparalleled service. </p>
        //                 <p className="mb-4 xl:mb-8"></p>
        //                 {/* stats */}
        //                 <div className="my-5 xl:my-10">
        //                   {inView &&  <Stats/>} 
        //                     </div> {/* Removed min-height */}
        //                 <p className="mb-10"></p>
        //                 <Button size='default' className='px-5 py-5 bg-soft_green text-white hover:bg-soft_green-secondary hover:text-black'>Explore More</Button>
        //             </motion.div>
        //             <motion.div
        //             variants={FadeIn('right',0.2)}
        //             initial='hidden'
        //             whileInView={'show'}
        //             viewport={{once:false,amount:0.2}}
        //             className="max-w-[650px]"
        //             > {/* Adjusted width */}
        //                 <Image src={'/about/about.jpg'} className="h-[800px] w-[1000px] rounded-[20px]" width={1000} height={700} alt=""/> {/* Adjusted class */}
        //             </motion.div>
        //         </div>
        //     </div>
        // </section>
        <section className=" body-font"  ref={ref}>
  <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#034ea2]">
      About Koldware
      </h1>
      <p className="mb-5 leading-relaxed">
      Over 25 Years of Industry Excellence: KOLDWARE INDUSTRIES (PRIVATE) LIMITED boasts a rich history spanning over 25 years in the HVACR industry. From its inception in 1983 by founder Mr. Hamid Ali to its evolution into a leading player in the Cold Chain industry throughout Pakistan, KOLDWARE has consistently delivered innovative solutions and unparalleled service.
      </p>
      <div className="my-5 xl:my-10">
        {inView &&  <Stats/>} 
        </div>
        <p className="mt-5 mb-10 leading-relaxed">
        Continuous Innovation and Expansion: With a commitment to innovation and expansion, KOLDWARE INDUSTRIES has continuously diversified its product portfolio and expanded its presence across Pakistan. From manufacturing refrigeration systems and polyurethane sandwich panels to collaborating with global leaders in heat transfer and controlled atmosphere technology, KOLDWARE remains at the forefront of industry advancements.
      </p>
      <div className="flex justify-center">
     <Link href={'/About'}> <Button size='default' className='px-5 py-5 bg-soft_green text-white hover:bg-soft_green-secondary hover:text-black'>Explore More</Button></Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded-xl"
        width={800}
        height={700}
        alt="hero"
        src="/about/about.jpg"
      />
    </div>
  </div>
</section>
    );
}

export default About;
