"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import Date from "@/components/date";

export default function Home() {
  return (
    <>
      <div className="container mx-auto py-4">
        <h1>Weather Forecast & Traffic Cam</h1>
        <Date />
      </div>
    </>
  );
}
