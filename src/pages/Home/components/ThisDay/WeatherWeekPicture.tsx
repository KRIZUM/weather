import {GlobalSvgSelector} from "../../../../assets/images/global/globalSvgSelector";
import React from "react";
import {WeatherWeek} from "../../../../store/types/types";
import snow from "../../../../assets/images/snow-svgrepo-com.svg.svg";
import thunderstorm from "../../../../assets/images/storm-rain-svgrepo-com.svg"
import s from "./ThisDay.module.scss";

interface Props {
    weather_week: WeatherWeek
}


export const WeatherWeekFirstPicture = ({weather_week}: Props) =>{
    if (weather_week.list["0"].weather["0"].main === "Clouds"){
        return <GlobalSvgSelector id="mainly_cloudy"/>}
    else if (weather_week.list["0"].weather["0"].main  === "Thunderstorm"){
        return <img src={thunderstorm} className={s.small_weather}/>}
    else if (weather_week.list["0"].weather["0"].main  === "Rain"){
        return <GlobalSvgSelector id="small_rain"/>}
    else if (weather_week.list["0"].weather["0"].main  === "Snow"){
        return <img src={snow} className={s.small_weather}/>}
    else if (weather_week.list["0"].weather["0"].main  === "Clear"){
        return <GlobalSvgSelector id="sun"/>}
    else {
        return <GlobalSvgSelector id ="sun"/>
    }
}
export const WeatherWeekSecondPicture = ({weather_week}: Props) =>{
    if (weather_week.list["8"].weather["0"].main === "Clouds"){
        return <GlobalSvgSelector id="mainly_cloudy"/>}
    else if (weather_week.list["8"].weather["0"].main  === "Thunderstorm"){
        return <img src={thunderstorm} className={s.small_weather}/>}
    else if (weather_week.list["8"].weather["0"].main  === "Rain"){
        return <GlobalSvgSelector id="small_rain"/>}
    else if (weather_week.list["8"].weather["0"].main  === "Snow"){
        return <img src={snow} className={s.small_weather}/>}
    else if (weather_week.list["8"].weather["0"].main  === "Clear"){
        return <GlobalSvgSelector id="sun"/>}
    else {
        return <GlobalSvgSelector id ="sun"/>
    }
}
export const WeatherWeekThirdPicture = ({weather_week}: Props) =>{
    if (weather_week.list["16"].weather["0"].main === "Clouds"){
        return <GlobalSvgSelector id="mainly_cloudy"/>}
    else if (weather_week.list["16"].weather["0"].main  === "Thunderstorm"){
        return <img src={thunderstorm} className={s.small_weather}/>}
    else if (weather_week.list["16"].weather["0"].main  === "Rain"){
        return <GlobalSvgSelector id="small_rain"/>}
    else if (weather_week.list["16"].weather["0"].main  === "Snow"){
        return <img src={snow} className={s.small_weather}/>}
    else if (weather_week.list["16"].weather["0"].main  === "Clear"){
        return <GlobalSvgSelector id="sun"/>}
    else {
        return <GlobalSvgSelector id ="sun"/>
    }
}
export const WeatherWeekFourPicture = ({weather_week}: Props) =>{
    if (weather_week.list["24"].weather["0"].main === "Clouds"){
        return <GlobalSvgSelector id="mainly_cloudy"/>}
    else if (weather_week.list["24"].weather["0"].main  === "Thunderstorm"){
        return <img src={thunderstorm} className={s.small_weather}/>}
    else if (weather_week.list["24"].weather["0"].main  === "Rain"){
        return <GlobalSvgSelector id="small_rain"/>}
    else if (weather_week.list["24"].weather["0"].main  === "Snow"){
        return <img src={snow} className={s.small_weather}/>}
    else if (weather_week.list["24"].weather["0"].main  === "Clear"){
        return <GlobalSvgSelector id="sun"/>}
    else {
        return <GlobalSvgSelector id ="sun"/>
    }
}
export const WeatherWeekFivePicture = ({weather_week}: Props) =>{
    if (weather_week.list["32"].weather["0"].main === "Clouds"){
        return <GlobalSvgSelector id="mainly_cloudy"/>}
    else if (weather_week.list["32"].weather["0"].main  === "Thunderstorm"){
        return <img src={thunderstorm} className={s.small_weather}/>}
    else if (weather_week.list["32"].weather["0"].main  === "Rain"){
        return <GlobalSvgSelector id="small_rain"/>}
    else if (weather_week.list["32"].weather["0"].main  === "Snow"){
        return <img src={snow} className={s.small_weather}/>}
    else if (weather_week.list["32"].weather["0"].main  === "Clear"){
        return <GlobalSvgSelector id="sun"/>}
    else {
        return <GlobalSvgSelector id ="sun"/>
    }
}
