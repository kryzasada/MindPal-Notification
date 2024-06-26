import { NotificationRowDescription } from "@components/NotificationRow"
import { selectNotificationById } from "@selectors/notifications"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const Notification = () => {
  const {id} = useParams()
  const notification = useSelector(() => selectNotificationById(Number(id)))

  return (
    <div>
      Notification page, message:
      {
        notification
          ? <NotificationRowDescription
            type={notification.type}
            description={notification.description} />
          : "Incorrect id"
      }
    </div>
  )
}

export default Notification