"use client"

import { createContext, useContext, useState } from "react"

const BreadcrumbContext = createContext()

export const BreadcrumbProvider = ({ children }) => {
    const [items, setItems] = useState([])

    return (
        <BreadcrumbContext.Provider value={{ items, setItems }}>
            {children}
        </BreadcrumbContext.Provider>
    )
}

export const useBreadcrumb = () => {
    const context = useContext(BreadcrumbContext)
    if (!context) throw new Error("useBreadcrumb must be used within BreadcrumbProvider")
    return context
}
