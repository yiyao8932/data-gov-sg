import { Button } from "@material-tailwind/react";

interface LocationsProps {
  locations: string[];
  handleLocationClick(location: string): any;
}

const Locations: React.FC<LocationsProps> = (props: LocationsProps) => {
  return (
    <>
      <div className="w-1/2">
        <div className="flex flex-wrap">
          {props.locations.map((location) => (
            <div key={location}>
              <Button className="m-2" color="blue-gray">
                {location}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Locations;
