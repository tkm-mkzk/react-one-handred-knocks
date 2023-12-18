import { useState } from 'react'
import Styles from './Profile.module.css'
import { ProfileCard } from '../../components/profile/ProfileCard'
import { InputField } from '../../components/profile/InputField'
import { ImageUpload } from '../../components/profile/ImageUpload'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

type UserProfile = {
  name: string
  birthday: string
  phoneNumber: string
  photo: string
}

const Profile = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: '',
    birthday: '',
    phoneNumber: '',
    photo: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value })
  }

  const handleImageChange = (file: File | null) => {
    if (file) {
      setUserProfile({ ...userProfile, photo: URL.createObjectURL(file) })
    } else {
      setUserProfile({ ...userProfile, photo: '' })
    }
  }

  const handleDownload = async () => {
    const card = document.getElementById('profile-card')
    console.log(card)

    if (card) {
      const canvas = await html2canvas(card)
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF()

      const imgWidth = 210
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
      pdf.save('profile-card.pdf')
    }
  }

  return (
    <div className={Styles.profileContainer}>
      <div className={Styles.formContainer}>
        <InputField
          label="名前"
          type="text"
          name="name"
          value={userProfile.name}
          onChange={handleInputChange}
        />
        <InputField
          label="誕生日"
          type="date"
          name="birthday"
          value={userProfile.birthday}
          onChange={handleInputChange}
        />
        <InputField
          label="電話番号"
          type="text"
          name="phoneNumber"
          value={userProfile.phoneNumber}
          onChange={handleInputChange}
        />
        <ImageUpload label="プロフィール写真" onImageChange={handleImageChange} />
        <button className={Styles.downloadButton} onClick={handleDownload}>
          ダウンロード
        </button>
      </div>
      <div className={Styles.cardContainer}>
        <ProfileCard
          name={userProfile.name}
          birthday={userProfile.birthday}
          phoneNumber={userProfile.phoneNumber}
          photo={userProfile.photo}
        />
      </div>
    </div>
  )
}

export default Profile
