import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosResponse} from "axios";
import {Weather} from "../types/types";

type currentWeather = {
    weather: any,
    isLoading: boolean,
    response: Response,

}

type Response = {
    status: number;
    message: string
}


const initialState: currentWeather = {
    weather: {
        main: {
            temp: 0,
            feels_like: 0,
            pressure: 0,
        },
        wind: {
            speed: 0,
            gust: 0,
            deg: 0,
        },
        weather: {
            0: {
                description: 0,
                main: 0,
            }
        }
    },

    isLoading: false,
    response: {
        status: 0,
        message: '',
    }
}

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true;
        },

        fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.weather = action.payload.data
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },

        fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.weather = action.payload.data
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
    }
},)

export default currentWeatherSlice.reducer;