/**
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange
 */

import { useId } from "react"

export default function Input({ type, label, ...props }) {
  const id = useId()
  const InputComponent = type === "textarea" ? "textarea" : "input"

  return (
    <div>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <InputComponent type={type} className="form-control" id={id} {...props} />
    </div>
  )
}
