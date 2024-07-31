import React from 'react'
import {PROJECTS} from "../assets/constants.js"
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4' id='projects'>
        <motion.h2 
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'> Projects</motion.h2>
        <div>
            {PROJECTS.map((project,i) =>(
                <div key={i} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                    initial={{opacity:0,x:-100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1.5}}
                    className='w-full lg:w-1/4'>
                        <img 
                         src={project.image} 
                         alt={project.title}
                         width={250}
                         height={250}
                         className='mb-6 rounded-md' />
                    </motion.div>
                    <motion.div
                    initial={{opacity:0,x:100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1.5}}
                    className='w-full max-w-xl lg:w-3/4'>
                        <h5 className='mb-2 font-semibold'>{project.title}</h5>
                        <p className='mb-4 text-neutral-400'>{project.description} </p>
                        {project.technologies.map((tech,index) => (
                            <span key={index} className='mr-2 rounded-sm px-2 py-1 font-medium text-purple-800 bg-neutral-900'> {tech }</span>
                        ))}
                    </motion.div>
                </div>
                
            ) )}  
        </div>

    </div>
  )
}

export default Projects