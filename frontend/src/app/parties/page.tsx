import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { PartyList } from "@/components/parties/party-list";

export default function PartiesPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Parties
          </h1>
          <p className="text-muted-foreground">
            Manage your customers and suppliers.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2" />
          Add Party
        </Button>
      </header>
      <main>
        <PartyList />
      </main>
    </div>
  );
}
