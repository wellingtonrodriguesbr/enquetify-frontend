import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface GetProfileResponse {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: string;
    createdAt: Date;
    updatedAt: Date | null;
  };
}

export function useGetProfile() {
  const { data, isFetching, status } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    enabled: true,
  });

  async function getProfile() {
    try {
      const { data } = await api.get<GetProfileResponse>("/me");
      return data.user;
    } catch (error) {
      console.log(error);
    }
  }

  return { profile: data, loading: isFetching, status };
}
