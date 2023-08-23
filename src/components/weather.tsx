import { LocationDetails } from "@/data-fetch/data.types";
import { Card } from "@material-tailwind/react";
import moment from "moment";
import Image from "next/image";

interface WeatherComponentProps {
  selectedLocation: LocationDetails;
  selectedDate: string;
}

const WeatherComponent: React.FC<WeatherComponentProps> = (
  props: WeatherComponentProps
) => {
  const { forecast } = props.selectedLocation;
  const selectedDate = props.selectedDate;
  const hour = moment(selectedDate).get("hour");

  // Determine day or night if the forecast doesn't mention day or night
  const isDayTime = (forecast: string, hour: number) => {
    if (forecast.includes("day")) {
      return true;
    } else if (forecast.includes("night")) {
      return false;
    }
    return hour >= 6 && hour < 18;
  };

  // Get weather icon
  const getWeatherIcon = (forecast: string, hour: number) => {
    const forecastLowerCase: string = forecast.toLowerCase();

    if (isDayTime(forecast, hour)) {
      switch (true) {
        case forecastLowerCase.includes("fair"):
        case forecastLowerCase.includes("partly cloudy"):
          return "/weather-icons/partly-cloudy-day.svg";
        case forecastLowerCase.includes("cloudy"):
          return "/weather-icons/cloudy.svg";
        case forecastLowerCase.includes("showers"):
          return "/weather-icons/partly-cloudy-day-rain.svg";
        case forecastLowerCase.includes("rain"):
          return "/weather-icons/rain.svg";
        default:
          return "/weather-icons/partly-cloudy-day.svg";
      }
    } else {
      switch (true) {
        case forecastLowerCase.includes("fair"):
        case forecastLowerCase.includes("partly cloudy"):
          return "/weather-icons/partly-cloudy-night.svg";
        case forecastLowerCase.includes("cloudy"):
          return "/weather-icons/cloudy.svg";
        case forecastLowerCase.includes("showers"):
          return "/weather-icons/partly-cloudy-night-rain.svg";
        case forecastLowerCase.includes("rain"):
          return "/weather-icons/rain.svg";
        default:
          return "/weather-icons/partly-cloudy-night.svg";
      }
    }
  };
  return (
    <>
      {forecast && (
        <Card className="w-full lg:w-96 p-5 place-content-center">
          <div className="mx-auto">
            <div className="text-3xl">Forecast</div>
            <Image
              src={getWeatherIcon(forecast, hour)}
              alt="Weather Icon"
              height={200}
              width={200}
            />
            {forecast}
          </div>
        </Card>
      )}
    </>
  );
};

export default WeatherComponent;
