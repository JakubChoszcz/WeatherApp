import React, { useState } from 'react';
import Options from './components/Options';
import WeatherApp from './components/WeatherApp';
import Err from './components/Err'

const API = {
    base: process.env.REACT_APP_API_BASE,
    key: process.env.REACT_APP_API_KEY
}

const App = () => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)

    const [input, setInput] = useState('')
    const [weather, setWeather] = useState('')
    const [forecast, setForecast] = useState('')
    
    const [isErrOpen, setIsErrOpen] = useState(false)

    const [units, setUnits] = useState('metric')
    const [forecastNumber, setForecastNumber] = useState(6)

    const search = e => {
        if (e.key === 'Enter') {
            fetch(`${API.base}forecast?q=${input}&units=metric&appid=${API.key}`)
            .then(response => response.json())
            .then(data => (
                setWeather({
                    city: data.city.name,
                    country: data.city.country,
                    temp: data.list[0].main.temp,
                    icon: data.list[0].weather[0].icon,
                    windSpeed: data.list[0].wind.speed,
                    pressure: data.list[0].main.pressure,
                    humidity: data.list[0].main.humidity,
                    weather: data.list[0].weather[0].main,
                    clouds: data.list[0].clouds.all
                }),

                setForecast(data.list.splice(1,forecastNumber))
            ))
            .catch(err => setIsErrOpen(true))
            setInput('')
        }
    }

    return (
        <>
            <div className='search-bar'>
                <input 
                    className='search-input'
                    type='text'
                    placeholder='Search Location'
                    onChange={e => setInput(e.target.value)}
                    onKeyPress={search}
                    value={input}
                />
            </div>

            <button className='option-button' onClick={() => setIsOptionsOpen(true)}>
                <i className="fas fa-cog"></i>
            </button>
            
            <Options 
                open={isOptionsOpen} 
                onClose={() => setIsOptionsOpen(false)}
                setUnits={(e) => setUnits(e)}
                units={units}
                setNumber={(e) => setForecastNumber(e)}
                number={forecastNumber}
            />

            <Err 
                open={isErrOpen}
                onClose={() => setIsErrOpen(false)}
            />

            {weather === ''
                ?
                    <div className='title-page'>
                        <p className='title'>WeatherApp</p>
                        <p className='author'>by <a href='https://github.com/JakubChoszcz' rel="noreferrer" target='_blank' className='author-link'>Choszcz</a></p>
                    </div> 
                :   
                    <WeatherApp 
                        weather={weather} 
                        forecast={forecast} 
                        units={units}
                    />
            }
        </>
    )
}

export default App