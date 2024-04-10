"use client";

import Lottie from "lottie-react";
import check from "@/lib/lotties/check.json";

export function CheckLottie() {
  return (
    <div className="w-[100px] h-[100px]">
      <Lottie animationData={check} loop={true} />
    </div>
  );
}
