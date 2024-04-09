import { PollDetails } from "@/components/poll-details";

export default function Poll({ params }: { params: { id: string } }) {
  return <PollDetails pollId={params.id} />;
}
