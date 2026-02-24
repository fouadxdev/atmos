import axios from 'axios'

export async function getWeather(location) {
    const geo = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1`)
    if (!geo.data.results) throw new Error('Location not found')
    const {latitude, longitude, name} = geo.data.results[0]

    const currentWeather = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    const forecast = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min`)





    return {
        location: name,
        temperature: currentWeather.data.current_weather.temperature,
        date: forecast.data.daily.time,
        maxTemp: forecast.data.daily.temperature_2m_max,
        minTemp: forecast.data.daily.temperature_2m_min,
    }
}