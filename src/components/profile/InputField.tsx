import { Label } from './Label'
import Styles from './Profile.module.css'

type InputFieldProps = {
  label: string
  type: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputField = ({ label, type, name, value, onChange }: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        className={Styles.input}
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
