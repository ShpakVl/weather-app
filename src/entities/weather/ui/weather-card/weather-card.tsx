import React from 'react';
import { Card, Skeleton, Typography } from 'antd';
import { Meta } from 'antd/es/list/Item';
import { observer } from 'mobx-react-lite';
import { WeatherModel } from '../../model/weather.model';
import { Weather } from '../../model/types';

interface WeatherCardProps extends Pick<WeatherModel, 'isLoading' | 'isError'> {
 weather?: Weather;
}

export const WeatherCard = observer(({ isLoading, isError, weather }: WeatherCardProps): JSX.Element => {
 return (
  <Card style={{ width: 300, marginTop: 16 }}>
   <Skeleton loading={isLoading} active>
    <Typography.Title>{weather?.name}</Typography.Title>

    <Meta title={weather?.weather.main} description={weather?.weather.description} />
    <Typography.Text>Current temperature: {weather?.temp}</Typography.Text>
    <Typography.Text>Min temperature: {weather?.temp_min}</Typography.Text>
    <Typography.Text>Max temperature: {weather?.temp_max}</Typography.Text>
    <Typography.Text>Wind speed: {weather?.windSpeed}</Typography.Text>
   </Skeleton>
  </Card>
 );
});
