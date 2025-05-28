import { useAuthContext } from "../../contexts/Auth/useAuthContext";
import { useEditingContext } from "../../contexts/Editing/useEditingContext";

const NewsEditor = () => {
  return (
    <>
      <label htmlFor="title">
        Title:
        <input id="title" />
      </label>
      <label htmlFor="content">
        Content:
        <textarea id="content" />
      </label>
    </>
  );
};

const SpecialsEditor = () => {
  return (
    <>
      <label htmlFor="title">
        Title:
        <input id="title" />
      </label>
      <label htmlFor="details">
        Details:
        <textarea id="details" />
      </label>
    </>
  );
};

const HoursEditor = () => {
  return (
    <>
      <label htmlFor="days">
        {`Day(s)`}
        <input id="days" />
      </label>
      <label htmlFor="hours">
        Hours:
        <input id="hours" />
      </label>
    </>
  );
};

export default function EditUI() {
  const { editing } = useEditingContext();
  const { loggedIn } = useAuthContext();

  if (loggedIn && editing.state && editing.section)
    return (
      <div>
        <h2>
          Editing {editing.section[0].toUpperCase() + editing.section.slice(1)}
        </h2>
        {editing.section === "news" && <NewsEditor />}
        {editing.section === "specials" && <SpecialsEditor />}
        {editing.section === "hours" && <HoursEditor />}
      </div>
    );

  return null;
}
