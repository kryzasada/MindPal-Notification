import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCount } from "@selectors/notifications"
import "./Navbar.sass"

const Navbar = () => {
  const selector = useSelector(selectCount)

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/About">About</Link>
      {selector}
    </nav>
  )
}

export default Navbar