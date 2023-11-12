import { RequestHandler } from '@/shared/lib/request-handler/request-handler';
import { getWeather } from '../api/get-weather';
import { makeAutoObservable } from 'mobx';

export class WeatherModel {
 request = new RequestHandler(getWeather);

 constructor() {
  makeAutoObservable(this);
 }

 search(cityName: string) {
  return this.request?.fetch(cityName);
 }

 public get isLoading() {
  return this.request?.isLoading;
 }

 public get isError() {
  return this.request?.isError;
 }

 public get data() {
  return this.request?.data;
 }
 public get error() {
  return this.request?.error;
 }
}
