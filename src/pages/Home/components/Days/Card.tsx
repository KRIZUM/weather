import React from 'react';
import { Day } from './Days';
import s from './Days.module.scss'
import {WeatherWeek} from "../../../../store/types/types";

interface Props {
    day: Day
    weather_week: WeatherWeek
}

export const Card = ({day, weather_week}: Props) => {
    return (
        <div className={s.card}>
            <div className={s.day}> {day.day}</div>
            <div className={s.img}> {day.icon}</div>
            <div className={s.temp_day}> {day.temp_day}</div>
            <div className={s.temp_night}> {day.temp_night}</div>
            <div className={s.info}> {day.info}</div>
        </div>
    )
}