"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Activity, Target, Database, Zap } from "lucide-react"
import { Line, LineChart, Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const kpiData = [
  {
    title: "Forecast Accuracy",
    value: "94.2%",
    change: "+20%",
    trend: "up",
    description: "vs baseline model",
    icon: Target,
  },
  {
    title: "Data Points Analyzed",
    value: "12,847",
    change: "+2,847",
    trend: "up",
    description: "this month",
    icon: Database,
  },
  {
    title: "Report Generation Time",
    value: "8.5 min",
    change: "-35%",
    trend: "up",
    description: "time saved",
    icon: Zap,
  },
  {
    title: "Active Models",
    value: "6",
    change: "+2",
    trend: "up",
    description: "in production",
    icon: Activity,
  },
]

const demandForecastData = [
  { month: "Jan", actual: 4200, forecast: 4100 },
  { month: "Feb", actual: 4500, forecast: 4450 },
  { month: "Mar", actual: 4800, forecast: 4820 },
  { month: "Apr", actual: 5100, forecast: 5050 },
  { month: "May", actual: 5400, forecast: 5380 },
  { month: "Jun", actual: 5700, forecast: 5720 },
  { month: "Jul", actual: 0, forecast: 6100 },
  { month: "Aug", actual: 0, forecast: 6450 },
  { month: "Sep", actual: 0, forecast: 6800 },
]

const marketDriversData = [
  { driver: "Price Elasticity", impact: 85 },
  { driver: "Seasonality", impact: 72 },
  { driver: "Competition", impact: 68 },
  { driver: "Marketing Spend", impact: 54 },
  { driver: "Economic Index", impact: 48 },
]

const modelPerformanceData = [
  { metric: "RMSE", value: 245, target: 300 },
  { metric: "MAPE", value: 5.8, target: 8.0 },
  { metric: "R²", value: 0.94, target: 0.85 },
  { metric: "MAE", value: 198, target: 250 },
]

export function DashboardOverview() {
  const chartColors = {
    actual: "#3b82f6", // blue
    forecast: "#10b981", // green
    impact: "#8b5cf6", // purple
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-balance">Market Research Dashboard</h1>
        <p className="text-muted-foreground text-lg">
          Real-time insights and predictive analytics for strategic decision-making
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => {
          const Icon = kpi.icon
          return (
            <Card key={kpi.title} className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-card-foreground">{kpi.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-card-foreground">{kpi.value}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  {kpi.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-accent" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-destructive" />
                  )}
                  <span className="text-accent font-medium">{kpi.change}</span>
                  <span>{kpi.description}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Demand Forecast Chart */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">Demand Forecast vs Actual</CardTitle>
            <CardDescription>6-month historical + 3-month forecast</CardDescription>
          </CardHeader>
          <CardContent className="overflow-hidden">
            <ChartContainer
              config={{
                actual: {
                  label: "Actual",
                  color: chartColors.actual,
                },
                forecast: {
                  label: "Forecast",
                  color: chartColors.forecast,
                },
              }}
              className="h-[300px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={demandForecastData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke={chartColors.actual}
                    strokeWidth={2}
                    dot={{ fill: chartColors.actual, r: 4 }}
                    name="Actual"
                  />
                  <Line
                    type="monotone"
                    dataKey="forecast"
                    stroke={chartColors.forecast}
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: chartColors.forecast, r: 4 }}
                    name="Forecast"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Market Drivers Chart */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">Top Market Drivers</CardTitle>
            <CardDescription>Impact score on demand (0-100)</CardDescription>
          </CardHeader>
          <CardContent className="overflow-hidden">
            <ChartContainer
              config={{
                impact: {
                  label: "Impact Score",
                  color: chartColors.impact,
                },
              }}
              className="h-[300px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketDriversData} layout="vertical" margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis type="number" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis
                    dataKey="driver"
                    type="category"
                    width={110}
                    className="text-xs"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="impact" fill={chartColors.impact} radius={[0, 4, 4, 0]} name="Impact Score" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Model Performance & Insights */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Model Performance */}
        <Card className="md:col-span-2 bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">Model Performance Metrics</CardTitle>
            <CardDescription>Current vs target benchmarks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {modelPerformanceData.map((metric) => (
                <div key={metric.metric} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-card-foreground">{metric.metric}</span>
                    <span className="text-muted-foreground">
                      {metric.value} / {metric.target}
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{
                        width: `${Math.min((metric.value / metric.target) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">Key Insights</CardTitle>
            <CardDescription>Strategic recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-card-foreground">Price Optimization</p>
                    <p className="text-xs text-muted-foreground">85% correlation with demand changes</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent mt-1.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-card-foreground">Seasonal Trends</p>
                    <p className="text-xs text-muted-foreground">Q3 shows 18% growth opportunity</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-chart-3 mt-1.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-card-foreground">Market Expansion</p>
                    <p className="text-xs text-muted-foreground">2 new segments identified</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
