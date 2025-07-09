import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white neon-violet-glow">{title}</h2>
      {subtitle && <p className="text-gray-300 text-lg max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  )
}
