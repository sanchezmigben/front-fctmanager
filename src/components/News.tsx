import { useEffect, useState } from 'react'
import './news.css'
import CardFilter from './CardFilter'
import NewsPostItem from './NewsPostItem'

interface INews {
  _id: number
  img: string
  title: string
  subtitle: string
  category: string
  id: string
}

function News() {
  const [news, setNews] = useState([])
  const [filter, setFilter] = useState('Today')

  const handleFilterChange = (filter: string) => {
    setFilter(filter)
  }

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/news')
      const data = await res.json()
      setNews(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='card'>
      <CardFilter filterChange={handleFilterChange} />

      <div className='card-body pb-0'>
        <h5 className='card-title'>
          News &amp; Updates <span>| {filter}</span>
        </h5>

        <div className='news'>
          {news &&
            news.length > 0 &&
            news.map((news: INews) => (
              <NewsPostItem key={news._id} {...news} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default News
