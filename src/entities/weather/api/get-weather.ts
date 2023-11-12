import { clientApi } from '@/shared/api';
import { weatherMapper } from '../lib/weather.mapper';

export const getWeather = async (cityName: string) => {
 const response = await clientApi.weather.getWeather(cityName);

 return weatherMapper(response?.data);
};
