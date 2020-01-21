import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Day from '../Day/Day';
import Image from '../Image/Image';
import Degrees from '../Degrees/Degrees';

import './weather-app.scss';

const WeatherApp = ({ data }) => { 
    //console.log('data',data);
       
    return (
        <div className="weather-app">
            {(data !== []) && data.map(day => {
                //console.log('data length =>', data.length);
                const days = [
                    'Dim',
                    'Lun',
                    'Mar',
                    'Mer',
                    'Jeu',
                    'Wen',
                    'Sam'
                ];
                const currentDay = new Date(day.valid_date).getDay();
                const dayName = days[currentDay]; 
                //console.log('current day =>', currentDay);
                
                return (
                    <div key={day.valid_date} className="weather-app-day">
                        <Day dayName={dayName} />
                        <Image icon={day.weather.icon} />
                        <Degrees temp={day.temp} />
                    </div>
                )
                }
            )
            }      
        </div>
    )
}

WeatherApp.propTypes = {
    data: PropTypes.array.isRequired,
};

export default WeatherApp;
