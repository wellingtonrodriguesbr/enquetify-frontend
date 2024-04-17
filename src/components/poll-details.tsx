"use client";

import Link from "next/link";

import { useGetPoll } from "@/hooks/use-get-poll";
import { ArrowLeft } from "lucide-react";
import { PollOptionsTable } from "./poll-options-table";
import { PollsOptionsSkeletetonTable } from "./polls-options-skeleton-table";
import { Skeleton } from "./ui/skeleton";
import { useWSResults } from "@/hooks/use-ws-results";
import { InsightsAIDialog } from "./insights-ai-dialog";

export function PollDetails({ pollId }: { pollId: string }) {
  const { poll, loading } = useGetPoll({ pollId });
  const { votes, pollOptionId } = useWSResults({ pollId });

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 mt-12 pb-12">
      <Link
        href="/enquetes"
        className="w-fit flex items-center gap-2 mb-8 text-zinc-700 font-medium text-sm group"
      >
        <ArrowLeft className="size-3 group-hover:-translate-x-0.5 transition-transform" />
        Voltar
      </Link>
      {loading ? (
        <Skeleton className="w-[300px] h-[32px] rounded-md mb-12" />
      ) : (
        <div className="flex items-center justify-between mb-12 ">
          <strong className="block text-2xl font-semibold">
            Enquete: {poll?.title}
          </strong>
          <InsightsAIDialog
            pollName={poll?.title ?? ""}
            pollOptions={poll?.options ?? []}
          />
        </div>
      )}
      {loading ? (
        <PollsOptionsSkeletetonTable />
      ) : (
        <PollOptionsTable
          votes={votes}
          pollOptionId={pollOptionId}
          options={poll?.options ?? []}
        />
      )}
    </section>
  );
}
