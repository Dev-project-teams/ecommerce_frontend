'use client';

import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { MoreHorizontal } from 'lucide-react';
import Pagination from '@/components/ui/pagination';
import { fetchCategory } from '@/lib/fetchCategory';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';

export default function CategoryTable() {
    const columns = useMemo(() => [
        { data: 'title', searchable: true, orderable: true },
        { data: 'created_at', searchable: false, orderable: true }
    ], []);

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [search, setSearch] = useState('');
    const [orderByIndex, setOrderByIndex] = useState(0);
    const [order, setOrder] = useState('desc');
    const [debouncedSearch, setDebouncedSearch] = useState(search);

    // Debounce Search
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearch(search);
            setPage(1);
        }, 300);
        return () => clearTimeout(timeout);
    }, [search]);


    const { data, isLoading } = useQuery({
        queryKey: ['products', page, perPage, debouncedSearch, orderByIndex, order],
        queryFn: () =>
            fetchCategory({
                page,
                perPage,
                search: debouncedSearch,
                order,
                orderByIndex,
                columns
            }),
        keepPreviousData: true,
        staleTime: 60 * 1000,
        cacheTime: 60 * 1000
    });

    const handleSort = (columnKey) => {
        const index = columns.findIndex((col) => col.data === columnKey);
        if (index !== -1) {
            setOrderByIndex(index);
            setOrder(order === 'asc' ? 'desc' : 'asc');
        }
    };

    const pageCount = Math.ceil((data?.total || 0) / perPage);

    return (
        <Card className="p-4">
            <CardContent className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border p-2 rounded w-64"
                    />
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">Image</TableHead>
                            <TableHead onClick={() => handleSort('title')} className="cursor-pointer">
                                Name {orderByIndex === 0 ? (order === 'asc' ? '↑' : '↓') : ''}
                            </TableHead>
                            <TableHead onClick={() => handleSort('created_at')} className="cursor-pointer">
                                Created At {orderByIndex === 1 ? (order === 'asc' ? '↑' : '↓') : ''}
                            </TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell colSpan={4}>Loading...</TableCell>
                            </TableRow>
                        ) : (
                            data?.products.map((product) => (
                                <TableRow key={`${product.id}-${page}-${order}-${orderByIndex}`}>
                                    <TableCell>
                                        <Image
                                            src={product.full_url || '/placeholder.svg'}
                                            width={50}
                                            height={50}
                                            unoptimized // prevents image refetch delay
                                            alt="product-image"
                                            style={{ maxHeight: '50px' }}
                                        />
                                    </TableCell>
                                    <TableCell className={'w-[20%]'}>{product.title}</TableCell>
                                    <TableCell>{new Date(product.created_at).toLocaleString()}</TableCell>
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
                            ))
                        )}
                    </TableBody>
                </Table>

                <Pagination
                    page={page}
                    pageCount={pageCount}
                    perPage={perPage}
                    onPageChange={setPage}
                    onPerPageChange={setPerPage}
                />
            </CardContent>
        </Card>
    );
}
