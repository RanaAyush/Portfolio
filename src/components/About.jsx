import React from 'react'
import AboutImage from "../assets/AboutImg.jpg"
import { motion } from 'framer-motion'
import {INTRO} from "../assets/constants.js"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
        <h2 className='my-20 text-center text-5xl'>
            About
            <span className='text-neutral-500'> Me </span>
        </h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8' >
                <div className='flex items-center justify-center'>
                    <motion.img 
                    initial={{x:-100, opacity:0}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1}}
                    className='rounded-2xl' src={AboutImage} alt="About me image" />
                </div>
            </div>
            <motion.div 
            initial={{x:100, opacity:0}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            className='w-full lg:w-1/2 my-5 py-3'>
                <div className='flex flex-col justify-center lg:justify-start'>
                    <div className='text-justify leading-relaxed font-tighter pr-10'>
                        {INTRO.AboutText}
                    </div>
                   <div className='flex flex-col mt-1 pt-5'>
                    <div className='flex flex-col  m-2 p-2 gap-6'>
                        <p className='text-3xl text-center'>Education</p>
                        <div className='flex flex-row text-center justify-around w-full'>
                        <div >
                        <p className='mb-4 text-xl text-center'>Senior Secondary Education</p>
                        <div className='flex items-center justify-evenly flex-wrap'>
                        <span className='mr-1 mb-1  rounded-sm px-2 py-1 font-medium text-orange-500 bg-neutral-900'>{INTRO.SeniorSecEducation}</span>
                        </div>
                        </div>
                        <div >
                        <p className='mb-4 text-xl text-center'>Graduation</p>
                        <div className='flex items-center justify-evenly flex-wrap'>
                        <span className='mr-1 mb-1  rounded-sm px-2 py-1 font-medium text-orange-500 bg-neutral-900'>{INTRO.Graduation}</span>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className=' flex flex-col m-2 p-2 gap-6'>
                    <p className='text-3xl text-center '>Skills</p>
                    <div className='flex flex-row text-center justify-around'>
                    <div className='w-1/2'>
                        <p className='mb-4 text-xl text-center'>Technical Skills</p>
                        <div className='flex items-center justify-evenly flex-wrap'>
                        {INTRO.TechnicalSkills.map((tech,index) => (
                            <span key={index} className='mr-1 mb-1  rounded-sm px-2 py-1 font-medium text-purple-400 bg-neutral-900'>{tech}</span>
                        ))}
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <p className='mb-4 text-xl text-center'>Soft Skills</p>
                        <div className='flex items-center justify-evenly flex-wrap'>
                        {INTRO.SoftSkills.map((skills,index) => (
                            <span key={index} className='mr-1 mb-1  rounded-sm px-2 py-1 font-medium text-purple-400 bg-neutral-900'>{skills}</span>
                        ))}
                        </div>
                    </div>
                    </div>
                    </div>
                   </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About