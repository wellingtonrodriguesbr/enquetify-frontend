"use client";

import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Dialog } from "./ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function AccountMenu() {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="border cursor-pointer">
            <AvatarImage src="/avatar.svg" alt="@wellingtonrodriguesbr" />
            <AvatarFallback>WR</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            <span>Wellington Rodrigues</span>
            <span className="text-xs font-normal text-muted-foreground">
              wellington@pollify.app
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <button
              className="w-full text-rose-500 hover:text-rose-600 hover:bg-rose-100/40 cursor-pointer font-medium"
              onClick={() => {}}
            >
              <LogOut className="mr-2 w-4 h-4" />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Dialog>
  );
}
