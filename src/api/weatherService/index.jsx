import api from '../baseAxios';

const getWeatherData = async (city) => {
  try {
    const response = await api.get('/weather', {
      params: {
        q: city,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw new Error("Failed to fetch weather data");
  }
};

export default getWeatherData;  // Directly export the function
