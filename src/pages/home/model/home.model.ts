import { makeAutoObservable } from 'mobx';
import { WeatherModel } from '@/entities/weather';
import { SearchByCityModel } from '@/features/search-by-city';
import { HistoryModel } from '@/features/history';

//@ HomeModel
//* Composite model
//* onSearch -> handler of search button click. Make apiRequest, add to history if request was successful

//! Can be replaced with context for future extending

export class HomeModel {
 public history = new HistoryModel<{ label: string; id: string }>();

 public weatherModel = new WeatherModel();
 public searchByCityModel = new SearchByCityModel(this.onSearch.bind(this));

 constructor() {
  makeAutoObservable(this, undefined, { autoBind: true });
 }

 private async onSearch(cityName: string) {
  const response = await this.weatherModel.search(cityName);
  if (response) this.history.add({ label: cityName, id: cityName.toLowerCase() });
 }
}
