import { clientApi } from '@/shared/api';
import { weatherMapper } from '../lib/weather.mapper';

//* Request on weatherApi with mapping API response

export const getWeather = async (cityName: string) => {
 const response = await clientApi.weatherApi.getWeather(cityName);

 return weatherMapper(response?.data);
};
