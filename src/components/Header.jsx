import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' mx-auto px-7 items-center  h-20 sticky top-0 z-10 drop-shadow-lg bg-alabaster flex justify-between w-full'>
        <div className='text-marian font-bold mr-4 text-3xl sm:text-4x'>Kimani</div>
        <div>
         
            <ul className='flex'>
              <li className='px-2 text-green-500 hover:text-green-300'><a href="#">Home</a></li>
              <li className='px-2 text-green-500 hover:text-green-300'><a href="#">Projects</a></li>
              <li className='px-2 text-green-500 hover:text-green-300'><a href="#">Contact me</a></li>

            </ul>
          
        </div>
        <div>
          <button className='rounded  hover:bg-marian bg-sky-500 text-white px-5 py-3  md:w-[150px]'>Resume</button>
        </div>
    </div>
  )
}

export default Header