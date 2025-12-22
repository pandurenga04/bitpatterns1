import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import {
  CheckCircle2,
  Code,
  Lightbulb,
  Users,
  Rocket,
  Heart,
  ArrowRight,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                About BIT PATTERNS
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                We are a team of passionate developers, designers, and digital strategists dedicated to creating
                exceptional software solutions that drive business growth and innovation.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Founded in 2025, BIT PATTERNS has grown from a small startup to a leading software development company,
                serving clients across various industries worldwide.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-500" size={20} />
                  <span className="text-gray-300">20+ Completed Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-violet-500" size={20} />
                  <span className="text-gray-300">10+ Expert Developers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span className="text-gray-300">98% Client Satisfaction</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-lg" />
                <Image
                  src="https://globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-1536x1024.jpg"
                  alt="BIT PATTERNS Team"
                  fill
                  className="object-cover object-center rounded-lg"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-black p-4 rounded-lg border border-gray-800 shadow-lg">
                <p className="text-2xl font-bold gradient-text">2+ Years</p>
                <p className="text-gray-400">of Excellence</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="We're driven by a clear purpose and ambitious goals for the future."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <Rocket className="text-blue-500 mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses through innovative digital solutions that solve complex problems and drive growth.
              </p>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <Lightbulb className="text-violet-500 mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be a global leader in software development recognized for innovation and client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="These principles guide everything we do at BIT PATTERNS."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Value icon={<Code />} title="Technical Excellence" />
            <Value icon={<Users />} title="Client Partnership" />
            <Value icon={<Heart />} title="Passion & Innovation" />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The talented individuals behind BIT PATTERNS's success."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Pandurenga", role: "Founder & COO", image: "/CMO.jpg" },
              { name: "Ranjith Kumar", role: "Founder & CFO", image: "/CFO.jpg" },
              { name: "Palani Murugan", role: "Founder & CTO", image: "/CTO.jpg" },
              { name: "Neeleshwar", role: "Tech Head & HR", image: "/TH.jpg" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden group"
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Join Our Team <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

/* Helper Component */
function Value({ icon, title }: { icon: JSX.Element; title: string }) {
  return (
    <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">
        We uphold this value in every project we deliver.
      </p>
    </div>
  )
}
