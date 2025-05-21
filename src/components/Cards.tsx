import { useEffect, useState } from 'react'
import Card from './Card'
import cardsData from '../api/cards.json'

interface ICard {
  _id: number
  name: string
  icon: string
  amount: number
  percentage: number
  active: boolean
}

function Cards() {
  const [cards, setCards] = useState<ICard[]>([])

  useEffect(() => {
    setCards(cardsData)
  }, [])

  return (
    <>
      {cards &&
        cards.length > 0 &&
        cards.map((card: ICard) => <Card key={card._id} {...card} />)}
    </>
  )
}

export default Cards
