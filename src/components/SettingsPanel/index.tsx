import { useState } from "react"
import { GoGear } from "react-icons/go"
import { BsFillGearFill } from "react-icons/bs"
import Button from "@components/Button"
import CollapsiblePanel from "@components/CollapsiblePanel"
import "./SettingsPanel.sass"

const SettingsPanel = ({
  title,
  children
}: SettingsPanel) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCard = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="settings-panel">
      <Button
        icon={isOpen ? BsFillGearFill : GoGear}
        onClick={toggleCard}
        size="small"
        transparent
        className="settings-panel__gear"
      />
      {
        isOpen &&
        <CollapsiblePanel>
          <>
            {
              title &&
              <div className="notification-panel__title">
                <h3>{title}</h3>
              </div>
            }
            <div>
              {children}
            </div>
          </>
        </CollapsiblePanel>
      }
    </div>
  )
}

export default SettingsPanel

interface SettingsPanel {
  title?: string,
  children: JSX.Element
}
