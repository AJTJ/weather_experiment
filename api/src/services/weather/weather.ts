import fetch from 'node-fetch'

enum QueryTypes {
  zip = 'zip',
  city = 'city',
}
interface QueryObject {
  queryType: QueryTypes
  data: string
}

const apiKey = process.env.WEATHER_API_KEY

export const getWeather = async (queryObject: QueryObject) => {
  let queryUrl: string
  switch (queryObject.queryType) {
    case QueryTypes.zip:
      queryUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${queryObject.data},US&appid=${apiKey}`
      break
    case QueryTypes.city:
      queryUrl = `http://api.openweathermap.org/data/2.5/weather?q=${queryObject.data}&appid=${apiKey}`
      break
    default:
      break
  }
  const response = await fetch(queryUrl)
  const json = await response.json()

  if (json.cod === '404') {
    return new Error(`${queryObject.data} is not valid, please try again`)
  }

  return {
    data: queryObject.data,
    city: json.name,
    conditions: json.weather[0].main,
    temp: Math.round(((json.main.temp - 273.15) * 9) / 5 + 32),
    icon: `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
  }
}
