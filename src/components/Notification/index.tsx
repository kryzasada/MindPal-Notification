import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import CollapsiblePanel from "@components/CollapsiblePanel"
import { selectNotificationsCount } from "@selectors/notificationsCount"
import { setNotificationsCount } from "@actions/notificationsCount"
import { getNotificationCount } from "@api/FakeNotification"
import { NotificationPanelContent } from "./NotificationPanelContent"
import { NotificationButtonWithCount } from "./NotificationButtonWithCount"
import { NotificationPanelHeader } from "./NotificationHeader"
import "./Notification.sass"

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const dispatch = useDispatch()
  const notificationCount = useSelector(selectNotificationsCount)

  useEffect(() => {
    getNotificationCount()
      .then(payload => {
        if (notificationCount.total === 0)
          dispatch(setNotificationsCount(payload))
      })
      .catch(e => console.error(e))
  }, [])

  useEffect(() => setIsOpen(false), [location])

  return (
    <div className="notification">
      <NotificationButtonWithCount
        open={isOpen}
        handleOpenButton={() => setIsOpen((open) => !open)} />

      {
        isOpen && (
          <CollapsiblePanel>
            <>
              <NotificationPanelHeader />
              <NotificationPanelContent />
            </>
          </CollapsiblePanel>
        )
      }
    </div>
  )
}

export default Notification
