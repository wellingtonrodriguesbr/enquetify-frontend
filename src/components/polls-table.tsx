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
import { ArrowRight, Check, Copy } from "lucide-react";
import { Polls } from "@/hooks/use-fetch-polls";
import { Button } from "./ui/button";
import { useState } from "react";

interface PollsTableProps {
  polls: Polls[];
}

export function PollsTable({ polls }: PollsTableProps) {
  const [copyLink, setCopyLink] = useState(false);

  async function handleCopyLink(link: string) {
    await navigator.clipboard.writeText(link);
    setCopyLink(true);

    setTimeout(() => {
      setCopyLink(false);
    }, 2000);
  }

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
              <TableCell className="text-nowrap">{poll.title}</TableCell>
              <TableCell className="text-nowrap">
                {dayjs(poll.createdAt).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() =>
                    handleCopyLink(
                      `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN_URL}/enquete/${poll.id}/votos`
                    )
                  }
                  size="sm"
                  variant="secondary"
                  className="gap-2"
                >
                  {copyLink ? (
                    <>
                      Copiado
                      <Check className="size-4" />
                    </>
                  ) : (
                    <>
                      Copiar
                      <Copy className="size-4" />
                    </>
                  )}
                </Button>
              </TableCell>
              <TableCell className="text-right">10</TableCell>
              <TableCell className="flex justify-end pt-6">
                <Link
                  href={`/enquete/${poll.id}`}
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
          <TableCell className="text-right">70</TableCell>
          <TableCell className="text-right"></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
