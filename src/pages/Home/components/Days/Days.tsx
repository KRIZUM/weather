import React from 'react';
import { Card } from './Card';
import s from './Days.module.scss'
import {WeatherWeek} from "../../../../store/types/types";
import {
    WeatherWeekFirstPicture, WeatherWeekFivePicture, WeatherWeekFourPicture,
    WeatherWeekSecondPicture,
    WeatherWeekThirdPicture
} from "../ThisDay/WeatherWeekPicture";

const dayWeather = new Date

interface Props {
weather_week: WeatherWeek
}


export interface Day {
    day: any;
    temp_day: any;
    temp_night: any;
    info : any;
    icon : any
}

export const Days = ({weather_week}: Props) => {
  const days = [
        {
            day:  `${(dayWeather.getDate())}.${dayWeather.getMonth()+1}.${dayWeather.getFullYear()}`,
            temp_day: `${Math.floor(weather_week.list["0"].main.temp_max)} °`,
            temp_night: `${Math.floor(weather_week.list["4"].main.temp_min)} °`,
            info:  weather_week.list["0"].weather["0"].description,
            icon: <WeatherWeekFirstPicture weather_week={weather_week}/>
        },
        {
            day: `${(dayWeather.getDate()+1)}.${dayWeather.getMonth()+1}.${dayWeather.getFullYear()}`,
            temp_day: `${Math.floor(weather_week.list["8"].main.temp_max)} °`,
            temp_night: `${Math.floor(weather_week.list["12"].main.temp_min)} °`,
            info: weather_week.list["8"].weather["0"].description,
            icon: <WeatherWeekSecondPicture weather_week={weather_week}/>
        },
        {
            day: `${(dayWeather.getDate()+2)}.${dayWeather.getMonth()+1}.${dayWeather.getFullYear()}`,
            temp_day: `${Math.floor(weather_week.list["16"].main.temp_max)} °`,
            temp_night: `${Math.floor(weather_week.list["20"].main.temp_min)} °`,
            info:  weather_week.list["16"].weather["0"].description,
            icon: <WeatherWeekThirdPicture weather_week={weather_week}/>
        },
        {
            day: `${(dayWeather.getDate()+3)}.${dayWeather.getMonth()+1}.${dayWeather.getFullYear()}`,
            temp_day: `${Math.floor(weather_week.list["24"].main.temp_max)} °`,
            temp_night: `${Math.floor(weather_week.list["28"].main.temp_min)} °`,
            info:  weather_week.list["24"].weather["0"].description,
            icon: <WeatherWeekFourPicture weather_week={weather_week}/>
        },
        {
            day: `${(dayWeather.getDate()+4)}.${dayWeather.getMonth()+1}.${dayWeather.getFullYear()}`,
            temp_day: `${Math.floor(weather_week.list["32"].main.temp_max)} °`,
            temp_night: `${Math.floor(weather_week.list["39"].main.temp_min)} °`,
            info:  weather_week.list["32"].weather["0"].description,
            icon: <WeatherWeekFivePicture weather_week={weather_week}/>
        },
    ];
    return (
        <>
        <div className={s.days}>
            {days.map((day: Day) => (
                <Card day={day} key={day.day} weather_week={weather_week}/>
            ))}
        </div>
        </>
            )
}