"use client";
import DateComponent from "@/components/date";
import LocationsComponent from "@/components/locations";
import { getTrafficAndWeatherData } from "@/data-fetch/data-fetch";
import moment from "moment";
import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const [locations, setLocations] = useState<string[]>([]);

  const [selectedLocation, setSelectedLocation] = useState<string>();

  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(
    moment(currentDate).format("YYYY-MM-DD") +
      "T" +
      moment(currentDate).format("HH:mm:ss")
  );

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const dateTimeString =
      event.target.value + "T" + moment().format("HH:mm:ss");
    console.log(dateTimeString);
    setSelectedDate(dateTimeString);
  };

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const dateTimeString =
      selectedDate.split("T")[0] + "T" + event.target.value;
    console.log(dateTimeString);
    setSelectedDate(dateTimeString);
  };

  const handleData = async (selectedDate: string) => {
    const response = await getTrafficAndWeatherData(selectedDate);
    const locationResult = response.data.locationsResult;
    const locations = locationResult.map((location: any) => location.name);
    console.log(locations);
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
          handleLocationClick={handleLocationClick}
        />
      </div>
    </>
  );
}
