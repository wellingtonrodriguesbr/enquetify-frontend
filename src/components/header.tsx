import Link from "next/link";

import { SmilePlus } from "lucide-react";
import { AccountMenu } from "./account-menu";
import { Separator } from "./ui/separator";
import { MenuMobile } from "./menu-mobile";

interface HeaderProps {
  authenticate?: boolean;
}

export function Header({ authenticate = false }: HeaderProps) {
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
        {!authenticate ? (
          <>
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/"
                className="flex items-center gap-2 text-black h-8 text-sm px-4 py-2 rounded-md font-medium hover:bg-zinc-100 transition-colors"
              >
                Fale conosco para uma demostração
              </Link>

              <Separator
                orientation="vertical"
                className="bg-zinc-200 h-4 ml-1"
              />

              <Link
                href="/entrar"
                className="flex items-center gap-2 text-black h-8 text-sm px-4 py-2 rounded-md font-medium hover:bg-zinc-100 transition-colors"
              >
                Entrar
              </Link>
              <Link
                href="/cadastro"
                className="flex items-center gap-2 bg-black text-white h-8 text-sm px-4 py-2 rounded-md font-medium hover:bg-zinc-800 transition-colors"
              >
                Criar enquete gratuitamente
              </Link>
            </div>
            <div className="block md:hidden">
              <MenuMobile />
            </div>
          </>
        ) : null}
        {authenticate ? <AccountMenu /> : null}
      </div>
    </header>
  );
}
