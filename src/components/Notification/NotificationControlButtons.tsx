import RadioButton from '@components/RadioButton'
import Button from '@components/Button'
import SettingsPanel from '@components/SettingsPanel'
import { LiaCheckDoubleSolid } from 'react-icons/lia'
import { setTrueAllReadOnNotifications } from '@actions/notifications'
import { setNotificationsCount } from '@actions/notificationsCount'
import { useDispatch, useSelector } from 'react-redux'
import { selectNotificationsCount } from '@selectors/notificationsCount'

const NotificationControlButtons = ({
  radioChange
}: NotificationControlButtonsProps) => {
  const dispatch = useDispatch()
  const notificationCount = useSelector(selectNotificationsCount)

  const handleMarkAllAsReadOnClick = () => {
    dispatch(setTrueAllReadOnNotifications())
    dispatch(setNotificationsCount({ ...notificationCount, unRead: 0 }))
  }

  return (
    <div className="notification__buttons">
      <RadioButton
        group={"notification"}
        items={[
          { text: 'All Notifications', name: 'all' },
          { text: 'Unread Notifications', name: 'unread' },
        ]}
        onChange={radioChange}
      />

      <Button
        size="small"
        icon={LiaCheckDoubleSolid}
        text="Mark all as read"
        transparent
        onClick={handleMarkAllAsReadOnClick}
      />

      <SettingsPanel title={"Settings"}>
        <div> </div>
      </SettingsPanel>
    </div>
  )
}

export default NotificationControlButtons

interface NotificationControlButtonsProps {
  radioChange: (value: string) => void
}
