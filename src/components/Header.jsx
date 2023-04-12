import React ,{useState} from 'react'

import { HiMenuAlt1,HiX } from "react-icons/hi";
import { HashLink} from 'react-router-hash-link';

const Header = () => {
  const [nav ,setNav] = useState(false)

  function handleClick(){
    setNav(!nav)
  }
  return (
    <>
    <div className=' h-20 sticky top-0 z-10 drop-shadow-lg  px-7  bg-alabaster items-center mx-auto   flex justify-between w-full'>
        <div className='text-marian font-bold mr-4 text-3xl hover:text-4xl sm:text-4x'>Kimani</div>
        <div className='hidden md:block'>
         
            <ul className='flex'>
              <li className='px-2 text-violet-800 cursor-pointer hover:text-green-300'><HashLink to='/#home' smooth>Home</HashLink></li>
              <li className='px-2 text-violet-800 cursor-pointer hover:text-green-300'><HashLink to='/#projects' smooth>Projects</HashLink></li>
              <li className='px-2 text-violet-800 cursor-pointer hover:text-green-300'><HashLink to='/#contact' smooth>Contact</HashLink></li>

            </ul>
          
        </div>
        <div>
          <button className='rounded  hover:bg-marian bg-sky-500 text-white px-5 py-3  md:w-[150px] hidden md:block'>Resume</button>
        </div>

        <div  className='md:hidden' onClick={handleClick}>
               {!nav ? <HiMenuAlt1 className='w-6 h-6'/>: <HiX className='w-6 h-6'/>} 
        </div>



    </div>
    {nav && <ul className='px-8  absolute  bg-alabaster  w-full flex flex-col '>

<li className='px-2 text-marian hover:text-green-300'><a href="#">Home</a></li>
<li className='px-2 text-marian hover:text-green-300'><a href="#">Projects</a></li>
<li className='px-2 text-marian hover:text-green-300'><a href="#">Contact me</a></li>


<div className='flex py-3 flex-col'>
<button className='rounded  hover:bg-marian bg-sky-500 text-white px-5 py-3  '>Resume</button>
</div>

</ul>
}

</>
  )
}

export default Header