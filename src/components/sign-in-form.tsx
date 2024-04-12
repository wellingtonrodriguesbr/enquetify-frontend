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
import { useSearchParams } from "next/navigation";
import { useValidatedCode } from "@/hooks/use-validated-code";
import { useSignIn } from "@/hooks/use-sign-in";
import { Loader2 } from "lucide-react";
import { PaperAirplaneLottie } from "./paper-airplane-lottie";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Endereço de e-mail inválido",
  }),
});

export function SignInForm() {
  const { signIn, isPending, status } = useSignIn();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await signIn({ email: values.email });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {["idle", "error", "pending"].includes(status) ? (
        <div className="w-full flex flex-col items-center gap-12">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Acessar plataforma
          </h1>
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

              <Button disabled={isPending} type="submit" className="w-full">
                {isPending ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  "Entrar"
                )}
              </Button>
            </form>
          </Form>
        </div>
      ) : null}

      {status === "success" ? (
        <div className="flex flex-col gap-2 items-center">
          <PaperAirplaneLottie />
          <p className="text-center text-2xl font-medium">
            Te enviamos um e-mail com o link de acesso a plataforma!
          </p>
          <span className="text-center text-zinc-700 text-sm">
            Corre lá ver! :)
          </span>
        </div>
      ) : null}
    </>
  );
}
