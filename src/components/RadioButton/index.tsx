import { useState, ChangeEvent } from "react"
import cn from "classnames"
import "./RadioButton.sass"

const RadioButton = ({ group, items, onChange }: RadioButtonProps) => {
  const [selectedItem, setSelectedItem] = useState<string>(() => items[0]?.name)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSelectedItem(value)
    onChange && onChange(value)
  }

  return (
    <div className="radio-button">
      {items.map((item, index) => (
        <label
          key={item.name}
          className={cn(
            "radio-button__label",
            { "radio-button__label--checked": item.name === selectedItem }
          )}>
          <input
            className="radio-button__input"
            type="radio"
            name={group}
            value={item.name}
            defaultChecked={index === 0}
            onChange={handleChange}
          />
          {item.text}
        </label>
      ))}
    </div>
  )
}

export default RadioButton

interface RadioButtonItem {
  text: string
  name: string
}

interface RadioButtonProps {
  group: string
  items: RadioButtonItem[]
  onChange?: (value: string) => void
}
