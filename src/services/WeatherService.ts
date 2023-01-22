import { AxiosResponse } from "axios";
import {Weather, WeatherWeek} from "../store/types/types";
import api from "../Axios";



export class WeatherService{
    static getCurrentWeather(city: any): Promise<AxiosResponse<Weather>>{
        return api.get<Weather>(`/weather?q=${city}`)
        };
    static getWeekWeather (city: any) :Promise<AxiosResponse<WeatherWeek>> {
        return api.get<WeatherWeek>(`/forecast?q=${city}`)
    }
}
