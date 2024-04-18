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
import { useVoteOnPoll } from "@/hooks/use-vote-on-poll";
import { useGetPoll } from "@/hooks/use-get-poll";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Loader2 } from "lucide-react";
import { CheckLottie } from "./check-lottie";
import { Skeleton } from "./ui/skeleton";
import { Recaptcha } from "./recaptcha";
import { useState } from "react";
import Script from "next/script";

const FormSchema = z.object({
  pollOptionId: z.string().min(3, "Selecione uma opção"),
});

export function VoteOnPollForm({ pollId }: { pollId: string }) {
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const { poll, loading } = useGetPoll({ pollId });
  const { voteonPoll, isPending, status } = useVoteOnPoll();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pollOptionId: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      voteonPoll({ pollId, pollOptionId: data.pollOptionId });
    } catch (error) {
      console.log(error);
    }
  }

  const handleRecaptchaChange = async (token: string | null) => {
    if (token === null) {
      return alert("Token inválido!");
    }

    const response = await fetch(`/api/recaptcha?token=${token}`, {
      method: "POST",
    });
    setIsRecaptchaVerified(!!response);
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env
          .NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}`}
      />
      <section className="flex flex-col gap-12">
        {status === "success" ? (
          <div className="flex flex-col gap-4 items-center">
            <CheckLottie />
            <strong className="text-xl">Voto registrado com sucesso!</strong>
            <span className="text-center">
              Obrigado por participar, sua opinião é muito valiosa para nós.
            </span>
          </div>
        ) : (
          <>
            {loading ? (
              <Skeleton className="h-10 w-96" />
            ) : (
              <h1 className="text-3xl font-semibold">{poll?.title}</h1>
            )}
            {loading ? (
              <div className="space-y-12">
                <Skeleton className="w-full h-[450px]" />
                <Skeleton className="h-10 w-full" />
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col items-center gap-12"
                >
                  <FormField
                    control={form.control}
                    name="pollOptionId"
                    render={({ field }) => (
                      <FormItem className="w-full flex flex-row items-start space-y-0">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            className="w-full flex flex-col gap-4"
                          >
                            {poll?.options.map((option) => (
                              <FormItem
                                key={option.id}
                                className="flex items-center space-x-2 space-y-0 border rounded-md p-4"
                              >
                                <FormControl>
                                  <RadioGroupItem value={option.id} />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  {option.title}
                                </FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Recaptcha onChange={handleRecaptchaChange} />

                  <Button
                    disabled={isPending || !isRecaptchaVerified}
                    type="submit"
                    className="w-full"
                  >
                    {isPending ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      "Confirmar voto"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </>
        )}
      </section>
    </>
  );
}
