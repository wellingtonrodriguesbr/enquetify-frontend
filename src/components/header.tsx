"use client";

import Link from "next/link";

import { ArrowUpRight, SmilePlus } from "lucide-react";
import { AccountMenu } from "./account-menu";
import { Separator } from "./ui/separator";
import { WhatsappIcon } from "./icons/whatsapp-icon";
import { useGetProfile } from "@/hooks/use-get-profile";

export function Header() {
  const { profile, loading } = useGetProfile();
  return (
    <header className="w-full flex items-center py-4 h-16 border-b border-zinc-100">
      <div className="flex items-center justify-between w-full mx-auto px-4 md:px-8">
        <Link href="/" className="flex items-center gap-1">
          <div className="text-black rounded-md p-1">
            <SmilePlus className="size-6" />
          </div>
          <span className="text-2xl font-logo font-bold underline">
            pollify.
          </span>
        </Link>
        {!profile && !loading ? (
          <div className="flex items-center gap-4">
            <Link
              href="https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20quero%20uma%20demonstração%20gratuita%20da%20plataforma"
              className="hidden md:flex items-center gap-2 text-black h-8 text-sm px-4 py-2 rounded-md font-medium hover:bg-zinc-100 transition-colors"
            >
              <WhatsappIcon className="size-4 fill-black" />
              Fale conosco para uma demostração
            </Link>

            <Separator
              orientation="vertical"
              className="hidden md:block bg-zinc-200 h-4 ml-1"
            />

            <Link
              href="/entrar"
              className="hidden md:flex items-center gap-2 text-black h-8 text-sm px-4 py-2 rounded-md font-medium hover:bg-zinc-100 transition-colors"
            >
              Entrar
            </Link>
            <Link
              href="/cadastro"
              className="hidden md:flex items-center gap-2 bg-black text-white h-8 text-sm px-4 py-2 rounded-md font-medium hover:bg-zinc-800 transition-colors"
            >
              Criar enquete gratuitamente
            </Link>

            <Link
              href="/cadastro"
              className="flex md:hidden items-center gap-2 text-black h-10 text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Clique para começar
              <ArrowUpRight className="size-3" />
            </Link>
          </div>
        ) : null}
        {profile ? <AccountMenu /> : null}
      </div>
    </header>
  );
}
