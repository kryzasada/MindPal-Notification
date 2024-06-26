import { BiSolidBell, BiSolidBellRing } from "react-icons/bi"
import { useSelector } from "react-redux"
import Button from "@components/Button"
import CircleNumber from "@components/CircleNumber"
import { selectUnread as selectUnread } from "@selectors/notificationsCount"


export const NotificationButtonWithCount = ({
  open, handleOpenButton,
}: NotificationButtonWithCountProps) => {
  const countUnread = useSelector(selectUnread)

  return (
    <>
      <Button
        icon={
          !open && countUnread > 0
            ? BiSolidBellRing
            : BiSolidBell
        }
        onClick={handleOpenButton} />

      {
        countUnread > 0 &&
        <CircleNumber
          number={countUnread}
          className="notification__number" />
      }
    </>
  )
}


interface NotificationButtonWithCountProps {
  open: boolean
  handleOpenButton: () => void
}
