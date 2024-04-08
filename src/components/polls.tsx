import { PollsTable } from "./polls-table";

export function Polls() {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 mt-12 pb-12">
      <h1 className="text-2xl mb-6 font-bold">Todas suas Enquetes</h1>
      <PollsTable />
    </section>
  );
}
