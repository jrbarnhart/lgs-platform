import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { NewsUpdateEntity } from "lgs-zod-dto";
import { Calendar, CalendarCheck, Eye, EyeClosed, Hash } from "lucide-react";
import { useState, type SetStateAction } from "react";

type NewsEditorProps = {
  data: NewsUpdateEntity[];
} & React.HtmlHTMLAttributes<HTMLDivElement>;

type SortOption =
  | "display-order"
  | "created"
  | "updated"
  | "published"
  | "not-published";

const SortButton = ({
  sortBy,
  sort,
  setSort,
  children,
}: {
  sortBy: SortOption;
  sort: SortOption;
  setSort: React.Dispatch<SetStateAction<SortOption>>;
  children: React.ReactNode;
}) => {
  return (
    <Button
      variant={"outline"}
      className={cn(
        "border-black rounded-full aspect-square w-fit shadow-md shadow-black/40",
        sort === sortBy && "bg-emerald-100"
      )}
      onClick={() => {
        setSort(sortBy);
      }}
    >
      {children}
    </Button>
  );
};

export default function NewsEditor({ ...props }: NewsEditorProps) {
  const { data, className, ...rest } = props;

  const [selectedRecord, setSelectedRecord] = useState<NewsUpdateEntity | null>(
    null
  );
  const [sort, setSort] = useState<SortOption>("display-order");
  const [formOpen, setFormOpen] = useState(false);

  const handleCreateButton = () => {
    setFormOpen((prev) => !prev);
    setSelectedRecord(null);
  };

  const handleRecordButton = (record: NewsUpdateEntity) => {
    setSelectedRecord(record);
    setFormOpen(true);
  };

  const getSortLabel = (sort: SortOption): string => {
    let sortLabel = "Display Date";
    switch (sort) {
      case "display-order":
        sortLabel = "Display Date";
        break;
      case "created":
        sortLabel = "Created Date";
        break;
      case "updated":
        sortLabel = "Updated Date";
        break;
      case "published":
        sortLabel = "Published";
        break;
      case "not-published":
        sortLabel = "Not Published";
        break;
    }
    return sortLabel;
  };

  return (
    <div {...rest} className={cn(className, "grow flex flex-col gap-1 p-4")}>
      {/* Header */}
      <div className="flex justify-between items-center pb-1.5">
        <h2 className="font-semibold text-2xl">News Editor</h2>
        <Button
          onClick={handleCreateButton}
          variant={formOpen ? "destructive" : "default"}
        >
          {formOpen ? "Cancel" : "Create"}
        </Button>
      </div>
      {/* Container for record list and form sections */}
      <div className="grow grid">
        {/* Record List */}
        <section className="row-start-1 col-start-1 flex flex-col gap-4">
          {/* Record Sort Filters */}
          <div className="flex flex-col gap-2 mt-2 bg-neutral-100 border border-black px-2 pt-1 pb-2">
            <p className="text-sm font-medium">
              <span className="text-muted-foreground">Sort By:</span>{" "}
              {getSortLabel(sort)}
            </p>
            <div className="flex justify-between items-center">
              <SortButton
                sortBy={"display-order"}
                sort={sort}
                setSort={setSort}
              >
                <Hash />
              </SortButton>
              <SortButton sortBy={"created"} sort={sort} setSort={setSort}>
                <Calendar />
              </SortButton>
              <SortButton sortBy={"updated"} sort={sort} setSort={setSort}>
                <CalendarCheck />
              </SortButton>
              <SortButton sortBy={"published"} sort={sort} setSort={setSort}>
                <Eye />
              </SortButton>
              <SortButton
                sortBy={"not-published"}
                sort={sort}
                setSort={setSort}
              >
                <EyeClosed />
              </SortButton>
            </div>
          </div>
          {/* Record Buttons */}
          <div className="flex flex-col gap-2">
            {data.map((record) => (
              <div
                key={`news-update-${record.id.toString()}`}
                className={cn(
                  "grid grid-flow-col grid-cols-[1fr_min-content] items-center border border-black rounded-sm drop-shadow-lg",
                  record.published ? "bg-amber-100" : "bg-rose-100"
                )}
              >
                <button
                  onClick={() => {
                    handleRecordButton(record);
                  }}
                  type="button"
                >
                  <div className="grid grid-flow-col justify-start items-baseline gap-3 px-2 py-4">
                    <p className="whitespace-nowrap truncate text-sm font-medium">
                      {record.title}
                    </p>
                    <p className="truncate text-sm text-muted-foreground">
                      {record.content}
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* Form */}
        <aside
          className={cn(
            "row-start-1 col-start-1 flex flex-col gap-10 translate-x-[calc(100%_+_1rem)] transition-transform ease-in-out bg-neutral-300 border border-black shadow-md shadow-gray-400 rounded-md p-2",
            formOpen && "translate-x-0"
          )}
        >
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="published">Published</Label>
              <Switch id="published" className="border border-black" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="title">Title</Label>
              <Input id="title" className="bg-background border border-black" />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                className="bg-background border border-black"
              />
            </div>
            <Button type="submit" className="mt-6">
              {selectedRecord ? "Update" : "Create"}
            </Button>
          </form>
          {selectedRecord && (
            <div>
              <p>Updating News Id# {selectedRecord.id}</p>
              <p className="text-sm font-medium">
                Created: {selectedRecord.createdAt.toString()}
              </p>
              <p className="text-sm font-medium">
                Updated: {selectedRecord.updatedAt.toString()}
              </p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
