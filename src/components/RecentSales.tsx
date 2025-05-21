import { useEffect, useState } from 'react'
import CardFilter from './CardFilter'
import RecentSalesTable from './RecentSalesTable'
import recentSalesData from '../api/recentSales.json'
import './recentSales.css'

interface IRecentSalesItem {
  _id: number
  number: string
  customer: string
  product: string
  price: number
  status: string
}

function RecentSales() {
  const [items, setItems] = useState<IRecentSalesItem[]>([])
  const [filter, setFilter] = useState('Today')

  const handleFilterChange = (filter: string) => {
    setFilter(filter)
  }

  useEffect(() => {
    setItems(recentSalesData)
  }, [])

  return (
    <div className='card recent-sales overflow-auto'>
      <CardFilter filterChange={handleFilterChange} />

      <div className='card-body'>
        <h5 className='card-title'>
          Recent Sales <span>| {filter}</span>
        </h5>

        <RecentSalesTable items={items} />
      </div>
    </div>
  )
}

export default RecentSales
