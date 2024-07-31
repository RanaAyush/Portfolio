import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [bgColor, setBgColor] = useState('bg-transparent');

  const handleScroll = () => {
      const triggerPoint = 150;
      if (window.scrollY > triggerPoint) {
        console.log('Scroll Y:', window.scrollY);
          setBgColor('bg-black bg-opacity-50');
          
      } else {
          setBgColor('bg-transparent');
          
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <nav className={`mb-8  flex items-center justify-between py-3 fixed top-0 w-[100%] z-[100] ${bgColor}`}>
        <div className='flex flex-shrink-0 items-center'>
            <a className='text-4xl ml-10 hover:cursor-pointer hover:text-cyan-500' href=''> AR </a>
        </div>
        <div className='m-8 flex items-center gap-6 lg:pr-10 justify-center text-3xl '>
          <a href="/Resume.pdf" download="Ayush_Resume.pdf" className='hidden lg:block border-neutral-800 hover:underline  px-3 py-1 text-2xl rounded-lg  transform transition-transform duration-300 hover:scale-110 hover:text-red-500'>Resume</a>
          <a href="#projects" className='hidden lg:block border-neutral-800 bg-blue-800 px-3 py-1 text-2xl rounded-lg transform transition-transform duration-300 hover:scale-110 hover:bg-blue-900 mr-4'>Projects</a>
          <div className='flex items-center gap-6 transform transition-transform duration-300 hover:scale-110 mr-5'>
           <a href="https://www.linkedin.com/in/ayush-rana-0a3145204/" target='_blank' className='hover:text-cyan-600'> <FaLinkedin /> </a>
           <a href="https://github.com/RanaAyush" target='_blank' className='hover:text-cyan-600'><FaGithub /></a>
           <a href="https://x.com/AyushRa70673358?t=R8-xKmlwi-ryVw6_kpYUow&s=08" target='_blank' className='hover:text-cyan-600'><FaTwitterSquare /></a>
           <a href="https://www.instagram.com/__rana_ayush/" target='_blank' className='hover:text-cyan-600'><FaInstagram /></a> 
          </div>
        </div>
    </nav>
  )
}

export default Navbar
