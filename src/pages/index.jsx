import React, { useState } from "react";
import WeatherDashboard from "../components/organisms/weatherDashboard";
import getWeatherData from "../api/weatherService";
import WeatherDashboardTemplate from "../components/template";

const WeatherPage = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);

    try {
      const data = await getWeatherData(city);
      setWeatherData({
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
      });
    } catch (err) {
      console.error(err);
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <WeatherDashboardTemplate>
        <WeatherDashboard
          city={city}
          weatherData={weatherData}
          error={error}
          loading={loading}
          onCityChange={handleCityChange}
          onSearch={handleSearch}
        />
      </WeatherDashboardTemplate>
    </div>
  );
};

export default WeatherPage;
