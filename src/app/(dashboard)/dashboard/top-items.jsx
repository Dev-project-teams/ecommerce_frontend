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
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const topItems = [
  {
    name: "Apple iPhone 15",
    quantity: 185,
    revenue: "$185,000",
  },
  {
    name: "Samsung Galaxy S24",
    quantity: 140,
    revenue: "$126,000",
  },
  {
    name: "AirPods Pro",
    quantity: 100,
    revenue: "$25,000",
  },
  {
    name: "MacBook Air M3",
    quantity: 75,
    revenue: "$90,000",
  },
  {
    name: "Sony WH-1000XM5",
    quantity: 60,
    revenue: "$18,000",
  },
]

export default function TopPurchasedItemsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Purchased Items</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Item</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Total Revenue</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topItems.map((item, index) => (
              <TableRow key={item.name}>
                <TableCell>
                  <Badge variant="secondary" className="text-xs">
                    #{index + 1}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.revenue}</TableCell>
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
      </CardContent>
    </Card>
  )
}
