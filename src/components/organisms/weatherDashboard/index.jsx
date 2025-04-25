import React from "react";
import SearchForm from "../../molecules/searchForm";  
import WeatherInfo from "../../molecules/weatherInfo";  
import BasicCard from "../../atoms/card"; 

const WeatherDashboard = ({ city, weatherData, error, loading, onCityChange, onSearch }) => {
  return (
    <div>
      <BasicCard>
        <SearchForm
          city={city}
          onChange={onCityChange}
          onClick={onSearch}
        />
        {loading && <p>Loading...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        <BasicCard
          sx={{
            backgroundColor: "#ebebf0",
            width: 300,
            height: 100,
            backgroundImage: "none",
          }}
        >
          {weatherData && (
            <WeatherInfo
              city={weatherData.city}
              temperature={weatherData.temperature}
              description={weatherData.description}
            />
          )}
        </BasicCard>
      </BasicCard>
    </div>
  );
};

export default WeatherDashboard;
