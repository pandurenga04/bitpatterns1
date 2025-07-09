import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  className?: string
  glowColor?: "blue" | "violet" | "green"
}

export default function ServiceCard({ title, description, icon, className, glowColor = "blue" }: ServiceCardProps) {
  const glowClasses = {
    blue: "hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
    violet: "hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]",
    green: "hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]",
  }

  return (
    <div
      className={cn(
        "bg-gray-900/90 border border-gray-700 rounded-lg p-6 transition-shadow duration-300",
        glowClasses[glowColor],
        className,
      )}
    >
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
