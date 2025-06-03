import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NewsUpdateEntity } from "lgs-zod-dto";
import { Calendar, CalendarCheck, Eye, Hash } from "lucide-react";

type NewsEditorProps = {
  data: NewsUpdateEntity[];
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export default function NewsEditor({ ...props }: NewsEditorProps) {
  const { data, className, ...rest } = props;
  return (
    <div {...rest} className={cn(className, "grow flex flex-col gap-4 p-4")}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2>News Editor</h2>
        <Button>Create</Button>
      </div>
      {/* Container for record list and form sections */}
      <div className="grow flex flex-col">
        {/* Record List */}
        <section className="grow flex flex-col gap-2 bg-pink-300">
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
        <aside></aside>
      </div>
    </div>
  );
}
