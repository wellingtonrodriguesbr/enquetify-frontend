import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface FetchPollsResponse {
  polls: {
    id: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export function useFetchPolls() {
  const { data, isFetching } = useQuery({
    queryKey: ["fetchPolls"],
    queryFn: async () => {
      const { data } = await api.get<FetchPollsResponse>("/polls");
      return data.polls;
    },
  });

  return { polls: data, loading: isFetching };
}
