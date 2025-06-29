"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useBreadcrumb } from "../breadcrumb-context"

export default function Breadcrumb() {
    const { items } = useBreadcrumb()

    return (
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    {index > 0 && <ChevronRight className="h-4 w-4" />}
                    {item.href ? (
                        <Link href={item.href} className="text-foreground hover:underline">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-muted-foreground">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    )
}
