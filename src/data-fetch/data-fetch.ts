import axios from "axios";

export const getTrafficAndWeatherData = async (date: string) => {
  return await axios.get(
    `${process.env.API_HOST}/traffic-and-weather-data?date=${date}`
  );
};
