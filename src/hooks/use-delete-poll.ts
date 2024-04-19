import { api } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useDeletePoll({ pollId }: { pollId: string }) {
  const queryClient = useQueryClient();

  const { mutateAsync: deletePoll, isPending } = useMutation({
    mutationKey: ["delete-poll", pollId],
    mutationFn: handleDeletePoll,
    onSuccess: () => {
      toast.success("Enquete deletada com sucesso!");
      queryClient.invalidateQueries({
        queryKey: ["fetchPolls"],
      });
    },
  });

  async function handleDeletePoll() {
    await api.delete(`/polls/${pollId}`);
  }

  return { deletePoll, isPending };
}
