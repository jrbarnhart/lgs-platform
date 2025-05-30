import { useAuthContext } from "../../contexts/Auth/useAuthContext";
import Editable from "../editable/Editable";

type StoreHoursProps = React.HtmlHTMLAttributes<HTMLDivElement>;

export default function StoreHours(props: StoreHoursProps) {
  const { loggedIn } = useAuthContext();
  return (
    <Editable loggedIn={loggedIn} section="hours" {...props}>
      <h2>Hours:</h2>
      <p>M-F - 10am to Midnight</p>
      <p>Sat - Noon - 2am</p>
      <p>Sun - Closed</p>
    </Editable>
  );
}
