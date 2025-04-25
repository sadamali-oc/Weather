
import axios from 'axios';

const BaseAxios = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5', 
  params: {
    appid: '',  
  },
});


export default BaseAxios;
