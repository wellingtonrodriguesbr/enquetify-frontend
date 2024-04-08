/* eslint-disable react/no-unescaped-entities */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { SmilePlus } from "lucide-react";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Digite seu nome completo",
  }),
});

export function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="hidden md:block bg-black relative">
        <div className="flex items-center gap-1 absolute left-12 top-12">
          <div className="bg-white text-black rounded-md">
            <SmilePlus className="size-8" />
          </div>
          <span className="font-display text-2xl text-white">pollify.</span>
        </div>

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
          href="/cadastro"
          className="hidden md:block absolute right-12 top-12 font-medium hover:bg-zinc-100 px-4 py-2 rounded-md"
        >
          Cadastrar-se
        </Link>

        <div className="w-full h-screen flex flex-col justify-center items-center gap-8 px-4">
          <h1 className="text-3xl">Acessar plataforma</h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-3 w-full max-w-md"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu e-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="seuemail@email.com.br" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
