import Styles from './Profile.module.css'

type LabelProps = {
  htmlFor: string
  children: React.ReactNode
}

export const Label = ({ htmlFor, children }: LabelProps) => {
  return (
    <label className={Styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  )
}
