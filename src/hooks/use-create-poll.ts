import { api } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface CreatePoll {
  title: string;
  options: {
    option: string;
  }[];
}

export function useCreatePoll() {
  const queryClient = useQueryClient();
  const { mutateAsync: createPoll, isPending } = useMutation({
    mutationFn: handleCreatePoll,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["fetchPolls"],
      });
    },
  });

  async function handleCreatePoll({ title, options }: CreatePoll) {
    await api.post("/polls", { title, options });
  }

  return { createPoll, isPending };
}
