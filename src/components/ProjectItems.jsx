import React, { useState } from 'react'
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { TbHandClick } from 'react-icons/tb';

const ProjectItems = ({ item }) => {
    const [toggleState, setToggleState] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const carousel = item.imgCarousel;

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? carousel.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === carousel.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const overlayStyles = `absolute h-full w-full cursor-pointer opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

    const leftArrow = `hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl z-10 rounded-full p-2 opacity-20 shadow-md hover:opacity-70 hover:shadow-xl hover:scale-105 active:scale-75 hover:duration-500 transition ease-in-out bg-black text-white cursor-pointer`;

    const rightArrow = `hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl z-10 rounded-full p-2 opacity-20 shadow-md hover:opacity-70 hover:shadow-xl hover:scale-105 active:scale-75 hover:duration-500 transition ease-in-out bg-black text-white cursor-pointer`;

    const closeButton = `absolute top-4 right-4 md:top-24 md:-right-24 text-[#180c02] font-bold text-2xl cursor-pointer hover:scale-125 active:scale-90 transition duration-500 ease-in-out bg-[#f5cc8a] border border-solid rounded-full hover:bg-[#180c02] hover:text-[#f5cc8a] hover:border-[#180c02] service__modal-close`;

    return (
        <>
            {/* TOGGLE OFF */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="relative"
            >
                <div
                    className={overlayStyles}
                    onClick={() => toggleTab(item.id)}
                >
                    <p className="text-2xl font-semibold font-playfair">{item.title}</p>
                    <p className="mt-7 text-ellipsis overflow-hidden">
                        {item.summary}
                    </p>
                    
                    <div className='absolute bottom-7 right-7 text-lg'>
                        <TbHandClick />
                        <p className='text-xs underline underline-offset-2 font-light tracking-widest'>Click On Screen</p>
                    </div>
                </div>
                <img className='object-cover hover:scale-110 hover:w-auto hover:h-auto object-right-top w-[400px] h-[400px]' src={item.image} alt={item.name} />


            </motion.div>

            {/* TOGGLE ON */}
            <div
                className={toggleState === (item.id) ?
                    "fixed top-0 left-0 right-0 bottom-0 bg-[#070718] flex z-50 justify-center items-center p-[0_1rem] bg-opacity-60 opacity-100 transition duration-3 00 ease-in-out visible services__modal active-modal"
                    :
                    "fixed top-0 left-0 right-0 bottom-0 bg-deep-blue z-20 flex justify-center items-center p-[0_1rem] opacity-0 invisible transition duration-500 ease-in-out services__modal"
                }
            >
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="relative"
                    >
                        <AiOutlineCloseCircle
                            onClick={() => toggleTab(0)}
                            className={closeButton}
                        />
                        {/* IMAGE CAROUSEL */}
                        <div
                        >
                            <img className='w-[600px] h-[600px] md:pt-4 md:w-[680px] md:h-[680px] object-contain' src={item.imgCarousel[currentIndex]} alt={item.name} />

                            {/* Left Arrow */}
                            <div className={leftArrow}>
                                <BsChevronCompactLeft onClick={prevSlide} size={30} />
                            </div>

                            {/* Right Arrow */}
                            <div className={rightArrow}>
                                <BsChevronCompactRight onClick={nextSlide} size={30} />
                            </div>

                            {/* DotGroups */}
                            <div className='flex top-4 justify-center py-2'>
                                {carousel.map((slide, slideIndex) => (
                                    <div
                                        key={slideIndex}
                                        onClick={() => goToSlide(slideIndex)}
                                        className={currentIndex === slideIndex ? 'opacity-100 text-3xl cursor-pointer scale-125 text-[#f5cc8a] hover:text-[#f5cc8a] hover:scale-150 transition duration-200 ease-in-out active:scale-105': 'text-3xl cursor-pointer  opacity-75 hover:scale-125 active:scale-90 transition duration-200 ease-in-out'}
                                    >
                                        <RxDotFilled />
                                    </div>
                                ))}
                                </div>
                        </div>
                    </motion.div>
                </div>
            </div >
        </>
    )
}

export default ProjectItems