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
import { useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export function AskForSuggestionsForNewPollsForAIDialog() {
  const prompt = `Eu sou um COLOQUE_SUA_POSIÇÃO_AQUI no setor de COLOQUE_SETOR_QUE_ATUA_AQUI e gostaria de criar uma enquete de apenas uma pergunta, mas com algumas opções bem estratégicas para meus COLOQUE_PARA_QUEM_ESTA_DESTINADO_AQUI respondessem o que estão achando do  COLOQUE_O_QUE_ESTA_PESQUISANDO_AQUI, me liste algumas sugestões com que cada enquete tenha 3 opções.`;

  const {
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    completion,
    isLoading,
  } = useCompletion();

  useEffect(() => {
    setInput(prompt);
  }, []);

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
            Aqui está uma sugestão de prompt que será enviada para IA, mude se
            achar necessário.
          </DialogDescription>
          <Popover>
            <PopoverTrigger asChild>
              <Button size="sm" variant="secondary" className="w-fit">
                Veja o que editar aqui
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-[300px] md:w-[400px] overflow-hidden"
            >
              <ul className="flex flex-col gap-4 text-xs">
                <li>
                  COLOQUE_SUA_POSIÇÃO_AQUI = Ex: CEO, Influencer, empresário...
                </li>
                <li>
                  COLOQUE_SETOR_QUE_ATUA_AQUI = Ex: Roupas, cursos online,
                  palestras...
                </li>
                <li>
                  COLOQUE_PARA_QUEM_ESTA_DESTINADO_AQUI = Ex: Clientes,
                  colaboradores, público em geral...
                </li>
                <li>
                  COLOQUE_O_QUE_ESTA_PESQUISANDO_AQUI = Ex: Produto, serviço,
                  atendimento, liderança...
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-2">
          <Textarea
            className="min-h-[300px] md:min-h-[150px]"
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
