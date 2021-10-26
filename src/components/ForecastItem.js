import React from 'react';

const weatherImgLink = 'http://openweathermap.org/img/wn/'

const ForecastItem = ({ time, temp, icon, units }) => {
    let setTime = time.slice(11,-3)
    setTime = setTime.indexOf(0) === 0 ? setTime.slice(1) : setTime

    const temperature = (t) => {
        return units === 'metric' 
            ?  `${Math.round(t)}ºC`
            : `${Math.round(t * 1.8 + 32)}ºF`
    }
    
    return (    
        <div className='col-6 col-md-4 col-xl-2'>
            <div className='forecast-item'>
                <p className='forecast-time'>
                    {setTime}
                </p>
                <p className='forecast-temp'>
                    {temperature(temp)}
                </p>
                <img src={`${weatherImgLink+icon}@2x.png`} alt='Forecast Icon'/>
            </div>
        </div>
    )
}

export default ForecastItem;