import { useEffect, useState } from 'react'
import CardFilter from './CardFilter'
import NewsPostItem from './NewsPostItem'
import newsData from '../api/news.json'
import './news.css'

interface INews {
  _id: number
  img: string
  title: string
  subtitle: string
  category: string
}

function News() {
  const [news, setNews] = useState<INews[]>([])
  const [filter, setFilter] = useState('Today')

  const handleFilterChange = (filter: string) => {
    setFilter(filter)
  }

  useEffect(() => {
    setNews(newsData)
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
