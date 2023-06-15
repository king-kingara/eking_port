import React from 'react'
import LineGradient from '../components/LineGradient'
import { motion } from "framer-motion";
import { GrAnalytics, GrServices } from 'react-icons/gr'
import { AiOutlineArrowRight, AiOutlineDesktop, AiOutlineRobot, AiOutlineRocket, AiOutlineCloseCircle, AiOutlineInteraction } from 'react-icons/ai';
import { BiCheckCircle, BiCube } from 'react-icons/bi';
import { BsGraphUp } from 'react-icons/bs';
import { GiSpiderWeb, GiArchiveResearch, GiWireCoil, GiExpand } from 'react-icons/gi';
import { HiDevicePhoneMobile, HiOutlineServerStack } from 'react-icons/hi2'
import { MdArchitecture, MdDeveloperMode, MdOutlineDesignServices, MdOutlineEngineering, MdOutlineMonitorHeart } from 'react-icons/md';
import { RiArtboardLine } from 'react-icons/ri'
import { TbMathIntegrals } from 'react-icons/tb';
import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import codeImg from '../assets/code-wallpaper.jpg';
import { FaCode, FaDatabase, FaDev } from 'react-icons/fa';

const Services = () => {
    const [toggleState, setToggleState] = useState();

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const isAboveLarge = useMediaQuery("(min-width: 1060px)");

    return (
        <section className='pt-10 pb-24' id='services'>
            <div className=''>
                <div className="md:flex md:justify-between md:gap-16 md:mb-16 mt-14">
                    <motion.div
                        className="md:w-1/3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="font-playfair font-semibold text-4xl mb-5">
                            <span className="text-[#f5cc8a]">SERVICES</span>
                        </p>
                        <LineGradient width="w-1/3" />
                    </motion.div>


                    <div className="mt-16 md:mt-0">
                        {isAboveLarge ? (
                            <div
                                className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-[720px] before:h-72 before:border-2 before:border-[#f5cc8a] before:z-[-1]"
                            >
                                <img
                                    alt="skills"
                                    className="w-screen h-64 object-cover object-top z-10"
                                    src={codeImg}
                                />
                            </div>
                        ) : (
                            <img alt="skills" className="w-[620px] h-64 object-cover object-top z-10" src={codeImg} />
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-x-7 gap-y-7 mt-8 services__container">
                    <motion.div
                        className="relative border-2 border-solid border-deep-blue shadow-lg bg-[#f5cc8a] rounded-xl text-deep-blue p-4 services__content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50, x: -50 },
                            visible: { opacity: 1, y: 0, x: 0 },
                        }}
                    >
                        <div>
                            <RiArtboardLine className='text-xl md:text-lg' />
                            <h3 className="text-4xl mb-4 mt-2 font-medium font-playfair justify-center sm:justify-start flex services__title">UI & UX<br /> Design</h3>
                        </div>

                        <span
                            className="text-base font-opensans inline-flex items-center gap-x-1 cursor-pointer services__button"
                            onClick={() => toggleTab(1)}
                        >
                            <span className='transition duration-300 hover:scale-105 hover:ease-in hover:font-semibold'>View More </span><AiOutlineArrowRight className="text-lg transition duration-300 hover:ease-in hover:scale-105 hover:font-bold services__button-icon" />
                        </span>

                        <div
                            className={toggleState === 1 ?
                                "fixed top-0 left-0 right-0 bottom-0 bg-deep-blue flex z-40 justify-center items-center p-[0_1rem] bg-opacity-50 opacity-100 transition duration-300 ease-in-out visible services__modal active-modal"
                                :
                                "fixed top-0 left-0 right-0 bottom-0 bg-deep-blue z-20 flex justify-center items-center p-[0_1rem] opacity-0 invisible transition duration-300 ease-in-out services__modal"}
                        >
                            <div className="w-[600px] relative bg-[#f5cc8a] p-[3.5rem_3.5rem_2.5rem] rounded-3xl services__modal-content">
                                <AiOutlineCloseCircle
                                    onClick={() => toggleTab(0)}
                                    className='absolute top-8 right-8 text-deep-blue cursor-pointer hover:scale-110 active:scale-90 transition duration-500 service__modal-close'
                                />

                                <h3 className="text-center text-2xl font-bold p-[0_3.5rem] mb-4 font-playfair services__modal-title">UI & UX Design</h3>
                                <p className="hidden xs:block text-center text-sm p-[0_3.5rem] mb-8 services__modal-description">
                                I create <span className='font-semibold tracking-wide'>User-Centric Designs</span> that enhance user satisfaction, engagement, and accomplish the business objectives of your digital product.
                                <br />
                                </p>

                                <div className='grid grid-cols-2 gap-6'>
                                    <div>
                                        <ul className="grid gap-y-3
                                 services__modal-services ">
                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <GiArchiveResearch
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    User Research
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <GiWireCoil
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Wireframes
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <BiCube
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Prototyping
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <AiOutlineInteraction
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Interaction Design
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul className="grid gap-y-3
                                 services__modal-services ">
                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <MdArchitecture
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Information Architecture
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <BiCheckCircle
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Usability Testing
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <MdOutlineDesignServices
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Visual Design
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <AiOutlineDesktop
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Responsive Design
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    <motion.div
                        className="relative border-2 border-solid border-deep-blue shadow-lg bg-[#f5cc8a] rounded-xl text-deep-blue p-4 services__content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50, x: -50 },
                            visible: { opacity: 1, y: 0, x: 0 },
                        }}
                    >
                        <div>
                            <FaDev className='text-xl md:text-lg' />
                            <h3 className="text-4xl mb-4 mt-2 font-medium font-playfair justify-center sm:justify-start flex services__title">Mobile & Web <br /> Development</h3>
                        </div>

                        <span
                            className="text-base font-opensans inline-flex items-center gap-x-1 cursor-pointer services__button"
                            onClick={() => toggleTab(2)}
                        >
                            <span className='transition duration-300 hover:scale-105 hover:ease-in hover:font-semibold'>View More </span><AiOutlineArrowRight className="text-lg transition duration-300 hover:ease-in hover:scale-105 hover:font-bold services__button-icon" />
                        </span>

                        <div
                            className={toggleState === 2 ?
                                "fixed top-0 left-0 right-0 bottom-0 bg-deep-blue flex z-40 justify-center items-center p-[0_1rem] bg-opacity-50 opacity-100 transition duration-300 ease-in-out visible services__modal active-modal"
                                :
                                "fixed top-0 left-0 right-0 bottom-0 bg-deep-blue z-20 flex justify-center items-center p-[0_1rem] opacity-0 invisible transition duration-300 ease-in-out services__modal"}
                        >
                            <div className="w-[600px] relative bg-[#f5cc8a] p-[3.5rem_3.5rem_2.5rem] rounded-3xl services__modal-content">
                                <AiOutlineCloseCircle
                                    onClick={() => toggleTab(0)}
                                    className='absolute top-8 right-8 text-deep-blue cursor-pointer hover:scale-110 active:scale-90 transition duration-500 service__modal-close'
                                />

                                <h3 className="text-center text-2xl p-[0_3.5rem] mb-4 font-playfair font-bold services__modal-title">Mobile & Web Development</h3>
                                <p className="hidden xs:block text-center text-sm p-[0_3.5rem] mb-8 services__modal-description">
                                Skills honed in both <span className='font-semibold tracking-wide'>Full-Stack Mobile & Web development </span>ensures I deliver reliable, scalable, and user-friendly digital solution that meet the client's objectives and provide a positive user experience.
                                <br />
                                </p>

                                <div className='grid grid-cols-2 gap-6'>
                                    <div>
                                        <ul className="grid gap-y-3
                                 services__modal-services ">
                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <GrAnalytics
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Requirement Analysis
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <FaCode
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Front-End Development
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <HiOutlineServerStack
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Back-End Development
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <MdDeveloperMode
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Mobile Development
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul className="grid gap-y-3
                                 services__modal-services ">
                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <BiCheckCircle
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Testing & Quality Assurance
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <AiOutlineRocket
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Deployment & Maintenance
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <HiDevicePhoneMobile
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Cross-Platform Development
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <GiSpiderWeb
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Web Development
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </motion.div>

                    <motion.div
                        className="relative border-2 border-solid border-deep-blue shadow-lg bg-[#f5cc8a] rounded-xl text-deep-blue p-4 services__content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50, x: -50 },
                            visible: { opacity: 1, y: 0, x: 0 },
                        }}
                    >
                        <div>
                            <AiOutlineRobot className='text-xl md:text-lg' />
                            <h3 className="text-4xl mb-4 mt-2 font-medium font-playfair justify-center sm:justify-start flex services__title">Machine <br />Learning</h3>
                        </div>

                        <span
                            className="text-base font-opensans inline-flex items-center gap-x-1 cursor-pointer services__button"
                            onClick={() => toggleTab(3)}
                        >
                            <span className='transition duration-300 hover:scale-105 hover:ease-in hover:font-semibold'>View More </span><AiOutlineArrowRight className="text-lg transition duration-300 hover:ease-in hover:scale-105 hover:font-bold services__button-icon" />
                        </span>

                        <div
                            className={toggleState === 3 ?
                                "fixed top-0 left-0 right-0 bottom-0 bg-deep-blue flex z-40 justify-center items-center p-[0_1rem] bg-opacity-50 opacity-100 transition duration-300 ease-in-out visible services__modal active-modal"
                                :
                                "fixed top-0 left-0 right-0 bottom-0 bg-deep-blue z-20 flex justify-center items-center p-[0_1rem] opacity-0 invisible overflow-scroll transition duration-300 ease-in-out services__modal"}
                        >
                            <div className="w-[600px] relative bg-[#f5cc8a] p-[3.5rem_3.5rem_2.5rem] rounded-3xl services__modal-content">
                                <AiOutlineCloseCircle
                                    onClick={() => toggleTab(0)}
                                    className='absolute top-8 right-8 text-deep-blue cursor-pointer  hover:scale-110 active:scale-90 transition duration-500 service__modal-close'
                                />

                                <h3 className="text-center text-2xl p-[0_3.5rem] mb-4 font-playfair font-bold services__modal-title">Machine Learning</h3>
                                <p className="hidden xs:block text-center text-sm p-[0_3.5rem] mb-8 services__modal-description">
                                I provide ML services that primarily focus on leveraging data modeling and advanced algorithms to build intelligent systems that can learn, adapt, and make predictions or decisions, in various fields. <span className='hidden ss:inline'>These fields include:</span> <br /> <span className='font-playfair font-semibold text-base text-deep-blue hidden ss:flex'>Computer Vision, Natural Language Processing, Generative Learning & Reinforcement Learning.</span>
                                <br />
                                </p>

                                <div className='grid grid-cols-2 gap-6'>
                                    <div>
                                        <ul className="grid gap-y-3
                                 services__modal-services ">
                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <FaDatabase
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Data Collection & Preparation
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <GrServices
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Feature Engineering
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <MdOutlineEngineering
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Model Development
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <BsGraphUp
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Model Eval & Optimization
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul className="grid gap-y-3
                                 services__modal-services ">
                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <AiOutlineRocket
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Model Deployment
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <GiExpand
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Scalability & Performance
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <MdOutlineMonitorHeart
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Monitoring & Maintenance
                                                </p>
                                            </li>

                                            <li className=" flex items-center gap-x-2 services__modal-service">
                                                <TbMathIntegrals
                                                    className='text-deep-blue text-lg services__modal-icon'
                                                />
                                                <p className="text-sm services__modal-info">
                                                    Continuous Integration
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Services