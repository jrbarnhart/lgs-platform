import Editable from "../editable/Editable";

type StoreHoursProps = {
  loggedIn: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export default function StoreHours(props: StoreHoursProps) {
  const { loggedIn } = props;
  return (
    <Editable loggedIn={loggedIn}>
      <h2>Hours:</h2>
      <p>M-F - 10am to Midnight</p>
      <p>Sat - Noon - 2am</p>
      <p>Sun - Closed</p>
    </Editable>
  );
}
