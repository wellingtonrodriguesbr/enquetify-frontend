import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

interface Register {
  name: string;
  email: string;
  phone: string;
}

export function useRegister() {
  const {
    mutateAsync: register,
    isPending,
    status,
  } = useMutation({
    mutationFn: handleRegister,
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) {
        toast.error("Já existe uma conta com este e-mail");
      } else {
        toast.error("Falha ao registrar usuário, tente novamente!");
      }
    },
  });

  console.log("STATUS", status);

  async function handleRegister({ name, email, phone }: Register) {
    await api.post("/users", { name, email, phone });
  }

  return { register, isPending, status };
}
