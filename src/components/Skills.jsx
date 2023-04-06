import React from 'react'
import code from '.././assets/code.svg' 
import tailwind  from '.././assets/tailwind.png'
import mongo  from '.././assets/mongo.png'
import firebase  from '.././assets/firebase.jpeg'
import express  from '.././assets/express.png'
import git  from '.././assets/git.png'
import react  from '.././assets/react.png'
import reactNative  from '.././assets/reactNative.png'
import js  from '.././assets/js.png'
import typescript  from '.././assets/typescript.png'
import node from '.././assets/node.png'






const Skills = () => {
  return (
    <div className='bg-marian'>
        <p className='text-center md:py-4 md:text-3xl text-xan'>Skills and Expertise </p>
        <div className=' flex justify-center flex-wrap md:flex-nowrap'>
            <div className='p-3 w-full'>
                <img src={code} alt="" />
            </div>
            <div>
                <p className='text-green-500 text-center md:text-xl'>Here are a few technologies I’ve been working with recently:</p>

                 <ul className='px-3'>
                 <li className='py-4 text-start flex text-white'>Tailwind Css <img src={tailwind} alt=""  className='h-[20px] w-[40px] px-2 rounded-full'/></li>

                <li className='py-4 text-center text-white flex'>
                   <img src={js} alt=""  className='h-[20px] w-[40px] px-2 rounded-full'/>Javascript (ES6+)
                </li>

                <li className='py-4 text-start text-white flex'>ReactJS
                <img src={react} alt=""  className='h-[20px] w-[40px] px-2 rounded-full'/>
                </li>

                <li className='py-4 text-center flex text-white'><img src={node} alt=""  className='h-[20px] w-[40px] px-2 rounded-full'/>NodeJs</li> 

                <li className='py-4 text-start flex text-white'>Firebase<img src={firebase} alt=""  className='h-[20px] w-[40px] px-2 rounded-full'/></li>

                <li className='py-4 text-center flex text-white'> Git
                <img src={git} alt=""  className='h-[20px] w-[40px] px-2 rounded-full'/></li>


                <li className='py-2 text-start flex text-white'> <img src={mongo} alt=""  className='h-[20px] w-[40px] px-2 rounded-full'/>MongoDB</li> 


                <li className='py-4 text-center flex text-white'> ExpressJS<img src={express} alt=""  className='h-[20px] w-[40px] px-2 rounded-full'/></li>


                <li className='py-4 flex text-start text-white'> <img src={typescript} alt=""  className='h-[20px] w-[40px] px-2 rounded-full'/>Typescript</li>

                
                <li className='py-4 flex text-center text-white'> React Native <img src={reactNative} alt=""  className='h-[20px] w-[40px] px-2 rounded-full'/>  </li>
                 </ul>  
            </div>
        </div>
    </div>

  )
}

export default Skills