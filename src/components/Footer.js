import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { IoLogoGoogle } from 'react-icons/io'
import { RiSendPlaneLine } from 'react-icons/ri'

function Footer() {
  return (
   <div className='bg-[#fde4e4] md:px-9 sm:px-5 px-3 lg:px-24 flex 
   flex-col dark:bg-slate-700 pt-[50px]
   pb-[30px] text-[#212245]'>
     <div className='dark:text-[#b4b3b3] grid grid-cols-1 lg:grid-cols-2'>
    <div className='grid grid-cols-1 md:grid-cols-2 items-center md:space-x-5 xl:space-x-11'>
        <div className='flex flex-col space-y-3'>
            <img className='h-14 w-14' src='https://food-delivery-ecommerce-app.netlify.app/static/media/res-logo.2f9021c4.png'
            alt='' />
            <p className='font-bold text-[#212245] text-[16px] dark:text-[#777777]'>Tasty Treat</p>
            <span className='text-[#777777] text-[15px]'>Lorem ipsum dolor sit amet<br/> consectetur
              elit. Nesciunt<br/> pariatur accusamus</span>
        </div>
        <div className='flex flex-col space-y-8'>
            <div className='flex flex-col space-y-1'>
            <h1 className='font-bold text-[#212245] text-[19px] dark:text-[#777777]'>Delivery Time</h1>
          <p className='font-bold text-[#212245] text-[16px] dark:text-[#777777]'>Sunday - Thursday</p>
          <span>9:00am - 11:00pm</span>
            </div>
            <div>
            <h1 className='font-bold text-[#212245] text-[19px] dark:text-[#777777]'>Friday - Saturday
</h1>
          <p className='dark:text-[#777777]'>Off day</p>
            </div>
        </div>
    </div>
    <div className='grid grid-cols-1 space-y-5 lg:space-y-0 lg:grid-cols-2'>
    <div className='flex flex-col space-y-1'>
            <h1 className='font-bold text-[#212245] text-[19px] dark:text-[#777777]'>Contact</h1>
          <span className='dark:text-[#777777]'>Location: ZindaBazar, Sylhet-3100, Pakistan</span>
          <phone className='font-bold text-[#212245] text-[17px] dark:text-[#777777] pt-6'>Phone: 03473184343</phone>
          <email className='font-bold text-[#212245] text-[17px] dark:text-[#777777]'>Email: zainfb1122@gmail.com</email>
            </div>
            <div>
            <h1 className='font-bold text-[#212245] text-[19px] dark:text-[#777777]'>Newsletter</h1>
          <span className='dark:text-[#777777]'>Subscribe our newsletter

</span>
<div className='mt-6 relative max-w-[300px]'>
    <input placeholder='Enter Your Email' className='py-3 placeholder:text-[#212245]  px-3 rounded-md border-[#212245]
    border-2' name='enter'/>
       <p className='bg-[#fd2020] cursor-pointer rounded-md top-2 right-9 px-5 text-[#fff] py-2 absolute'>
       <RiSendPlaneLine className='h-5 w-5'/></p>
</div>
                      </div>
    </div>

    <div>

    </div>
    </div>
    {/* <div className=' grid grid-cols-1 md:grid-cols-2 mt-8 space-y-3 md:space-y-0'>
        <p className='text-[14px] md:text-[16px]
         text-[#fd2020] dark:text-[#777777]'>Copyright - 2022, website made by Muhibur Rahman. All Rights Reserved.</p>
        <div className='flex items-center space-x-1 sm:space-x-5'>
            <p className='dark:text-[#777777]'>Follow:</p>
           <div className='flex items-center space-x-3'>
           <p className='footer-l'><FaFacebookF className='footer-i'/></p>
            <p className='footer-l'><AiOutlineTwitter className='footer-i'/></p>
            <p className='footer-l'><IoLogoGoogle className='footer-i'/></p>
            <p className='footer-l'><FaLinkedinIn className='footer-i'/></p>
            <p className='footer-l'><BsGithub className='footer-i'/></p>

            </div>
        </div>
    </div> */}
   </div>
  )
}

export default Footer