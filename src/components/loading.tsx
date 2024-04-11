"use client";

import Lottie from "lottie-react";
import loading from "@/lib/lotties/loading.json";

export function LoadingLottie() {
  return (
    <div className="w-[100px] h-[100px]">
      <Lottie animationData={loading} loop={true} />
    </div>
  );
}
