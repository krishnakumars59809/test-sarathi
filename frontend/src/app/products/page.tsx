import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { ProductList } from "@/components/products/product-list";

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Products
          </h1>
          <p className="text-muted-foreground">
            Manage your inventory and product details.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2" />
          Add Product
        </Button>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}
