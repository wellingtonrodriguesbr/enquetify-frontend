import { PollDetails } from "@/components/poll-details";

export default function Poll({ params }: { params: { enqueteId: string } }) {
  return <PollDetails pollId={params.enqueteId} />;
}
