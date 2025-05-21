interface INews {
  _id: number
  img: string
  title: string
  subtitle: string
  category: string
}

function NewsPostItem({ img, title, subtitle }: INews) {
  return (
    <div className='post-item clearfix'>
      <img src={img} alt='' />

      <h4>
        <a href='#'>{title}</a>
      </h4>

      <p>{subtitle}...</p>
    </div>
  )
}

export default NewsPostItem
