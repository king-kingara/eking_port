import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import codeImg from '../assets/happy-code-guy.jpg'
import Frontend from "../components/skillsCard/Frontend";
import Backend from "../components/skillsCard/Backend";
import ML from "../components/skillsCard/ML";

const Skills = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");

    return (
        <section className="pt-10 pb-24" id="skills">
            {/* HEADERS & IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-24">
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
                    <p className="text-center md:text-left font-playfair font-semibold text-4xl mb-5">
                        <span className="text-[#f5cc8a]">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    {!isAboveLarge ? (
                        <p className="mt-10 mb-7 text-[#f5cc8a] text-center font-playfair text-3xl font-semibold tracking-widest">
                            OVERVIEW
                        </p>
                    ) : ""}

                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveLarge ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-[720px] before:h-72 before:border-2 before:border-[#f5cc8a] before:z-[-1]"
                        >
                            <img
                                alt="skills"
                                className="w-[720px] h-64 object-cover object-top z-10"
                                src={codeImg}
                            />
                        </div>
                    ) : (
                        <div className="justify-center item-center flex">
                            <img alt="skills" className="max-w-[250px] xs:w-[620px] h-64 object-cover object-top z-10" src={codeImg} />
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-12 mt-4 justify-center skills__container ">
                <Frontend />
                <Backend />
                <ML />
            </div>
        </section>
    )
}

export default Skills