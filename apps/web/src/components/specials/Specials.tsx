import Editable from "../editable/Editable";

type SpecialsProps = {
  loggedIn: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export default function Specials(props: SpecialsProps) {
  const { loggedIn } = props;
  return (
    <Editable loggedIn={loggedIn} section="specials">
      <h2>Specials:</h2>
      <div>
        <h3>Every Saturday in June:</h3>
        <p>BOGO on any one booster pack.</p>
      </div>
    </Editable>
  );
}
