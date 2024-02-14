'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { motion } from 'framer-motion'
import { FadeIn } from "../../../variants"
const FeedBack = () => {
    return (
        <section className="bg-soft_green-secondary">
            <div className="relative flex flex-col min-w-0 break-words w-full  shadow-lg rounded-lg border-0">
                <motion.div variants={FadeIn('down', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}

                    className="rounded-t  mb-0 px-6 py-6">
                    <div className="mb-6 md:mb-16">
                        <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 md:mb-3 lg:text-3xl">
                            FeedBack
                        </h2>
                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                            Please send your queries, messages and comments by filling out this simple form below.
                        </p>
                    </div>
                </motion.div>
                <div
                    className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                        <motion.div variants={FadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }} className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">Costumer</Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">Name Of Product</Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">Time Required to pull down the temprature per/ hr:</Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">


                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">Time Required to pull down the temprature per/ Day:</Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={FadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }} className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">

                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">Product Temprature when loaded:</Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2"> How Loaded:</Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">

                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2"> Product Input Weight per / hr:</Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">


                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">Postal Code</Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={FadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }} className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">

                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">Address</Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                        </motion.div>
                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                        <h4 className="mb-2 px-10 text-lg font-bold py-5 text-gray-800 md:mb-3 lg:text-lg">
                            Cold/ Freezer Store Dimension:
                        </h4>
                        <motion.div variants={FadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }} className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">  Out Side Length:</Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />


                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Width:
                                    </Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Height:
                                    </Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={FadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }} className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Out Side Length:
                                    </Label>  <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Hinged:
                                    </Label>
                                    <div className="mt-6 ">
                                        <Input type="radio" className="h-6 w-6" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Sliding:
                                    </Label>
                                    <div className="mt-6 ">
                                        <Input type="radio" className="h-6 w-6" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={FadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }} className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Forks Lift being used inside:
                                    </Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Yes:
                                    </Label>
                                    <div className="mt-6 ">
                                        <Input type="radio" className="h-6 w-6" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        No:
                                    </Label>
                                    <div className="mt-6 ">
                                        <Input type="radio" className="h-6 w-6" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={FadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }} className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Any electrical applications being used:
                                    </Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Yes:
                                    </Label>
                                    <div className="mt-6 ">
                                        <Input type="radio" className="h-6 w-6" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        No:
                                    </Label>

                                    <div className="mt-6 ">
                                        <Input type="radio" className="h-6 w-6" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={FadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }} className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mt-2 mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Number of doors opening day/ per hr:
                                    </Label> <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mt-2 mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Number of person working inside the store:
                                    </Label> <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-sm text-[#034EA2] font-bold mb-2">
                                        Is the cold/ Freezer store being planned inside the building then provide dimensions or drawings:
                                    </Label> <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={FadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }} className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Any other information which you can provide:
                                    </Label> <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={FadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }} className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mt-2 mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Date:
                                    </Label><Input className=" border-[#00AEEF] bg-[#f2fbfc]" type='date' />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mt-2 mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Cantact Person:
                                    </Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" type="number" />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mt-2 mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Phone:
                                    </Label> <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={FadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }} className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mt-2 mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Fax:
                                    </Label> <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mt-2 mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        Product Temp. required:
                                    </Label>
                                    <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mt-2 mb-3">
                                    <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                        How Packed:
                                    </Label> <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                                </div>
                            </div>
                        </motion.div>
                        <div className="w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">
                                <Label htmlFor="" className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2">
                                    Total Weight of Product to be stored:
                                </Label>
                                <Input className=" border-[#00AEEF] bg-[#f2fbfc]" />
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-between">
                        
                    <div className="w-full h-40 flex items-center justify-evenly cursor-pointer">
                            <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-blue-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:bg-soft_green bg-[#00AEEF] group-hover:h-full" />
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        fill="none"
                                        className="w-5 h-5 text-green-400"
                                    >
                                        <path
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                                <span className="absolute left-0 pl-2.5  -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        fill="none"
                                        className="w-5 h-5 text-green-400"
                                    >
                                        <path
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black  dark:group-hover:text-gray-200">
                                    Send
                                </span>
                            </div>
                        </div>
                        
                        <div className="w-full h-40 flex items-center justify-evenly cursor-pointer">
                            <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-blue-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:bg-soft_green bg-[#00AEEF] group-hover:h-full" />
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        fill="none"
                                        className="w-5 h-5 text-green-400"
                                    >
                                        <path
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                                <span className="absolute left-0 pl-2.5  -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        fill="none"
                                        className="w-5 h-5 text-green-400"
                                    >
                                        <path
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black  dark:group-hover:text-gray-200">
                                    Clear
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}
export default FeedBack