import { Input } from "./input"
import { Textarea } from "./textarea"
import { Label } from "./label"

export function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  disabled,
  placeholder,
  required,
  rows,
}) {
  const Component = type === "textarea" ? Textarea : Input

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className={error ? "text-red-500" : ""}>
        {label} {required && "*"}
      </Label>
      <Component
        id={name}
        name={name}
        type={type === "textarea" ? undefined : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? "border-red-500" : "border-gray-400 text-white"}
        disabled={disabled}
        rows={rows}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}