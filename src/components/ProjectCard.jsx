import React, { useEffect, useState } from 'react'
import { projectsData, projectsNav } from '../assets/data/project-data';
import { motion } from "framer-motion";
import ProjectItems from './ProjectItems';


const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const ProjectCard = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name
            });

            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    }

    return (
        <>
            <motion.div
                className="flex justify-center items-center gap-x-3 mb-8 work__filters"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {projectsNav.map((item, index) => {
                    return (
                        <span
                            onClick={(e) => {
                                handleClick(e, index)
                            }}
                            key={index}
                            className={`${active == index ? 'bg-[#180c02] text-[#f5cc8a] hover:bg-[#f5cc8a] hover:text-[#180c02] hover:scale-105 active-work' : "text-[#f5cc8a] hover:underline hover:underline-offset-2 hover:scale-105 hover:text-[#f5cc8a]"} cursor-pointer p-[0.25rem_0.75rem] font-medium rounded-lg capitalize transition duration-300 ease-in work__item`}
                        >
                            {item.name}
                        </span>
                    )
                })}
            </motion.div>

            <div className="flex justify-center">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 ll:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div
                        className="flex justify-center text-center items-center p-10 bg-[#f5cc85] text-deep-blue
              max-w-[400px] max-h-[400px] xs:h-[400px] xs:w-[400px] text-2xl font-playfair font-bold"
                    >
                        <p>
                            <span className='tracking-widest  scale-110'>AESTHETICS</span> <br /> &  <br /> <span className='tracking-widest  scale-110'>EFFICIENCY</span>
                        </p>
                    </div>
                    {projects.map((item) => {
                        return (
                            <ProjectItems key={item.id} item={item} />
                        )
                    })}

                    <div
                        className="flex justify-center text-center items-center p-10 bg-[#180c02] text-[#f5cc8a]
              max-w-[400px] max-h-[400px] xs:h-[400px] xs:w-[400px] text-2xl font-playfair font-bold"
                    >
                        <p>
                            <span className='tracking-widest text-white scale-110' >IMAGINATION</span> IS EVERYTHING
                        </p>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default ProjectCard