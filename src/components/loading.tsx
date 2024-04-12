"use client";

import Lottie from "lottie-react";
import loading from "@/lib/lotties/loading.json";
import { useSearchParams } from "next/navigation";
import { useValidatedCode } from "@/hooks/use-validated-code";

export function LoadingLottie() {
  const params = useSearchParams();

  useValidatedCode({
    code: params.get("codigo"),
  });

  return (
    <div className="w-[300px] h-[300px]">
      <Lottie animationData={loading} loop={true} />
    </div>
  );
}
