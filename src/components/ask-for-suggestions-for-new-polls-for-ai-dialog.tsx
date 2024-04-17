"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCompletion } from "ai/react";
import { Textarea } from "./ui/textarea";
import { WandSparkles } from "lucide-react";
import { Input } from "./ui/input";

export function AskForSuggestionsForNewPollsForAIDialog() {
  const prompt = `Eu criei uma enquete com o seguinte tema: "Como você vê o meu trabalho", dentro dessa enquete havia 3 opções: 1. Trabalho decente, 2. trabalho meia boca, 3. acho ruim seu trabalho. A opção 1 teve 34 votos, a opção 2 teve 12 e a opção 3 teve 40. Com base nessas informações liste algumas algumas sugestões para que eu possa trabalhar ou ser melhor visto, pule uma linha entre cada um dos itens.`;

  const { input, handleInputChange, handleSubmit, completion, isLoading } =
    useCompletion();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full md:w-fit gap-2">
          <WandSparkles className="size-4" /> Pedir sugestões para IA
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full h-fit max-w-[350px] md:max-w-[600px] rounded-md flex flex-col gap-5">
        <DialogHeader className="text-left">
          <DialogTitle className="text-xl">Sugestões da nossa IA</DialogTitle>
          <DialogDescription>
            Preencha o campo abaixo que nossa IA irá sugerir novas enquetes
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-2">
          <Input
            placeholder="Qual o ramo do seu negócio?"
            value={input}
            onChange={handleInputChange}
            required
          />

          {isLoading || completion ? (
            <Textarea
              className="h-full min-h-[250px] md:min-h-[450px] resize-none p-4 leading-relaxed"
              // rows={8}
              placeholder={
                isLoading
                  ? "IA está escrevendo..."
                  : "Resultado gerado pela IA.."
              }
              value={completion}
              readOnly
            />
          ) : null}
          <Button
            disabled={isLoading || !!completion}
            type="submit"
            className="w-full gap-2"
          >
            <WandSparkles className="size-4" /> Gerar sugestões
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
