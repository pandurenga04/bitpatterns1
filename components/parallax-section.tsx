"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
}

// Simplified version without parallax effects to prevent scrolling issues
export default function ParallaxSection({ children, className }: ParallaxSectionProps) {
  return <div className={cn("relative", className)}>{children}</div>
}
