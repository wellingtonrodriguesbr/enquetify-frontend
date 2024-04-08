import Link from "next/link";

import { Separator } from "./ui/separator";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center mt-12 md:mt-24 px-4">
      <Link
        href=""
        className="flex items-center bg-zinc-100 rounded-md px-4 py-1 mb-6 text-sm font-medium group"
      >
        🤯 <Separator orientation="vertical" className="bg-zinc-400 h-4 ml-1" />
        <span className="flex items-center gap-2 ml-2">
          Como funciona
          <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </Link>
      <h1 className="max-w-2xl text-center text-3xl md:text-6xl">
        Nunca foi tão fácil aumentar o engajamento do seu negócio
      </h1>
      <p className="text-sm md:text-base mt-4 max-w-xl text-center">
        Descubra como é fácil criar conexões mais fortes com seus clientes e
        como isso impulsiona sua empresa para outros patamares.
      </p>
      <div className="flex items-center gap-2 mt-6">
        <Link
          href="/cadastro"
          className="flex items-center gap-2 bg-black text-white h-10 px-4 py-2 rounded-md font-medium hover:bg-zinc-800 transition-colors"
        >
          Criar enquete gratuitamente
          <ChevronRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
