import { SmilePlus } from "lucide-react";
import { AccountMenu } from "./account-menu";

interface HeaderProps {
  authenticate?: boolean;
}

export function Header({ authenticate = false }: HeaderProps) {
  return (
    <header className="w-full flex items-center py-4 h-16 border-b border-zinc-100">
      <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center gap-1">
          <div className="bg-black text-white rounded-md">
            <SmilePlus className="size-8" />
          </div>
          <span className="font-display text-2xl">Pollify</span>
        </div>

        {authenticate ? <AccountMenu /> : null}
      </div>
    </header>
  );
}
