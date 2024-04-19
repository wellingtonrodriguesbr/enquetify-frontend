import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { EllipsisVertical } from "lucide-react";
import { PollDeleteAlert } from "./poll-delete-alert";
import { EditPollDialog } from "./edit-poll-dialog";

interface PollStockOptionsProps {
  pollId: string;
}

export function PollStockOptions({ pollId }: PollStockOptionsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          <EllipsisVertical className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-3">
        <p className="mb-3">O que você deseja fazer?</p>
        <EditPollDialog />
        <PollDeleteAlert pollId={pollId} />
      </PopoverContent>
    </Popover>
  );
}
