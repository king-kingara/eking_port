import { BiBadgeCheck } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Frontend = () => {
    return (
        <motion.div
            className="bg-[#f5cc8a] border-4 border-solid border-deep-blue p-[2rem_4rem] text-deep-blue rounded-3xl skills__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <h3 className="text-xl underline underline-offset-8 font-bold font-playfair text-center mb-6 skills__title">Front-End Development</h3>

            <div className="flex justify-center gap-x-10 skills__box">
                <div className="grid items-start gap-y-4 skills__group">
                    <div className="flex gap-x-2 skills__data">
                        <BiBadgeCheck className='text-lg' />

                        <div>
                            <h3 className="text-lg font-semibold font-playfair leading-4 skills__name">HTML</h3>
                            <span className="text-xs skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="flex gap-x-2 skills__data">
                        <BiBadgeCheck className='text-lg' />

                        <div>
                            <h3 className="text-lg font-semibold font-playfair leading-4 skills__name">CSS</h3>
                            <span className="text-xs skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="flex gap-x-2 skills__data">
                        <BiBadgeCheck className='text-lg' />

                        <div>
                            <h3 className="text-lg font-semibold font-playfair leading-4 skills__name">Bootstrap & TailwindCSS</h3>
                            <span className="text-xs skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="flex gap-x-2 skills__data">
                        <BiBadgeCheck className='text-lg' />

                        <div>
                            <h3 className="text-lg font-semibold font-playfair leading-4 skills__name">
                                Javascript & Typescript
                            </h3>
                            <span className="text-xs skills__level">Intermediated</span>
                        </div>
                    </div>

                </div>

                <div className="grid items-start gap-y-4 skills__group">
                    <div className="flex gap-x-2 skills__data">
                        <BiBadgeCheck className='text-lg' />

                        <div>
                            <h3 className="text-lg font-semibold font-playfair leading-4 skills__name">React & Next JS</h3>
                            <span className="text-xs skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="flex gap-x-2 skills__data">
                        <BiBadgeCheck className='text-lg' />

                        <div>
                            <h3 className="text-lg font-semibold font-playfair leading-4 skills__name">
                                React Native & Flutter
                            </h3>
                            <span className="text-xs skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="flex gap-x-2 skills__data">
                        <BiBadgeCheck className='text-lg' />

                        <div>
                            <h3 className="text-lg font-semibold font-playfair leading-4 skills__name">
                                Django & Laravel
                            </h3>
                            <span className="text-xs skills__level">Intermediated</span>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default Frontend