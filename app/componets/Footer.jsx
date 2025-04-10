import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className='bg-black  text-white display flex p-10'>

         <div  className='w-1/2' >
          <h1 className='text-3xl'> The Laptop World</h1>
          <h4>More About Company</h4>
          <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At doloribus minus veniam iste necessitatibus inventore ratione, laudantium nulla iusto pariatur, blanditiis nihil totam. Dolores sunt eveniet quae dicta soluta libero.</h5>
         </div>

         <div className='flex column w-1/2   flex-col  p-12'  >
            <h2></h2>
           <Link href='/'> Refund Policy</Link>
           <Link href='/'> Store Location </Link>
           <Link href='/'> GST info</Link>
         </div>

         
         <div className='w-1/2  flex-auto flex-col justify-between' >
          <h1 className='text-3xl'> Lets connect</h1>
          <h3><FaFacebook   className='text-3xl'/></h3>
          <h1><IoLogoInstagram className='text-3xl' /></h1>
          <h1><BsLinkedin  className='text-3xl' /></h1>
     
         </div>

      </div>
    </>
  )
}

export default Footer