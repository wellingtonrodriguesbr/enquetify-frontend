"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRegister } from "@/hooks/use-register";
import { Loader2 } from "lucide-react";
import { CheckLottie } from "./check-lottie";
import { useLayoutEffect } from "react";
import { useGetProfile } from "@/hooks/use-get-profile";
import { redirect } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Digite seu nome completo",
  }),
  email: z.string().email({
    message: "Endereço de e-mail inválido",
  }),
  phone: z.string().min(11, {
    message: "Número de celular inválido",
  }),
});

export function RegisterForm() {
  const { register, isPending, status } = useRegister();
  const { profile, loading } = useGetProfile();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await register({
        name: values.name,
        email: values.email,
        phone: values.phone,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useLayoutEffect(() => {
    if (profile && !loading) {
      redirect("/enquetes");
    }
  }, [profile, loading]);

  return (
    <>
      {["idle", "error", "pending"].includes(status) ? (
        <div className="w-full flex flex-col items-center gap-12">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Faça seu cadastro
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-3 w-full max-w-md"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome completo</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

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

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Celular</FormLabel>
                    <FormControl>
                      <Input placeholder="(00) 00000-0000" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isPending} type="submit" className="w-full">
                {isPending ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  "Cadastrar"
                )}
              </Button>
            </form>
          </Form>
        </div>
      ) : null}

      {status === "success" ? (
        <div className="flex flex-col gap-2 items-center">
          <CheckLottie />
          <p className="text-center text-2xl font-medium">
            Cadastro realizado com sucesso!
          </p>
          <span className="text-center text-zinc-700 text-sm">
            Te enviamos um e-mail com o link de acesso a plataforma :)
          </span>
        </div>
      ) : null}
    </>
  );
}
