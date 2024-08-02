import { Button } from '@mui/material'
import React from 'react'


function Sign_button(props: any) {
	var size  = props.size;
	var dim = "";
	if (size == "small"){
		dim = 'h-[40px] w-[96px] text-[12px]'
	}else if(size = "large"){
		dim = 'h-[58px] w-[156px] text-[18px]'
	}else{
		dim = 'h-[49px] w-[126px] text-[15px]'
	}

  return (
	<Button className= {`bg-custom1 ${dim}  font-semibold font-font1 rounded-lg`} variant='contained'>{props.name}</Button>
  )
}

export default Sign_button
