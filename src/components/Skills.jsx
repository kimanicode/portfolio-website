import React from 'react'
import code from '.././assets/code.svg' 

const Skills = () => {
  return (
    <div className='bg-marian'>
        <p className='text-center py-4 text-3xl text-white'>Skills and Expertise </p>
        <div className=' flex justify-center'>
            <div className='p-3'>
                <img src={code} alt="" />
            </div>
            <div>
                <p className='text-white'>Web Development</p>
            </div>
        </div>
    </div>

  )
}

export default Skills