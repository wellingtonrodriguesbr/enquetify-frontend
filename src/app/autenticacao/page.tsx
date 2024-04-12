import { LoadingLottie } from "@/components/loading";
import { Suspense } from "react";

export default function Authenticate() {
  return (
    <section className="flex justify-center items-center h-screen w-full bg-white">
      <Suspense>
        <LoadingLottie />
      </Suspense>
    </section>
  );
}
