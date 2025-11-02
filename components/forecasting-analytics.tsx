"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Settings, TrendingUp, Brain, Target, Zap, AlertTriangle } from "lucide-react"
import {
  Line,
  LineChart,
  Scatter,
  ScatterChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ReferenceLine,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const forecastModels = [
  {
    id: 1,
    name: "Linear Regression",
    type: "Regression",
    accuracy: 89.2,
    rmse: 312,
    mape: 7.8,
    status: "active",
    lastTrained: "2 hours ago",
  },
  {
    id: 2,
    name: "Random Forest",
    type: "Ensemble",
    accuracy: 94.2,
    rmse: 245,
    mape: 5.8,
    status: "active",
    lastTrained: "1 hour ago",
  },
  {
    id: 3,
    name: "ARIMA Time Series",
    type: "Time Series",
    accuracy: 91.5,
    rmse: 278,
    mape: 6.5,
    status: "active",
    lastTrained: "3 hours ago",
  },
  {
    id: 4,
    name: "XGBoost",
    type: "Gradient Boosting",
    accuracy: 93.8,
    rmse: 251,
    mape: 6.1,
    status: "training",
    lastTrained: "30 min ago",
  },
]

const demandForecastData = [
  { month: "Jan", actual: 4200, predicted: 4150, lower: 3950, upper: 4350 },
  { month: "Feb", actual: 4500, predicted: 4480, lower: 4250, upper: 4710 },
  { month: "Mar", actual: 4800, predicted: 4820, lower: 4580, upper: 5060 },
  { month: "Apr", actual: 5100, predicted: 5080, lower: 4830, upper: 5330 },
  { month: "May", actual: 5400, predicted: 5420, lower: 5160, upper: 5680 },
  { month: "Jun", actual: 5700, predicted: 5690, lower: 5420, upper: 5960 },
  { month: "Jul", actual: null, predicted: 6100, lower: 5800, upper: 6400 },
  { month: "Aug", actual: null, predicted: 6450, lower: 6120, upper: 6780 },
  { month: "Sep", actual: null, predicted: 6800, lower: 6440, upper: 7160 },
  { month: "Oct", actual: null, predicted: 7150, lower: 6760, upper: 7540 },
]

const residualData = [
  { predicted: 4150, residual: 50 },
  { predicted: 4480, residual: 20 },
  { predicted: 4820, residual: -20 },
  { predicted: 5080, residual: 20 },
  { predicted: 5420, residual: -20 },
  { predicted: 5690, residual: 10 },
]

const featureImportanceData = [
  { feature: "Price", importance: 0.35 },
  { feature: "Seasonality", importance: 0.28 },
  { feature: "Marketing Spend", importance: 0.18 },
  { feature: "Competition", importance: 0.12 },
  { feature: "Economic Index", importance: 0.07 },
]

const performanceMetrics = [
  { metric: "R² Score", value: 0.942, target: 0.85, unit: "" },
  { metric: "RMSE", value: 245, target: 300, unit: "" },
  { metric: "MAPE", value: 5.8, target: 8.0, unit: "%" },
  { metric: "MAE", value: 198, target: 250, unit: "" },
]

export function ForecastingAnalytics() {
  const [selectedModel, setSelectedModel] = useState("Random Forest")

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-balance">Forecasting & Analytics</h1>
          <p className="text-muted-foreground text-lg">Predictive models and demand forecasting with scikit-learn</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Configure
          </Button>
          <Button size="sm">
            <Play className="w-4 h-4 mr-2" />
            Run Model
          </Button>
        </div>
      </div>

      {/* Model Performance Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        {performanceMetrics.map((metric) => (
          <Card key={metric.metric} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">{metric.metric}</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">
                {metric.value}
                {metric.unit}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Target: {metric.target}
                {metric.unit}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Forecast Chart */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-card-foreground">Demand Forecast with Confidence Intervals</CardTitle>
              <CardDescription>Historical data + 4-month prediction (95% CI)</CardDescription>
            </div>
            <Badge className="bg-primary text-primary-foreground">
              <Brain className="w-3 h-3 mr-1" />
              {selectedModel}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              actual: {
                label: "Actual",
                color: "hsl(var(--chart-1))",
              },
              predicted: {
                label: "Predicted",
                color: "hsl(var(--chart-2))",
              },
              upper: {
                label: "Upper CI",
                color: "hsl(var(--chart-3))",
              },
              lower: {
                label: "Lower CI",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={demandForecastData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <ReferenceLine x="Jun" stroke="hsl(var(--muted-foreground))" strokeDasharray="3 3" />
                <Line
                  type="monotone"
                  dataKey="upper"
                  stroke="hsl(var(--chart-3))"
                  strokeWidth={1}
                  strokeDasharray="5 5"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="lower"
                  stroke="hsl(var(--chart-3))"
                  strokeWidth={1}
                  strokeDasharray="5 5"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-1))", r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="predicted"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-2))", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Model Analysis Tabs */}
      <Tabs defaultValue="models" className="space-y-4">
        <TabsList className="bg-secondary">
          <TabsTrigger value="models">Active Models</TabsTrigger>
          <TabsTrigger value="features">Feature Importance</TabsTrigger>
          <TabsTrigger value="diagnostics">Model Diagnostics</TabsTrigger>
        </TabsList>

        <TabsContent value="models" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {forecastModels.map((model) => (
              <Card key={model.id} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-card-foreground">{model.name}</CardTitle>
                      <CardDescription>{model.type}</CardDescription>
                    </div>
                    <Badge
                      variant={model.status === "active" ? "default" : "secondary"}
                      className={
                        model.status === "active"
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }
                    >
                      {model.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Accuracy</span>
                      <span className="text-sm font-medium text-card-foreground">{model.accuracy}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">RMSE</span>
                      <span className="text-sm font-medium text-card-foreground">{model.rmse}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">MAPE</span>
                      <span className="text-sm font-medium text-card-foreground">{model.mape}%</span>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <span className="text-xs text-muted-foreground">Last trained: {model.lastTrained}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="features" className="space-y-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Feature Importance Analysis</CardTitle>
              <CardDescription>Impact of each feature on model predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {featureImportanceData.map((item) => (
                  <div key={item.feature} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-card-foreground">{item.feature}</span>
                      <span className="text-sm text-muted-foreground">{(item.importance * 100).toFixed(1)}%</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${item.importance * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diagnostics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Residual Plot</CardTitle>
                <CardDescription>Model prediction errors distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    residual: {
                      label: "Residual",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="predicted" name="Predicted" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis dataKey="residual" name="Residual" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <ReferenceLine y={0} stroke="hsl(var(--muted-foreground))" />
                      <Scatter data={residualData} fill="hsl(var(--chart-1))" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Model Validation</CardTitle>
                <CardDescription>Cross-validation and testing results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary">
                    <Zap className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">Training Complete</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Model trained on 80% of data with 5-fold cross-validation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary">
                    <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">Test Set Performance</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Accuracy: 94.2% on holdout test set (20% of data)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary">
                    <AlertTriangle className="w-5 h-5 text-chart-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">No Overfitting Detected</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Training and validation scores are within 2% margin
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
