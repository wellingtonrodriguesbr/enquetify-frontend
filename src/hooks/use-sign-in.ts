import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export function useSignIn() {
  const {
    mutateAsync: signIn,
    isPending,
    status,
  } = useMutation({
    mutationFn: handleSignIn,
    onError: (error: AxiosError) => {
      if (error.response?.status === 404) {
        toast.error("Não existe uma conta com este e-mail");
      } else {
        toast.error("Falha ao autenticar, tente novamente!");
      }
    },
  });

  async function handleSignIn({ email }: { email: string }) {
    await api.post("/sessions/submit-magic-link", {
      email,
    });
  }

  return { signIn, isPending, status };
}
