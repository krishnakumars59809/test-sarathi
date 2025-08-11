import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { VoiceCommand } from "@/components/dashboard/voice-command";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          An overview of your business performance and recent activity.
        </p>
      </header>
      <main className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-8 lg:col-span-2">
          <StatsCards />
          <RecentTransactions />
        </div>
        <div className="lg:col-span-1">
          <VoiceCommand />
        </div>
      </main>
    </div>
  );
}
