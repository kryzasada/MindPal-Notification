import { IconType } from "react-icons"
import { MouseEvent } from "react"
import cn from "classnames"
import "./Button.sass"

const Button = ({
  text,
  icon: Icon,
  size = "normal",
  className,
  transparent,
  onClick
}: NotificationButtonProps) => {
  const buttonSizeClassName = `button--${size}`
  return (
    <button
      className={cn(
        className,
        "button",
        { [buttonSizeClassName]: size !== "normal" },
        { "button--icon": Icon && !text },
        { "button--transparent": transparent },
      )}
      onClick={onClick}
    >
      <>
        {Icon && <Icon />}
        {text && <span>{text}</span>}
      </>
    </button >
  )
}

export default Button


export type NotificationButtonProps = (
  | { text: string; icon?: never }
  | { text?: never; icon: IconType }
  | { text: string; icon: IconType }
) & {
  size?: "normal" | "small" | "xsmall"
  transparent?: boolean
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}
