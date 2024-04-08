import { CreateNewPollDialog } from "./create-new-poll-dialog";
import { PollsTable } from "./polls-table";

export function Polls() {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 mt-12 pb-12">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-2xl  font-bold">Todas as suas enquetes</h1>
        <CreateNewPollDialog />
      </div>
      <PollsTable />
    </section>
  );
}
