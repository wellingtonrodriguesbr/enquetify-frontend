"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { useCreatePoll } from "@/hooks/use-create-poll";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Dê um nome para sua enquete",
  }),

  options: z.array(
    z.object({
      option: z.string().min(2, {
        message: "Dê um nome para sua enquete",
      }),
    })
  ),
});

type FormSchemaData = z.infer<typeof formSchema>;

export function CreateNewPollDialog() {
  const { createPoll, isPending } = useCreatePoll();
  const [openDialog, setOpenDialog] = useState(false);

  const form = useForm<FormSchemaData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      options: [],
    },
  });

  const { fields, append } = useFieldArray({
    control: form.control,
    name: "options",
  });

  async function onSubmit(values: FormSchemaData) {
    try {
      await createPoll({ title: values.title, options: values.options });
      setOpenDialog(false);
      toast.success("Enquete criada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Falha na criação da enquete, tente novamente!");
    }
  }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button className="w-full md:w-fit">+ Criar nova enquete</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] md:max-w-xl rounded-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Nova enquete</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da enquete</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="options"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    {fields.length === 0 ? (
                      <Button
                        variant="secondary"
                        className="w-full"
                        type="button"
                        onClick={() => append({ option: "" })}
                      >
                        + Adicionar opção
                      </Button>
                    ) : (
                      <>
                        <FormLabel>Opção</FormLabel>
                        <Button
                          variant="ghost"
                          className="h-8"
                          type="button"
                          onClick={() => append({ option: "" })}
                        >
                          + Adicionar opção
                        </Button>
                      </>
                    )}
                  </div>

                  {fields.map((field, index) => (
                    <FormControl key={field.id}>
                      <Input
                        placeholder={`Opção ${index + 1}`}
                        {...form.register(`options.${index}.option`)}
                        {...field}
                      />
                    </FormControl>
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isPending} className="w-full mt-4">
              {isPending ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                "Cadastrar"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
