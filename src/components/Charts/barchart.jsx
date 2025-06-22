"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart with filters"

const chartData = [
    { month: "January", desktop: 186, year: 2025, monthIndex: 1, day: 1 },
    { month: "February", desktop: 305, year: 2025, monthIndex: 2, day: 2 },
    { month: "March", desktop: 237, year: 2025, monthIndex: 3, day: 3 },
    { month: "April", desktop: 73, year: 2024, monthIndex: 4, day: 4 },
    { month: "May", desktop: 209, year: 2025, monthIndex: 5, day: 5 },
    { month: "June", desktop: 214, year: 2025, monthIndex: 6, day: 6 },
    { month: "January", desktop: 186, year: 2025, monthIndex: 1, day: 1 },
    { month: "February", desktop: 305, year: 2025, monthIndex: 2, day: 2 },
    { month: "March", desktop: 237, year: 2025, monthIndex: 3, day: 3 },
    { month: "April", desktop: 73, year: 2024, monthIndex: 4, day: 4 },
    { month: "May", desktop: 209, year: 2025, monthIndex: 5, day: 5 },
    { month: "June", desktop: 214, year: 2025, monthIndex: 6, day: 6 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
}

const filters = ["All", "Year", "Month", "Day"]

export default function SingleBarChart() {
    const [filter, setFilter] = useState("All")

    const now = new Date()
    const currentYear = now.getFullYear()
    const currentMonth = now.getMonth() + 1
    const currentDay = now.getDate()

    const filteredData = chartData.filter((item) => {
        if (filter === "Year") return item.year === currentYear
        if (filter === "Month")
            return item.year === currentYear && item.monthIndex === currentMonth
        if (filter === "Day")
            return (
                item.year === currentYear &&
                item.monthIndex === currentMonth &&
                item.day === currentDay
            )
        return true // All
    })

    return (
        <Card className={'w-[100%] '}>
            <CardHeader>
                <CardTitle>Bar Chart</CardTitle>
                <CardDescription>Filtered by: {filter}</CardDescription>
                <div className="flex gap-2 mt-4">
                    {filters.map((type) => (
                        <Button
                            key={type}
                            variant={filter === type ? "default" : "outline"}
                            onClick={() => setFilter(type)}
                        >
                            {type}
                        </Button>
                    ))}
                </div>
            </CardHeader>

            <CardContent >
                <ChartContainer config={chartConfig}>
                    <ResponsiveContainer width="100%"className=" top-1"> {/* Adjust height as needed */}
                        <BarChart data={filteredData} >
                            <CartesianGrid vertical={false} />
                            <XAxis 
                        
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>

            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                    Showing visitors from data filtered by {filter.toLowerCase()}
                </div>
            </CardFooter>
        </Card>
    )
}
