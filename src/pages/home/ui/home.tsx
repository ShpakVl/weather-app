import React, { useMemo } from 'react';
import { Header } from '@/shared/ui/header';
import { SearchByCity } from '@/features/search-by-city';
import { WeatherCard } from '@/entities/weather/';
import { HomeModel } from '../model/home.model';
import { observer } from 'mobx-react-lite';
import { HistoryList } from '@/features/history/ui/history';
import { Flex, Layout } from 'antd';

export const Home = observer((): JSX.Element => {
 const homeModel = useMemo(() => new HomeModel(), []);
 return (
  <Layout>
   <Header>
    <SearchByCity model={homeModel.searchByCityModel} />
   </Header>
   <Flex style={{ padding: '5%' }}>
    <WeatherCard
     isLoading={homeModel.weatherModel.isLoading}
     isError={homeModel.weatherModel.isError}
     weather={homeModel.weatherModel.data}
    />
    <HistoryList model={homeModel.history} onClick={homeModel.weatherModel.search} />
   </Flex>
  </Layout>
 );
});
