import { useEffect, useState } from 'react'
import CardFilter from './CardFilter'
import TopSellingItem from './TopSellingItem'
import topSellingsData from '../api/topSellings.json'
import './topSelling.css'

interface ITopSellingItem {
  _id: number
  preview: string
  name: string
  price: number
  sold: number
}

function TopSelling() {
  const [items, setItems] = useState<ITopSellingItem[]>([])
  const [filter, setFilter] = useState('Today')

  const handleFilterChange = (filter: string) => {
    setFilter(filter)
  }

  useEffect(() => {
    setItems(topSellingsData)
  }, [])

  return (
    <div className='card top-selling overflow-auto'>
      <CardFilter filterChange={handleFilterChange} />

      <div className='card-body pb-0'>
        <h5 className='card-title'>
          Top Selling <span>| {filter}</span>
        </h5>

        <table className='table table-borderless'>
          <thead className='table-light'>
            <tr>
              <th scope='col'>Preview</th>
              <th scope='col'>Product</th>
              <th scope='col'>Price</th>
              <th scope='col'>Sold</th>
              <th scope='col'>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.length > 0 &&
              items.map((item: ITopSellingItem) => (
                <TopSellingItem key={item._id} {...item} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TopSelling
