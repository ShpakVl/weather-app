import { GetWeatherResponse } from '@/shared/api/weather.api';

export const weatherMapper = (response: GetWeatherResponse) => {
 return {
  id: response.id,
  weather: {
   ...response.weather[0],
  },
  ...response.main,
  windSpeed: response.wind.speed,
  name: response.name,
 };
};
