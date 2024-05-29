import { useEffect, useState } from 'react'
import { Modal, Input, message } from 'antd';
import CardsDetails from './CardsDetails'
import Plus from '../../../assets/plus.png'
import { CardInterface } from '../../../common/types'
import { randomIntFromInterval, debounce } from '../../../common/utils'
import { fetchCards, updateCards } from '../../../common/api'

const Cards = () => {

    const [cardData, setCardData] = useState<Array<CardInterface>>([])
    const [cardName, setCardName] = useState<string>("")
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    const getCards = async () => {
        try {
            const cards = await fetchCards() as Array<CardInterface>
            setCardData(cards)
        } catch (err) {
            message.error("Something went wrong, try again!")
            console.error('err: ', err);
        }
    }

    useEffect(() => {
        getCards()
    }, [])

    const handleAddCard = async () => {
        try {
            setModalIsOpen(false)

            if (cardName !== "") {

                const month = randomIntFromInterval(1, 12)
                const year = randomIntFromInterval(27, 36)
                const cardNumber = randomIntFromInterval(1000, 9999)

                const newCard = {
                    name: cardName,
                    expiry: `${month < 10 ? "0" : ""}${month}/${year}`,
                    cardNumber: `1234 1234 1234 ${cardNumber}`,
                    freeze: false,
                    id: Date.now()
                }

                const updatedData = [newCard, ...cardData]

                const res = await updateCards(updatedData) as string
                if (res === "ok") {
                    setCardData(updatedData)
                    message.success("Your Card Successfully Added!")
                }
            }
            setCardName("")
        } catch (err) {
            message.error("Something went wrong, try again!")
        }
    }

    const updateCardData = (updatedData: Array<CardInterface>) => {
        setCardData(updatedData)
        localStorage.setItem("cardData", JSON.stringify(updatedData))
        message.success("Your Card Updated Successfully!")
    }

    const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardName(e.target.value)
    }

    return (
        <div className='w-[75vw] p-[4.5vw] flex flex-col items-start'>
            <div className='text-sm text-[#222222] mb-2'>Available balance</div>
            <div className='flex justify-between w-full'>
                <div className='font-bold text-2xl flex items-center'>
                    <div className='bg-[#01D167] w-10 h-6 rounded text-[13px] text-white justify-center items-center flex'>S$</div>
                    <span className='ml-2'>3,000</span>
                </div>
                <div onClick={() => setModalIsOpen(true)} className='bg-[#325BAF] text-white font-bold w-[109px] h-[35px] rounded text-[13px] items-center flex justify-center cursor-pointer' >
                    <img src={Plus} alt='plus' className='w-4 h-4 mr-2' />
                    <span>New card</span>
                </div>
            </div>
            <div className='mt-12 mb-2 text-sm'>
                <span className='mr-4 font-semibold pb-2 cursor-pointer' style={{ borderBottom: "2px solid #23CEFD" }}>My debit cards</span>
                <span className='text-[#222222] text-opacity-30 cursor-pointer'>All company cards</span>
            </div>
            <CardsDetails cardData={cardData} updateCardData={updateCardData} />
            <Modal
                title="Enter Your Name"
                open={modalIsOpen}
                onOk={handleAddCard}
                onCancel={() => setModalIsOpen(false)}
            >
                <Input onChange={debounce(handleCardNameChange, 500)} type='text' placeholder='Card Name' />
            </Modal>
        </div>
    )
}

export default Cards