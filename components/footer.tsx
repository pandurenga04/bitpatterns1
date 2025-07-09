import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/bitpatterns-logo.png"
                alt="BIT PATTERNS Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <h3 className="text-2xl font-bold text-white">BIT PATTERNS</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Transforming Ideas Into Software Realities. We build customized digital solutions for businesses
              worldwide.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/bitpatterns.in" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.linkedin.com/company/bit-patterns/" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Products", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-500 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "AI/ML Solutions", "Mobile App Development", "Custom Software"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail size={16} />
                <span>support@bitpatterns.in</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone size={16} />
                <span>+91 9940947158</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <Input type="email" placeholder="Your email" className="bg-gray-900 border-gray-700" />
                <Button variant="outline" className="border-blue-500 text-white hover:bg-blue-500/20">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} BIT PATTERNS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
