import { Input } from "@material-tailwind/react";
import { ChangeEvent, useState } from "react";

const DateComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(
      new Date(
        event.target.value + "T" + selectedDate.toISOString().split("T")[1]
      )
    );
  };

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = event.target.value.split(":");
    setSelectedDate(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        parseInt(hours),
        parseInt(minutes)
      )
    );
  };

  return (
    <div className="my-5">
      <div className="flex justify-start">
        <div className="basis-1/4">
          <Input
            type="date"
            label="Date"
            value={selectedDate.toISOString().split("T")[0]}
            onChange={handleDateChange}
          ></Input>
        </div>
        <div className="basis-1/4">
          <Input
            type="time"
            label="Time"
            value={`${String(selectedDate.getHours()).padStart(
              2,
              "0"
            )}:${String(selectedDate.getMinutes()).padStart(2, "0")}`}
            onChange={handleTimeChange}
          ></Input>
        </div>
      </div>
    </div>
  );
};

export default DateComponent;
