"use client";

import Link from "next/link";

import { useGetPoll } from "@/hooks/use-get-poll";
import { ArrowLeft } from "lucide-react";
import { PollOptionsTable } from "./poll-options-table";
import { PollsOptionsSkeletetonTable } from "./polls-options-skeleton-table";
import { Skeleton } from "./ui/skeleton";
import { useEffect, useState } from "react";

export function PollDetails({ pollId }: { pollId: string }) {
  const { poll, loading } = useGetPoll({ pollId });
  const [votesRealTime, setVotesRealTime] = useState({
    pollOptionId: "",
    votes: 0,
  });

  const ws = new WebSocket(
    `${process.env.NEXT_PUBLIC_WEBSOCKET_PROTOCOL}${process.env.NEXT_PUBLIC_WEBSOCKET_DOMAIN_URL}/polls/${pollId}/results`
  );

  useEffect(() => {
    ws.addEventListener("open", function (event) {
      console.log("Conexão estabelecida");
    });

    ws.addEventListener("message", function (event) {
      const realTime = JSON.parse(event.data);

      return setVotesRealTime({
        pollOptionId: realTime.pollOptionId,
        votes: realTime.votes,
      });
    });

    return () => {
      ws.addEventListener("close", function (event) {
        console.log("Conexão fechada");
      });
    };
  }, []);

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
        <strong className="block text-2xl mb-12 font-semibold">
          Enquete: {poll?.title}
        </strong>
      )}
      {loading ? (
        <PollsOptionsSkeletetonTable />
      ) : (
        <PollOptionsTable
          votesRealTime={votesRealTime}
          options={poll?.options ?? []}
        />
      )}
    </section>
  );
}
