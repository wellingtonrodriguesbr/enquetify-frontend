/* eslint-disable react/no-unescaped-entities */

"use client";

import Link from "next/link";

import { SmilePlus } from "lucide-react";
import { SignInForm } from "./sign-in-form";
import { Suspense } from "react";

export function SignIn() {
  return (
    <div className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="hidden md:block bg-black relative">
        <Link
          href="/"
          className="flex items-center gap-1 absolute left-12 top-12"
        >
          <div className="p-1 text-white rounded-md">
            <SmilePlus className="size-6" />
          </div>
          <span className="font-bold font-logo text-2xl text-white underline">
            pollify.
          </span>
        </Link>

        <div className="flex flex-col gap-2 absolute left-12 bottom-12 text-white px-4">
          <cite className="text-xl">
            "Empresas que escutam seus clientes podem se destacar de seus
            concorrentes."
          </cite>
          <span className="text-zinc-400">
            - Jeanne Bliss, autora de "Chief Customer Officer 2.0: How to Build
            Your Customer-Driven Growth Engine".
          </span>
        </div>
      </div>
      <div className="flex relative">
        <Link
          href="/cadastro"
          className="hidden md:block absolute right-12 top-12 font-medium hover:bg-zinc-100 px-4 py-2 rounded-md"
        >
          Cadastrar-se
        </Link>

        <div className="w-full h-screen flex flex-col justify-center items-center gap-8 px-4">
          <div className="flex md:hidden absolute top-3 w-full justify-between">
            <Link href="/" className="flex items-center gap-1 ml-4">
              <div className="p-1 text-black rounded-md">
                <SmilePlus className="size-6" />
              </div>
              <span className="font-bold font-logo text-2xl text-black underline">
                pollify.
              </span>
            </Link>
            <Link
              href="/cadastro"
              className="font-medium bg-zinc-100 px-4 py-2 rounded-md mr-4"
            >
              Cadastrar-se
            </Link>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Acessar plataforma
          </h1>
          <Suspense>
            <SignInForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
