import { useState } from 'react'
import './card.css'
import CardFilter from './CardFilter'

interface Card {
  _id: number
  name: string
  icon: string
  amount: number
  percentage: number
  active: boolean
}

function Card({ _id, name, icon, amount, percentage, active }: Card) {
  const [filter, setFilter] = useState('Today')

  const handleFilterChange = (filter: string) => {
    setFilter(filter)
  }

  return (
    <div className='col-xxl-4 col-md-6'>
      <div className='card info-card sales-card'>
        <CardFilter filterChange={handleFilterChange} />

        <div className='card-body'>
          <h5 className='card-title'>
            {name} <span>| {filter}</span>
          </h5>

          <div className='d-flex align-items-center'>
            <div className='card-icon rounded-circle d-flex align-items-center justify-content-center'>
              <i className={icon}></i>
            </div>
            <div className='ps-3'>
              <h6>
                {name === 'Revenue'
                  ? '$' + amount.toLocaleString()
                  : amount.toLocaleString()}
              </h6>
              <span
                className={`
                ${
                  percentage > 0 ? 'text-success' : 'text-danger'
                } small pt-1 fw-bold
                `}
              >
                {percentage > 0 ? percentage * 100 : -percentage * 100}%
              </span>
              <span className='text-muted small pt-2 ps-1'>
                {percentage > 0 ? 'increase' : 'decrease'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
