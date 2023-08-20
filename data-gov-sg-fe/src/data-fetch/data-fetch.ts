import axios from "axios";

export const getTrafficData = async () => {
  return await axios
    .get("https://api.data.gov.sg/v1/transport/traffic-images")
    .then((response) => response.data);
};

export const getWeatherData = async () => {
  return await axios
    .get("https://api.data.gov.sg/v1/environment/2-hour-weather-forecast")
    .then((response) => response.data);
};
