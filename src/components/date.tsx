import { Input } from "@material-tailwind/react";
import moment from "moment";
import { ChangeEvent } from "react";
interface DateComponentProps {
  selectedDate: string;
  handleDateChange(event: ChangeEvent<HTMLInputElement>): any;
  handleTimeChange(event: ChangeEvent<HTMLInputElement>): any;
}

const DateComponent = (props: DateComponentProps) => {
  return (
    <div className="flex justify-start">
      <div className="basis-1/4">
        <Input
          type="date"
          label="Date"
          value={moment(props.selectedDate).format("yyyy-MM-DD")}
          onChange={props.handleDateChange}
        ></Input>
      </div>
      <div className="basis-1/4">
        <Input
          type="time"
          label="Time"
          step="1"
          value={`${String(moment(props.selectedDate).get("hours")).padStart(
            2,
            "0"
          )}:${String(moment(props.selectedDate).get("minutes")).padStart(
            2,
            "0"
          )}`}
          onChange={props.handleTimeChange}
        ></Input>
      </div>
    </div>
  );
};

export default DateComponent;
