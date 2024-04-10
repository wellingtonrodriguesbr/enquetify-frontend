import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface Register {
  name: string;
  email: string;
  phone: string;
}

export function useRegister() {
  const {
    mutateAsync: register,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: handleRegister,
  });

  async function handleRegister({ name, email, phone }: Register) {
    await api.post("/users", { name, email, phone });
  }

  return { register, isPending, isSuccess };
}
