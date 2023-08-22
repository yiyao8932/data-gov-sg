"use client";
import DateComponent from "@/components/date";
import LocationsComponent from "@/components/locations";
import TrafficImageComponent from "@/components/traffic-image";
import WeatherComponent from "@/components/weather";
import { getTrafficAndWeatherData } from "@/data-fetch/data-fetch";
import { LocationDetails } from "@/data-fetch/data.types";
import moment from "moment";
import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const [locations, setLocations] = useState<LocationDetails[]>([]);

  const [selectedLocation, setSelectedLocation] = useState<LocationDetails>({
    name: "",
    forecast: "",
    trafficImage: []
  });

  const [selectedDate, setSelectedDate] = useState<string>(
    moment().format("YYYY-MM-DD") + "T" + moment().format("HH:mm:ss")
  );

  const [dateError, setDateError] = useState<string>("");

  const handleLocationClick = (location: LocationDetails) => {
    setSelectedLocation(location);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const dateTimeString =
      event.target.value + "T" + moment().format("HH:mm:ss");

    if (moment(dateTimeString).isAfter(moment())) {
      setDateError("Please select a date in the past");
      return;
    }
    setSelectedDate(dateTimeString);
    setDateError("");
  };

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const dateTimeString =
      selectedDate.split("T")[0] + "T" + event.target.value;
    if (moment(dateTimeString).isAfter(moment())) {
      setDateError("Please select a time in the past");
      return;
    }
    setSelectedDate(dateTimeString);
    setDateError("");
  };

  const handleData = async (selectedDate: string) => {
    const response = await getTrafficAndWeatherData(selectedDate);
    const locations: LocationDetails[] = response.data.locationsResult;
    setLocations(locations);
    setSelectedLocation({
      name: "",
      forecast: "",
      trafficImage: []
    });
  };

  useEffect(() => {
    handleData(selectedDate);
  }, [selectedDate]);

  return (
    <>
      <div className="container mx-auto py-4">
        <h1 className="text-4xl">Weather Forecast & Traffic Cam</h1>
        <div className="ml-2 my-5">
          <DateComponent
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            handleTimeChange={handleTimeChange}
          />
          {dateError && <p className="text-red-600">{dateError}</p>}
        </div>
        <div className="flex flex-wrap">
          <LocationsComponent
            locations={locations}
            selectedLocation={selectedLocation}
            handleLocationClick={handleLocationClick}
          />
          <WeatherComponent
            selectedLocation={selectedLocation}
            selectedDate={selectedDate}
          />
        </div>
        <TrafficImageComponent trafficImages={selectedLocation.trafficImage} />
      </div>
    </>
  );
}
