"use client";

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
import { useFetchPolls } from "@/hooks/use-fetch-polls";
import { ArrowRight } from "lucide-react";

export function PollsTable() {
  const { polls } = useFetchPolls();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-nowrap">Identificador</TableHead>
          <TableHead className="text-nowrap">Nome</TableHead>
          <TableHead className="text-nowrap">Criada em</TableHead>
          <TableHead className="text-nowrap text-right">
            Total de cliques
          </TableHead>
          <TableHead className="text-nowrap text-right">
            Total de respostas
          </TableHead>
          <TableHead className="text-nowrap text-right"></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {polls &&
          polls.map((poll) => (
            <TableRow key={poll.id}>
              <TableCell className="text-nowrap font-medium">
                {poll.id}
              </TableCell>
              <TableCell className="text-nowrap">{poll.title}</TableCell>
              <TableCell className="text-nowrap">
                {dayjs(poll.createdAt).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell className="text-right">10</TableCell>
              <TableCell className="text-right">10</TableCell>
              <TableCell className="flex justify-end ">
                <Link
                  href={`/enquete/${poll.id}`}
                  className="flex items-center gap-2 font-medium group"
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
          <TableCell className="text-right">70</TableCell>
          <TableCell className="text-right">70</TableCell>
          <TableCell className="text-right"></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
