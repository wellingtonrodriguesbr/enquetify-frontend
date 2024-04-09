import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "./ui/skeleton";

export function PollsOptionsSkeletetonTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead colSpan={12}>
            <Skeleton className="w-[150px] h-[20px] rounded-md" />
          </TableHead>
          <TableHead>
            <Skeleton className="w-[120px] h-[20px] rounded-md" />
          </TableHead>
          <TableHead className="w-full">
            <Skeleton className="w-[100px] h-[20px] rounded-md" />
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {Array.from({ length: 6 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell colSpan={12} className="w-full">
              <Skeleton className="w-[320px] h-[20px] rounded-md" />
            </TableCell>
            <TableCell className="w-full">
              <Skeleton className="w-[180px] h-[20px] rounded-md" />
            </TableCell>
            <TableCell className="w-full">
              <Skeleton className="w-[100px] h-[20px] rounded-md" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={12}>
            <Skeleton className="w-[100px] h-[20px] rounded-md" />
          </TableCell>
          <TableCell className="text-right">
            <Skeleton className="w-[80px] h-[20px] rounded-md" />
          </TableCell>
          <TableCell className="text-right">
            <Skeleton className="w-[80px] h-[20px] rounded-md" />
          </TableCell>
          <TableCell className="text-right"></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
