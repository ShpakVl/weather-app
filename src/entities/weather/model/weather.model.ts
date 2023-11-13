import { RequestHandler } from '@/shared/lib/';
import { getWeather } from '../api/get-weather';
import { makeAutoObservable } from 'mobx';
import { message } from 'antd';
import { AxiosError } from 'axios';

//@ WeatherModel
//* Model integrate component with API
//* search -> api call to get weather by city name
//* isLoading, isError, data, error -> request data, it`s statuses

export class WeatherModel {
 request = new RequestHandler(getWeather, (error: AxiosError) => message.error(error.message));

 constructor() {
  makeAutoObservable(this, undefined, { autoBind: true });
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
