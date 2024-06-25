import { useState } from "react"
import { BiSolidBell, BiSolidBellRing } from "react-icons/bi"
import Button from "@components/Button"
import CollapsiblePanel from "@components/CollapsiblePanel"
import "./Notification.sass"

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCard = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="notification">
      <Button
        icon={
          isOpen
            ? BiSolidBell
            : BiSolidBellRing
        }
        onClick={toggleCard} />

      {
        isOpen &&
        <CollapsiblePanel>
          <div>
          </div>
        </CollapsiblePanel>
      }
    </div>
  )
}

export default Notification
