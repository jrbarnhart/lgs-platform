import { useAuthContext } from "../../contexts/Auth/useAuthContext";
import Editable from "../editable/Editable";

type SpecialsProps = React.HtmlHTMLAttributes<HTMLDivElement>;

export default function Specials(props: SpecialsProps) {
  const { loggedIn } = useAuthContext();
  return (
    <Editable loggedIn={loggedIn} section="specials" {...props}>
      <h2>Specials:</h2>
      <div>
        <h3>Every Saturday in June:</h3>
        <p>BOGO on any one booster pack.</p>
      </div>
    </Editable>
  );
}
