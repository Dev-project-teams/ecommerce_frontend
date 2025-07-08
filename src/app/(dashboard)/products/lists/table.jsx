"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Pagination from "@/components/ui/pagination";
import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Sample products

export default function ProductTable({ products = [] }) {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    const pageCount = Math.ceil(products.length / perPage);

    const paginatedProducts = products.slice(
        (page - 1) * perPage,
        page * perPage
    );

    const handlePerPageChange = (value) => {
        setPerPage(Number(value));
        setPage(1);
    };

    return (
        <Card className="p-4">
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[90px]">Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Price (₹)</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedProducts.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={50}
                                        height={50}
                                        className="rounded"
                                    />
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
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
                    handlePerPageChange={handlePerPageChange}
                    page={page}
                    pageCount={pageCount}
                    perPage={perPage}
                    setPage={setPage}
                />
            </CardContent>
        </Card>
    );
}
