import { ReportsInsights } from "@/components/reports-insights"
import { Navigation } from "@/components/navigation"

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <ReportsInsights />
      </main>
    </div>
  )
}
