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

interface PollOptionsTable {
  options: Option[];
  votesRealTime: { pollOptionId: string; votes: number };
}

export function PollOptionsTable({ options, votesRealTime }: PollOptionsTable) {
  const findPollOption = options.find(
    (option) => option.id === votesRealTime.pollOptionId
  );

  const total = options.reduce((acc, currentValue) => {
    return (acc += currentValue.score);
  }, 0);

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
                {option.id === findPollOption?.id
                  ? votesRealTime.votes
                  : option.score}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">{total}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
