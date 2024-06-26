import { FaRegFileLines } from "react-icons/fa6"
import { BsMotherboard } from "react-icons/bs"
import { SlFire } from "react-icons/sl"

interface NotificationRowIconProps {
  type: string
}

const iconComponentsMap: { [key: string]: React.FC<any> } = {
  'Request': FaRegFileLines,
  'Status change': SlFire,
  'New feature': BsMotherboard,
}

const NotificationRowIcon = ({ type }: NotificationRowIconProps) => {
  const DescriptionComponent = iconComponentsMap[type]
  return <DescriptionComponent/>
}

export default NotificationRowIcon