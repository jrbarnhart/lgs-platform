import Editable from "../editable/Editable";

type NewsProps = {
  loggedIn: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export default function News(props: NewsProps) {
  const { loggedIn } = props;
  return (
    <Editable loggedIn={loggedIn}>
      <h2>News</h2>
      <article>
        <h3>Grand Opening</h3>
        <p>The store is now open!</p>
      </article>
    </Editable>
  );
}
