import axios, { AxiosPromise } from 'axios';

export interface GetWeatherResponse {
 weather: [
  {
   main: string;
   description: string;
   icon: string;
  },
 ];
 main: {
  temp: number;
  temp_max: number;
  temp_min: number;
 };
 wind: {
  speed: number;
 };
 id: number;
 name: string;
}

//@ WeatherApi
//* Integration with weather Api
//* getWeather -> request to get weather by cityName

export class WeatherApi {
 getWeather(cityName: string): AxiosPromise<GetWeatherResponse> {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`;
  return axios.get(url);
 }
}
