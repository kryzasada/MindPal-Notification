import cn from "classnames"
import "./CircleNumber.sass"

const CircleNumber = ({
  number,
  className
}: CircleNumberProps) => {
  return <div className={cn("circle-number", className)}>{number}</div>
}

export default CircleNumber

interface CircleNumberProps {
  number: number
  className?: string
}