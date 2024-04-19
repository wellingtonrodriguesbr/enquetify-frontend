"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useDeletePoll } from "@/hooks/use-delete-poll";
import { Loader2, Trash } from "lucide-react";

interface PollDeleteAlertProps {
  pollId: string;
}

export function PollDeleteAlert({ pollId }: PollDeleteAlertProps) {
  const { deletePoll, isPending } = useDeletePoll({ pollId });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full bg-red-500 hover:bg-red-600 gap-2">
          <Trash className="size-4" />
          Deletar
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Tem certeza que deseja deletar esta enquete?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Ao deletar a enquete, perderá todas as opções e votos registrados.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              disabled={isPending}
              onClick={() => deletePoll()}
              className="bg-red-500 hover:bg-red-600"
            >
              {isPending ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                "Deletar mesmo assim"
              )}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
