import { useEffect, useState } from 'react'
import CardFilter from './CardFilter'
import RecentActivityItem from './RecentActivityItem'
import recentActivitiesData from '../api/recentActivities.json'
import './recentActivity.css'

interface IRecentActivityItem {
  _id: number
  time: string
  color: string
  content: string
  highlight: string
}

function RecentActivity() {
  const [items, setItems] = useState<IRecentActivityItem[]>([])
  const [filter, setFilter] = useState('Today')

  const handleFilterChange = (filter: string) => {
    setFilter(filter)
  }

  useEffect(() => {
    setItems(recentActivitiesData)
  }, [])

  return (
    <div className='card'>
      <CardFilter filterChange={handleFilterChange} />

      <div className='card-body'>
        <h5 className='card-title'>
          Recent Activity <span>| {filter}</span>
        </h5>

        <div className='activity'>
          {items &&
            items.length > 0 &&
            items.map((item: IRecentActivityItem) => (
              <RecentActivityItem key={item._id} {...item} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default RecentActivity
