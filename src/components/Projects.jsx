import React from 'react'
import { AiFillFolder ,AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <div className='bg-marian ' id='projects'>
        <p className='text-center text-xan text-3xl'>Projects</p>
        <div className='flex  flex-wrap justify-center px-5 py-8'>
            <div className='md:w-1/3 w-full p-2 m-3  flex flex-col justify-between rounded bg-alabaster '>
                <div className='flex justify-between mb-2'>
                  <a href="http://prescom.onrender.com" target='_blank'><AiFillFolder className='text-marian h-6 w-6
                '/></a>

                  <a href="https://github.com/kimanicode/PresCom" target='_blank' ><AiFillGithub className="h-6 w-6 text-marian "/> </a>
                </div>

                <div>
                    <p className='text-2xl text-sky-500 py-3'>Landing page for  Prescom network</p>
                    <span  className='text-sky-300 py-3'>Prescom is a network and telecommunication company based in Nairobi,Kenya</span>
                </div>

                <div className='flex flex-wrap justify-start py-2'>
                      <p className='px-2 text-xan'>React</p>
                      <p className='px-2 text-xan'>Javascript</p>
                      <p className='px-2 text-xan'>Express</p>
                      <p className='px-2 text-xan'>Tailwind</p>
                </div>


            </div>

            <div className='md:w-1/3 w-full m-3 p-2 rounded bg-alabaster flex flex-col justify-between'>
                <div className='flex justify-between'>
                <a href=""target='_blank'><AiFillFolder className='text-marian h-6 w-6
                'target='_blank'/></a>

                  <a href="https://github.com/kimanicode"target='_blank'><AiFillGithub className="h-6 w-6 text-marian "/> </a>
                </div>
                <div>
                    <p className='text-2xl text-sky-500 py-3'>Portfolio Website</p>
                    <span  className='text-sky-300 py-3'>Here is my portfolio website.</span>
                </div>
                <div className='flex flex-wrap justify-start py-2'>
                      <p className='px-2 text-xan'>React</p>
                      <p className='px-2 text-xan'>Javascript</p>
                      <p className='px-2 text-xan'>Express</p>
                      <p className='px-2 text-xan'>Tailwind</p>
                </div>


            </div>

            <div className='md:w-1/3 w-full m-3 p-2 rounded bg-alabaster flex flex-col justify-between'>
                <div className='flex justify-between'>
                <a href=""target='_blank'><AiFillFolder className='text-marian h-6 w-6
                '/></a>

                  <a href="https://github.com/kimanicode/apartment-system"target='_blank'><AiFillGithub className="h-6 w-6 text-marian "/> </a>
                </div>
                <div>
                    <p className='text-2xl text-sky-500 py-3'>Apartment Management system</p>
                    <span  className='text-sky-300 py-3'> A small scoped project for managing apartments</span>
                </div>
                <div className='flex flex-wrap justify-start py-2'>
                      <p className='px-2 text-xan'>React</p>
                      <p className='px-2 text-xan'>Javascript</p>
                      <p className='px-2 text-xan'>Express</p>
                      <p className='px-2 text-xan'>Firebase</p>
                </div>


            </div>
            <div className='md:w-1/3 w-full m-3 p-2 rounded bg-alabaster flex flex-col justify-between'>
                <div className='flex justify-between'>
                <a href=""target='_blank'><AiFillFolder className='text-marian h-6 w-6
                '/></a>

                  <a href="https://github.com/kimanicode/karpets"target='_blank'><AiFillGithub className="h-6 w-6 text-marian "/> </a>
                </div>
                <div>
                    <p className='text-2xl text-sky-500 py-3'>Karpets</p>
                    <span  className='text-sky-300 py-3'>This project involves creating a web app for carpet cleaning services. The project is still <span className='text-red-500'>IN PROGRESS!</span></span>
                </div>
                <div className='flex flex-wrap justify-start py-2'>
                      <p className='px-2 text-xan'>React</p>
                      <p className='px-2 text-xan'>Javascript</p>
                      <p className='px-2 text-xan'>Express</p>
                      <p className='px-2 text-xan'>Tailwind</p>
                </div>


            </div>

            

        </div>
    </div>
  )
}

export default Projects