import Link from "next/link";

import { ChevronRight } from "lucide-react";
import { HowItWorksDialog } from "./how-it-works-dialog";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center mt-12 md:mt-16 px-4">
      <HowItWorksDialog />
      <h1 className="max-w-5xl text-center text-2xl md:text-5xl font-bold">
        Nunca foi tão fácil aumentar o engajamento de seus clientes com o seu
        negócio
      </h1>
      <p className="text-xs md:text-base mt-4 max-w-xl text-center">
        Descubra como é fácil criar conexões mais fortes com seus clientes e
        como isso impulsiona sua empresa para outros patamares.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-2 mt-6">
        <Link
          href="/cadastro"
          className="flex items-center gap-2 bg-black text-white h-10 px-4 py-2 rounded-md font-medium hover:bg-zinc-800 transition-colors"
        >
          Criar enquete gratuitamente
          <ChevronRight className="size-4" />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-black h-11 text-sm px-4 py-2 rounded-md font-medium hover:bg-zinc-100 transition-colors"
        >
          Fale conosco para uma demostração
        </Link>
      </div>
    </section>
  );
}
