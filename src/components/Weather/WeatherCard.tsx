import React from 'react'
import Styles from './WeatherCard.module.css'
import { Forecast } from '../../Types/Weather/type'

type WeatherCardProps = {
  forecast: Forecast
}

const WeatherCard: React.FC<WeatherCardProps> = ({ forecast }) => {
  const { dateLabel, date, telop, temperature, image } = forecast
  const tempStr = `最高気温: ${temperature.max?.celsius ?? '---'}° 最低気温: ${
    temperature.min?.celsius ?? '---'
  }°`

  return (
    <div className={Styles.card}>
      <div className={Styles.cardDate}>
        {dateLabel}（{date}）
      </div>
      <div className={Styles.cardWeather}>
        <img src={image.url} alt={image.title} className={Styles.weatherIcon} />
        <p>{telop}</p>
      </div>
      <div className={Styles.cardTemperature}>{tempStr}</div>
    </div>
  )
}

export default WeatherCard
