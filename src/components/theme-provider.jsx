'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

export function ThemeProvider({ children, ...props }) {
  return <NextThemeProvider  attribute="class" {...props}  defaultTheme="system"
    themes={["light", "dark"]}>{children}</NextThemeProvider>
}