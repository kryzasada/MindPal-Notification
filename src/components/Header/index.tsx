import Navbar from "@components/Navbar"
import NotificationPanel from "@components/NotificationPanel"
import "./Header.sass"

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Navbar items={data} />
        <NotificationPanel />
      </div>
    </header>
  )
}

export default Header
const data = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
  { name: 'About', path: '/about' }
]