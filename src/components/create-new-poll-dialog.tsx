"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

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

export function CreateNewPollDialog() {
  const form = useForm<z.infer<typeof formSchema>>({
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

  const {
    formState: { errors },
  } = form;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full md:w-fit">+Criar nova enquete</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] md:max-w-xl rounded-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Nova enquete</DialogTitle>
          {/* <DialogDescription>Todo mundo sai ganhando</DialogDescription> */}
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
                        +Adicionar opção
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
                          +Adicionar opção
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
            <Button className="w-full mt-4">Cadastrar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
