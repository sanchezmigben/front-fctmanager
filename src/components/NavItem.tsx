interface Props {
  icon: string
  name: string
}

function NavItem({ icon, name }: Props) {
  return (
    <li className='nav-item'>
      <a href='#' className='nav-link collapsed'>
        <i className={icon}></i>
        <span>{name}</span>
      </a>
    </li>
  )
}

export default NavItem
