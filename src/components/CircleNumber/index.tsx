import classNames from "classnames";
import "./CircleNumber.sass"
import cn from "classnames"

interface CircleNumberProps {
  number: number
  className?: string
}

const CircleNumber = ({
  number,
  className
}: CircleNumberProps) => {
  return <div className={cn("circle-number", className)}>{number}</div>
};

export default CircleNumber