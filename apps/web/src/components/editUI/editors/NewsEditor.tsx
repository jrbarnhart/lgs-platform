import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { NewsUpdateEntity } from "lgs-zod-dto";
import {
  ArrowDown,
  ArrowUp,
  Calendar,
  CalendarCheck,
  Eye,
  Hash,
} from "lucide-react";
import { useState } from "react";

type NewsEditorProps = {
  data: NewsUpdateEntity[];
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export default function NewsEditor({ ...props }: NewsEditorProps) {
  const { data, className, ...rest } = props;

  const [selectedRecord, setSelectedRecord] = useState<NewsUpdateEntity | null>(
    null
  );
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
            Sort:
            <Hash />
            <Calendar />
            <CalendarCheck />
            <Eye />
          </div>
          {/* Records */}
          {data.map((record) => (
            <div
              key={`news-update-${record.id.toString()}`}
              className="grid grid-flow-col grid-cols-[1fr_min-content] items-center border border-black bg-neutral-200 rounded-sm drop-shadow-lg"
            >
              <button
                onClick={() => {
                  setSelectedRecord(record);
                }}
                type="button"
              >
                <div className="grid grid-flow-col items-baseline gap-3 px-2 py-4">
                  <p className="whitespace-nowrap truncate">{record.title}</p>
                  <p className="truncate text-sm">{record.content}</p>
                </div>
              </button>
              <div className="flex gap-1 items-center justify-around h-full pr-2">
                <Button>
                  <ArrowUp />
                </Button>
                <Button>
                  <ArrowDown />
                </Button>
              </div>
            </div>
          ))}
        </section>
        {/* Form */}
        <aside
          className={cn(
            "row-start-1 col-start-1 translate-x-[calc(100%_+_1rem)] transition-transform ease-in-out bg-neutral-300 rounded-2xl p-2",
            formOpen && "translate-x-0"
          )}
        >
          <form>
            <Label>Title</Label>
            <Label>Published</Label>
            <Label>Content</Label>
          </form>
          {selectedRecord && (
            <>
              <p className="text-sm font-medium">
                Created: {selectedRecord.createdAt.toString()}
              </p>
              <p className="text-sm font-medium">
                Updated: {selectedRecord.updatedAt.toString()}
              </p>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
