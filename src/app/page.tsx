"use client";
import Date from "@/components/date";
import Locations from "@/components/locations";

export default function Home() {
  return (
    <>
      <div className="container mx-auto py-4">
        <h1>Weather Forecast & Traffic Cam</h1>
        <Date />
        <Locations />
      </div>
    </>
  );
}
