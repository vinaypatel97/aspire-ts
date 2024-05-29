import LogoWhite from '../../../assets/logo-white.png'
import Visa from '../../../assets/Visa.png'
import { CardInterface } from '../../../common/types'


const Card = ({ name, expiry, cardNumber, freeze }: CardInterface) => {
    return (
        <div className={`card p-6 w-[414px] h-[249px] bg-[#01D167] ${freeze && "bg-opacity-25"} rounded-xl text-white font-bold flex flex-col items-start`}>
            <div className='flex justify-end w-full'>
                <img src={LogoWhite} alt='logo' className='w-[84px] h-[24px]' />
            </div>
            <div className='text-2xl tracking-wider mt-8'>{name}</div>
            <div className='flex items-center mt-8'>
                <div className='flex mr-4'>
                    <div className='masked w-[10px] h-[10px] rounded-full bg-white mr-1'></div>
                    <div className='masked w-[10px] h-[10px] rounded-full bg-white mr-1'></div>
                    <div className='masked w-[10px] h-[10px] rounded-full bg-white mr-1'></div>
                    <div className='masked w-[10px] h-[10px] rounded-full bg-white mr-1'></div>
                </div>
                <div className='flex mr-4'>
                    <div className='masked w-[10px] h-[10px] rounded-full bg-white mr-1'></div>
                    <div className='masked w-[10px] h-[10px] rounded-full bg-white mr-1'></div>
                    <div className='masked w-[10px] h-[10px] rounded-full bg-white mr-1'></div>
                    <div className='masked w-[10px] h-[10px] rounded-full bg-white mr-1'></div>
                </div>
                <div className='flex mr-4'>
                    <div className='masked w-[10px] h-[10px] rounded-full bg-white mr-1'></div>
                    <div className='masked w-[10px] h-[10px] rounded-full bg-white mr-1'></div>
                    <div className='masked w-[10px] h-[10px] rounded-full bg-white mr-1'></div>
                    <div className='masked w-[10px] h-[10px] rounded-full bg-white mr-1'></div>
                </div>
                <div className='flex mr-4 tracking-widest'>
                    {cardNumber.slice(cardNumber.length - 4)}
                </div>
            </div>
            <div className='flex mt-4'>
                <div className='tracking-widest mr-8'>
                    Thru: {expiry}
                </div>
                <div className='tracking-widest'>
                    CVV: ***
                </div>
            </div>
            <div className='flex justify-end w-full'>
                <img src={Visa} alt='Visa' className='w-[67px] h-[23px]' />
            </div>
        </div>
    )
}

export default Card