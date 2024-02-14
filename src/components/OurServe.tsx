'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '../../variants'

import Image from "next/image";
const OurServe = () => {
    return (
        <>
            <div>
                <section className="text-gray-600 body-font bg-soft_green-secondary">
                    <div className=" px-5 py-24 mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-3xl font-bold mb-4">
                                <span className="text-[#034EA2]"> QUALITY </span>AND ENVIROMENTAL<span className="text-[#034EA2]"> POLICY</span>
                            </h1>
                            <p className="text-base leading-relaxed xl:w-10/12 lg:w-3/4 mx-auto text-black font-semibold ">
                                Quality Assurance by KOLDWARE is backed by professional personnel in the field of planning, designing,
                                and actual construction of the designed refrigeration system, including panels and the compartments (if
                                required), using quality equipment and accessories to provide our valuable customers with durable
                                product.
                            </p>
                            <div className="flex mt-6 justify-center">
                                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
                            </div>
                        </div>
                        <motion.div variants={FadeIn('up', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.4 }} className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center">
                            <motion.div variants={FadeIn('down', 0.2)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.4 }} className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-10 h-10 inline-flexitems-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z" /></svg>
                                </div>
                                <div className="flex-grow">

                                    <p className="leading-relaxed text-black font-semibold text-lg">
                                        The are
                                        compressor(s)
                                        covered for a
                                        period of 1 Gregorian year from the
                                        first day of official
                                        handing over of
                                        the system.
                                    </p>
                                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                                        Learn More
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div variants={FadeIn('down', 0.4)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.4 }} className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M96 0C78.3 0 64 14.3 64 32v96h64V32c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32v96h64V32c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c0 77.4 55 142 128 156.8V480c0 17.7 14.3 32 32 32s32-14.3 32-32V412.8C297 398 352 333.4 352 256V224c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" /></svg>
                                </div>
                                <div className="flex-grow">

                                    <p className="leading-relaxed text-black font-semibold text-lg">
                                        The operation of the
                                        refrigeration
                                        system supplied by
                                        KOLDWARE has been
                                        protected against
                                        electrical
                                    </p>
                                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                                        Learn More
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div variants={FadeIn('down', 0.4)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.4 }} className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M380.8 416c41.5-40.7 67.2-97.3 67.2-160C448 132.3 347.7 32 224 32S0 132.3 0 256S100.3 480 224 480H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H380.8zM224 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm64 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" /></svg>
                                </div>
                                <div className="flex-grow">

                                    <p className="leading-relaxed text-black font-semibold text-lg">
                                        Insulated panels
                                        are covered for
                                        aperiod of Seven to
                                        Twenty years.
                                    </p>
                                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                                        Learn More
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div variants={FadeIn('down', 0.4)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.4 }} className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" /></svg>
                                </div>
                                <div className="flex-grow">

                                    <p className="leading-relaxed text-black font-semibold text-lg">
                                        All other
                                        compnents of the
                                        refrigeration system are
                                        also covered for a period of
                                        one Gregorian year from
                                        the date of official handling
                                        over of the system.
                                    </p>
                                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                                        Learn More
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div variants={FadeIn('down', 0.4)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.4 }}
                                className="p-4 md:w-1/3 flex flex-col text-center items-center">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M248 0H208c-26.5 0-48 21.5-48 48V160c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H328V80c0 8.8-7.2 16-16 16H264c-8.8 0-16-7.2-16-16V0zM64 256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H184v80c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V256H64zM352 512H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H472v80c0 8.8-7.2 16-16 16H408c-8.8 0-16-7.2-16-16V256H352c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2V464c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z" /></svg>
                                </div>
                                <div className="flex-grow">

                                    <p className="leading-relaxed text-black font-semibold text-lg">
                                        Unauthorized tampering
                                        with the refrigeration
                                        system supplied by
                                        KOLDWARE shall
                                        invalidate the warranty.
                                    </p>
                                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                                        Learn More
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>



                        </motion.div>

                    </div>
                </section>

            </div>

        </>
    );
}

export default OurServe;
