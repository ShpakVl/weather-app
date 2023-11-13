import axios from 'axios';

import { WeatherApi } from './weather.api';
import { API_KEY } from './client.config';

//@ ClientApi
//* Composite class for Api integrations, axios setup
//* New APIs integration should be added here

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
