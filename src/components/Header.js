import React, {useState} from 'react'
import webLogo from '../assets/webLogo.png'
import {CgProfile} from 'react-icons/cg'
import {BsBucket} from 'react-icons/bs'
import { MdOutlineLightMode,MdDarkMode } from 'react-icons/md'
import {HiMenu} from 'react-icons/hi'
import { Link } from 'react-router-dom'
function Header({darkTheme, setDarkTheme}) {
    const [active, setActive] = useState('home');
    const [menu, setMenu] = useState();
  return (
    <div className='flex z-20 items-center justify-between w-screen px-4 md:px-12 lg:px-24 shadow-sm bg-white
     dark:bg-slate-700 dark:text-white py-2 fixed'>
        <div className='flex items-center flex-col'>
            <Link to='/'><img className='h-14 w-14' src={webLogo} alt='logo' /></Link>  
            <p className='font-bold text-[20px]'>Tasty Treat</p>            
        </div>
        <div className='hidden sm:flex'>
            <ul className='flex space-x-9 items-center dark:text-white'>
                <Link to='/'>
                <li  className={`${active === "Home" ? "active h-but" : "h-but"}`}
            onClick={() => setActive("Home")}>Home</li>
                </Link>
                
            <Link to='/foods'>

             <li  className={`${active === "Foods" ? "active h-but" : "h-but"}`}
            onClick={() => setActive("Foods")}>Foods</li>
            </Link>
             <li  className={`${active === "Cart" ? "active h-but" : "h-but"}`}
            onClick={() => setActive("Cart")}>Cart</li>
                      <li  className={`${active === "Contact" ? "active h-but" : "h-but"}`}
            onClick={() => setActive("Contact")}>Contact</li>
            </ul>
        </div>
        <div className='flex items-center space-x-6 relative'>
        <div className='flex sm:hidden' onClick={() => setMenu(!menu)}>
            <HiMenu className='h-icons'/>
            </div>
            {menu ? <div className='bg-gray-300 px-4 py-3 dark:text-black rounded-lg absolute top-9 right-16'>
            <ul className='flex flex-col space-y-9 items-center dark:text-black'>
              <Link to='/'> <li  className={`${active === "Home" ? "active h-but" : "h-but"}`}
            onClick={() => setActive("Home")}>Home</li></Link> 
            <Link to='/foods'>
            <li  className={`${active === "Foods" ? "active h-but" : "h-but"}`}
            onClick={() => setActive("Foods")}>Foods</li>
            </Link>
             <li  className={`${active === "Cart" ? "active h-but" : "h-but"}`}
            onClick={() => setActive("Cart")}>Cart</li>
                      <li  className={`${active === "Contact" ? "active h-but" : "h-but"}`}
            onClick={() => setActive("Contact")}>Contact</li>
            </ul>
            </div> : ''}
           <div className='flex items-center relative'>
                    <p className='bg-red-600 absolute bottom-4 left-4
                     text-white font-bold py-[1px] text-center px-1 text-[13px] rounded-full'>0</p>
               <BsBucket className='h-icons'/>
               </div>
            <CgProfile className='h-icons'/>
        <p onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? <MdOutlineLightMode className='h-icons'/> : <MdDarkMode className='h-icons'/>}
        </p>

        </div>

    </div>
  )
}

export default Header