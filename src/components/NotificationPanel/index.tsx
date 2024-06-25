import { useState } from "react"
import { BiSolidBell, BiSolidBellRing } from "react-icons/bi"
import { LiaCheckDoubleSolid } from "react-icons/lia"
import Button from "@components/Button"
import CollapsiblePanel from "@components/CollapsiblePanel"
import SettingsPanel from "@components/SettingsPanel"
import RadioButton from "@components/RadioButton"
import CircleNumber from "@components/CircleNumber"
import NotificationRow from "@components/NotificationRow"
import VerticalInputs from "@components/VerticalInputs"
import "./NotificationPanel.sass"

const NotificationPanel = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('all')

  return (
    <div className="notification-panel">
      <>
        <Button
          icon={
            isOpen
              ? BiSolidBell
              : BiSolidBellRing
          }
          onClick={() => setIsOpen((open) => !open)} />

        <CircleNumber number={3} className="notification-panel__number" />
      </>

      {
        isOpen &&
        <CollapsiblePanel>
          <>
            <div className="notification-panel__title">
              <h3>Notifications</h3>
              <CircleNumber number={3} />
            </div>

            <div className="notification-panel__buttons">
              <RadioButton
                group={"notification"}
                items={[
                  { text: 'All Notifications', name: 'all' },
                  { text: 'Unread Notifications', name: 'unread' },
                ]}
                onChange={(value) => setSelected(value)}
              />
              <Button size="small" icon={LiaCheckDoubleSolid} text="Mark all as read" transparent />
              <SettingsPanel>
                {/* TODO: change className */}
                <div className="x">
                  <h4>Display notification type:</h4>
                  <VerticalInputs
                    name="exampleInputs"
                    inputs={['Request', 'Status change', 'New feature']}
                    onChange={() => { }}
                  />
                </div>
              </SettingsPanel>
            </div>

            <div className="notification-panel__content">
              {selected === 'all' ? (
                <>
                  <NotificationRow
                    user="Jan Nowak"
                    company="MindPal"
                    document="Mindocument"
                    project="Minddev"
                    timestamp="yesterday"
                    icon="fas fa-file-alt" // Ikona FontAwesome
                  />
                  <NotificationRow
                    user="Jan Nowak"
                    company="MindPal"
                    document="Mindocument"
                    project="Minddev"
                    timestamp="yesterday"
                    icon="fas fa-file-alt" // Ikona FontAwesome
                  />
                  <NotificationRow
                    user="Jan Nowak"
                    company="MindPal"
                    document="Mindocument"
                    project="Minddev"
                    timestamp="yesterday"
                    icon="fas fa-file-alt" // Ikona FontAwesome
                  />
                  <NotificationRow
                    user="Jan Nowak"
                    company="MindPal"
                    document="Mindocument"
                    project="Minddev"
                    timestamp="yesterday"
                    icon="fas fa-file-alt" // Ikona FontAwesome
                  />
                </>
              ) : (
                <NotificationRow
                  user="Jan Nowak"
                  company="MindPal"
                  document="Mindocument"
                  project="Minddev"
                  timestamp="yesterday"
                  icon="fas fa-file-alt" // Ikona FontAwesome
                />
              )}
            </div>
          </>
        </CollapsiblePanel>
      }
    </div>
  )
}

export default NotificationPanel
