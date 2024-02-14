'use client'

import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { FadeIn } from '../../variants';

const History = () => {
    return (
        <div>
            <section className="text-black bg-soft_green-secondary">
                <div className=" mx-auto flex px-5  md:flex-row flex-col items-center">
                    <motion.div variants={FadeIn('right', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }} className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className=" sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                            Our History

                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Koldware Industries, founded by Mr. Hamid Ali, started its journey in 1986 as Thermo Tech & Power Hi-Tech, focusing on HVACR services in Pakistan. Over the years, it expanded its operations, manufacturing its first Ice Builder and Water Chiller in 1992-1993. By 1997, it ventured into the Cold Chain industry, providing installation and maintenance services.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            In 2000, Thermo Tech established a production facility and evolved into Koldware Industries (KWI), specializing in Refrigeration Systems and Cold Chain products. The company expanded its reach, opening sales offices in Lahore and Sargodha by 2005-2011.
                        </p>
                    </motion.div>
                    <motion.div variants={FadeIn('right', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.4 }} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image
                            className="object-cover object-center rounded"
                            alt="hero"
                            width={700}
                            height={700}
                            src="/about/img2.png"
                        />
                    </motion.div>
                </div>
            </section>

            <section className=" text-black bg-soft_green-secondary">
                <div className=" mx-auto flex px-5 md:flex-row flex-col items-center">
                    <motion.div variants={FadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }} className="lg:max-w-lg  lg:w-full md:w-1/2 w-5/6">
                        <Image
                            className="object-cover mb-20 object-center rounded"
                            alt="hero"
                            width={700}
                            height={700}
                            src="/about/img2.png"
                        />
                    </motion.div>
                    <motion.div variants={FadeIn('up', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.4 }} className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className=" sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                            Our History

                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Notable collaborations marked its growth, including partnerships with Coca Cola Beverages Pakistan Ltd and initiatives with the University of Agriculture, Faisalabad, for mango research. KWI diversified its product range, becoming exclusive distributors for brands like Alfa Laval and Greefa for Sorting & Grading Machines.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            In 2011, KWI celebrated its 25th anniversary, unveiling innovations like Ultrasonic Humidifiers and Ethylene Gas Absorbers. The company continued its R&D efforts, launching its locally manufactured Ethylene Gas Generator in 2012, signifying its commitment to industry innovation and growth in the Cold Chain sector within Pakistan.
                        </p>
                    </motion.div>

                </div>
            </section>


        </div>
    );
}

export default History;
