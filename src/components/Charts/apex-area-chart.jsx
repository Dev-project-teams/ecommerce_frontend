"use client"

import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import './apex-area-chart.css'

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

export function BarChartCard() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [borderColor, setBorderColor] = useState("#e5e7eb")
  const [foreColor, setForeColor] = useState("#333")

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      const computed = getComputedStyle(document.documentElement)
      const gridColor ="#e5e7eb" || "#e5e7eb"
      const textColor =
        computed.getPropertyValue("--foreground").trim() || "#333"
      setBorderColor(gridColor)
      setForeColor(textColor)
    }
  }, [resolvedTheme])

  const chartOptions = {
    chart: {
      id: "basic-bar",
      toolbar: { show: false },
      foreColor: foreColor,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    },
    theme: {
      mode: resolvedTheme,
    },
    colors: ["#c67c00"],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 1, // Dashed lines
    
    },
    plotOptions: {
      bar: {
        borderRadius: 6, // Rounded columns
        columnWidth: "50%",
        distributed: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
  }

  const chartSeries = [
    {
      name: "Revenue",
      data: [30, 40, 45, 50, 49, 60, 38, 52],
    },
  ]

  if (!mounted) return null

  return (
    <Card className={'h-full'}>
      <CardHeader>
        <CardTitle>Monthly Revenue</CardTitle>
      </CardHeader>
      <CardContent className={'h-full'}>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="bar"
         height={"100%"}
        />
      </CardContent>
    </Card>
  )
}
