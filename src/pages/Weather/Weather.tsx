import React, { useEffect, useState } from 'react'
import Styles from './Weather.module.css'
import { Forecasts } from '../../Types/Weather/type'
import WeatherCard from '../../components/Weather/WeatherCard'

const BASE_URL = 'https://weather.tsukumijima.net/api/forecast'

const Weather = () => {
  const [weatherData, setWeatherData] = useState<Forecasts>({ forecasts: [] })

  useEffect(() => {
    const fetchForecasts = async () => {
      try {
        const response = await fetch(`${BASE_URL}?city=400040`)
        if (!response.ok) {
          throw new Error('Weather data could not be fetched')
        }
        const data = (await response.json()) as Forecasts
        setWeatherData(data)
      } catch (err) {
        console.error('Failed', err)
      }
    }

    fetchForecasts()
  }, [])

  return (
    <div className={Styles.centeredContainer}>
      <div className={Styles.weatherContainer}>
        <h1 className={Styles.headerTitle}>天気予報</h1>
        <div className={Styles.cardContainer}>
          {weatherData.forecasts.map((forecast, index) => (
            <WeatherCard key={index} forecast={forecast} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Weather
