"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleGetStarted = () => {
    window.location.href =
      "mailto:bitpatterns.official@gmail.com?subject=Project Inquiry&body=Hello BIT PATTERNS team, I'm interested in discussing a project with you."
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-colors duration-300",
        scrolled ? "bg-black/90 py-3 shadow-lg" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/bitpatterns-logo.png" alt="BIT PATTERNS Logo" width={40} height={40} className="rounded-full" />
          <span className="text-2xl font-bold text-white">BIT PATTERNS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === item.path ? "text-white neon-blue-glow" : "text-white/70 hover:text-white",
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="outline"
            className="border-blue-500 text-white hover:bg-blue-500/20"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 shadow-lg py-4">
          <nav className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium py-2 transition-colors",
                  pathname === item.path ? "text-white neon-blue-glow" : "text-white/70 hover:text-white",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="outline"
              className="border-blue-500 text-white hover:bg-blue-500/20 w-full"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
