import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";
import { ArrowRight } from "lucide-react";

export function HowItWorksDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="flex items-center bg-zinc-100 rounded-md h-8 mb-6 text-sm font-medium group"
        >
          🤯{" "}
          <Separator orientation="vertical" className="bg-zinc-400 h-4 ml-1" />
          <span className="flex items-center gap-2 ml-2">
            Como funciona
            <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] md:max-w-xl rounded-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Veja como é fácil
          </DialogTitle>
          <DialogDescription>Todo mundo sai ganhando</DialogDescription>
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
