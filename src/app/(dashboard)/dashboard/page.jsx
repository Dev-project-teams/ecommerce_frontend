import { BarChartCard } from '@/components/Charts/apex-area-chart'
import { ChartAreaGradient } from '@/components/Charts/areacharts'
import SingleBarChart from '@/components/Charts/barchart'
import { Badge } from '@/components/ui/badge'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpToLine } from 'lucide-react'
import React from 'react'

export function RecentOrders() {
    return (
        <div className="p-4 rounded-xl shadow bg-white dark:bg-muted">
            <h2 className="text-lg font-semibold mb-2">Recent Orders</h2>
            <ul className="text-sm space-y-1">
                <li>#1234 – ₹2,500</li>
                <li>#1235 – ₹4,200</li>
                <li>#1236 – ₹1,100</li>
            </ul>
        </div>
    )
}

export function TopSellingVendors() {
    return (
        <div className="p-4 rounded-xl shadow bg-white dark:bg-muted">
            <h2 className="text-lg font-semibold mb-2">Top Selling Vendors</h2>
            <ul className="text-sm space-y-1">
                <li>Vendor A – ₹25,000</li>
                <li>Vendor B – ₹19,000</li>
                <li>Vendor C – ₹12,500</li>
            </ul>
        </div>
    )
}

export function WidgetCard({ title, value }) {
    return (
        <Card >
            <CardContent>
                <h3 className="text-sm text-muted-foreground">{title}</h3>
                <p className="text-2xl font-bold">{value}</p>
            </CardContent>
        </Card>
    )
}


export default function Dashboard() {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className="col-span-6  space-y-4">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <Card className="@container/card">
                            <CardHeader>
                                <CardDescription>Total Revenue</CardDescription>
                                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                    $1,250.00
                                </CardTitle>
                                <CardAction>
                                    <Badge variant="outline">
                                        <ArrowUpToLine />
                                        +12.5%
                                    </Badge>
                                </CardAction>
                            </CardHeader>
                            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                                <div className="line-clamp-1 flex gap-2 font-medium">
                                    Trending up this month <ArrowUpToLine className="size-4" />
                                </div>
                                <div className="text-muted-foreground">
                                    Visitors for the last 6 months
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="col-span-6">
                         <Card className="@container/card">
                            <CardHeader>
                                <CardDescription>Total Revenue</CardDescription>
                                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                    $1,250.00
                                </CardTitle>
                                <CardAction>
                                    <Badge variant="outline">
                                        <ArrowUpToLine />
                                        +12.5%
                                    </Badge>
                                </CardAction>
                            </CardHeader>
                            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                                <div className="line-clamp-1 flex gap-2 font-medium">
                                    Trending up this month <ArrowUpToLine className="size-4" />
                                </div>
                                <div className="text-muted-foreground">
                                    Visitors for the last 6 months
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="col-span-6">
                         <Card className="@container/card">
                            <CardHeader>
                                <CardDescription>Total Revenue</CardDescription>
                                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                    $1,250.00
                                </CardTitle>
                                <CardAction>
                                    <Badge variant="outline">
                                        <ArrowUpToLine />
                                        +12.5%
                                    </Badge>
                                </CardAction>
                            </CardHeader>
                            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                                <div className="line-clamp-1 flex gap-2 font-medium">
                                    Trending up this month <ArrowUpToLine className="size-4" />
                                </div>
                                <div className="text-muted-foreground">
                                    Visitors for the last 6 months
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="col-span-6">
                         <Card className="@container/card">
                            <CardHeader>
                                <CardDescription>Total Revenue</CardDescription>
                                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                    $1,250.00
                                </CardTitle>
                                <CardAction>
                                    <Badge variant="outline">
                                        <ArrowUpToLine />
                                        +12.5%
                                    </Badge>
                                </CardAction>
                            </CardHeader>
                            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                                <div className="line-clamp-1 flex gap-2 font-medium">
                                    Trending up this month <ArrowUpToLine className="size-4" />
                                </div>
                                <div className="text-muted-foreground">
                                    Visitors for the last 6 months
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="col-span-6 h-full ">
                <BarChartCard />
            </div>
        </div>
    )
}

