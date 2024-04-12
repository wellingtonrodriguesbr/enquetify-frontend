import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

type Vote = {
  id: number;
  sessionId: string;
  pollOptionId: string;
  pollId: string;
  createdAt: string;
};

export type Polls = {
  id: string;
  title: string;
  votes: Vote[];
  createdAt: Date;
  updatedAt: Date;
};
interface FetchPollsResponse {
  polls: Polls[];
}

export function useFetchPolls() {
  const { data, isFetching, error } = useQuery({
    queryKey: ["fetchPolls"],
    queryFn: async () => {
      const { data } = await api.get<FetchPollsResponse>("/polls");
      return data.polls;
    },
  });

  return { polls: data ?? [], loading: isFetching, error };
}
