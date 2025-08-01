import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion.js'
import { SectionWrapper } from '../hoc'
import { testimonials } from '../constants'
import { styles } from '../styles'

const TestimotionialCard = ({ index, testimonial, name, designation, company, image }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl sm:w-[320px] w-full'
    >
      <p className='text-white font-black text[48px]'>"</p>

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span>{name}
              <p className='mt-1 text-secondary'>{designation} of {company}</p>
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>

    </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-[#151030] rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testmonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <TestimotionialCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")