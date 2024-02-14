'use client'


import { motion } from 'framer-motion'
import { FadeIn } from '../../variants'


const Serve = () => {
    return (
        <>

            <section className="bg-soft_green text-black">

                <div className="text-center pt-20 mb-20">
                    <h1 className="sm:text-3xl text-3xl font-bold mb-4">
                        INDUSTRIES <span className="text-[#034EA2]"> WE SERVE</span>
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
                    viewport={{ once: false, amount: 0.2 }}
                    className=" px-5 py-24 mx-auto">
                    <motion.div  variants={FadeIn('right', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.4 }} className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="sm:w-22 sm:h-22 h-10 w-10 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M120 0h80c13.3 0 24 10.7 24 24V64H96V24c0-13.3 10.7-24 24-24zM32 167.5c0-19.5 10-37.6 26.6-47.9l15.8-9.9C88.7 100.7 105.2 96 122.1 96h75.8c16.9 0 33.4 4.7 47.7 13.7l15.8 9.9C278 129.9 288 148 288 167.5c0 17-7.5 32.3-19.4 42.6C280.6 221.7 288 238 288 256c0 19.1-8.4 36.3-21.7 48c13.3 11.7 21.7 28.9 21.7 48s-8.4 36.3-21.7 48c13.3 11.7 21.7 28.9 21.7 48c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64c0-19.1 8.4-36.3 21.7-48C40.4 388.3 32 371.1 32 352s8.4-36.3 21.7-48C40.4 292.3 32 275.1 32 256c0-18 7.4-34.3 19.4-45.9C39.5 199.7 32 184.5 32 167.5zM96 240c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zm16 112c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z" /></svg>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-2xl text-[#034EA2] font-bold mb-2">
                                Food & Beverages
                            </h2>
                            <p className="leading-relaxed text-base">
                                Processed Food & Juices
                                Processors, Distributors,
                                Importers, Exporters
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
                    <motion.div variants={FadeIn('right', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.4 }} className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-2xl text-[#034EA2] font-bold mb-2">
                                Livestock
                            </h2>
                            <p className="leading-relaxed text-base">
                                Meat & Poultry
                                Slaughter Houses,
                                Processors, Importers,
                                Exporters
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
                        <div className="sm:w-32 sm:order-none order-first sm:h-22 h-10 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 224v32V416c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V327.8c9.9 6.6 20.6 12 32 16.1V368c0 8.8 7.2 16 16 16s16-7.2 16-16V351.1c5.3 .6 10.6 .9 16 .9s10.7-.3 16-.9V368c0 8.8 7.2 16 16 16s16-7.2 16-16V343.8c11.4-4 22.1-9.4 32-16.1V416c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V256l32 32v49.5c0 9.5 2.8 18.7 8.1 26.6L530 427c8.8 13.1 23.5 21 39.3 21c22.5 0 41.9-15.9 46.3-38l20.3-101.6c2.6-13-.3-26.5-8-37.3l-3.9-5.5V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v14.4l-52.9-74.1C496 86.5 452.4 64 405.9 64H272 256 192 144C77.7 64 24 117.7 24 184v54C9.4 249.8 0 267.8 0 288v17.6c0 8 6.4 14.4 14.4 14.4C46.2 320 72 294.2 72 262.4V256 224 184c0-24.3 12.1-45.8 30.5-58.9C98.3 135.9 96 147.7 96 160v64zM560 336a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM166.6 166.6c-4.2-4.2-6.6-10-6.6-16c0-12.5 10.1-22.6 22.6-22.6H361.4c12.5 0 22.6 10.1 22.6 22.6c0 6-2.4 11.8-6.6 16l-23.4 23.4C332.2 211.8 302.7 224 272 224s-60.2-12.2-81.9-33.9l-23.4-23.4z" /></svg>
                        </div>
                    </motion.div>
                    <motion.div  variants={FadeIn('right', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.4 }}  className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="sm:w-22 sm:h-22 h-10 w-10 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32C0 14.3 14.3 0 32 0H352c17.7 0 32 14.3 32 32V64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64V32zm32 96H352V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zM160 240v48H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V352h48c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16H224V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" /></svg>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-2xl text-[#034EA2] font-bold mb-2">
                                Pharmaceutical
                            </h2>
                            <p className="leading-relaxed text-base">
                                Medicines & Vaccines
                                Manufacturers, Distributors,
                                Importers, Exporters
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
                    <motion.div  variants={FadeIn('right', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.4 }}  className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-2xl text-[#034EA2]  font-bold mb-2">
                                Agriculture
                            </h2>
                            <p className="leading-relaxed text-base">
                                Fruits & Vegetables Growers,
                                Processors, Importers,
                                Exporters
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
                        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-10 w-15 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H240V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H48c-26.5 0-48-21.5-48-48V48zM80 224c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H80zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm112-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H272zM64 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H176zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16zm384 80v16c0 44.2-35.8 80-80 80H544V272c0-44.2 35.8-80 80-80h16zm0 128c0 44.2-35.8 80-80 80H544V384c0-44.2 35.8-80 80-80h16v16zm0 112c0 44.2-35.8 80-80 80H544V496c0-44.2 35.8-80 80-80h16v16zM512 496v16H496c-44.2 0-80-35.8-80-80V416h16c44.2 0 80 35.8 80 80zm0-96H496c-44.2 0-80-35.8-80-80V304h16c44.2 0 80 35.8 80 80v16zm0-128v16H496c-44.2 0-80-35.8-80-80V192h16c44.2 0 80 35.8 80 80zM528 32c13.3 0 24 10.7 24 24V160c0 13.3-10.7 24-24 24s-24-10.7-24-24V56c0-13.3 10.7-24 24-24zm96 64v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V96c0-13.3 10.7-24 24-24s24 10.7 24 24zM456 72c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V96c0-13.3 10.7-24 24-24z" /></svg>
                        </div>
                    </motion.div>
                    <motion.div  variants={FadeIn('right', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.4 }}  className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="sm:w-22 sm:h-22 h-10 w-10 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M298.9 267a48.4 48.4 0 0 0 -24.4-6.2q-19.8 0-33.4 13.3t-13.6 33.4q0 21.2 13.3 34.6t33.4 13.4q20.5 0 34.1-13.8T322 307.5A47.1 47.1 0 0 0 315.9 284 44.1 44.1 0 0 0 298.9 267zM0 32V480H448V32zM374.7 405.3h-53.1V381.4h-.7q-15.8 26.2-55.8 26.2-27.6 0-48.9-13.1a88.3 88.3 0 0 1 -32.9-35.8q-11.6-22.7-11.6-50.9 0-27.6 11.8-50.2a89.9 89.9 0 0 1 32.9-35.8q21.2-13.1 47.7-13.1a80.9 80.9 0 0 1 29.7 5.2q13.3 5.2 25 17V153l55.8-12.1z" /></svg>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-2xl text-[#034EA2] font-bold mb-2">
                                Dairy
                            </h2>
                            <p className="leading-relaxed text-base">
                                Milk & Dairy Products Processors, Distributors, Importers,Exporters
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
            </section>
        </>
    );
}

export default Serve;
