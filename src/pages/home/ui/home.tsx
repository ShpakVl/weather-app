import React, { useMemo } from 'react';
import { SearchByCity } from '@/features/search-by-city';
import { WeatherCard } from '@/entities/weather/';
import { HomeModel } from '../model/home.model';
import { observer } from 'mobx-react-lite';
import { HistoryList } from '@/features/history';
import { Flex, Layout } from 'antd';
import { homeStyles } from './styles';
import { cardGap } from '@/shared/lib';

export const Home = observer((): JSX.Element => {
 const homeModel = useMemo(() => new HomeModel(), []);

 return (
  <Layout style={homeStyles.layout}>
   <SearchByCity model={homeModel.searchByCityModel} />
   <Flex style={homeStyles.content} gap={`${cardGap}px`}>
    <WeatherCard
     isLoading={homeModel.weatherModel.isLoading}
     isError={homeModel.weatherModel.isError}
     weather={homeModel.weatherModel.data}
    />
    <HistoryList model={homeModel.history} searchCity={homeModel.weatherModel.search} />
   </Flex>
  </Layout>
 );
});
