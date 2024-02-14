'use client'

import { Button } from './ui/button'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { FadeIn } from '../../variants'
import Link from 'next/link'

const Recommendation = () => {
    return (
        <motion.section variants={FadeIn('right',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.4}}
         className='pb-12 xl:pt-[157px] xl:pb-112[px] bg-soft_green-secondary relative'>
            <motion.div
            variants={FadeIn('up',0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.4}}
            >

                            <div className='flex mt-10 flex-col xl:flex-row xl:pl-[100px] gap-y-12 xl:gap-y-0'>
                                {/* text */}
                                <div className='max-w-[445px] xl:max-w-[900px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0' >
                                    <h2 className='h2 mb-4'>Our Products</h2>
                                    <p className='text-soft_green text-sm mb-6'>Our Products</p>
                                    <p className='mb-[10px]'>You are welcome to visit our showroom and meet with one of our representative to discuss your specific requirements. We will be pleased to give you a presentation of our range of quality equipment and material and additional information that may assist you in selecting the right equipment.</p>
                                    <p className='mb-[40px]'>Right from the time you place an order with us, each process is handled professionally, whether it is acquiring your selected material or equipment, preparing the required sizes of panels & doors, assembling, giving pre final touches, and finally testing your ordered equipment.
You are not left alone to maintain the equipment you have acquired from KOLDWARE. We provide you, our valuable customer service with product warranty and after sales maintenance services that will keep you satisfied throughout the period that you are using our products</p>
                                    <div className='flex items-center gap-x-[50px]'>
                                        <Button size='default' className='px-10 py-5 bg-soft_green text-white hover:bg-white hover:text-black'><Link href={'/OurProduct/PolyurethaneInsulatedSandwichPanels'}>View More!</Link></Button>
                                    </div>
                                </div>

                                {/* Image & testinomial */}

                                <div className='order-1 xl:order-2 flex-1 justify-center xl:justify-end relative h-[634px]'>
                                    <div>
                                        <Image src={"/recommendation/Capture.png"} width={905} height={528} quality={100} alt='' className=' xl:rounded-tl-[25px] xl:rounded-bl-[25px]' />
                                        <div className='bg-soft_green p-4 text-white xl:ml-10 text-center xl:text-left xl:max-w-[668px] xl:min-h-[180px] xl:absolute xl:bottom-0 md:flex-col md:max-w-[900px] xl:rounded-xl xl:px-10'>
                                            <p className='mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6'>KOLDWARE offers quality products at affordable prices and can also custom build a system that meets your specific needs for movement or storage of commodities under cold or freeze environment.Our customers get all kind of solutions for products and commodities requiring storage or transport under cold or freeze environment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </motion.div>
            <Image src={'/recommendation/pattern.svg'} width={240} height={240}className=' xl:flex absolute left-[135px] -bottom-[120px]' alt=''/>
        </motion.section>
    );
}

export default Recommendation;
