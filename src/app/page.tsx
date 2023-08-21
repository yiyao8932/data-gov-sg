"use client";
import DateComponent from "@/components/date";
import LocationsComponent from "@/components/locations";
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

  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState<string>(
    moment(currentDate).format("YYYY-MM-DD") +
      "T" +
      moment(currentDate).format("HH:mm:ss")
  );

  const handleLocationClick = (location: LocationDetails) => {
    setSelectedLocation(location);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const dateTimeString =
      event.target.value + "T" + moment().format("HH:mm:ss");
    setSelectedDate(dateTimeString);
  };

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const dateTimeString =
      selectedDate.split("T")[0] + "T" + event.target.value;
    setSelectedDate(dateTimeString);
  };

  const handleData = async (selectedDate: string) => {
    const response = await getTrafficAndWeatherData(selectedDate);
    const locations = response.data.locationsResult;
    setLocations(locations);
  };

  useEffect(() => {
    handleData(selectedDate);
  }, [selectedDate]);

  return (
    <>
      <div className="container mx-auto py-4">
        <h1 className="text-3xl">Weather Forecast & Traffic Cam</h1>
        <DateComponent
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          handleTimeChange={handleTimeChange}
        />
        <LocationsComponent
          locations={locations}
          selectedLocation={selectedLocation}
          handleLocationClick={handleLocationClick}
        />
      </div>
    </>
  );
}
