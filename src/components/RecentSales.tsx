import { useEffect, useState } from 'react'
import CardFilter from './CardFilter'
import './recentSales.css'
import RecentSalesTable from './RecentSalesTable'

function RecentSales() {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('Today')

  const handleFilterChange = (filter: string) => {
    setFilter(filter)
  }

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/recent-sales')
      const data = await res.json()
      setItems(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
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
