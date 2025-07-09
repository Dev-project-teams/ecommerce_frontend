"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Pagination from "@/components/ui/pagination";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

export default function ProductTable({
    products = [],
    total,
    currentPage,
    perPage,
    sortBy,
    order,
    search
}) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const pageCount = Math.ceil(total / perPage);

    const updateURLParams = (key, value) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(key, value.toString());
        if (key !== "page") params.set("page", "1");
        router.push(`?${params.toString()}`);
    };

    const handlePageChange = (page) => updateURLParams("page", page);
    const handlePerPageChange = (val) => updateURLParams("perPage", val);
    const handleSort = (field) => {
        const newOrder = sortBy === field && order === "asc" ? "desc" : "asc";
        updateURLParams("sortBy", field);
        updateURLParams("order", newOrder);
    };

    const handleSearchChange = (e) => {
        updateURLParams("search", e.target.value);
    };

    return (
        <Card className="p-4">
            <CardContent className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        defaultValue={search}
                        onChange={handleSearchChange}
                        className="border p-2 rounded w-64"
                    />
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[90px]">Image</TableHead>
                            <TableHead onClick={() => handleSort("title")} className="cursor-pointer">
                                Name {sortBy === "title" ? (order === "asc" ? "↑" : "↓") : ""}
                            </TableHead>
                            <TableHead onClick={() => handleSort("price")} className="cursor-pointer">
                                Price (₹) {sortBy === "price" ? (order === "asc" ? "↑" : "↓") : ""}
                            </TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <Image
                                        src={product.thumbnail}
                                        alt={product.title}
                                        width={50}
                                        height={50}
                                        className="rounded"
                                    />
                                </TableCell>
                                <TableCell>{product.title}</TableCell>
                                <TableCell>₹{product.price}</TableCell>
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

                <Pagination
                    page={currentPage}
                    pageCount={pageCount}
                    perPage={perPage}
                    onPageChange={handlePageChange}
                    onPerPageChange={handlePerPageChange}
                />
            </CardContent>
        </Card>
    );
}


