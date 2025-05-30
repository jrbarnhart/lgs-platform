import { useAuthContext } from "../../contexts/Auth/useAuthContext";
import Editable from "../editable/Editable";

type NewsProps = React.HtmlHTMLAttributes<HTMLDivElement>;

export default function News(props: NewsProps) {
  const { loggedIn } = useAuthContext();
  return (
    <Editable loggedIn={loggedIn} section="news" {...props}>
      <h2>News</h2>
      <article>
        <h3>Grand Opening</h3>
        <p>The store is now open!</p>
      </article>
    </Editable>
  );
}
