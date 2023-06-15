import React from 'react'
import { BiBadgeCheck } from 'react-icons/bi';
import { motion } from 'framer-motion'

const ML = () => {
  return (
    <motion.div
      className="bg-[#f5cc8a] border-4 border-solid border-deep-blue p-[2rem_4rem] text-deep-blue rounded-3xl skills__content"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h3 className="text-xl underline underline-offset-8 font-bold font-playfair text-center mb-6 skills__title">Machine Learning</h3>

      <div className="flex justify-center gap-x-10 skills__box">
        <div className="grid items-start gap-y-4 skills__group">
          <div className="flex gap-x-2 skills__data">
            <BiBadgeCheck className='text-lg' />

            <div>
              <h3 className="text-lg font-semibold font-playfair leading-4 skills__name">ML Modeling & Inference</h3>
              <span className="text-xs skills__level">Advanced</span>
            </div>
          </div>

          <div className="flex gap-x-2 skills__data">
            <BiBadgeCheck className='text-lg' />

            <div>
              <h3 className="text-lg font-semibold font-playfair leading-4 skills__name">NumPy & Pandas</h3>
              <span className="text-xs skills__level">Advanced</span>
            </div>
          </div>

          <div className="flex gap-x-2 skills__data">
            <BiBadgeCheck className='text-lg' />

            <div>
              <h3 className="text-lg font-semibold font-playfair leading-4 skills__name">Pytorch, TensorFlow & Keras</h3>
              <span className="text-xs skills__level">Advanced</span>
            </div>
          </div>

          <div className="flex gap-x-2 skills__data">
            <BiBadgeCheck className='text-lg' />

            <div>
              <h3 className="text-lg font-semibold font-playfair leading-4 skills__name">
                Matplotlib & Seaborn
              </h3>
              <span className="text-xs skills__level">Advanced</span>
            </div>
          </div>

        </div>

        <div className="grid items-start gap-y-4 skills__group">

          <div className="flex gap-x-2 skills__data">
            <BiBadgeCheck className='text-lg' />

            <div>
              <h3 className="text-lg font-semibold font-playfair leading-4 skills__name">
                Hugging Face, XGBoost & Fast.ai
              </h3>
              <span className="text-xs skills__level">Intermediated</span>
            </div>
          </div>

          <div className="flex gap-x-2 skills__data">
            <BiBadgeCheck className='text-lg' />

            <div>
              <h3 className="text-lg font-semibold font-playfair leading-4 skills__name">OpenCV & scikit-image</h3>
              <span className="text-xs skills__level">Advanced</span>
            </div>
          </div>

          <div className="flex gap-x-2 skills__data">
            <BiBadgeCheck className='text-lg' />

            <div>
              <h3 className="text-lg font-semibold font-playfair leading-4 skills__name">
                scikit-learn, sklearn & Scipy
              </h3>
              <span className="text-xs skills__level">Advanced</span>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default ML