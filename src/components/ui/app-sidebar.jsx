"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSidebar } from "../sidebar-context"

export function Sidebar() {
  const { collapsed } = useSidebar()

  return (
    <div className={`flex h-screen ${collapsed ? "w-16" : "w-64"} transition-all duration-300`}>
      <div className="flex flex-col bg-muted h-full w-full border-r">
        <div className="p-4">
          {!collapsed && <span className="font-bold text-lg">Dashboard</span>}
        </div>

        <nav className="flex flex-col gap-2 px-2">
          <Link href="/dashboard">
            <Button variant="ghost" className="w-full justify-start">
              {collapsed ? "🏠" : "Dashboard"}
            </Button>
          </Link>
          <Link href="/settings">
            <Button variant="ghost" className="w-full justify-start">
              {collapsed ? "⚙️" : "Settings"}
            </Button>
          </Link>
        </nav>
      </div>
    </div>
  )
}
