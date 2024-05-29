import File from '../../../assets/file.png'
import Next from '../../../assets/next.png'
import Flights from '../../../assets/flights.png'
import Megaphone from '../../../assets/megaphone.png'
import Business from '../../../assets/business.png'

const Transactions = () => {
    return (
        <div className='transactions border-[#F0F0F0] border-solid border rounded'>
            <div className='single-transaction p-4 pl-6' style={{ borderBottom: '1px solid #F5F5F5' }}>
                <div className='flex'>
                    <div className='w-12 h-12 rounded-full bg-[#009DFF1A] flex items-center justify-center'>
                        <img src={File} alt='File' className='w-4 h-4' />
                    </div>
                    <div className='flex flex-col items-start ml-3'>
                        <div className='text-sm font-semibold'>Hamleys</div>
                        <div className='text-[#AAAAAA] text-[13px]'>20 May 2020</div>
                        <div className='flex items-center mt-2'>
                            <div className='w-6 h-5 rounded-full bg-[#325BAF] flex items-center justify-center'>
                                <img src={Business} alt='Business' className='w-[10px] h-[8px] cursor-pointer' />
                            </div>
                            <span className='text-[#325BAF] font-semibold text-xs ml-2'>Refund on debit card</span>
                        </div>
                    </div>
                    <div className='text-[#01D167] font-bold text-sm ml-4 flex items-center h-5'>
                        <span>+ S$ 150</span>
                        <img src={Next} alt='next' className='w-[7px] h-3 ml-2 cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='single-transaction p-4 pl-6' style={{ borderBottom: '1px solid #F5F5F5' }}>
                <div className='flex'>
                    <div className='w-12 h-12 rounded-full bg-[#009DFF1A] flex items-center justify-center'>
                        <img src={Flights} alt='Flights' className='w-4 h-4' />
                    </div>
                    <div className='flex flex-col items-start ml-3'>
                        <div className='text-sm font-semibold'>Hamleys</div>
                        <div className='text-[#AAAAAA] text-[13px]'>20 May 2020</div>
                        <div className='flex items-center mt-2'>
                            <div className='w-6 h-5 rounded-full bg-[#325BAF] flex items-center justify-center'>
                                <img src={Business} alt='Business' className='w-[10px] h-[8px]' />
                            </div>
                            <span className='text-[#325BAF] font-semibold text-xs ml-2'>Charged to debit card</span>
                        </div>
                    </div>
                    <div className='font-bold text-sm ml-4 flex items-center h-5'>
                        <span>- S$ 150</span>
                        <img src={Next} alt='next' className='w-[7px] h-3 ml-2 cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='single-transaction p-4 pl-6' style={{ borderBottom: '1px solid #F5F5F5' }}>
                <div className='flex'>
                    <div className='w-12 h-12 rounded-full bg-[#009DFF1A] flex items-center justify-center'>
                        <img src={Megaphone} alt='Megaphone' className='w-4 h-4' />
                    </div>
                    <div className='flex flex-col items-start ml-3'>
                        <div className='text-sm font-semibold'>Hamleys</div>
                        <div className='text-[#AAAAAA] text-[13px]'>20 May 2020</div>
                        <div className='flex items-center mt-2'>
                            <div className='w-6 h-5 rounded-full bg-[#325BAF] flex items-center justify-center'>
                                <img src={Business} alt='Business' className='w-[10px] h-[8px]' />
                            </div>
                            <span className='text-[#325BAF] font-semibold text-xs ml-2'>Charged to debit card</span>
                        </div>
                    </div>
                    <div className='font-bold text-sm ml-4 flex items-center h-5'>
                        <span>- S$ 150</span>
                        <img src={Next} alt='next' className='w-[7px] h-3 ml-2 cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='single-transaction p-4 pl-6' style={{ borderBottom: '1px solid #F5F5F5' }}>
                <div className='flex'>
                    <div className='w-12 h-12 rounded-full bg-[#009DFF1A] flex items-center justify-center'>
                        <img src={File} alt='File' className='w-4 h-4' />
                    </div>
                    <div className='flex flex-col items-start ml-3'>
                        <div className='text-sm font-semibold'>Hamleys</div>
                        <div className='text-[#AAAAAA] text-[13px]'>20 May 2020</div>
                        <div className='flex items-center mt-2'>
                            <div className='w-6 h-5 rounded-full bg-[#325BAF] flex items-center justify-center'>
                                <img src={Business} alt='Business' className='w-[10px] h-[8px]' />
                            </div>
                            <span className='text-[#325BAF] font-semibold text-xs ml-2'>Charged to debit card</span>
                        </div>
                    </div>
                    <div className='font-bold text-sm ml-4 flex items-center h-5'>
                        <span>- S$ 150</span>
                        <img src={Next} alt='next' className='w-[7px] h-3 ml-2 cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='text-[#01D167] text-[13px] font-semibold bg-[#EDFFF5] py-4 cursor-pointer'>
                View all card transactions
            </div>
        </div>
    )
}

export default Transactions