import React from 'react'
import pic from "../assets/AyushPicture.jpg"
import {motion} from "framer-motion" 
import { INTRO } from '../assets/constants';

const containter = (delay) => ({
    hidden: {x: -100, opacity:0},
    visible: {
        x:0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    }, 
});

const Introfile = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb=35 mt-48'>
        <div className='flex gap-4 flex-wrap items-center justify-evenly lg:hidden mb-10'>
        <a href="#projects" className='border-neutral-800 bg-blue-800 px-3 py-1 text-2xl rounded-lg transform transition-transform duration-300 hover:scale-110 hover:bg-blue-900 mr-4'>Projects</a>
        <a href="/Resume.pdf" download="Ayush_Resume.pdf" className='border-neutral-800 hover:underline  px-3 py-1 text-2xl rounded-lg  transform transition-transform duration-300 hover:scale-110 hover:text-red-500'>Resume</a>
        </div>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:pl-10'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    variants={containter(0)}
                    initial="hidden"
                    animate="visible"
                    className='pb-16 text-6xl font-thin tarcking-tight lg:mt-16 lg:text-7xl'>Ayush Rana</motion.h1>
                    <motion.span 
                    variants={containter(0.5)}
                    initial="hidden"
                    animate="visible"
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'> Full Stack Developer</motion.span>
                    <motion.p 
                    variants={containter(1)}
                    initial="hidden"
                    animate="visible"
                    className='my-2 py-6 leading-relaxed font-tighter'> {INTRO.Intro}</motion.p>
                
                </div>
            </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className=' flex justify-center'>
                <motion.img
                initial={{x:100 , opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:1.1}}
                className='w-1/2 rounded-[20px]' src={pic} alt="" />
            </div>

        </div>
        </div>

    </div>
  )
}

export default Introfile