import React from "react";
import CityDisplay from "../../atoms/cityDisplay";
import TemperatureDisplay from "../../atoms/temperatureDisplay";
import ConditionDisplay from "../../atoms/conditionDisplay";

const WeatherInfo = ({ city, temperature, description }) => {
  let weatherImage = "/src/assets/clear.png";

  if (description.toLowerCase().includes("broken clouds")) {
    weatherImage = "/src/assets/drizzle.png"; 
  } else if (description.toLowerCase().includes("cloud")) {
    weatherImage = "/src/assets/cloud.png"; 
  }

  else if (description.toLowerCase().includes("light rain")) {
    weatherImage = "/src/assets/rain.png"; 
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1 }}>
        <CityDisplay city={city} />
        <TemperatureDisplay temperature={temperature} />
        <ConditionDisplay description={description} />
      </div>

      <div>
        <img
          src={weatherImage}
          alt={description}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            marginLeft: "20px", 
          }}
        />
      </div>
    </div>
  );
};

export default WeatherInfo;
