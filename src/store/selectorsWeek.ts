import { RootState } from "./store";

export const selectWeekWeatherData = (state: RootState) =>
    state.weekWeatherSliceReducer
