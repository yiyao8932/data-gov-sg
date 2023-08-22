import { LocationDetails } from "@/data-fetch/data.types";
import { Button } from "@material-tailwind/react";

interface LocationsProps {
  locations: LocationDetails[];
  selectedLocation: LocationDetails;
  handleLocationClick(location: LocationDetails): any;
}

const Locations: React.FC<LocationsProps> = (props: LocationsProps) => {
  return (
    <>
      <div className="w-full md:w-2/3">
        <div className="flex flex-wrap">
          {props.locations.map((location) => (
            <div key={location.name}>
              <Button
                className="m-1 md:m-2"
                color="blue-gray"
                variant={
                  props.selectedLocation.name == location.name
                    ? "filled"
                    : "outlined"
                }
                onClick={() => props.handleLocationClick(location)}
              >
                {location.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Locations;
