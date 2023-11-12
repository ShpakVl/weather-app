import React from 'react';
import { Empty } from 'antd';
import { observer } from 'mobx-react-lite';
import { StyledSkeleton } from './styles';
import { StyledCard } from '@/shared/ui/styled-card';
import { WeatherCardBody } from './weather-card-body';
import { WeatherModel } from '../../model/weather.model';
import { Weather } from '../../model/types';

interface WeatherCardProps extends Pick<WeatherModel, 'isLoading' | 'isError'> {
 weather?: Weather;
}

export const WeatherCard = observer(({ isLoading, weather }: WeatherCardProps): JSX.Element => {
 return (
  <StyledCard title={weather?.name}>
   <StyledSkeleton loading={isLoading} active paragraph={{ rows: 4 }}>
    {!weather ? (
     <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{ width: '100%', height: '100%' }} />
    ) : (
     <WeatherCardBody weather={weather} />
    )}
   </StyledSkeleton>
  </StyledCard>
 );
});
