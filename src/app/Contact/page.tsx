'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { motion } from 'framer-motion'
import { FadeIn } from "../../../variants"
import Header from "@/components/Header"
import Hero from "@/components/Hero"

const Contact = () => {
  return (
    <div>
      <Header/>
      <Hero/>
    <div className="bg-soft_green-secondary">
      <div className="rounded-t mb-0 px-6 py-6">
        <div>
          <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 md:mb-3 lg:text-3xl">
            Contact
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Please send your queries, messages and comments by filling out this simple form below.
          </p>
        </div>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <motion.div variants={FadeIn('down', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }} className="lg:w-1/2 xl:h-[700px] md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute rounded-xl inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.601711556176!2d67.14968948677391!3d24.80908829050432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33aef5acf2e67%3A0xf1437af2d522151c!2sKoldware%20Industries%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1706438000368!5m2!1sen!2sus"
            />
            <motion.div variants={FadeIn('down', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }} className="bg-white relative rounded-xl flex flex-wrap py-6 shadow-md">
              <div className="lg:w-1/2  px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  <b>Factory</b>
                  <br />
                  Plot No. E-4 , Sector 50/C, Korangi, Karachi, Pakistan
                </p>
                <p className="mt-1">
                  <b>Lahore Office</b>
                  <br /> 5th Floor, Pearl Tower, 168-A Commercial Sector C, Gul Mohar Block, Bahria Town, Lahore 53720, Pakistan.
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a href="mailto:info@koldwareindustries.com" className="text-blue-500 leading-relaxed">info@koldwareindustries.com<br />helpdesk@koldwareindustries.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  <b>PHONE</b>
                </h2>
                <p className="leading-relaxed">
                  <b>Lahore Office</b>
                  <br /> +92 (0)42 37862602,  03-35841659 <br />
                  <b>Factory</b>
                  <br /> +92-21-36677024 , +92-21-36677025</p>
              </div>
            </motion.div>
          </motion.div>
          <div className="xl:w-1/2 py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              {/* form - start */}
              <motion.form variants={FadeIn('down', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor="first-name"
                  className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2"
                  >
                    First name*
                  </Label>
                  <Input className="  bg-[#f2fbfc]"/>
                </div>
                <div>
                  <Label
                    htmlFor="last-name"
                    className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2"
                    >
                    Last name*
                  </Label>
                  <Input className="  bg-[#f2fbfc]"/>
                </div>
                <div className="sm:col-span-2">
                  <Label
                    htmlFor="company"
                    className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2"
                    >
                    Company
                  </Label>
                  <Input className=" bg-[#f2fbfc]"/>
                </div>
                <div className="sm:col-span-2">
                  <Label
                    htmlFor="email"
                    className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2"
                    >
                    Email*
                  </Label>
                  <Input className=" bg-[#f2fbfc]"/>
                </div>
                <div className="sm:col-span-2">
                  <Label
                    htmlFor="subject"
                    className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2"
                    >
                    Subject*
                  </Label>
                  <Input className=" bg-[#f2fbfc]"/>
                </div>
                <div className="sm:col-span-2">
                  <Label
                    htmlFor="message"
                  className="uppercase text-blueGray-600 text-[#034EA2] font-bold mb-2"
                  >
                    Message*
                  </Label>
                 <Textarea className=" bg-[#f2fbfc] rounded-xl"/>
                </div>
                <div className=" sm:col-span-2">
                  <div className="w-full h-40  cursor-pointer">
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

                </div>

              </motion.form>
              {/* form - end */}
            </div>
          </div>

        </div>
      </section>
    </div>
    </div>
  )
}

export default Contact