import Button from '@mui/material/Button';
import { FaLocationDot, FaTape } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";


function Residence_card(props: any) {
  return (
    <div className='flex flex-col items-center justify-start h-[534px] w-[382px] p-0 rounded-2xl bg-custom2'>
    <img className = 'h-[356px] w-[382px] object-cover object-center rounded-t-2xl'  src={props.img_url} alt={props.alt}/>
    <div className='flex flex-col justify-around w-[362px] h-[188px] p-4'>
      <span className=' flex justify-start items-center gap-1 text-[20px] text-custom1 font-montserrat font-bold'><FaLocationDot className='h-7 w-7 text-custom1 bg-custom2'/>{props.location}</span>
      <div className='flex justify-start gap-20 items-baseline w-full'>
        <div className='flex items-end text-custom1 font-montserrat text-[18px]'><IoBedOutline className='p-0 h-6 w-6 text-custom1 bg-custom2'/>{props.rooms}</div>
        <div className='flex  items-end text-custom1 font-montserrat text-[18px]'><FaTape className='p-0 h-6 w-6 text-custom1 bg-custom2'/>{props.sq_ft}</div>
      </div>
      <div className='flex items-center justify-between w-full'>
        <Button className='bg-custom1 h-10 w-24 rounded-lg' variant='contained'>Sign Up</Button>
        <h1 className='text-custom1 font-bold text-[22px]'>{props.price}</h1>
      </div>
    </div>
     </div>
  )
}

export default Residence_card
