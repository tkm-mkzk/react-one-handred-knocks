import { Label } from './Label'
import Styles from './Profile.module.css'
import { useState } from 'react'

type ImageUploadProps = {
  label: string
  onImageChange: (file: File | null) => void
}

export const ImageUpload = ({ label, onImageChange }: ImageUploadProps) => {
  const [previewUrl, setPreviewUrl] = useState<string>('')

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setPreviewUrl(URL.createObjectURL(file))
      onImageChange(file)
    } else {
      onImageChange(null)
    }
  }

  return (
    <div className={Styles.ImageUploadContainer}>
      <Label htmlFor="image-upload">{label}</Label>
      <input
        type="file"
        id="image-upload"
        onChange={handleImageChange}
        accept="image/*"
      />
    </div>
  )
}
