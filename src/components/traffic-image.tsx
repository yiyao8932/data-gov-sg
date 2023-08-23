import { TrafficImage } from "@/data-fetch/data.types";
import Image from "next/image";

interface TrafficImageComponentProps {
  trafficImages: TrafficImage[];
}

const TrafficImageComponent: React.FC<TrafficImageComponentProps> = (props) => {
  const trafficImages = props.trafficImages;
  return (
    <>
      {trafficImages.length > 0 && (
        <>
          <div className="py-5 text-3xl">Traffic Cam</div>
          <div className="flex flex-wrap">
            {trafficImages.map((trafficImage) => (
              <div key={trafficImage.image} className="flex flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <Image
                    src={trafficImage.image}
                    alt="Weather Icon"
                    height={480}
                    width={640}
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default TrafficImageComponent;
