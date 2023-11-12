import { makeAutoObservable } from 'mobx';
import { WeatherModel } from '@/entities/weather';
import { SearchByCityModel } from '@/features/search-by-city';
import { History } from '@/shared/lib/history';

export class HomeModel {
 public history = new History<{ label: string; id: string }>();

 public weatherModel = new WeatherModel();
 public searchByCityModel = new SearchByCityModel(this.onSearch.bind(this));

 constructor() {
  makeAutoObservable(this);
 }

 private onSearch(cityName: string) {
  this.weatherModel.search(cityName);
  this.history.add({ label: cityName, id: cityName });
 }
}
