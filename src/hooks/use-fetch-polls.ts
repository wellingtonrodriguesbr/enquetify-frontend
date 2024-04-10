import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export type Polls = {
  id: string;
  title: string;
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
