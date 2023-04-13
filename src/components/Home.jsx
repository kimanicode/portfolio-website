import React from 'react' 
import myPic from '.././assets/me.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-alabaster w-full flex flex-wrap md:flex-nowrap justify-center h-screen py-10 ' id='home'>
      <div className='flex flex-col j px-10 justify-start' >
      <div className=''>
            <p className ='italic text-green-500'>Hi my name is,</p>
      </div>

        <div className='w-full '>
            <h1 className=' text-2xl text-indigo-600
            md:text-6xl'>Kimani Karaba.</h1>

        </div>
        
        <h1 className='text-3xl text-violet-800 md:text-5xl py-3 text-marian'>I build things for the <span className='text-xan'>web.</span></h1>
        <span className='p-2 text-marian'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.</span>

        <button className=' rounded  hover:bg-marian bg-xan text-white px-5 py-3  md:w-[400px] md:mt-6' onClick={() => navigate('/#contact')}>Let's build</button>
      </div>

      <div className='md:basis-1/2  mt-[-50px] md:mt-[-130px]' >
        <img src={myPic} alt="" className='h-full w-full rounded-lg'/>
      </div>
    </div>
  )
}

export default Home