import { makeAutoObservable } from 'mobx';
import { WeatherModel } from '@/entities/weather';
import { SearchByCityModel } from '@/features/search-by-city';

export class HomeModel {
 weatherModel = new WeatherModel();
 searchByCityModel = new SearchByCityModel(this.weatherModel.search);

 constructor() {
  makeAutoObservable(this);
 }
}
