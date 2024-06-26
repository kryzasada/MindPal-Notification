import { useSelector } from "react-redux"
import { selectUnread } from "@selectors/notificationsCount"
import CircleNumber from "@components/CircleNumber"

export const NotificationPanelHeader = () => {
  const countUnread = useSelector(selectUnread)

  return (
    <div className="notification__title">
      <h3>Notifications</h3>
      {
        countUnread > 0 &&
        <CircleNumber number={countUnread} />
      }
    </div>
  )
}