import React from 'react'
import Footer from '../components/Footer'

function Cart() {
  return (
    <div className='pt-[90px]'>
<div className='common__section my-3 flex items-center justify-center text-white font-bold text-[35px]'>
   Your Cart Here
      </div>
      <div className='flex items-center text-center flex-col space-y-4'>
        <h1 className='font-bold text-[30px] '>Cart Is Empty</h1>
        <button className='bg-[#fd2020] py-2 px-3 text-[17px] text-white'>No Item Selected</button>
      </div>
      <div className='mt-11'>
        <Footer/>
      </div>
          </div>
  )
}

export default Cart