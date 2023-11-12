import { makeAutoObservable } from 'mobx';
import { WeatherModel } from '@/entities/weather';
import { SearchByCityModel } from '@/features/search-by-city';
import { History } from '@/features/history';

export class HomeModel {
 public history = new History<{ label: string; id: string }>();

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
