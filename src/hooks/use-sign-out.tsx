import { api } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSignOut() {
  const queryClient = useQueryClient();
  const {
    mutateAsync: signOut,
    isPending,
    status,
  } = useMutation({
    mutationFn: handleSignOut,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },
    onError: () => {
      toast.error("Falha ao deslogar, tente novamente");
    },
  });

  async function handleSignOut() {
    await api.post("/sign-out");
  }

  return { signOut, isPending, status };
}
