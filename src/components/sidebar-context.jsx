"use client"

import { createContext, useContext, useEffect, useState } from "react"

const SidebarContext = createContext()

export function SidebarProvider({ children }) {
  const [collapsed, setCollapsed] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const storedValue = localStorage.getItem("sidebar-collapsed")
    if (storedValue !== null) {
      setCollapsed(storedValue === "true")
    }
  }, [])

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", collapsed.toString())
  }, [collapsed])

  const toggleSidebar = () => setCollapsed(prev => !prev)

  return (
    <SidebarContext.Provider value={{ collapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)
