import React from 'react'
import { TiLocation } from "react-icons/ti";
import { FaHouseChimney, FaCircleDollarToSlot } from "react-icons/fa6";
import Button from '@mui/material/Button';


// import {Button} from "@next"

function Filter_card(props: any) {
  return (
    <div className='flex justify-evenly items-center w-[1070px] h-[160px] bg-custom2 rounded-2xl shadow-md p-4'>
      <button className='w-[252px] h-[58px] rounded-xl p-4 flex justify-between items-center text-custom1 bg-custom6 transition duration-500 hover:bg-slate-400 font-montserrat font-bold text-[18px]'>Location <TiLocation className='text-custom1 h-[22px] w-[22px]'/></button>
      <button className='w-[252px] h-[58px] rounded-xl p-4 flex justify-between items-center text-custom1 bg-custom6 transition duration-500 hover:bg-slate-400 font-montserrat font-bold text-[18px]'>Type <FaHouseChimney className='text-custom1 h-[22px] w-[22px]'/></button>
      <button className='w-[252px] h-[58px] rounded-xl p-4 flex justify-between items-center text-custom1 bg-custom6 transition duration-500 hover:bg-slate-400 font-montserrat font-bold text-[18px]'>Price Range <FaCircleDollarToSlot className='text-custom1 h-[22px] w-[22px]'/></button>
      <Button className='bg-custom1 h-[58px] w-[156px] text-[18px] font-semibold font-montserrat rounded-lg' variant='contained'>Sign Up</Button>
    </div>
  )
}

export default Filter_card
