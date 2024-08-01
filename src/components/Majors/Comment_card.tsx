import { FaStar } from "react-icons/fa6";


function Comment_cards(props: any) {
  return (
    <div className='flex flex-col items-center justify-start h-[430px] w-[382px] p-0 rounded-2xl bg-custom2'>
      <img className="p-0 w-[382px] h-[169px] rounded-t-2xl object-cover object-center" src={props.src} alt={props.alt}/>
      <div className='flex flex-col items-center justify-start h-[261px] w-[382px] p-6 gap-7'>

        <div className="flex items-end justify-between gap-3">
          <img className="w-[58px] h-[58px] rounded-full" src={props.pic} alt={props.pic_alt}/>
          <div className="w-[190px] h-[58px] flex flex-col items-start justify-between">
            <h1 className="text-custom1 font-montserrat font-bold text-[20px]">{props.name}</h1>
            <p className="text-custom1 font-montserrat font-semibold text-[16px]">{props.location}</p>
          </div>
          <span className="inline h-6 w-[59px] bg-custom6 rounded-sm text-custom1 font-montserrat font-semibold text-[16px]">
            <FaStar className="h-5 w-5 text-custom5" />{props.rate}
          </span>
        </div>

        <p className="text-custom1 font-montserrat font-semibold text-[16px]">{props.description}</p>

      </div>
    </div>
  )
}

export default Comment_cards
