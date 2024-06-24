import Navbar from "@components/Navbar"
import Notification from "@components/Notification"
import "./Header.sass"

const Header = () => {
  // const dispatch = useDispatch()

  return (
    <header className="header">
      <div className="header__content">
        <Navbar items={data} />
        <Notification />
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