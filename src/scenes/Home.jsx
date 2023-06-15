import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ServerImg from "../assets/elec-server.jpg";
import ProfileImg from "../assets/gan_profile.JPG";
import Typewriter from 'typewriter-effect';
import SocialMediaIcons from '../components/SocialMediaIcons';

const Home = ({ setSelectedPage }) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <section
            className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 md:pt-28"
            id="home"
        >
            {/* FIDGET */}
            {isAboveLarge ?
                <>
                    <motion.div
                        className='z-0 w-20 h-20 absolute rounded-xl top-28 right-[7rem] border-2 border-[#f5cc8a]'
                        animate={{
                            scale: [1, 2.5, 2, 1, 1],
                            rotate: [0, 45, 180, 125, 0],
                            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    />
                    <motion.div
                        className="bg-[#f5cc8a] w-16 h-16 right-[6rem] overflow-hidden top-32 rounded justify-end absolute items-end"
                        animate={{
                            opacity: [0.90, 0.75, 0.75, 1, 1],
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 180, 180, 0],
                            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    />
                </>
                : ""}
            {/* IMAGE SECTION */}
            <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                {isAboveLarge ? (
                    <>
                        <div
                            className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-[#f5cc8a] before:z-[-1] hover:transition hover:duration-500 hover:ease-in hover:scale-105 hover:rotate-2'>
                            <img
                                alt='profile'
                                className='hover:filter hover:opacity-90 hover:saturate-150 contrast-125 z-10 transition duration-500 object-cover object-right border-solid rounded-3xl'
                                src={ServerImg}
                            />
                        </div>
                    </>

                ) : (
                    <div>
                        <img
                            alt="profile"
                            className="z-10 w-[12rem] h-[12rem] xs:w-[16rem] xs:h-[16rem] ss:w-[20rem] ss:h-[20rem] object-cover object-bottom border-4 border-solid border-[#f5cc8a] rounded-full max-w-[400px] md:max-w-[600px]"
                            src={ProfileImg}
                        />
                    </div>
                )}
            </div>

            {/* MAIN TEXT */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                {/* HEADINGS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-5xl sm:text-6xl md:text-4xl lg:text-5xl ll:text-6xl xl:text-6xl font-playfair z-10 text-center text-[#f5cc8a] leading-snug font-bold md:text-start">
                        Eddie <span className='xs:hidden'> {" "} <br /> </span> <span
                            className="text-deep-blue bg-[#f5cc8a]  relative px-1 xs:relative xs:text-deep-blue font-semibold z-20 xs:before:px-1 xs:before:bg-[#180c02] xs:bg-[#f5cc8a] ss:px-4 border-0 border-solid rounded-mds tracking-wide before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
                        >
                            King'ara
                        </span>
                    </p>

                    <p className="mt-10 mb-7 text-xl font-semibold font-playfair text-center md:text-start text-[#f5cc8a]">
                        Creative User Interface Designs & <span className='text-white'>An Immersive User Experiences For:</span>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('<span class="text-[#9be0ee]">Mobile App Development</span>')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString('<span class="text-[#bfec84]">Web Development</span>')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString('<span class="text-[#efd465]">End-To-End Machine Leaning Dev</span>')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .start()
                            }}
                        />
                    </p>
                </motion.div>

                {/* CALL TO ACTIONS */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <AnchorLink
                        className="bg-[#f5cc8a] text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-[#180c02] hover:text-[#f5cc9a] transition duration-500"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        Contact Me
                    </AnchorLink>
                    <AnchorLink
                        className="rounded-r-sm bg-[#f5cc8a] py-0.5 pr-0.5"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        <div className="bg-deep-blue text-white hover:bg-[#4d4d67] hover:text-[#180c02] hover:font-semibold transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
                            Let's talk.
                        </div>
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start md:ml-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    {/* Social Media Icons */}
                    <SocialMediaIcons />

                </motion.div>
            </div>
        </section >
    )
}

export default Home