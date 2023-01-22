import React from 'react';
import s from './ThisDayInfo.module.scss'
import cloud from '../../../../assets/images/cloud.png'
import {ThisDayItem} from "./ThisDayItem";
import {Weather} from "../../../../store/types/types";

interface Props {
    weather: Weather;
}

export interface Item {
    icon_id: string;
    name: string;
    value: any;
}

export const ThisDayInfo = ({weather}: Props) => {
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `ощущается как ${Math.floor(weather.main.feels_like)} ° `,
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${weather.main.pressure} мм ртутного столба`,
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: weather.weather["0"].description ,
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${weather.wind.speed} м/c`,
        },
    ];
    return (
        <div className={s.this_day_info}>
            <div className={s.this_day_info_items}>
                {items.map((item: Item) => (
                    <ThisDayItem key={item.icon_id} item={item} />
                ))}
            </div>
            <img className={s.cloud} src={cloud} alt="облако" />
        </div>
    );
};
