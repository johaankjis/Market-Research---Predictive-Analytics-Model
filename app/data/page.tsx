import { DataManagement } from "@/components/data-management"
import { Navigation } from "@/components/navigation"

export default function DataPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <DataManagement />
      </main>
    </div>
  )
}
