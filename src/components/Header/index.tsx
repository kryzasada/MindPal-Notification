import Navbar from "@components/Navbar"
import { increment } from "@actions/notifications"
import { useDispatch } from "react-redux"
import "./Header.sass"

const Header = () => {
  const dispatch = useDispatch()

  return (
    <header className="header">
      <Navbar />
      <button onClick={() => dispatch(increment())}>click</button>
    </header>
  )
}

export default Header