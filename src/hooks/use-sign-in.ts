import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export function useSignIn() {
  const { mutateAsync: signIn, isPending } = useMutation({
    mutationFn: handleSignIn,
  });

  async function handleSignIn({ email }: { email: string }) {
    try {
      await api.post("/sessions/submit-magic-link", {
        email,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return { signIn, loading: isPending };
}
