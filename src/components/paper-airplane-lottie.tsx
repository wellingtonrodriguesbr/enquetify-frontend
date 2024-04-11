"use client";

import Lottie from "lottie-react";
import paperAirplane from "@/lib/lotties/paper-airplane.json";

export function PaperAirplaneLottie() {
  return (
    <div className="w-[200px] h-[200px]">
      <Lottie animationData={paperAirplane} loop={true} />
    </div>
  );
}
