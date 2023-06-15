import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const Portfolio = () => {
  return (
    <section id="projects" className='pt-24 pb-24'>
        {/* HEADINGS */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-bold text-4xl">
                        <span className="text-[#f5cc8a]">PRO</span><span className="text-white rounded-r-lg">JECTS</span>
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10 text-[#f5cc8a] font-playfair text-3xl font-semibold tracking-widest">
                    OVERVIEW
                </p>
            </motion.div>

            {/* PROJECTS */}
            <ProjectCard />

    </section>
  )
}

export default Portfolio