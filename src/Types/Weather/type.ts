export type WeatherIcon = {
  title: string
  url: string
  width: number
  height: number
}

export type Forecast = {
  dateLabel: string
  date: string
  telop: string
  temperature: {
    max: { celsius?: string } | null
    min: { celsius?: string } | null
  }
  image: WeatherIcon
}

export type Forecasts = {
  forecasts: Forecast[]
}
