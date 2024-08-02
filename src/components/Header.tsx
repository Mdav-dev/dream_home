import React from 'react'
import Button from '@mui/material/Button';
import { FaRegUser, FaSearch } from "react-icons/fa";
import Nav_link from './Minors/Nav_link';
import Sign_button from './Minors/Sign_button';

function Header() {
  return (
    <div className='flex justify-between p-14 items-center w-screen h-[136px]'>
      <h1 className='font-extrabold text-custom1 font-sans'>Jonyam</h1>
      <div className='flex justify-between items-center'>
        <Nav_link name = "Home"  link = "/"/>
        <Nav_link name = "Contact" link = "/Contact" />
        <Nav_link name = "Agents" link = "/Agents" />
        <Nav_link name = "Services" link = "/Services" />
      </div>
      <div className='flex justify-between items-center gap-8'>
        <FaRegUser />
        <FaSearch />
        <Sign_button name = 'Sign Up' size = 'small' />
      </div>
    </div>
  )
}

export default Header
