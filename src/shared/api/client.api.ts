import axios from 'axios';

import { WeatherApi } from './weather.api';
import { API_KEY } from './client.config';

class ClientApi {
 public weatherApi = new WeatherApi();

 private init() {
  axios.defaults.params = { appid: API_KEY };
 }

 constructor() {
  this.init();
 }
}

export const clientApi = new ClientApi();
