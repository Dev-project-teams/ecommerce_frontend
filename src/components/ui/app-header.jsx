"use client"

import { Button } from "@/components/ui/button"
import { Menu, ChevronLeft, Sun, Moon } from "lucide-react"
import { useSidebar } from "../sidebar-context"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import Breadcrumb from "./app-breadcrumb"

export function Header() {
    const { collapsed, toggleSidebar } = useSidebar()
    const { setTheme } = useTheme()
    const router = useRouter()

    const handleLogout = () => {
        // Optional: clear cookies, localStorage, or make logout API call here
        router.push("/auth/login")
    }

    return (
        <header className="flex items-center justify-between px-4 py-2 border-b bg-background">
            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                    {collapsed ? <Menu size={20} /> : <Menu size={20} />}
                </Button>

                <Breadcrumb />
            </div>



            <div className="flex items-center gap-3">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Profile */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>D</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem >
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem >
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem className={'text-red-500'} onClick={handleLogout}>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
