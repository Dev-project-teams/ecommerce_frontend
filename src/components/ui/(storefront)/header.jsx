"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Menu, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "../card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../accordion";
import { useTheme } from "next-themes";

const StoreFrontHeader = () => {
    const [open, setOpen] = useState(false);
    const { setTheme } = useTheme()
    return (
        <Card className="w-full border-b rounded-none p-4  shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 flex items-center justify-between">
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
                            <Button variant="ghost" className="p-0 user_btn" >
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
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="account-settings">
                                    <AccordionTrigger className="text-sm px-3 py-2 rounded">
                                        Account Settings
                                    </AccordionTrigger>
                                    <AccordionContent className="pl-3">
                                        <Link href="/settings/account" className="block px-1  py-1 text-sm rounded hover:text-primary transition">
                                            Account
                                        </Link>
                                        <Link href="/settings/security" className="block px-1  py-1 text-sm rounded hover:text-primary transition">
                                            Security
                                        </Link>
                                        <Link href="/settings/billing" className="block px-1  py-1 text-sm rounded hover:text-primary transition">
                                            Billing
                                        </Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="theme">
                                    <AccordionTrigger className="text-sm px-3 py-2 rounded">
                                        Theme
                                    </AccordionTrigger>
                                    <AccordionContent className="px-3 flex flex-col items-start gap-2">
                                        <button className="block px-1  py-1 text-sm rounded hover:bg-primary w-full text-start" onClick={() => setTheme("light")}> Light</button>
                                        <button className="block px-1  py-1 text-sm rounded hover:bg-primary w-full text-start" onClick={() => setTheme("dark")}> Dark</button>
                                        <button className="block px-1  py-1 text-sm rounded hover:bg-primary w-full text-start" onClick={() => setTheme("system")}> System</button>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <DropdownMenuSeparator />
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
        </Card>
    );
};

export default StoreFrontHeader;
