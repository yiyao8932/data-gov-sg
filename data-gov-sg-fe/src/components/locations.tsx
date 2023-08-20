import { Select, Option } from "@material-tailwind/react";

interface LocationsProps {
  locations: string[];
  handleLocationClick(location: string): any;
}

const Locations: React.FC<LocationsProps> = (props: LocationsProps) => {
  return (
    <>
      <div className="w-1/2">
        <ul>
          <li>Location 1</li>
          <li>Location 2</li>
          <li>Location 3</li>
        </ul>
      </div>
    </>
  );
};

export default Locations;
