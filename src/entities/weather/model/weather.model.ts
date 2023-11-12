import { makeAutoObservable } from 'mobx';
import { RequestHandler } from '@/shared/lib/request-handler/request-handler';
import { getWeather } from '../api/get-weather';

export class WeatherModel {
 private request = new RequestHandler(getWeather);

 constructor() {
  makeAutoObservable(this, {}, { autoBind: true });
 }

 search(cityName: string) {
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
