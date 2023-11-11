import { makeAutoObservable } from 'mobx';
import { RequestHandler } from '@/shared/lib/request-handler/request-handler';
import { History } from '@/shared/lib/history';
import { getWeather } from '../api/get-weather';

export class WeatherModel {
 private request = new RequestHandler(getWeather);
 public history = new History<{ label: string; id: string }>();

 constructor() {
  makeAutoObservable(this, {}, { autoBind: true });
 }

 search(cityName: string) {
  this.history.add({ label: cityName, id: cityName });
  this.request.fetch(cityName);
 }

 public get isLoading() {
  return this.request.isLoading;
 }

 public get isError() {
  return this.request.isError;
 }

 public get getWeather() {
  return this.request.data;
 }

 public get error() {
  return this.request.error;
 }
}
