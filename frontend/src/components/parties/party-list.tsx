import { mockParties } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function PartyList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Parties</CardTitle>
        <CardDescription>
          A list of all your customers and suppliers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead className="text-right">Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockParties.map((party) => (
              <TableRow key={party.party_id}>
                <TableCell className="font-medium">{party.name}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      party.type === "CUSTOMER" ? "default" : "secondary"
                    }
                  >
                    {party.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {party.phone_number}
                </TableCell>
                <TableCell
                  className={cn(
                    "text-right font-mono",
                    party.current_balance > 0 ? "text-accent" : "text-destructive"
                  )}
                >
                  {party.current_balance >= 0 ? `₹${party.current_balance.toFixed(2)}` : `-₹${Math.abs(party.current_balance).toFixed(2)}`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
