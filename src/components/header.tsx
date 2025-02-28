"use client";

import Link from "next/link";

import { AccountMenu } from "@/components/account-menu";
import { Separator } from "@/components/ui/separator";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { Skeleton } from "@/components/ui/skeleton";
import { Logo } from "@/components/logo";
import { useGetProfile } from "@/hooks/use-get-profile";
import { Button } from "./ui/button";

export function Header() {
  const { profile, loading } = useGetProfile();

  return (
    <header className="w-full flex items-center py-4 h-16 border-b border-zinc-100">
      <div className="flex items-center justify-between w-full mx-auto px-4 md:px-8">
        <Logo />
        {!profile && !loading ? (
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex" variant="ghost" asChild>
              <Link href="https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20quero%20uma%20demonstração%20gratuita%20da%20plataforma">
                <WhatsappIcon className="size-4 fill-black" />
                Fale conosco para uma demostração
              </Link>
            </Button>

            <Separator
              orientation="vertical"
              className="hidden md:flex bg-zinc-200 h-4 ml-1"
            />

            <Button className="hidden md:flex" variant="ghost" asChild>
              <Link href="/entrar">Entrar</Link>
            </Button>

            <Button className="hidden md:flex" asChild>
              <Link href="/cadastro">Criar enquete gratuitamente</Link>
            </Button>
          </div>
        ) : null}

        {!profile && loading ? (
          <div className="flex items-center gap-4">
            <Skeleton className="w-48 md:w-96 h-8" />
            <Separator
              orientation="vertical"
              className="hidden md:block bg-zinc-200 h-4 ml-1"
            />
            <Skeleton className="hidden md:block w-36 h-8" />
            <Skeleton className="hidden md:block w-56 h-8" />
          </div>
        ) : null}

        {profile ? <AccountMenu /> : null}
      </div>
    </header>
  );
}
