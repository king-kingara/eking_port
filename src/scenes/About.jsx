import React from 'react'
import LineGradient from '../components/LineGradient'
import AboutProfiImg from '../assets/gan_profile.JPG'
import { motion } from 'framer-motion';

import Info from '../components/Info';

const About = () => {
    return (
        <section className="pt-10 pb-24 section" id="about">
            <motion.div
                className="justify-center text-center md:flex md:justify-between md:gap-16 mt-14"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <p className="font-playfair font-semibold text-[#f5cc8a] text-4xl mb-5">
                    ABOUT <span className="text-[#180c02] z-50 bg-[#f5cc8a] px-2 font-bold border-0 border-solid rounded-md ">ME</span>
                </p>
                <LineGradient width="w-1/3" />
            </motion.div>

            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 items-center md:gap-x-16 about__container container">
                <motion.div
                    className='justify-center item-center flex relative z-0 xs:ml-20 before:absolute md:before:-top-10 md:before:-left-14 before:-top-2 before:left-24 before:rounded-3xl before:w-5/6 xs:before:w-5/6 before:max-w-[220px] md:before:max-w-[300px] before:h-[90%] border-none xs:before:border-2 before:border-[#f5cc8a] before:z-[-1] mt-8'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2 ,duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <img src={AboutProfiImg} alt="" className="max-w-[220px] md:max-w-none xs:w-[220px] md:w-[330px] rounded-3xl border-2 border-solid border-[#f5cc8a] cursor-pointer hover:filter hover:scale-105 hover:ease-in hover:saturate-200 z-10 transition duration-500 about__img" />
                </motion.div>

                <motion.div
                    className="text-center about__data"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50, x: 50 },
                        visible: { opacity: 1, y: 0, x: 0 },
                    }}
                >
                    <Info />

                    <div>
                        <div className='border-[#f5cc8a] border-none border-2 rounded-xl'>
                            <p className="md:p-[0_4rem_0_0] mb-10 text-[#f5cc8a] about__description" >
                                I am an experienced Full-Stack Web & Mobile Developer  with a strong track record of delivering high-quality projects. I have a diverse skill set and expertise in both Front-End and Back-End Development, letting me to create seamless User Experiences across various platforms.
                                <br /> <br />
                                With the broad experience I have attained from building a variety of applications that range from Logistics  to A.I. centric applications, I relish new challenges and deliver robust solutions. Furthermore, I stay up to date with the latest technologies in the industry.
                            </p>
                        </div>
                    </div>

                    <a href="#contact" className="mt-4 inline-flex items-center bg-[#f5cc8a] text-deep-blue p-[1.25rem_2rem] cursor-pointer rounded-2xl font-semibold hover:ease-in hover:scale-110 hover:border-[#f5cc8a] hover:border-2 hover:border-solid hover:bg-[#180c02] hover:text-[#f4d39d] active:scale-90 ease-in-out transition duration-500 button button__flex">
                        IDEA?
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default About