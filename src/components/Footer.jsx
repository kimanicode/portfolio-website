import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { AiFillGithub ,AiFillLinkedin ,AiFillFacebook} from "react-icons/ai";

const Footer = () => {
  return (
    <div className='bg-marian p-3 flex justify-around' >
        <div><span className='text-white '>Copyright © 2023 Kimani</span></div>
        <div className='flex'>
          <TwitterIcon className="h-6 w-6 text-alabaster mr-2" />
          <InstagramIcon className="h-6 w-6 text-alabaster mr-2"/>
          <AiFillGithub className="h-6 w-6 text-alabaster mr-2"/>
          <AiFillLinkedin className="h-6 w-6 text-alabaster mr-2"/>
          <AiFillFacebook className="h-6 w-6 text-alabaster mr-2"/>
        </div>

    </div>
  )
}

export default Footer