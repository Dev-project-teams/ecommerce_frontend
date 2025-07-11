"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const StoreFrontHeader = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold">
                    MyShop
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm hover:text-primary transition">
                        Home
                    </Link>
                    <Link href="/products" className="text-sm hover:text-primary transition">
                        Products
                    </Link>

                    <Link href="/cart" className="relative">
                        <ShoppingCart className="w-5 h-5" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                            3
                        </span>
                    </Link>
                    

                    {/* Profile Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="p-0">
                                <User className="w-5 h-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <Link href="/profile">Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/orders">Orders</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/settings">Settings</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <button>Logout</button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>

                {/* Mobile Menu Button */}
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="md:hidden p-0">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-64 p-2">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Menu</h2>
                        </div>
                        <nav className="flex flex-col gap-4">
                            <Link href="/" onClick={() => setOpen(false)}>
                                Home
                            </Link>
                            <Link href="/products" onClick={() => setOpen(false)}>
                                Products
                            </Link>
                            <Link href="/cart" onClick={() => setOpen(false)}>
                                Cart
                            </Link>
                            <Link href="/profile" onClick={() => setOpen(false)}>
                                Profile
                            </Link>
                            <Link href="/settings" onClick={() => setOpen(false)}>
                                Settings
                            </Link>
                            <button onClick={() => setOpen(false)}>Logout</button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default StoreFrontHeader;
