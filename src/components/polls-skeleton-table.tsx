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

export function PollsSkeletetonTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Skeleton className="w-[150px] h-[20px] rounded-md" />
          </TableHead>
          <TableHead>
            <Skeleton className="w-[120px] h-[20px] rounded-md" />
          </TableHead>
          <TableHead>
            <Skeleton className="w-[100px] h-[20px] rounded-md" />
          </TableHead>
          <TableHead>
            <Skeleton className="w-[100px] h-[20px] rounded-md" />
          </TableHead>
          <TableHead>
            <Skeleton className="w-[120px] h-[20px] rounded-md" />
          </TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {Array.from({ length: 6 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton className="w-[320px] h-[20px] rounded-md" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-[180px] h-[20px] rounded-md" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-[100px] h-[20px] rounded-md" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-[110px] h-[20px] rounded-md" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-[120px] h-[20px] rounded-md" />
            </TableCell>
            <TableCell className="flex justify-end ">
              <Skeleton className="w-[100px] h-[20px] rounded-md" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>
            <Skeleton className="w-[100px] h-[20px] rounded-md" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-[80px] h-[20px] rounded-md" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-[80px] h-[20px] rounded-md" />
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
