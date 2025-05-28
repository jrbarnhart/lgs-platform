import { useState } from "react";

type EditableProps = {
  loggedIn: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export default function Editable(props: EditableProps) {
  const { children, loggedIn } = props;
  const [editing, setEditing] = useState(false);
  const handleEditClick = () => {
    setEditing((prev) => !prev);
  };

  return (
    <section>
      {loggedIn && (
        <button type="button" onClick={handleEditClick}>
          {!editing ? "Edit" : "Stop Editing"}
        </button>
      )}
      {editing && <p>Editing!</p>}
      {children}
    </section>
  );
}
