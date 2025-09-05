import React,{useState,useEffect} from 'react'

const LahoreCurrentWeather = () => {
  const[lahoretemperature,setLahoretemperature]=useState(null)
  const [lahorewindspeed,setLahorewindspeed]=useState(null)

  async function currentWeather(){
      const req = await fetch ("https://api.open-meteo.com/v1/forecast?latitude=31.5204&longitude=74.3587&current_weather=true")
      const json = await req.json()
      setLahoretemperature(json.current_weather.temperature)
      setLahorewindspeed(json.current_weather.windspeed)
  }
  
  useEffect(() =>{
      currentWeather()
  },[]) 

  return (
    <>
      <h1>Lahore Current Weather</h1>
      <p>Temperature: {lahoretemperature ?? "Loading..."}</p>
      <p>Wind Speed: {lahorewindspeed ?? "Loading..."}</p>
    </>
  )
}

export default LahoreCurrentWeather