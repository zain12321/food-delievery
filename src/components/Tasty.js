import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'

const tasty = [
    {
        id:1,
        title:'Fresh and tasty foods',
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.'
    },
    {
        id:2,
        title:'Quality Support',
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.'
    },
    {
        id:3,
        title:'Order From Any Location',
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.'
    }
]

function Tasty() {
  return (
    <div className='grid grid-cols-1 items-center md:grid-cols-2 mx-6 xl:mx-14'>
        <div>
            <img className='max-h-[1000px] ' src='https://food-delivery-ecommerce-app.netlify.app/static/media/location.c2a80861.png'
            alt='' />
        </div>
       
        <div className=''>
      <h1 className='pop text-[24px] text-[#777777] font-bold'>Why Tasty<span className='text-[#fd2020]'> Treat?</span></h1>
      <p className='text-[#777777] max-w-[600px] py-3  text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. 
        Tempora reprehenderit a corporis velit, laboriosam vitae ullam,
         repellat illo sequi odio esse iste fugiat dolor, optio incidunt eligendi deleniti!</p>
         {tasty.map((item) => {
            const {title, desc} = item;
            return (
                <div className='py-3 space-y-5'>
                <p className='flex items-center py-2 space-x-2 text-[#212529] 
                font-bold dark:text-[#777777]'><BsCheckCircle className='text-[#fd2020]'/>
                <span>{title}</span></p>
                <span className='text-[16px] text-[#777777]'>{desc}</span>
              </div>
            )
        })}
     
        </div>

    </div>
  )
}

export default Tasty