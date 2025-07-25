"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSidebar } from "../sidebar-context"
import { Button } from "@/components/ui/button"
import clsx from "clsx"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Settings,

  Shirt,
  Clipboard,
  Ribbon,
  IdCard,
  Package,
  ShoppingBasket,
} from "lucide-react"
import { useBreadcrumb } from "../breadcrumb-context"

const sidebarItems = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard size={18} />,
    href: "/admin/dashboard",
  },
  {
    label: "Products",
    icon: <Shirt size={18} />,
    children: [
      { label: "Lists", href: "/admin/products/lists" },
      { label: "Create", href: "/admin/products/create" },
      { label: "Grid", href: "/admin/products/grid" },
      // {
      //   label: "Categories",
      //   icon: <Clipboard size={18} />,
      //   children: [
      //      { label: "Lists", href: "/admin/products/category/lists" },
      //      { label: "Create", href: "/admin/products/category/Create" },
      //   ],
      // },
    ],
  },
  {
    label: "Categories",
    icon: <Clipboard size={18} />,
    children: [
      { label: "Lists", href: "/admin/category/lists" },
      { label: "Create", href: "/admin/category/create" },
    ],
  },
  {
    label: "Orders",
    icon: <ShoppingBasket size={18} />,
    children: [
      { label: "Lists", href: "/admin/orders/lists" },
    ],
  },
  {
    label: "Inventory",
    icon: <Package size={18} />,
    children: [
      { label: "Warehouse", href: "/admin/inventory/lists" },
    ],
  },
  {
    label: "Vendors",
    icon: <IdCard size={18} />,
    children: [
      { label: "Lists", href: "/admin/products/lists" },
      { label: "Create", href: "/admin/products/create" },
    ],
  },
  {
    label: "Settings",
    icon: <Settings size={18} />,
    children: [
      { label: "General", href: "/admin/settings/general" },
      { label: "Team", href: "/admin/settings/team" },
    ],
  },

]

export function findBreadcrumbTrail(items, pathname, parents = []) {
  for (const item of items) {
    const currentPath = [...parents, { label: item.label, href: item.href }]

    if (item.href === pathname) {
      return currentPath
    }

    if (item.children) {
      const result = findBreadcrumbTrail(item.children, pathname, currentPath)
      if (result) return result
    }
  }

  return null
}


export function Sidebar() {
  const { collapsed } = useSidebar()
  const pathname = usePathname()
  const [openGroups, setOpenGroups] = useState({})
  const { setItems } = useBreadcrumb()

  const toggleGroup = (label) => {
    setOpenGroups((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  useEffect(() => {
    const breadcrumb = findBreadcrumbTrail(sidebarItems, pathname)
    if (breadcrumb) setItems(breadcrumb)
    else setItems([{ label: "Home", href: "/" }])
  }, [pathname])


  const renderItem = (item, depth = 0) => {
    const isActive = item.href && (pathname === item.href || pathname.startsWith(item.href + "/"))
    const hasChildren = item.children && item.children.length > 0
    const isOpen = openGroups[item.label]

    const iconLabel = collapsed ? (
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <span>{item.icon}</span>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={10}>
            {item.label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ) : (
      <span className="flex gap-2 items-center">
        {item.icon}
        {item.label}
      </span>
    )

    return (
      <div key={item.label} >
        <div
          className={clsx(
            "flex items-center w-full",
            depth > 0 ? "" : "",
            collapsed ? "justify-center" : "justify-between"
          )}
        >
          {item.href ? (
            <Link href={item.href} className="w-full">
              <Button
                variant="ghost"
                className={clsx(
                  "w-full justify-start",
                  isActive && "border-l rounded-l-none border-l-amber-400 bg-muted text-primary font-semibold"
                )}
              >
                {iconLabel}
              </Button>
            </Link>
          ) : (
            <Button
              variant="ghost"
              onClick={() => toggleGroup(item.label)}
              className="w-full justify-start"
            >
              {collapsed ? (
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <span>{item.icon}</span>
                    </TooltipTrigger>
                    <TooltipContent side="right" sideOffset={10}>
                      {item.label}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <span className="flex gap-2 items-center w-full justify-between">
                  <span className="flex gap-2 items-center">
                    {item.icon}
                    {item.label}
                  </span>
                  {hasChildren &&
                    (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
                </span>
              )}
            </Button>
          )}
        </div>

        {hasChildren && isOpen && !collapsed && (
          <div className="border-l px-2 mt-1 flex flex-col ml-4">
            {item.children.map((child) => renderItem(child, depth + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`flex bg-background ${collapsed ? "w-16" : "w-64"}  border-r transition-all duration-300`}>
      <div className="flex flex-col  h-full w-full py-4 ">
        {!collapsed && <div className="px-4 pb-2 font-bold text-lg">LOGO</div>}
        <nav className="flex flex-col px-2 space-y-1">
          {sidebarItems.map((item) => renderItem(item))}
        </nav>
      </div>
    </div>
  )
}
