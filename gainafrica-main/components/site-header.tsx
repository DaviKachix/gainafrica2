"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Presenters", href: "/presenters" },
  { name: "Resources", href: "/resources" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop Header */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8 bg-black/95 backdrop-blur-md shadow-lg border-b border-white/20 rounded-b-2xl">
        {/* Logo with space for icon */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full shadow-sm" />
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            GAiN Africa
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative text-sm font-semibold transition-all duration-300 hover:text-white/80",
                pathname === item.href
                  ? "text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-white/80"
                  : "text-white/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Register Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <Button
            asChild
            className="bg-white text-black font-bold px-5 py-2 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Link href="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed inset-0 z-40 bg-black p-6 flex flex-col justify-between rounded-b-3xl shadow-2xl"
          >
            <div>
              {/* Logo + Close Button */}
              <div className="flex items-center justify-between mb-10">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm" />
                  <span className="text-2xl font-extrabold text-white">GAiN Africa</span>
                </Link>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-2xl font-bold transition-all duration-300 hover:text-white/80",
                      pathname === item.href ? "text-white" : "text-white/70"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Register Button */}
              <Button
                asChild
                className="mt-8 w-full bg-white text-black font-bold px-5 py-3 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Link href="/register">Register</Link>
              </Button>
            </div>

            {/* Mobile Footer */}
            <div className="flex flex-col items-center space-y-3 pt-6 border-t border-white/20">
              <p className="text-sm text-white/50">
                © {new Date().getFullYear()} GAiN Africa. All rights reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
