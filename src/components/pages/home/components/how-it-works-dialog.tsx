import Link from "next/link";
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
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
            Veja como é fácil começar
          </DialogTitle>
          <DialogDescription>
            Com apenas 3 passos simples você pode criar e compartilhar suas
            enquetes facilmente.
          </DialogDescription>
        </DialogHeader>
        <ul className="flex flex-col">
          <li className="py-6 border-b">1. Crie uma conta gratuitamente</li>
          <li className="py-6 border-b">
            2. Crie sua primeira enquete e compartilhe o link gerado pela
            plataforma com quem você quiser
          </li>
          <li className="py-6 border-b">
            3. Acompanhe em tempo real os resultados das suas enquetes
          </li>
        </ul>
        <DialogClose asChild>
          <Button className="w-full" asChild>
            <Link href="/cadastro">
              Quero começar agora
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
