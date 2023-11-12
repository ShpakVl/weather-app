import React from 'react';
import { Card, Empty, Flex, Skeleton, Typography } from 'antd';
import { Meta } from 'antd/es/list/Item';
import { observer } from 'mobx-react-lite';
import { WeatherModel } from '../../model/weather.model';
import { Weather } from '../../model/types';
import DefaultRenderEmpty from 'antd/es/config-provider/defaultRenderEmpty';

interface WeatherCardProps extends Pick<WeatherModel, 'isLoading' | 'isError'> {
 weather?: Weather;
}

export const WeatherCard = observer(({ isLoading, isError, weather }: WeatherCardProps): JSX.Element => {
 return (
  <Card>
   {!weather ? (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
   ) : (
    <Skeleton loading={isLoading} active>
     <Typography.Title>{weather?.name}</Typography.Title>

     <Meta title={weather?.weather.main} description={weather?.weather.description} />
     <Flex vertical>
      <Typography.Text>Current temperature: {weather?.temp}</Typography.Text>
      <Typography.Text>Min temperature: {weather?.temp_min}</Typography.Text>
      <Typography.Text>Max temperature: {weather?.temp_max}</Typography.Text>
      <Typography.Text>Wind speed: {weather?.windSpeed}</Typography.Text>
     </Flex>
    </Skeleton>
   )}
  </Card>
 );
});
