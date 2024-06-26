import { useEffect, useState } from "react"
import { BiSolidBell, BiSolidBellRing } from "react-icons/bi"
import { LiaCheckDoubleSolid } from "react-icons/lia"
import { useDispatch, useSelector } from "react-redux"
import Button from "@components/Button"
import CollapsiblePanel from "@components/CollapsiblePanel"
import SettingsPanel from "@components/SettingsPanel"
import RadioButton from "@components/RadioButton"
import CircleNumber from "@components/CircleNumber"
import NotificationRow, { NotificationRowDescription } from "@components/NotificationRow"
import VerticalInputs from "@components/VerticalInputs"
import { setNotificationsCount } from "@actions/notificationsCount"
import { selectNotificationsCount, selectUnRead } from "@selectors/notificationsCount"
import { getAllNotification, getNotificationCount } from "@api/FakeNotification"
import { selectNotifications, selectUnReadNotifications } from "@selectors/notifications"
import { changeAllReadOnNotifications, changeReadOnNotifications, setNotifications } from "@actions/notifications"
import { LuLoader2 } from "react-icons/lu"
import "./NotificationPanel.sass"
import { Notification } from '@actions/notifications'

const NotificationPanel = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('all')
  const [loadNotification, setLoadNotification] = useState(false)
  const dispatch = useDispatch()

  const notificationCount = useSelector(selectNotificationsCount)
  const notificationUnReadCount = useSelector(selectUnRead)
  const notifications = useSelector(selectNotifications)
  const notificationsUnRead = useSelector(selectUnReadNotifications)

  //Todo add interval to check count change
  useEffect(() => {
    getNotificationCount()
      .then(payload => {
        if (notificationCount.total === 0) {
          dispatch(setNotificationsCount(payload))
        }
      })
  }, [])


  useEffect(() => {
    if (isOpen && notificationCount.total !== notifications.length) {
      setLoadNotification(true)

      getAllNotification()
        .then(data => dispatch(setNotifications(sortNotifications(data))))
        .finally(() => setLoadNotification(false))
    }
  }, [isOpen, notificationCount])

  const handleNotificationRowOnClick = (id: number) => {
    dispatch(changeReadOnNotifications(id))
    dispatch(setNotificationsCount({ ...notificationCount, unRead: notificationCount.unRead - 1 }))
  }

  const handleMarkAllAsReadOnClick = () => {
    dispatch(changeAllReadOnNotifications())
    dispatch(setNotificationsCount({ ...notificationCount, unRead: 0 }))
  }

  return (
    <div className="notification-panel">
      <>
        <Button
          icon={
            !isOpen && notificationUnReadCount > 0
              ? BiSolidBellRing
              : BiSolidBell
          }
          onClick={() => setIsOpen((open) => !open)} />

        {
          notificationUnReadCount > 0 &&
          <CircleNumber
            number={notificationUnReadCount}
            className="notification-panel__number"
          />
        }
      </>

      {
        isOpen &&
        <CollapsiblePanel>
          <>
            <div className="notification-panel__title">
              <h3>Notifications</h3>
              {
                notificationUnReadCount > 0 &&
                <CircleNumber number={notificationUnReadCount} />
              }
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
              <Button size="small" icon={LiaCheckDoubleSolid} text="Mark all as read" transparent onClick={handleMarkAllAsReadOnClick}/>
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
              {selected === 'all' ?
                notifications.length > 0
                  ?
                  notifications.map(item =>
                    <NotificationRow timestamp={item.timestamp} read={item.read} id={item.id} key={item.id} onClick={handleNotificationRowOnClick}>
                      <NotificationRowDescription type={item.type} description={item.description} />
                    </NotificationRow>
                  )
                  :
                  (
                    <div className="notification-panel__content-text">
                      {
                        loadNotification
                          ? <LuLoader2 className="notification-panel__loading-icon" />
                          : <span>No notifications</span>
                      }
                    </div>
                  ) : (
                  notificationsUnRead?.map(item =>
                    <NotificationRow key={item.id} timestamp={item.timestamp} id={item.id}>
                      <NotificationRowDescription type={item.type} description={item.description} />
                    </NotificationRow>
                  )
                )}
            </div>
          </>
        </CollapsiblePanel>
      }
    </div >
  )
}

export default NotificationPanel

const sortNotifications = (notifications: Notification[]): Notification[] => {
  return notifications.sort((a, b) => {
    if (a.read === b.read) {
      return a.id - b.id
    }
    return a.read ? 1 : -1
  })
}
