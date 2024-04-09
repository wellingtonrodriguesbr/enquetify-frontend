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
}

export function PollOptionsTable({ options }: PollOptionsTable) {
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
              <TableCell className="text-right">{option.score}</TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">70</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
