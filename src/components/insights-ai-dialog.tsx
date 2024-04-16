"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCompletion } from "ai/react";
import { Textarea } from "./ui/textarea";
import { WandSparkles } from "lucide-react";

export function InsightsAIDialog() {
  const {
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    completion,
    isLoading,
  } = useCompletion({
    headers: {
      "Content-Type": "application/json",
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="submit"
          variant="outline"
          className="w-full md:w-fit gap-2"
        >
          <WandSparkles className="size-4" /> Pedir insights para IA
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full min-h-[50vh] max-w-[350px] rounded-md flex flex-col gap-5">
        <DialogHeader className="text-left">
          <DialogTitle>Sugestões da nova IA</DialogTitle>
          <DialogDescription>
            Com base nesta enquete nossa IA tem algumas sugestões para você.
          </DialogDescription>
        </DialogHeader>
        {/* <Textarea
            className="resize-none p-4 leading-relaxed"
            placeholder="Inclua o promt para a IA.."
            value={input}
            onChange={handleInputChange}
          /> */}
        <Textarea
          className="resize-none p-4 leading-relaxed"
          rows={8}
          placeholder="Resultado gerado pela IA.."
          value={completion}
          readOnly
        />
      </DialogContent>
    </Dialog>
  );
}
