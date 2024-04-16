import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Option } from "@/hooks/use-get-poll";
import { useEffect, useState } from "react";

interface PollOptionsTable {
  options: Option[];
  pollOptionId: string;
  votes: number;
}

export function PollOptionsTable({
  options,
  pollOptionId,
  votes,
}: PollOptionsTable) {
  const [currentTotal, setCurrentTotal] = useState(0);
  const findPollOption = options.find((option) => option.id === pollOptionId);

  useEffect(() => {
    const total = options.reduce((acc, currentValue) => {
      return (acc += currentValue.score);
    }, 0);

    setCurrentTotal(total);
  }, [options, findPollOption?.score]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-nowrap">Identificador</TableHead>
          <TableHead className="text-nowrap">Opções</TableHead>
          <TableHead className="text-nowrap text-right">
            Total de votos
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {options &&
          options.map((option) => (
            <TableRow key={option.id}>
              <TableCell className="text-nowrap font-medium">
                {option.id}
              </TableCell>
              <TableCell className="text-nowrap">{option.title}</TableCell>
              <TableCell className="text-right">
                {option.id === findPollOption?.id ? votes : option.score}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">{currentTotal}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
