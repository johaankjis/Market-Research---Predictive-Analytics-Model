"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  Lightbulb,
  Target,
  DollarSign,
  Users,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react"

const reports = [
  {
    id: 1,
    title: "Q2 2025 Market Analysis Report",
    type: "Quarterly",
    generated: "2 hours ago",
    pages: 24,
    status: "ready",
    insights: 8,
  },
  {
    id: 2,
    title: "Demand Forecasting Executive Summary",
    type: "Monthly",
    generated: "1 day ago",
    pages: 12,
    status: "ready",
    insights: 5,
  },
  {
    id: 3,
    title: "Competitive Analysis Dashboard",
    type: "Weekly",
    generated: "3 days ago",
    pages: 18,
    status: "ready",
    insights: 6,
  },
  {
    id: 4,
    title: "Price Optimization Study",
    type: "Ad-hoc",
    generated: "5 days ago",
    pages: 32,
    status: "ready",
    insights: 12,
  },
]

const keyInsights = [
  {
    title: "Price Elasticity Impact",
    category: "Growth Driver",
    impact: "High",
    description:
      "Price changes show 85% correlation with demand fluctuations. A 5% price reduction could increase volume by 12-15%.",
    recommendation: "Implement dynamic pricing strategy for Q3 to capture seasonal demand surge.",
    icon: DollarSign,
    color: "text-chart-1",
  },
  {
    title: "Seasonal Demand Pattern",
    category: "Market Trend",
    impact: "High",
    description: "Q3 historically shows 18% growth opportunity. Current forecast predicts 6,800 units by September.",
    recommendation: "Increase inventory by 20% ahead of Q3 peak season to avoid stockouts.",
    icon: TrendingUp,
    color: "text-chart-2",
  },
  {
    title: "Market Segment Expansion",
    category: "Opportunity",
    impact: "Medium",
    description: "Two untapped customer segments identified with combined TAM of $2.4M annually.",
    recommendation: "Launch targeted marketing campaign for segments A and B in Q3.",
    icon: Users,
    color: "text-chart-3",
  },
]

const strategicInitiatives = [
  {
    initiative: "Dynamic Pricing Implementation",
    status: "In Progress",
    impact: "$1.2M revenue increase",
    timeline: "Q3 2025",
    confidence: 92,
  },
  {
    initiative: "Market Segment Expansion",
    status: "Planned",
    impact: "$2.4M TAM capture",
    timeline: "Q3-Q4 2025",
    confidence: 85,
  },
]

const automationMetrics = [
  { metric: "Report Generation Time", before: "13 min", after: "8.5 min", improvement: "35%" },
  { metric: "Data Processing Speed", before: "12.6s", after: "8.2s", improvement: "35%" },
  { metric: "Forecast Accuracy", before: "78.5%", after: "94.2%", improvement: "20%" },
  { metric: "Manual Tasks Eliminated", before: "24/week", after: "8/week", improvement: "67%" },
]

export function ReportsInsights() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-balance">Reports & Insights</h1>
          <p className="text-muted-foreground text-lg">
            Automated reporting and strategic recommendations for leadership
          </p>
        </div>
        <Button size="sm">
          <FileText className="w-4 h-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Key Insights Cards */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">Key Insights</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-1">
          {keyInsights.map((insight, index) => {
            const Icon = insight.icon
            return (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-secondary">
                        <Icon className={`w-5 h-5 ${insight.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-card-foreground">{insight.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {insight.category}
                          </Badge>
                          <Badge
                            className={
                              insight.impact === "High"
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground"
                            }
                          >
                            {insight.impact} Impact
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Analysis:</p>
                    <p className="text-sm text-card-foreground">{insight.description}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary border-l-4 border-primary">
                    <p className="text-sm font-medium text-card-foreground mb-1">Recommendation:</p>
                    <p className="text-sm text-muted-foreground">{insight.recommendation}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Strategic Initiatives */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            <CardTitle className="text-card-foreground">Strategic Initiatives Informed by Analytics</CardTitle>
          </div>
          <CardDescription>Data-backed recommendations driving business decisions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {strategicInitiatives.map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-secondary border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-card-foreground">{item.initiative}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.timeline}</p>
                  </div>
                  <Badge
                    className={
                      item.status === "In Progress"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }
                  >
                    {item.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Projected Impact</p>
                    <p className="text-sm font-medium text-card-foreground flex items-center gap-1">
                      <ArrowUpRight className="w-4 h-4 text-accent" />
                      {item.impact}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Confidence Level</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${item.confidence}%` }} />
                      </div>
                      <span className="text-sm font-medium text-card-foreground">{item.confidence}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Automation Impact */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Automation Impact Metrics</CardTitle>
          <CardDescription>Time savings and efficiency improvements from automated reporting</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {automationMetrics.map((metric, index) => (
              <div key={index} className="p-4 rounded-lg bg-secondary">
                <p className="text-sm font-medium text-card-foreground mb-3">{metric.metric}</p>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-xs text-muted-foreground">Before</p>
                    <p className="text-lg font-semibold text-card-foreground">{metric.before}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">After</p>
                    <p className="text-lg font-semibold text-card-foreground">{metric.after}</p>
                  </div>
                </div>
                <Badge className="bg-accent text-accent-foreground">{metric.improvement} improvement</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Generated Reports */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Generated Reports</CardTitle>
          <CardDescription>Automated executive summaries and presentations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-card-foreground">{report.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {report.generated}
                      </span>
                      <span className="text-xs text-muted-foreground">{report.pages} pages</span>
                      <span className="text-xs text-muted-foreground">{report.insights} insights</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-accent text-accent-foreground">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {report.type}
                  </Badge>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
