import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface GetProfileResponse {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: string;
    createdAt: string;
    updatedAt: any;
  };
}

export function useGetProfile() {
  const { data, isFetching } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    // staleTime: Infinity,
  });

  async function getProfile() {
    const { data } = await api.get<GetProfileResponse>("/me");

    return data.user;
  }

  return { profile: data, loading: isFetching };
}
