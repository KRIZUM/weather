import {AppDispatch} from "../store";
import {WeatherService} from "../../services/WeatherService";
import {currentWeatherSlice} from "../slices/currentWeatherSlice";
import {weekWeatherSlice} from "../slices/weekWeatherSlice";

export const fetchCurrentWeather =
     (city: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeather)
        const res = await WeatherService.getCurrentWeather(city)
        if (res.status === 200){
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
        }
        else {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
        }
    }
    catch(error) {
        console.log(error)
    }
}

export const fetchWeekWeather =
     (city: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(weekWeatherSlice.actions.fetchWeekWeather)
        const res = await WeatherService.getWeekWeather(city)
        if (res.status === 200){
            dispatch(weekWeatherSlice.actions.fetchWeekWeatherSuccess(res))
        }
        else {
            dispatch(weekWeatherSlice.actions.fetchWeekWeatherError(res))
        }
    }
    catch(error) {
        console.log(error)
    }

}
