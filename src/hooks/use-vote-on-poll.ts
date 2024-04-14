import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

interface VoteOnPollRequest {
  pollId: string;
  pollOptionId: string;
}

export function useVoteOnPoll() {
  const {
    mutateAsync: voteonPoll,
    isPending,
    status,
  } = useMutation({
    mutationFn: handleVoteOnPoll,
    onError: (error: AxiosError) => {
      if (error.response?.status === 409) {
        toast.error("Você já votou nesta enquete!");
      }
    },
  });

  async function handleVoteOnPoll({ pollId, pollOptionId }: VoteOnPollRequest) {
    await api.post(`/polls/${pollId}/votes`, { pollOptionId });
  }

  return { voteonPoll, isPending, status };
}
