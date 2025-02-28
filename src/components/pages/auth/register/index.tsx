/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

import { RegisterForm } from "./register-form";
import { Logo } from "@/components/logo";
import { SmilePlus } from "lucide-react";

export function Register() {
  return (
    <div className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="hidden md:block bg-black relative">
        <Logo />
        <div className="flex flex-col gap-2 absolute left-12 bottom-12 text-white px-4">
          <cite className="text-xl">
            "As empresas que prosperam são aquelas que focam na obsessão do
            cliente, não na obsessão pela concorrência."
          </cite>
          <span className="text-zinc-400">
            - Jeff Bezos, fundador da Amazon.
          </span>
        </div>
      </div>

      <div className="flex relative">
        <Link
          href="/entrar"
          className="hidden md:block absolute right-12 top-12 font-medium hover:bg-zinc-100 px-4 py-2 rounded-md"
        >
          Fazer login
        </Link>

        <div className="w-full h-screen flex flex-col justify-center items-center gap-8 px-4">
          <div className="flex md:hidden absolute top-3 w-full justify-between">
            <Link href="/" className="flex items-center gap-1 ml-4">
              <div className="p-1 text-black rounded-md">
                <SmilePlus className="size-6" />
              </div>
              <span className="font-bold font-logo text-2xl text-black underline">
                enquetify.
              </span>
            </Link>
            <Link
              href="/entrar"
              className="font-medium bg-zinc-100 px-4 py-2 rounded-md mr-4"
            >
              Fazer login
            </Link>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
