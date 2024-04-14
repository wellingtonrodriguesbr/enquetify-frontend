import { VoteOnPollForm } from "@/components/vote-on-poll-form";

export default function VotesPage({
  params,
}: {
  params: { enqueteId: string };
}) {
  return (
    <section className="mt-12 w-full max-w-screen-sm mx-auto px-4">
      <VoteOnPollForm pollId={params.enqueteId} />
    </section>
  );
}
