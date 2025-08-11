import { TransactionList } from "@/components/transactions/transaction-list";

export default function TransactionsPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Transactions
        </h1>
        <p className="text-muted-foreground">
          A complete history of all your business activities.
        </p>
      </header>
      <main>
        <TransactionList />
      </main>
    </div>
  );
}
