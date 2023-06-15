import React from 'react'
import { FiAward } from 'react-icons/fi'
import { BiBriefcase, BiSupport } from 'react-icons/bi'

const Info = () => {
  return (
    <div className="grid grid-cols-1 ss:grid-cols-3 gap-2 mb-8  about__info">
        <div className="bg-[#f5cc8a] border-4 border-solid border-deep-blue rounded-xl text-center p-[1rem_1.25rem] about__box">
            <FiAward className='text-3xl text-deep-blue mb-2 about__icon' />
            <h3 className="text-lg text-deep-blue font-playfair font-bold about__title">Experience</h3>
            <span className="text-3xl font-playfair font-semibold text-deep-blue about__subtitle">2+</span> <br />
            <span className="text-sm text-deep-blue about__subtitle">Years Working</span>
        </div>

        <div className="bg-[#f5cc8a] border-4 border-solid border-deep-blue rounded-xl text-center p-[1rem_1.25rem] about__box">
            <BiBriefcase className='text-3xl text-deep-blue mb-2 about__icon' />
            <h3 className="text-lg text-deep-blue font-playfair font-bold about__title">Completed</h3>
            <span className="text-3xl font-playfair font-semibold text-deep-blue about__subtitle">14+</span> <br />
            <span className="text-sm text-deep-blue about__subtitle">Projects</span>
        </div>

        <div className="bg-[#f5cc8a] border-4 border-solid border-deep-blue rounded-xl text-center p-[1rem_1.25rem] about__box">
            <BiSupport className='text-2xl text-deep-blue mb-2 about__icon' />
            <h3 className="text-lg text-deep-blue font-playfair font-bold about__title">Support</h3>
            <span className="text-sm text-deep-blue about__subtitle">Online </span> <br />
            <span className="text-3xl font-playfair font-semibold text-deep-blue about__subtitle">24/7</span>
        </div>
    </div>
  )
}

export default Info