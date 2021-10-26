import React from 'react';
import ForecastItem from './ForecastItem';

const weatherImgLink = 'http://openweathermap.org/img/wn/'

const WeatherApp = ({ weather, forecast, units }) => {
    const createDate = () => {
        const nD = new Date()

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',]

        const hour = nD.getHours()
        let minute = nD.getMinutes()
        minute = minute < 10 ? `0${minute}` : minute
        const day = nD.getDay()

        const date = `${hour}:${minute} | ${days[day]}`

        return date
    }

    const temperature = () => {
        return units === 'metric' 
            ?  `${Math.round(weather.temp)}ºC`
            : `${Math.round(weather.temp * 1.8 + 32)}ºF`
    }

    const windSpeed = () => {
        const speed = weather.windSpeed * 3.6
        return units === 'metric'
            ? `${Math.round(speed)}km/h`
            : `${Math.round(speed * 0.6)}mph`
    }

    const bodyGradient = () => {
        weather.temp < 10 
            ? document.body.style.backgroundPosition = 'right' 
            : weather.temp >= 25
                ? document.body.style.backgroundPosition = 'left'
                : document.body.style.backgroundPosition = 'center'
    }

    return (
        <div className='weather-app'>
            {bodyGradient()}
            <div className="container-fluid">
                <div className='main'>
                    <div className="row primary-info">
                        <div className='col-12 col-sm-6'>
                            <div className='location'>
                                {weather.city}, {weather.country}
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='date'>
                                {createDate()}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-12'>
                            <div className='main-weather'>
                                <p className='main-temp'>
                                    {temperature()}
                                </p>
                                <img src={`${weatherImgLink}${weather.icon}@2x.png`} alt='Weather Icon' />
                                <ul className='main-ul'>
                                    <li className='main-li'><span className='li-title'>Wind Speed:</span> {windSpeed()}</li>
                                    <li className='main-li'><span className='li-title'>Pressure:</span> {weather.pressure}hPa</li>
                                    <li className='main-li'><span className='li-title'>Humidity:</span> {weather.humidity}%</li>
                                    <li className='main-li'><span className='li-title'>Weather:</span> {weather.weather}</li>
                                    <li className='main-li'><span className='li-title'>Clouds:</span> {weather.clouds}%</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='forecast'>
                <div className="container-fluid">
                    <div className='row'>
                        {Object.values(forecast).map(item => 
                            <ForecastItem 
                                key={item.dt} 
                                time={item.dt_txt} 
                                temp={item.main.temp} 
                                icon={item.weather[0].icon} 
                                units={units}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp