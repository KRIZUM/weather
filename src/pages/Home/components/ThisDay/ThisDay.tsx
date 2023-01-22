import React from 'react';
import s from './ThisDay.module.scss'
import {Weather} from "../../../../store/types/types";
import {WeatherPicture } from './WeatherPicture';
import moment from "moment";

interface Props {
    weather: Weather,
}

const time = moment().format('LT');



export const ThisDay = ({weather}: Props) => {
    return (
        <div className={s.this_day}>
            <div className={s.top_block}>
               <div className={s.top_block_wrapper}>
                <div className={s.this_temp}>{Math.floor(weather.main.temp)} °</div>
                <div className={s.this_day_name}> Сегодня </div>
               </div>
                <WeatherPicture weather={weather}/>
               </div>
            <div className={s.bottom_block}>
                <div className={s.this_time}>
                    Время:  <span>{time}</span>
                </div>
                <div className={s.this_city}>
                    Город:  <span >{weather.name}</span>
                </div>

            </div>
        </div>
    )
}
