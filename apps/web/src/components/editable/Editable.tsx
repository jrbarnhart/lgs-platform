import { useEditingContext } from "../../contexts/Editing/useEditingContext";
import type { SectionName } from "../../lib/types";

type EditableProps = {
  loggedIn: boolean;
  section: SectionName;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export default function Editable(props: EditableProps) {
  const { children, loggedIn, section } = props;

  const handleEditClick = () => {
    setEditing((prev) => {
      if (!prev.state) {
        return { state: true, section };
      }
      if (prev.section === section) {
        return { state: false };
      }
      return { state: true, section };
    });
  };

  const { editing, setEditing } = useEditingContext();

  return (
    <section>
      {loggedIn && (
        <button type="button" onClick={handleEditClick}>
          {editing.state && section === editing.section
            ? "Stop Editing"
            : "Edit"}
        </button>
      )}
      {children}
    </section>
  );
}
