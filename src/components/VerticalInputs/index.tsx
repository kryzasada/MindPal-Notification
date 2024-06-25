import { useEffect, useState } from 'react'
import './VerticalInputs.sass'

interface VerticalInputsProps {
  name: string
  inputs: string[]
  onChange: (selectedInputs: { [key: string]: boolean }) => void
}

const VerticalInputs = ({
  name,
  inputs,
  onChange
}: VerticalInputsProps) => {
  const [selectedInputs, setSelectedInputs] = useState<{ [key: string]: boolean }>(
    inputs.reduce((acc, input) => ({ ...acc, [input]: true }), {})
  )

  useEffect(() => {
    onChange(selectedInputs)
  }, [])

  const handleSelect = (input: string) => {
    const updatedInputs = { ...selectedInputs, [input]: !selectedInputs[input] }
    setSelectedInputs(updatedInputs)
    onChange(updatedInputs)
  }

  return (
    <div className="custom-inputs">
      {inputs.map(input => (
        <label key={input} className={`input-item ${selectedInputs[input] ? 'selected' : ''}`}>
          <input
            type="checkbox"
            checked={selectedInputs[input]}
            onChange={() => handleSelect(input)}
          />
          {input}
        </label>
      ))}
    </div>
  )
}

export default VerticalInputs