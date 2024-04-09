import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export type Option = {
  id: string;
  title: string;
  score: number;
};

interface GetPollResponse {
  poll: {
    id: string;
    title: string;
    options: Option[];
  };
}

export function useGetPoll({ pollId }: { pollId: string }) {
  const { data, isFetching } = useQuery({
    queryKey: ["poll", pollId],
    queryFn: () => handleGetPoll(pollId),
    enabled: true,
  });

  async function handleGetPoll(pollId: string) {
    const { data } = await api.get<GetPollResponse>(`/polls/${pollId}`);
    return data.poll;
  }

  return { poll: data, loading: isFetching };
}
