interface RecentSalesItem {
  _id: number
  number: string
  customer: string
  product: string
  price: number
  status: string
}

interface RecentSalesTableProps {
  items: RecentSalesItem[]
}

function RecentSalesTable({ items }: RecentSalesTableProps) {
  const handleStatus = (status: string): string => {
    const statusColors: { [key: string]: string } = {
      Approved: 'success',
      Pending: 'warning',
      Rejected: 'danger'
    }

    return statusColors[status] || 'success'
  }

  return (
    <table className='table table-borderless datatable'>
      <thead className='table-light'>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Customer</th>
          <th scope='col'>Product</th>
          <th scope='col'>Price</th>
          <th scope='col'>Status</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.length > 0 &&
          items.map(item => {
            return (
              <tr key={item._id}>
                <th scope='row'>
                  <a href='#'>{item.number}</a>
                </th>
                <td>{item.customer}</td>
                <td>
                  <a href='#' className='text-primary'>
                    {item.product}
                  </a>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <span className={`badge bg-${handleStatus(item.status)}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default RecentSalesTable
