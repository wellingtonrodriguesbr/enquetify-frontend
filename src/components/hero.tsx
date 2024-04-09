import Link from "next/link";

import { ChevronRight } from "lucide-react";
import { HowItWorksDialog } from "./how-it-works-dialog";
import { WhatsappIcon } from "./icons/whatsapp-icon";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center mt-12 md:mt-16 px-4">
      <HowItWorksDialog />
      <h1 className="max-w-5xl text-center text-2xl leading-snug md:text-5xl md:leading-tight font-bold">
        Aumente o engajamento e a colaboração de seus clientes e colaboradores
      </h1>
      <p className="text-sm md:text-base mt-4 max-w-xl text-center">
        Descubra como é fácil criar conexões mais fortes com seus clientes e
        colaboradores e como isso impulsiona sua empresa para outros patamares.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-2 mt-6">
        <Link
          href="/cadastro"
          className="w-full md:w-fit flex items-center justify-center gap-2 bg-black text-white h-10 px-4 py-2 rounded-md font-medium hover:bg-zinc-800 transition-colors"
        >
          Criar enquete gratuitamente
          <ChevronRight className="size-4" />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20quero%20uma%20demonstração%20gratuita%20da%20plataforma"
          className="flex items-center gap-2 text-black h-10 px-4 py-2 rounded-md font-medium bg-zinc-100 hover:bg-zinc-200 transition-colors text-nowrap"
        >
          <WhatsappIcon className="size-4 fill-black" />
          Fale conosco para uma demostração
        </Link>
      </div>
    </section>
  );
}
