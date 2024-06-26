import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import cn from "classnames"
import "./Navbar.sass"

const Navbar = ({
  items
}: NavbarProps) => {
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      {
        items.map(item =>
          <Link
            key={item.name}
            className={cn("navbar__link", { "current": pathname === item.path })}
            to={item.path}>
            {item.name}
          </Link>
        )
      }
    </nav>
  )
}

export default Navbar

interface NavbarItem {
  name: string,
  path: string
}

interface NavbarProps {
  items: NavbarItem[]
}