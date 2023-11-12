import React from 'react';
import { Empty, Flex, Typography } from 'antd';
import { Meta } from 'antd/es/list/Item';
import { observer } from 'mobx-react-lite';
import { WeatherModel } from '../../model/weather.model';
import { Weather } from '../../model/types';
import { StyledSkeleton } from './styles';
import { StyledCard } from '@/shared/ui/styled-card';

interface WeatherCardProps extends Pick<WeatherModel, 'isLoading' | 'isError'> {
 weather?: Weather;
}

export const WeatherCard = observer(({ isLoading, isError, weather }: WeatherCardProps): JSX.Element => {
 return (
  <StyledCard style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
   <StyledSkeleton loading={isLoading} active paragraph={{ rows: 4 }}>
    {!weather ? (
     <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{ width: '100%', height: '100%' }} />
    ) : (
     <Flex vertical style={{ width: '100%', height: '100%' }}>
      <Typography.Title>{weather?.name}</Typography.Title>
      <Meta title={weather?.weather.main} description={weather?.weather.description} />
      <Flex vertical>
       <Typography.Text>Current temperature: {weather?.temp}</Typography.Text>
       <Typography.Text>Min temperature: {weather?.temp_min}</Typography.Text>
       <Typography.Text>Max temperature: {weather?.temp_max}</Typography.Text>
       <Typography.Text>Wind speed: {weather?.windSpeed}</Typography.Text>
      </Flex>
     </Flex>
    )}
   </StyledSkeleton>
  </StyledCard>
 );
});
