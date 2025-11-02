"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Upload,
  Database,
  CheckCircle2,
  AlertCircle,
  Search,
  Filter,
  Download,
  RefreshCw,
  FileSpreadsheet,
  Calendar,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const dataSources = [
  {
    id: 1,
    name: "Sales Transactions Q1-Q2 2025",
    type: "SQL Database",
    records: 12847,
    lastUpdated: "2 min ago",
    status: "active",
    quality: 98.5,
  },
  {
    id: 2,
    name: "Market Research Survey Data",
    type: "CSV Import",
    records: 8432,
    lastUpdated: "1 hour ago",
    status: "active",
    quality: 96.2,
  },
  {
    id: 3,
    name: "Competitor Pricing Analysis",
    type: "API Integration",
    records: 5621,
    lastUpdated: "15 min ago",
    status: "active",
    quality: 99.1,
  },
  {
    id: 4,
    name: "Customer Demographics",
    type: "SQL Database",
    records: 15234,
    lastUpdated: "3 hours ago",
    status: "processing",
    quality: 94.8,
  },
  {
    id: 5,
    name: "Economic Indicators",
    type: "External API",
    records: 2156,
    lastUpdated: "30 min ago",
    status: "active",
    quality: 100,
  },
]

const dataQualityMetrics = [
  { metric: "Completeness", score: 98.2, status: "excellent" },
  { metric: "Accuracy", score: 96.5, status: "excellent" },
  { metric: "Consistency", score: 99.1, status: "excellent" },
  { metric: "Timeliness", score: 94.8, status: "good" },
]

const recentProcessing = [
  { task: "Data Cleaning - Sales Q2", status: "completed", time: "2.3s", records: 4521 },
  { task: "Feature Engineering - Demographics", status: "completed", time: "5.1s", records: 8234 },
  { task: "Outlier Detection - Pricing", status: "completed", time: "1.8s", records: 3421 },
  { task: "Missing Value Imputation", status: "running", time: "3.2s", records: 2156 },
]

export function DataManagement() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-balance">Data Management</h1>
          <p className="text-muted-foreground text-lg">Extract, preprocess, and manage market data sources</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Import Data
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Total Records</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">44,290</div>
            <p className="text-xs text-muted-foreground mt-1">Across 5 data sources</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Data Quality</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">97.1%</div>
            <p className="text-xs text-muted-foreground mt-1">Average quality score</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Processing Time</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">8.2s</div>
            <p className="text-xs text-muted-foreground mt-1">Average query time</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Last Sync</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">2 min</div>
            <p className="text-xs text-muted-foreground mt-1">ago</p>
          </CardContent>
        </Card>
      </div>

      {/* Data Sources Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-card-foreground">Data Sources</CardTitle>
              <CardDescription>Manage and monitor all connected data sources</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search sources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 w-[200px]"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-muted-foreground">Source Name</TableHead>
                <TableHead className="text-muted-foreground">Type</TableHead>
                <TableHead className="text-muted-foreground">Records</TableHead>
                <TableHead className="text-muted-foreground">Quality</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataSources.map((source) => (
                <TableRow key={source.id}>
                  <TableCell className="font-medium text-card-foreground">
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4 text-primary" />
                      {source.name}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{source.type}</TableCell>
                  <TableCell className="text-card-foreground">{source.records.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-full max-w-[80px] h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${source.quality}%` }} />
                      </div>
                      <span className="text-sm text-card-foreground">{source.quality}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={source.status === "active" ? "default" : "secondary"}
                      className={
                        source.status === "active"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }
                    >
                      {source.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{source.lastUpdated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Data Quality & Processing */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Data Quality Metrics */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">Data Quality Metrics</CardTitle>
            <CardDescription>Real-time quality assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dataQualityMetrics.map((item) => (
                <div key={item.metric} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-card-foreground">{item.metric}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{item.score}%</span>
                      {item.status === "excellent" ? (
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-primary" />
                      )}
                    </div>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Processing */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">Recent Processing Tasks</CardTitle>
            <CardDescription>Data preprocessing pipeline activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProcessing.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-card-foreground">{task.task}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {task.records.toLocaleString()} records • {task.time}
                    </p>
                  </div>
                  <Badge
                    variant={task.status === "completed" ? "default" : "secondary"}
                    className={
                      task.status === "completed"
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary text-primary-foreground"
                    }
                  >
                    {task.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
