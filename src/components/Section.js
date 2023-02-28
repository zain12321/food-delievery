import React from 'react'
import DeliveryGirl from '../assets/delivergirl.png'
import {AiFillCar} from 'react-icons/ai'
import {MdOutlineSystemSecurityUpdateGood} from 'react-icons/md'
import {RiArrowRightSLine} from 'react-icons/ri'
function Section() {
  return (
    <div className='grid pt-32 lg:pt-24 grid-cols-1 mx-4 md:mx-12 lg:mx-24 lg:grid-cols-2 items-center'>
        <div className='space-y-3'>
        <p className='text-[20px] font-bold text-[#212245]'>Easy way to make an order</p>
        <h1 className='hun'>HUNGRY?<span className='hun hun-r'>Just wait<br/>
food at </span>your doo</h1>
<p className='text-[#777777] text-[16px] py-2'> ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!</p>
<div className='grid grid-cols-1 sm:grid-cols-2 items-center space-y-5 sm:space-y-0 sm:space-x-6'>
    <button className='py-2 flex items-center 
   justify-center px-4 bg-[#DF2020] text-white font-bold rounded-sm'>Order 
    Now <RiArrowRightSLine className='h-5 w-5'/></button>
    <button className='py-2 px-4 border border-[#DF2020] 
 text-black dark:text-white font-bold rounded-sm'>See All Foods</button>
</div>
<div className='grid grid-cols-1 sm:grid-cols-2 space-y-5 sm:space-y-0 pt-5'>
<p className='flex items-center space-x-3'><AiFillCar className='p-2
 text-[#fff] rounded-full bg-[#DF2020]
h-8 w-8'/><span className='text-[#212245] dark:text-[#777777] font-bold text-[15px]'>100% secure checkout</span></p>
    <p className='flex items-center space-x-3'><MdOutlineSystemSecurityUpdateGood className='p-2
text-[#fff] rounded-full bg-[#DF2020] h-8 w-8'/><span 
className='text-[#212245] font-bold text-[15px] dark:text-[#777777]'>100% secure checkout</span></p>
</div>
        </div>
        <div>
         <img
          className='w-[280px] h-[280px] sm:h-[450px] sm:w-[450px] 
          md:w-[550px] md:h-[550px]' src={DeliveryGirl} alt='delivery-girl' />
        </div>
    </div>
  )
}

export default Section