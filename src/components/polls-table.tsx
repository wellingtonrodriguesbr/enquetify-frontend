import Link from "next/link";
import dayjs from "dayjs";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight } from "lucide-react";
import { Polls } from "@/hooks/use-fetch-polls";

import { CopyLinkButton } from "./copy-link-button";

interface PollsTableProps {
  polls: Polls[];
}

export function PollsTable({ polls }: PollsTableProps) {
  const total = polls.reduce((acc, currentValue) => {
    return (acc += currentValue.votes.length);
  }, 0);

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="text-nowrap">Identificador</TableHead>
          <TableHead className="text-nowrap">Enquete</TableHead>
          <TableHead className="text-nowrap">Criada em</TableHead>
          <TableHead className="text-nowrap text-right">
            Link de votação
          </TableHead>
          <TableHead className="text-nowrap text-right">
            Total de votos
          </TableHead>
          <TableHead className="text-nowrap text-right"></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {polls &&
          polls.map((poll) => (
            <TableRow key={poll.id} className="hover:bg-transparent">
              <TableCell className="text-nowrap font-medium">
                {poll.id}
              </TableCell>
              <TableCell
                title={poll.title}
                className="max-w-[400px] text-nowrap text-ellipsis overflow-hidden"
              >
                {poll.title}
              </TableCell>
              <TableCell className="text-nowrap">
                {dayjs(poll.createdAt).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell className="text-right">
                <CopyLinkButton pollId={poll.id} />
              </TableCell>
              <TableCell className="text-right">{poll.votes.length}</TableCell>
              <TableCell className="flex justify-end pt-6">
                <Link
                  href={`/enquetes/${poll.id}`}
                  className="flex items-center gap-2 font-medium group text-nowrap"
                >
                  Ver detalhes{" "}
                  <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right"></TableCell>
          <TableCell className="text-right">{total}</TableCell>
          <TableCell className="text-right"></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
