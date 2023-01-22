import {GlobalSvgSelector} from "../../../../assets/images/global/globalSvgSelector";
import React from "react";
import {Weather} from "../../../../store/types/types";
import snow from '../../../../assets/images/snow-svgrepo-com.svg.svg'
import s from './ThisDay.module.scss'
import thunderstorm from "../../../../assets/images/storm-rain-svgrepo-com.svg";

interface Props {
    weather: Weather
}


export const WeatherPicture = ({weather}: Props) =>{
    if (weather.weather["0"].main === "Clouds"){
        return <GlobalSvgSelector id="mainly_cloudy"/>}
    else if (weather.weather["0"].main === "Thunderstorm"){
        return <img src={thunderstorm} className={s.snow}/>}
    else if (weather.weather["0"].main === "Rain"){
        return <GlobalSvgSelector id="small_rain"/>}
    else if (weather.weather["0"].main === "Snow"){
        return <img src={snow} className={s.snow}/>}
    else if (weather.weather["0"].main === "Clear"){
        return <GlobalSvgSelector id={"sun"}/>}
    else {
        return <GlobalSvgSelector id ="sun"/>
    }
}