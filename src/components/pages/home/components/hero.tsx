import Link from "next/link";
import Image from "next/image";

import { HowItWorksDialog } from "@/components/pages/home/components/how-it-works-dialog";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";

export function Hero() {
  return (
    <section className="min-h-full flex flex-col items-center justify-center mt-12 md:mt-16 px-4">
      <HowItWorksDialog />
      <h1 className="max-w-5xl text-center text-3xl leading-tight md:text-6xl md:leading-tight font-bold">
        Impusione o seu negócio tomando as melhores decisões
      </h1>
      <p className="text-sm md:text-base mt-4 max-w-4xl text-center">
        Crie enquetes com perguntas estratégicas de acordo com suas necessidades
        e descubra como é fácil estabelecer conexões mais fortes com seus fãs,
        seguidores, clientes e colaboradores. Além disso, nossa Inteligência
        Artificial fornece sugestões de novas enquetes e insights sobre as
        enquetes em andamento, ajudando você a tomar decisões mais assertivas,
        validadas por aqueles que realmente importam.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-2 mt-6">
        <Link
          href="/cadastro"
          className="w-full md:w-fit flex items-center justify-center gap-2 bg-black text-white h-10 px-4 py-2 rounded-md font-medium hover:bg-zinc-800 transition-colors"
        >
          Criar enquete gratuitamente
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20quero%20uma%20demonstração%20gratuita%20da%20plataforma"
          className="flex items-center gap-2 text-black h-10 px-4 py-2 rounded-md font-medium bg-zinc-100 hover:bg-zinc-200 transition-colors text-nowrap"
        >
          <WhatsappIcon className="size-4 fill-black" />
          Fale conosco para uma demostração
        </Link>
      </div>
      <footer className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-cols-fr place-items-center place-content-center">
          <Image src="/illustration-2.svg" alt="" width={400} height={400} />
          <Image
            src="/illustration-9.svg"
            alt=""
            className="hidden md:block"
            width={400}
            height={400}
          />
          <Image
            src="/illustration-11.svg"
            alt=""
            className="hidden lg:block"
            width={400}
            height={400}
          />
          <Image
            src="/illustration-6.svg"
            alt=""
            className="hidden xl:block"
            width={400}
            height={400}
          />
        </div>
      </footer>
    </section>
  );
}
