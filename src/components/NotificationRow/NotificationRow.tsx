import Button from "@components/Button"
import NotificationRowIcon from "./NotificationRowIcon"
import cn from "classnames"
import "./NotificationRow.sass"
import { Link } from "react-router-dom"

interface NotificationRowProps {
  id: number
  timestamp: string
  children: JSX.Element
  onClick?: (id: number) => void
  read?: boolean
}

const NotificationRow = ({
  id,
  timestamp,
  children,
  onClick,
  read = false
}: NotificationRowProps) => {
  const handleClick = () => {
    onClick && onClick(id)
  }
  return (
    <Link to={`/notification/${id}`} className={cn("notification-row", { "notification-row--read": read })}>
      <div className="notification-row__icon">
        <NotificationRowIcon type={children.props.type} />
      </div>
      <div className="notification-row__description">
        {
          children
        }
        <div className="notification-row__timestamp">{formatDate(timestamp)}</div>
      </div>
      {
        !read &&
        <Button text="" size="xsmall" onClick={handleClick} className="notification-row__button" />
      }
    </Link>
  )
}

export default NotificationRow


const formatDate = (timestamp: string) => {
  const date = new Date(parseInt(timestamp))
  const today = new Date()

  const yesterday = new Date(today)
  yesterday.setDate(today.getDate() - 1)

  const isToday = (date: Date) =>
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()

  const isYesterday = (date: Date) =>
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()

  if (isToday(date)) {
    return 'today'
  } else if (isYesterday(date)) {
    return 'yesterday'
  } else {
    return date.toLocaleDateString()
  }
}
