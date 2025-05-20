import { useEffect, useState } from 'react'
import Card from './Card'

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

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/cards')
      const data = await res.json()
      setCards(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
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
