import { useState, useEffect } from 'react'
import Group from '../../../assets/Group.png'
import down from '../../../assets/down.png'
import up from '../../../assets/up.png'
import Payments from '../../../assets/Payments.png'
import Eye from '../../../assets/eye.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import { CardInterface } from '../../../common/types'
import Card from './Card'
import ActionCenter from './ActionCenter'
import Transactions from './Transactions'

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => {
        return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />;
    },
};

const CardsDetails = ({ cardData, updateCardData }: { cardData: Array<CardInterface>, updateCardData: (updatedData: Array<CardInterface>) => void }) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0)
    const [isFreeze, setIsFreeze] = useState<boolean>(false)

    useEffect(() => {
        if (cardData && cardData.length) {
            const freezeState = cardData[currentSlideIndex].freeze
            setIsFreeze(freezeState)
        }
    }, [currentSlideIndex, cardData])

    const handleFreeze = () => {
        const updatedCardData = [...cardData]
        updatedCardData[currentSlideIndex].freeze = !updatedCardData[currentSlideIndex].freeze
        updateCardData(updatedCardData)
    }

    return (
        <div className='flex border-[#FCFCFC] border-solid border rounded shadow-md w-full mt-2 p-8'>
            <div className='left-section w-[50%]'>
                <div className='flex justify-end mr-10 mb-2 cursor-pointer'>
                    <img src={Eye} alt='eye' className='w-4 h-4 mr-1' />
                    <span className='text-[#01D167] text-xs font-bold'>Show card number</span>
                </div>
                <Slider {...settings} beforeChange={(currentSlide, next) => {
                    setCurrentSlideIndex(next)
                }}>
                    {
                        cardData.map((card, index) => {
                            return <Card {...card} key={index} />
                        })
                    }
                </Slider>
                <ActionCenter handleFreeze={handleFreeze} isFreeze={isFreeze} />
            </div>
            <div className='right-section w-[366px] ml-12'>
                <div className='card-details w-full shadow-md rounded  bg-[#F5F9FF] text-[#0C365A] h-[72px] flex items-center justify-between px-6 mb-6'>
                    <div className='flex items-center'>
                        <img src={Group} alt='group' className='w-6 h-6 mr-4' />
                        <span className='text-sm'>Card Details</span>
                    </div>
                    <img src={down} alt='down' className='w-5 h-5 cursor-pointer' />
                </div>
                <div className='card-details w-full shadow-md rounded  bg-[#F5F9FF] text-[#0C365A] h-[72px] flex items-center justify-between px-6'>
                    <div className='flex items-center'>
                        <img src={Payments} alt='group' className='w-6 h-6 mr-4' />
                        <span className='text-sm'>Recent transactions</span>
                    </div>
                    <img src={up} alt='down' className='w-5 h-5 cursor-pointer' />
                </div>
                <Transactions />
            </div>
        </div>
    )
}

export default CardsDetails