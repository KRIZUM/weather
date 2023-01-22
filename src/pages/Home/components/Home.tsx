import React, {FC, FormEvent, useEffect, useState} from 'react';
import { Days } from './Days/Days';
import s from './Home.module.scss'
import {ThisDay} from "./ThisDay/ThisDay";
import {ThisDayInfo} from "./ThisDayInfo/ThisDayInfo";
import {useCustomDispatch, useCustomSelector} from "../../../hooks/store";
import {fetchCurrentWeather, fetchWeekWeather} from "../../../store/thunks/fetchCurrentWeather";
import {selectCurrentWeatherData} from "../../../store/selectors";
import {selectWeekWeatherData} from "../../../store/selectorsWeek";



interface Props {
}

export const Home: FC<Props> = () => {

    const [city, setCity] = useState('');
    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(city.trim() === '') {
            return alert('Bad request')
        }
        dispatch(fetchCurrentWeather(city));
        dispatch(fetchWeekWeather(city))
        setCity('');
    }

const dispatch = useCustomDispatch();
        const {weather} = useCustomSelector(selectCurrentWeatherData);
        const {weather_week} = useCustomSelector(selectWeekWeatherData);
        useEffect(() => {
            dispatch(fetchCurrentWeather('Курск'));
            dispatch(fetchWeekWeather('Курск'));
        }, []);
        return (
            <div className={s.home}>
                <form onSubmit={submitHandler} >
                    <input
                        type={"text"}
                        placeholder={"Введите город"}
                        value={city}
                        onChange={changeHandler}
                        className={s.city_name}
                    />
                </form>
                <div className={s.wrapper}>
                    <ThisDay weather={weather}/>
                    <ThisDayInfo weather={weather}/>
                </div>
                <Days weather_week={weather_week}/>
            </div>
        );
    }

