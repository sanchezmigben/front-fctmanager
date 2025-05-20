interface IRecentActivityItem {
  _id: number
  time: string
  color: string
  content: string
  highlight: string
  id: string
}

function RecentActivityItem({
  _id,
  time,
  color,
  content,
  highlight,
  id
}: IRecentActivityItem) {
  return (
    <div className='activity-item d-flex'>
      <div className='activity-label'>{time}</div>

      <i
        className={`bi bi-circle-fill activity-badge ${color} align-self-start`}
      ></i>

      {highlight === '' ? (
        <div className='activity-content'>{content}</div>
      ) : (
        <div className='activity-content'>
          {content.substring(0, content.indexOf(highlight))}

          <a href='#' className='fw-bold text-dark'>
            {highlight}
          </a>

          {content.slice(content.indexOf(highlight) + highlight.length, -1)}
        </div>
      )}
    </div>
  )
}

export default RecentActivityItem
