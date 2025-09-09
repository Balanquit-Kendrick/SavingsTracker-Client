"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An area chart with gradient fill"

const chartData = [
  { month: "January", savings: 186, expenses: 80 },
  { month: "February", savings: 305, expenses: 200 },
  { month: "March", savings: 237, expenses: 120 },
  { month: "April", savings: 73, expenses: 190 },
  { month: "May", savings: 209, expenses: 130 },
  { month: "June", savings: 214, expenses: 140 },
  { month: "July", savings: 186, expenses: 80 },
  { month: "August", savings: 305, expenses: 200 },
  { month: "September", savings: 237, expenses: 120 },
  { month: "October", savings: 73, expenses: 190 },
  { month: "November", savings: 209, expenses: 130 },
  { month: "December", savings: 214, expenses: 140 },
]

const chartConfig = {
  savings: {
    label: "Savings",
    color: "var(--custom-color-2)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--custom-color-1)",
  },
} satisfies ChartConfig

export function LineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Savings Trend</CardTitle>
        <CardDescription>
          Showing total savings and the expenses overt the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillSavings" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-savings)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-savings)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-expenses)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-expenses)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="expenses"
              type="natural"
              fill="url(#fillExpenses)"
              fillOpacity={0.4}
              stroke="var(--color-expenses)"
              stackId="a"
            />
            <Area
              dataKey="savings"
              type="natural"
              fill="url(#fillSavings)"
              fillOpacity={0.4}
              stroke="var(--color-savings)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
