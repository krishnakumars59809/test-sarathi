import { mockTransactions } from "@/lib/data";
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
import { format } from "date-fns";

const getBadgeVariant = (
  type:
    | "SALE"
    | "CREDIT"
    | "STOCK_ADD"
    | "PAYMENT_MADE"
    | "DEBIT"
    | "PAYMENT_RECEIVED"
) => {
  switch (type) {
    case "SALE":
      return "default";
    case "CREDIT":
    case "PAYMENT_RECEIVED":
      return "secondary";
    case "STOCK_ADD":
      return "outline";
    case "PAYMENT_MADE":
    case "DEBIT":
      return "destructive";
    default:
      return "default";
  }
};

export function TransactionList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
        <CardDescription>
          A log of all activities in your store.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Details</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTransactions.map((tx) => (
              <TableRow key={tx.transaction_id}>
                <TableCell>
                  <Badge variant={getBadgeVariant(tx.type)}>
                    {tx.type.replace("_", " ")}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">
                  {tx.type === "SALE" && `${tx.quantity}x ${tx.product_name}`}
                  {tx.type === "CREDIT" && `Credit to ${tx.party_name}`}
                  {tx.type === "STOCK_ADD" &&
                    `${tx.quantity}x ${tx.product_name} Added`}
                  {(tx.type === "PAYMENT_MADE" ||
                    tx.type === "PAYMENT_RECEIVED") &&
                    `To ${tx.party_name}`}
                </TableCell>
                <TableCell className="text-right font-mono">
                  ₹{tx.amount.toFixed(2)}
                </TableCell>
                <TableCell className="text-right text-xs text-muted-foreground">
                  {format(new Date(tx.timestamp), "dd MMM yyyy, hh:mm a")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
