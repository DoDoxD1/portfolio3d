import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles.js';
import {services} from '../constants/index.js';
import {fadeIn, textVariant} from '../utils/motion.js';
import {SectionWrapper} from '../hoc/index.js';

const ServiceCard = ({index, title, icon}) =>{
  return (
    <Tilt className = "sm:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring",0.5*index,0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:40
          }}
          className='bg-[#151030] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        👋 Hi, I'm a Backend-Focused Software Engineer Crafting scalable, cloud-native applications with Java, Spring Boot & AWS I'm a Software Engineer (B.E. '24) with 1+ year of hands-on experience in developing robust backend systems using Java, Spring Boot, and RESTful APIs. I've worked on containerized microservices deployed on AWS, built efficient CI/CD pipelines, and optimized database queries—reducing API latency by 80% in production systems. I thrive on building clean, scalable architectures and contributing to end-to-end product development. Currently seeking backend or full-stack opportunities where I can design, optimize, and deliver high-performance software systems that solve real-world problems.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=>(
          <ServiceCard key = {service.title}
            index = {index}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

// export default About;
export default SectionWrapper(About,"about");