"use client";

import { LoadingLottie } from "@/components/loading";
import { useValidatedCode } from "@/hooks/use-validated-code";
import { useSearchParams } from "next/navigation";

export default function Authenticate() {
  const params = useSearchParams();

  useValidatedCode({
    code: params.get("codigo"),
  });

  return (
    <section className="flex justify-center items-center h-screen w-full bg-white">
      <LoadingLottie />
    </section>
  );
}
