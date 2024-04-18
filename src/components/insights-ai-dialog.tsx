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
import { Option } from "@/hooks/use-get-poll";

interface InsightsAIDialogProps {
  pollName: string;
  pollOptions: Option[];
}

export function InsightsAIDialog({
  pollName,
  pollOptions,
}: InsightsAIDialogProps) {
  const options = pollOptions
    .map((option, index) => {
      return `${index + 1}. ${option.title}`;
    })
    .join(" ");

  const score = pollOptions
    .map((option, index) => {
      return `${index + 1}. ${option.score}`;
    })
    .join(" ");

  const prompt = `Eu criei uma enquete com o seguinte tema: "${pollName}", dentro dessa enquete havia ${pollOptions.length} opções: ${options}. Respectivamente, teve as seguintes pontuações ${score}. Com base nessas informações liste algumas algumas sugestões para que eu possa trabalhar em cima desses dados. Se não conseguir gerar uma sugestão,retorne dizendo que houve uma falha e que é para tentar novamente.`;

  const {
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    completion,
    isLoading,
  } = useCompletion();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="submit"
          form="form"
          onClick={() => setInput(prompt)}
          variant="outline"
          className="w-full md:w-fit gap-2"
        >
          <WandSparkles className="size-4" /> Pedir insights para IA
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full min-h-[50vh] max-w-[350px] md:max-w-[600px] rounded-md flex flex-col gap-5">
        <DialogHeader className="text-left">
          <DialogTitle className="text-xl">Insights da nossa IA</DialogTitle>
          <DialogDescription>
            Com base nesta enquete nossa IA tem alguns insights para você.
          </DialogDescription>
        </DialogHeader>

        <form
          id="form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 mt-4"
        >
          <Textarea
            className="sr-only"
            placeholder="Inclua o promt para a IA.."
            value={input}
            onChange={handleInputChange}
          />

          <Textarea
            className="h-full min-h-[250px] md:min-h-[450px] resize-none p-4 leading-relaxed"
            // rows={8}
            placeholder={
              isLoading ? "IA está escrevendo..." : "Resultado gerado pela IA.."
            }
            value={completion}
            readOnly
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
