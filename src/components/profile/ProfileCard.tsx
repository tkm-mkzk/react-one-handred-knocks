import Styles from './Profile.module.css'

type ProfileCardProps = {
  name: string
  birthday: string
  phoneNumber: string
  photo: string
}

export const ProfileCard = ({ name, birthday, phoneNumber, photo }: ProfileCardProps) => {
  return (
    <div id="profile-card" className={Styles.card}>
      <div className={Styles.photoContainer}>
        {photo && <img src={photo} alt="profile" className={Styles.photo} />}
      </div>
      <h3 className={Styles.text}>{name}</h3>
      <p className={Styles.text}>{birthday}</p>
      <p className={Styles.text}>{phoneNumber}</p>
    </div>
  )
}
