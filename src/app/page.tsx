"use client";
import Date from "@/components/date";
import Locations from "@/components/locations";
import { useState } from "react";

export default function Home() {
  const [locations, setLocations] = useState<string[]>([]);

  const [selectecLocation, setSelectedLocation] = useState<string>();

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
  };

  return (
    <>
      <div className="container mx-auto py-4">
        <h1>Weather Forecast & Traffic Cam</h1>
        <Date />
        <Locations
          locations={locations}
          handleLocationClick={handleLocationClick}
        />
      </div>
    </>
  );
}
