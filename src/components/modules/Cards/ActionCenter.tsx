import Freeze from '../../../assets/Freeze.png'
import Spend from '../../../assets/spendlimit.png'
import GPay from '../../../assets/GPay.png'
import Replace from '../../../assets/Replace.png'
import Deactivate from '../../../assets/Deactivate.png'

const ActionCenter = ({ handleFreeze, isFreeze }: { handleFreeze: () => void, isFreeze: boolean }) => {
    return (
        <div className='actionBtns bg-[#EDF3FF] rounded-xl text-[#0C365A] text-[13px] flex items-center justify-between mt-10 w-[414px] h-[116px] p-8'>
            <div className='flex flex-col w-12 items-center cursor-pointer' onClick={handleFreeze}>
                <img src={Freeze} alt='freeze' className='h-8 w-8' />
                <div className='text-center mt-1'>{isFreeze ? "Unfreeze Card" : "Freeze Card"}</div>
            </div>
            <div className='flex flex-col w-16 items-center cursor-pointer'>
                <img src={Spend} alt='Spend' className='h-8 w-8' />
                <div className='text-center mt-1'>Set spend limit</div>
            </div>
            <div className='flex flex-col w-12 items-center cursor-pointer'>
                <img src={GPay} alt='GPay' className='h-8 w-8' />
                <div className='text-center mt-1'>Add to GPay</div>
            </div>
            <div className='flex flex-col w-12 items-center cursor-pointer'>
                <img src={Replace} alt='Replace' className='h-8 w-8' />
                <div className='text-center mt-1'>Replace Card</div>
            </div>
            <div className='flex flex-col w-12 items-center cursor-pointer'>
                <img src={Deactivate} alt='Deactivate' className='h-8 w-8' />
                <div className='text-center mt-1'>Cancel Card</div>
            </div>
        </div>
    )
}

export default ActionCenter