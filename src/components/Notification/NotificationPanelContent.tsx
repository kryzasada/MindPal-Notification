import { useEffect, useState } from "react"
import NotificationControlButtons from "./NotificationControlButtons"
import { useDispatch, useSelector } from "react-redux"
import NotificationRowMeager from "./NotificationRowMeager"
import { selectNotifications, selectUnReadNotifications } from "@selectors/notifications"
import { selectTotal } from "@selectors/notificationsCount"
import { getAllNotification } from "@api/FakeNotification"
import { setNotifications } from "@actions/notifications"

export const NotificationPanelContent = () => {
  const [selected, setSelected] = useState('all')
  const [loading, setLoading] = useState(false)
  const handleRadioButtonChange = (value: string) => setSelected(value)

  const dispatch = useDispatch()
  const notifications = useSelector(selectNotifications)
  const notificationTotal = useSelector(selectTotal)
  const notificationsUnRead = useSelector(selectUnReadNotifications)

  useEffect(() => {
    if (notificationTotal !== notifications.length) {
      setLoading(true)

      getAllNotification()
        .then(data => dispatch(setNotifications(data)))
        .catch(e => console.error(e))
        .finally(() => setLoading(false))
    }
  }, [notificationTotal])

  return (
    <>
      <NotificationControlButtons radioChange={handleRadioButtonChange} />

      <div className="notification__content">
        {
          selected === 'all'
            ? <NotificationRowMeager loadNotification={loading} notifications={notifications} />
            : <NotificationRowMeager loadNotification={loading} notifications={notificationsUnRead} />
        }
      </div>
    </>
  )
}