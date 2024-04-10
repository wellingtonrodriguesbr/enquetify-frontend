import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export function useVoteOnPoll({ pollId }: { pollId: string }) {
  const { mutateAsync: voteonPoll, isPending } = useMutation({
    mutationFn: () => handleVoteOnPoll(pollId),
  });

  async function handleVoteOnPoll(pollId: string) {
    await api.post(`/polls/${pollId}/votes`);
  }

  return { voteonPoll, isPending };
}
