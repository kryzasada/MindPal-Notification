import { useDispatch, useSelector } from "react-redux"
import { LuLoader2 } from "react-icons/lu"
import NotificationRow, { NotificationRowDescription } from "@components/NotificationRow"
import { selectNotificationsCount } from "@selectors/notificationsCount"
import { setTrueReadOnNotification } from "@actions/notifications"
import { setNotificationsCount } from "@actions/notificationsCount"


const NotificationRowMeager = ({
  loadNotification,
  notifications,
}: NotificationRowMeagerProps) => {
  const dispatch = useDispatch()
  const notificationCount = useSelector(selectNotificationsCount)

  const handleNotificationRowOnClick = (id: number) => {
    dispatch(setTrueReadOnNotification(id))
    dispatch(setNotificationsCount({ ...notificationCount, unRead: notificationCount.unRead - 1 }))
  }

  const Content = () =>
    notifications.map(item => (
      <NotificationRow
        timestamp={item.timestamp}
        read={item.read}
        id={item.id}
        key={item.id}
        onClick={() => handleNotificationRowOnClick(item.id)}
      >
        <NotificationRowDescription type={item.type} description={item.description} />
      </NotificationRow>
    ))

  return <>
    {
      notifications.length > 0
        ? <Content />
        : <div className="notification__content-information">
          {
            loadNotification
              ? <LuLoader2 className="notification__loading-icon" />
              : <span>No notifications</span>
          }
        </div>
    }
  </>
}

export default NotificationRowMeager

interface Notification {
  id: number
  type: string
  description: any
  timestamp: string
  read: boolean
}

interface NotificationRowMeagerProps {
  loadNotification: boolean
  notifications: Notification[]
}
