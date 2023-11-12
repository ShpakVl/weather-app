import { Flex, Typography, Image } from 'antd';
import { imageUrl } from '@/shared/lib/constants/image-url';
import { Weather } from '../../model/types';
import { weatherCardBodyStyles } from './styles';

interface WeatherCardBodyProps {
 weather: Weather;
}

export const WeatherCardBody = ({ weather }: WeatherCardBodyProps) => {
 const weatherCardTitle = weather ? `${weather?.weather.main} (${weather?.weather.description})` : undefined;

 return (
  <Flex vertical style={weatherCardBodyStyles.cardBodyWrapper}>
   <Image src={imageUrl(weather.weather.icon)} height='100px' width='100px' preview={false} />
   <Flex vertical>
    <Typography.Text style={weatherCardBodyStyles.cardText}>{weatherCardTitle}</Typography.Text>
    <Typography.Text style={weatherCardBodyStyles.cardText}>Current temperature: {weather?.temp}</Typography.Text>
    <Typography.Text style={weatherCardBodyStyles.cardText}>Min temperature: {weather?.temp_min}</Typography.Text>
    <Typography.Text style={weatherCardBodyStyles.cardText}>Max temperature: {weather?.temp_max}</Typography.Text>
    <Typography.Text style={weatherCardBodyStyles.cardText}>Wind speed: {weather?.windSpeed}</Typography.Text>
   </Flex>
  </Flex>
 );
};
