import { FaRegFileLines } from "react-icons/fa6"
import "./NotificationRow.sass"
import Button from "@components/Button"

interface NotificationRowProps {
  user: string
  company: string
  document: string
  project: string
  timestamp: string
  icon: string
}

const NotificationRow: React.FC<NotificationRowProps> = ({ user, company, document, project, timestamp, icon }) => {
  return (
    <div className="notification-row">
      <div className="notification-row__icon">
        <FaRegFileLines />
      </div>
      <div className="notification-row__description">
        <p>
          <span className="highlight">{user}</span> from <span className="highlight">{company}</span> has requested a {document} for their project <span className="highlight">{project}</span>
        </p>
        <div className="notification-row__timestamp">{timestamp}</div>
      </div>
      <Button text=" " size="xsmall" />
    </div>
  )
}

export default NotificationRow
