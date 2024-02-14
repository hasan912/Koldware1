'use client'


import { motion } from 'framer-motion';
import { FadeIn } from '../../variants';

const Mission = () => {
    return (
        <div>
            <section className="text-black mb-10">
                <div className=" px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <motion.div variants={FadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }} className="p-4 md:w-1/2 w-full">
                            <div className="h-full  p-8 rounded">
                                <div className='h-10 w-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>
                                </div>
                                <p className="leading-relaxed  mb-6">
                                    To be the first choice in Cold Chain Solution Providers,
                                    the global benchmark in customer service & quality
                                    and at the forefront of technologies that will enhance
                                    the way we live
                                </p>

                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="font-bold text-xl text-[#034EA2]">
                                        Our Vision
                                    </span>

                                </span>

                            </div>
                        </motion.div>
                        <motion.div variants={FadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }} className="p-4 md:w-1/2 w-full">
                            <div className="h-full  p-8 rounded">
                               <div className='h-10 w-10'>
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L9.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3V160c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H160zM576 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM448 208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM400 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm128 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM272 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM144 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM576 336a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-48-80a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
                               </div>
                                <p className="leading-relaxed mb-6">
                                    We commit ourselves to high standards of integrity in
                                    contributing to the best interests of our customers,
                                    employees, communities and nation based on the
                                    continual pursuit of technological and operational
                                    excellence. Our goal is to be recognized nationally and
                                    internationally as the most accomplished and respected
                                    company in Cold Chain industry.
                                </p>

                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="font-bold text-xl text-[#034EA2]">
                                        Our Mission
                                    </span>
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Mission;
