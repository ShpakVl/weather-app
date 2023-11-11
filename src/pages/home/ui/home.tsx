import React, { useMemo } from 'react';
import { Header } from '@/shared/ui/header';
import { HomeModel } from '../model/home.model';
import { SearchByCity } from '@/features/search-by-city';
import { observer } from 'mobx-react-lite';
export const Home = observer((): JSX.Element => {
 const homeModel = useMemo(() => new HomeModel(), []);

 return (
  <Header>
   <SearchByCity model={homeModel.searchByCityModel} />
  </Header>
 );
});
