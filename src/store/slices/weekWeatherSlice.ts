import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosResponse} from "axios";
import { WeatherWeek} from "../types/types";

type currentWeather = {
    isLoading: boolean,
    response: Response,
    weather_week: any,

}

type Response = {
    status: number;
    message: string
}


const initialState: currentWeather = {
    weather_week: {
        city: {
            name: 0,
        },
        list: {
            0: {
                weather: {
                    0:{
                    description: 0,
                        main: 0,
                }},
                main: {
                    temp: 0,
                    temp_min: 0,
                    temp_max: 0,
                }
            },
            4: {
                weather: {
                    0:{
                    description: 0,
                        main: 0,
                }},
                main: {
                    temp: 0,
                    temp_min: 0,
                    temp_max: 0,
                }
            },
            8: {
                weather: {
                   0:{
                    description: 0,
                        main: 0,
                }},
                main: {
                    temp: 0,
                    temp_min: 0,
                    temp_max: 0,
                }
            },
            12: {
                weather: {
                    0:{
                    description: 0,
                        main: 0,
                }},
                main: {
                    temp: 0,
                    temp_min: 0,
                    temp_max: 0,
                }
            },
            16: {
                weather: {
                    0:{
                    description: 0,
                        main: 0,
                }},
                main: {
                    temp: 0,
                    temp_min: 0,
                    temp_max: 0,
                }
            },
            20: {
                weather: {
                    0:{
                    description: 0,
                        main: 0,
                }},
                main: {
                    temp: 0,
                    temp_min: 0,
                    temp_max: 0,
                }
            },
            24: {
                weather: {
                    0:{
                    description: 0,
                        main: 0,
                }},
                main: {
                    temp: 0,
                    temp_min: 0,
                    temp_max: 0,
                }
            },
            28: {
                weather: {
                    0:{
                    description: 0,
                        main: 0,
                }},
                main: {
                    temp: 0,
                    temp_min: 0,
                    temp_max: 0,
                }
            },
            32: {
                weather: {
                    0:{
                    description: 0,
                        main: 0,
                }},
                main: {
                    temp: 0,
                    temp_min: 0,
                    temp_max: 0,
                }
            },
            39: {
                weather: {
                    0:{
                    description: 0,
                        main: 0,
                }},
                main: {
                    temp: 0,
                    temp_min: 0,
                    temp_max: 0,
                }
            }
        }
    },
    isLoading: false,
    response: {
        status: 0,
        message: '',
    }
}

export const weekWeatherSlice = createSlice({
    name: 'week_weather',
    initialState,
    reducers: {
        fetchWeekWeather(state) {
            state.isLoading = true;
        },

        fetchWeekWeatherSuccess(state, action: PayloadAction<AxiosResponse<WeatherWeek>>) {
            state.weather_week = action.payload.data
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },

        fetchWeekWeatherError(state, action: PayloadAction<AxiosResponse<WeatherWeek>>) {
            state.weather_week = action.payload.data
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        }
    }
})

export default weekWeatherSlice.reducer;