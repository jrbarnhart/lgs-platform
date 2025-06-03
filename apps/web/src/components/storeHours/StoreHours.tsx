import type { StoreHourEntity } from "lgs-zod-dto";

type StoreHoursProps = {
  data: StoreHourEntity[];
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export default function StoreHours(props: StoreHoursProps) {
  const { data, ...rest } = props;

  const weekdayFromInt = (dayOfWeek: number) => {
    let dayString = "Invalid Weekday Data";
    switch (dayOfWeek) {
      case 0: {
        dayString = "Sunday";
        break;
      }
      case 1: {
        dayString = "Monday";
        break;
      }
      case 2: {
        dayString = "Tuesday";
        break;
      }
      case 3: {
        dayString = "Wednesday";
        break;
      }
      case 4: {
        dayString = "Thursday";
        break;
      }
      case 5: {
        dayString = "Friday";
        break;
      }
      case 6: {
        dayString = "Saturday";
        break;
      }
    }
    return dayString;
  };

  return (
    <div {...rest}>
      <h2>Hours:</h2>
      {data.length > 0 ? (
        data.map((storeHour) => (
          <p key={`store-hour:${storeHour.id.toString()}`}>
            <span>{weekdayFromInt(storeHour.dayOfWeek)} - </span>
            {storeHour.isClosed || !(storeHour.openTime && storeHour.closeTime)
              ? "Closed"
              : `${storeHour.openTime} to ${storeHour.closeTime}`}
          </p>
        ))
      ) : (
        <p>No hours listed.</p>
      )}
    </div>
  );
}
