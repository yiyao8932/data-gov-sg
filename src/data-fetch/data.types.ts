export interface TrafficImage {
  image: string;
  latitude: number;
  longitude: number;
}

export interface LocationDetails {
  name: string;
  forecast: string;
  trafficImage: TrafficImage[];
}

export interface LocationsResult {
  locationsResult: LocationDetails[];
}
