
import axios from 'axios';

const BaseAxios = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',  // Base URL for OpenWeatherMap
  params: {
    appid: '',  // API Key to authenticate the request
  },
});


export default BaseAxios;
