import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { AiFillGithub ,AiFillLinkedin ,AiFillFacebook} from "react-icons/ai";

const Footer = () => {
  return (
    <div className='bg-marian p-3  w-full md:px-[100px] rounded-t-lg' >
      <div  className='text-center py-2 '>
      <p className=' md:text-5xl text-xan py-5 text-3xl'>Get In Touch</p>

        
        <div className='flex justify-center'>
        <a href="https://twitter.com/kimaniGeoffre14"><TwitterIcon className="h-6 w-6 text-white mr-2" /> </a>

          <InstagramIcon className="h-6 w-6 text-xan mr-2"/>


          <a href="https://github.com/kimanicode"><AiFillGithub className="h-6 w-6 text-alabaster mr-2"/> </a>

          <a href="https://www.linkedin.com/in/kimani-geoffrey-ba8039212/"><AiFillLinkedin className="h-6 w-6 text-xan mr-2"/> </a>

          <a href="https://www.facebook.com/kimani.karaba"><AiFillFacebook className="h-6 w-6 text-alabaster mr-2"/></a>
        </div>
        </div>
    </div>
  )
}

export default Footer