import { mockProducts } from "@/lib/data";
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

export function ProductList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Inventory</CardTitle>
        <CardDescription>
          An overview of all products in your store.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockProducts.map((product) => (
              <TableRow key={product.product_id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>
                  {product.current_stock > product.low_stock_threshold ? (
                    <Badge variant="secondary">In Stock</Badge>
                  ) : (
                    <Badge variant="destructive">Low Stock</Badge>
                  )}
                </TableCell>
                <TableCell className="text-right font-mono">
                  ₹{product.selling_price.toFixed(2)}
                </TableCell>
                <TableCell className="text-right font-medium">
                  {product.current_stock}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
