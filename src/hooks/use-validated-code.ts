import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "react-use";
import { toast } from "sonner";

export function useValidatedCode({ code }: { code: string | null }) {
  const [_, setAccessToken] = useLocalStorage("accessToken");
  const router = useRouter();

  useQuery({
    queryKey: ["validated-code"],
    queryFn: handleValidatedCode,
  });

  async function handleValidatedCode() {
    if (code) {
      try {
        const { data } = await api.post(`/sessions?code=${code}`);
        setAccessToken(data.token);
        router.push("/enquetes");
        return data.token;
      } catch (error) {
        toast.error("Código de autenticação não encontrado!");
        setTimeout(() => {
          toast.error("Faça login novamente para obter outro código");
        }, 5000);
      }
    }
  }

  return {};
}
