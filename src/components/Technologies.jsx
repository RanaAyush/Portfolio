import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVue } from "react-icons/io5";
import { DiDjango } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { SiStreamlit } from "react-icons/si";
import { animate, motion } from 'framer-motion';

const iconMotion = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10,-10],
        transition:{
            duration:duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    }
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'> Technologies </motion.h2>
        <motion.div 
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:1}}
        className='flex items-center flex-wrap justify-center gap-4'>
            <motion.div 
            variants={iconMotion(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-500'/>
            </motion.div>
            <motion.div 
            variants={iconMotion(5)}
            initial="initial"
            animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaDocker className='text-7xl text-sky-700'/>
            </motion.div>
            <motion.div 
            variants={iconMotion(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
            variants={iconMotion(2)}
            initial="initial"
            animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-7xl text-[#6d28d9]'/>
            </motion.div>
            <motion.div 
            variants={iconMotion(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoVue className='text-7xl text-green-700'/>
            </motion.div>
            <motion.div 
            variants={iconMotion(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiDjango className='text-7xl text-[#066a44]'/>
            </motion.div>
            <motion.div 
            variants={iconMotion(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiStreamlit className='text-7xl text-[#f63366]'/>
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies