import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ids = [
  {
    id: "INV001",
    name: "Enquete de teste para o produto X",
    totalClicks: "10",
    status: "Concluída",
  },
  {
    id: "INV002",
    name: "Enquete de teste para o produto X",
    totalClicks: "10",
    status: "Em andamento",
  },
  {
    id: "INV003",
    name: "Enquete de teste para o produto Y",
    totalClicks: "10",
    status: "Cancelada",
  },
  {
    id: "INV004",
    name: "Enquete de teste para o produto Z",
    totalClicks: "10",
    status: "Concluída",
  },
  {
    id: "INV005",
    name: "Enquete de teste para o produto Z",
    totalClicks: "10",
    status: "Em andamento",
  },
  {
    id: "INV006",
    name: "Enquete de teste para o produto X",
    totalClicks: "10",
    status: "Cancelada",
  },
  {
    id: "INV007",
    name: "Enquete de teste para o produto Y",
    totalClicks: "10",
    status: "Concluída",
  },
];

export function PollsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Identificador</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-nowrap text-right">
            Total de cliques
          </TableHead>
          <TableHead className="text-nowrap text-right">
            Total de respostas
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ids.map((id) => (
          <TableRow key={id.id}>
            <TableCell className="font-medium">{id.id}</TableCell>
            <TableCell className="text-nowrap">{id.name}</TableCell>
            <TableCell className="text-nowrap">{id.status}</TableCell>
            <TableCell className="text-right">{id.totalClicks}</TableCell>
            <TableCell className="text-right">{id.totalClicks}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">70</TableCell>
          <TableCell className="text-right">70</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
