import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NewsUpdateEntity } from "lgs-zod-dto";
import { Calendar, CalendarCheck, Eye, Hash } from "lucide-react";
import { useState } from "react";

type NewsEditorProps = {
  data: NewsUpdateEntity[];
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export default function NewsEditor({ ...props }: NewsEditorProps) {
  const { data, className, ...rest } = props;

  const [formOpen, setFormOpen] = useState(false);

  const handleCreateButton = () => {
    setFormOpen((prev) => !prev);
  };

  return (
    <div {...rest} className={cn(className, "grow flex flex-col gap-4 p-4")}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2>News Editor</h2>
        <Button onClick={handleCreateButton}>Create</Button>
      </div>
      {/* Container for record list and form sections */}
      <div className="grow grid">
        {/* Record List */}
        <section className="row-start-1 col-start-1 flex flex-col gap-2">
          {/* Record List Filters */}
          <div className="flex justify-between">
            Order:
            <Hash />
            <Calendar />
            <CalendarCheck />
            <Eye />
          </div>
          {/* Records */}
          {data.map((record) => (
            <div
              key={`news-update-${record.id.toString()}`}
              className="flex gap-4"
            >
              <p className="whitespace-nowrap truncate">{record.title}</p>
              <p className="truncate">{record.content}</p>
            </div>
          ))}
        </section>
        {/* Form */}
        <aside
          className={cn(
            "row-start-1 col-start-1 translate-x-[calc(100%_+_1rem)] transition-transform ease-in-out",
            formOpen && "translate-x-0"
          )}
        >
          <p>Form!</p>
        </aside>
      </div>
    </div>
  );
}
