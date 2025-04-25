// 040ceaf6019df4c8a905aa66a1e51f64

import axios from 'axios';

// Create an Axios instance with the base URL and default parameters (API key).
const BaseAxios = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',  // Base URL for OpenWeatherMap
  params: {
    appid: '040ceaf6019df4c8a905aa66a1e51f64',  // API Key to authenticate the request
  },
});


export default BaseAxios;
