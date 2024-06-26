import Navbar from "@components/Navbar"
import Notification from "@components/Notification"
import data from "@data/navigation.json"
import "./Header.sass"

const Header = () => {
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
