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

export default function ProductTable({ products = [], total, currentPage, perPage }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const pageCount = Math.ceil(total / perPage);

    const updateURLParams = (key, value) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(key, value.toString());
        if (key !== "page") params.set("page", "1"); // reset to page 1 on perPage change
        router.push(`?${params.toString()}`);
    };

    const handlePageChange = (page) => {
        updateURLParams("page", page);
    };

    const handlePerPageChange = (perPageValue) => {
        updateURLParams("perPage", perPageValue);
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
