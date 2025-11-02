import { ForecastingAnalytics } from "@/components/forecasting-analytics"
import { Navigation } from "@/components/navigation"

export default function ForecastingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <ForecastingAnalytics />
      </main>
    </div>
  )
}
