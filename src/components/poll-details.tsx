"use client";

import Link from "next/link";

import { useGetPoll } from "@/hooks/use-get-poll";
import { ArrowLeft } from "lucide-react";
import { PollOptionsTable } from "./poll-options-table";

export function PollDetails({ pollId }: { pollId: string }) {
  const { poll } = useGetPoll({ pollId });

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 mt-12 pb-12">
      <Link
        href="/enquetes"
        className="flex items-center gap-2 mb-8 text-zinc-700 font-medium text-sm group"
      >
        <ArrowLeft className="size-3 group-hover:-translate-x-0.5 transition-transform" />
        Voltar
      </Link>
      <strong className="block text-2xl mb-12 font-semibold">
        Enquete: {poll?.title}
      </strong>
      <PollOptionsTable options={poll?.options ?? []} />
    </section>
  );
}
