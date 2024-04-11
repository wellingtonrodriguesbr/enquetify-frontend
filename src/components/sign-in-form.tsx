/* eslint-disable react/no-unescaped-entities */
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

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Endereço de e-mail inválido",
  }),
});

export function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const { signIn } = useSignIn();
  const params = useSearchParams();

  useValidatedCode({
    code: params.get("codigo"),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await signIn({ email: values.email });
  }

  return (
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
  );
}
