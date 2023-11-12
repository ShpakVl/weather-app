import { GetWeatherResponse } from '@/shared/api/';
import { Weather } from '../model/types';

export const weatherMapper = (response: GetWeatherResponse): Weather => {
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
