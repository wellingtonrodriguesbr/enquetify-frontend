import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

export function EditPollDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled variant="secondary" className="w-full gap-2">
          <Pencil className="size-4" />
          Editar (em breve)
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] md:max-w-xl rounded-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Veja como é fácil
          </DialogTitle>
        </DialogHeader>
        <div className="w-full h-36 md:h-48 border rounded-sm flex justify-center items-center">
          <p>Video de explicação</p>
        </div>
        <DialogClose>
          <Button className="w-full">Entendido</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
