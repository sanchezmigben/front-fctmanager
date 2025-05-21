interface ITopSellingItem {
  _id: number
  preview: string
  name: string
  price: number
  sold: number
}

function TopSellingItem({ preview, name, price, sold }: ITopSellingItem) {
  return (
    <tr>
      <th scope='row'>
        <a href='#'>
          <img src={preview} alt='' />
        </a>
      </th>
      <td>
        <a href='#' className='text-primary fw-bold'>
          {name}
        </a>
      </td>
      <td>${price.toFixed(2)}</td>
      <td className='fw-bold'>{sold}</td>
      <td>${(price * sold).toFixed(2)}</td>
    </tr>
  )
}

export default TopSellingItem
