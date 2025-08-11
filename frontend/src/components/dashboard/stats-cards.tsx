import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { DollarSign, Package, Users, ShoppingCart } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "₹45,231.89",
    change: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    title: "Sales",
    value: "+1,250",
    change: "+18.3% from last month",
    icon: ShoppingCart,
  },
  {
    title: "Total Parties",
    value: "57",
    change: "+3 since last month",
    icon: Users,
  },
  {
    title: "Inventory Items",
    value: "234",
    change: "5 low on stock",
    icon: Package,
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
