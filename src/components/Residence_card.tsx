import Button from '@mui/material/Button';
import { FaLocationDot, FaTape } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";


function Residence_card(props: any) {
  return (
    <div className='flex flex-col items-start justify-between h-96 w-72 p-4 rounded-lg bg-custom2 gap-7'>
    <div className='flex items-center justify-center h-72 w-full bg-blue p-2 rounded-sm'><img src={props.img_url} alt={props.alt}/></div>
    <span className=' flex justify-between items-center gap-3 text-black font-montserrat font-bold'><FaLocationDot className='h-10 w-10'/>{props.location}</span>
    <div className='flex justify-around items-baseline w-full'>
    <div className='flex items-end text-black font-montserrat text-sm'><IoBedOutline className='p-1 h-5 w-5 bg-white'/>{props.rooms}</div>
    <div className='flex  items-end text-black font-montserrat text-sm'><FaTape className='p-1 h-5 w-5 bg-white'/>{props.sq_ft}</div>
    </div>
    <div className='flex items-center justify-between w-full'>
      <Button className='bg-custom1' variant='contained'>Sign Up</Button>
      <h1 className='text-black font-bold'>{props.price}</h1>
    </div>
     </div>
  )
}

export default Residence_card
