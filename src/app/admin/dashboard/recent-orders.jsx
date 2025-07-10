"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    MoreHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useState } from "react"

const orders = Array.from({ length: 65 }).map((_, i) => ({
    id: `ORD-${(i + 1).toString().padStart(3, "0")}`,
    customer: `Customer ${(i + 1)}`,
    date: `2025-06-${(20 - (i % 15)).toString().padStart(2, "0")}`,
    status: ["Pending", "Shipped", "Delivered"][i % 3],
    amount: `$${(100 + i * 5).toFixed(2)}`,
}))

const statusColors = {
    Pending: "bg-yellow-100 text-yellow-800",
    Shipped: "bg-blue-100 text-blue-800",
    Delivered: "bg-green-100 text-green-800",
}

export default function RecentOrdersTable() {
    const [page, setPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const pageCount = Math.ceil(orders.length / rowsPerPage)
    const paginatedOrders = orders.slice(
        (page - 1) * rowsPerPage,
        page * rowsPerPage
    )

    const handleRowsPerPageChange = (value) => {
        setRowsPerPage(Number(value))
        setPage(1)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedOrders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell>{order.customer}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>
                                    <Badge className={`${statusColors[order.status]} text-xs`}>
                                        {order.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">{order.amount}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal className="w-4 h-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>View</DropdownMenuItem>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Pagination Controls */}
                <div className="flex items-center justify-between px-2 py-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm">Rows per page</span>
                        <Select
                            value={rowsPerPage.toString()}
                            onValueChange={handleRowsPerPageChange}
                        >
                            <SelectTrigger className="h-8 w-[80px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {[5, 10, 20, 30].map((val) => (
                                    <SelectItem key={val} value={val.toString()}>
                                        {val}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                        <span>
                            Page {page} of {pageCount}
                        </span>
                        <div className="flex items-center space-x-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setPage(1)}
                                disabled={page === 1}
                            >
                                <ChevronsLeft className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                                disabled={page === 1}
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setPage((p) => Math.min(p + 1, pageCount))}
                                disabled={page === pageCount}
                            >
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setPage(pageCount)}
                                disabled={page === pageCount}
                            >
                                <ChevronsRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
