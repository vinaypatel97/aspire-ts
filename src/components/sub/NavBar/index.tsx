import logo from '../../../assets/Logo.png'
import Account from '../../../assets/Account.png'
import Card from '../../../assets/Card.png'
import Credit from '../../../assets/Credit.png'
import Home from '../../../assets/Home.png'
import Payments from '../../../assets/Payment.png'

const NavBar = () => {
    return (
        <div className='flex flex-col w-[25vw] bg-[#0C365A] h-screen p-[3.5vw]'>
            <img src={logo} alt='logo' className='w-[125px] h-[35px] cursor-pointer' />
            <p className='text-opacity-30 text-white text-[15px] text-left mt-4'>Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
            <div className='mt-20 text-base text-white'>
                <div className='flex justify-start items-center mb-10 cursor-pointer'>
                    <img src={Home} alt='home' className='w-[1.75vw] h-[1.75vw] mr-4' />
                    <span>Home</span>
                </div>
                <div className='flex justify-start items-center mb-10 cursor-pointer'>
                    <img src={Card} alt='card' className='w-[1.75vw] h-[1.75vw] mr-4' />
                    <span className='text-[#01D167] font-bold'>Cards</span>
                </div>
                <div className='flex justify-start items-center mb-10 cursor-pointer'>
                    <img src={Payments} alt='payments' className='w-[1.75vw] h-[1.75vw] mr-4' />
                    <span>Payments</span>
                </div>
                <div className='flex justify-start items-center mb-10 cursor-pointer'>
                    <img src={Credit} alt='credit' className='w-[1.75vw] h-[1.75vw] mr-4' />
                    <span>Credit</span>
                </div>
                <div className='flex justify-start items-center mb-10 cursor-pointer'>
                    <img src={Account} alt='account' className='w-[1.75vw] h-[1.75vw] mr-4' />
                    <span>Settings</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar