import React from 'react' 
import myPic from '.././assets/me.png'

const Home = () => {
  return (
    <div className='bg-alabaster w-full flex flex-wrap md:flex-nowrap justify-center h-screen py-10'>
      <div className='flex flex-col j px-10 justify-start' >
      <div className=''>
            <p className ='italic text-green-500'>Hi my name is,</p>
      </div>

        <div className='w-full '>
            <h1 className=' text-3xl text-indigo-600
            md:text-6xl'>Kimani Karaba.</h1>

        </div>
        
        <h1 className='text-3xl text-violet-800 md:text-2xl py-3 text-marian'>I build things for the <span className='text-sky-500'>web</span></h1>
        <span className='p-2 text-marian'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.One project at a time</span>

        <button className=' rounded  hover:bg-marian bg-sky-500 text-white px-5 py-3  md:w-[400px] md:mt-6'>Let's create something amazing</button>
      </div>

      <div className='basis-1/2   md:mt-[-130px]' >
        <img src={myPic} alt="" className='h-full rounded-lg'/>
      </div>
    </div>
  )
}

export default Home