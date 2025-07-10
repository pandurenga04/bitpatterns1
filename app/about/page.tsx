import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import { CheckCircle2, Code, Lightbulb, Users, Rocket, Heart, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About BIT PATTERNS</h1>
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

            {/* ✅ Updated width for responsiveness */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-lg"></div>
                <Image
                  src="https://media.istockphoto.com/id/1530256492/vector/software-development-concept-laptop-with-open-screen-hanging-over-desk-coding-or-programming.jpg?s=612x612&w=0&k=20&c=LLywtLnfu5FETIvkaFjy_xcHnaIGmaKZYxcPKAoyPcA="
                  alt="BIT PATTERN Team"
                  fill
                  className="object-cover rounded-lg"
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

      {/* Our Mission */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="We're driven by a clear purpose and ambitious goals for the future."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <Rocket className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses through innovative digital solutions that solve complex problems, enhance
                efficiency, and drive growth. We strive to deliver exceptional value through technical excellence and
                client-focused development.
              </p>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="text-violet-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be a global leader in software development, recognized for our innovative solutions, technical
                expertise, and commitment to client success. We aim to shape the digital future by creating technology
                that makes a positive impact on businesses and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Core Values" subtitle="These principles guide everything we do at BIT PATTERNS." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Technical Excellence</h3>
              <p className="text-gray-400">
                We are committed to writing clean, efficient code and staying at the forefront of technological
                advancements.
              </p>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
              <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-violet-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Client Partnership</h3>
              <p className="text-gray-400">
                We build strong, collaborative relationships with our clients, treating their goals as our own.
              </p>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border border-gray-800 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-green-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Passion & Innovation</h3>
              <p className="text-gray-400">
                We approach every project with enthusiasm and a commitment to finding innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading title="Meet Our Team" subtitle="The talented individuals behind BIT PATTERNS's success." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Pandurenga",
                role: "Founder",
                image:
                  "https://media.licdn.com/dms/image/v2/D5603AQEHIpYgO_1K2A/profile-displayphoto-shrink_800_800/B56ZadjPqbHsAc-/0/1746399992410?e=1752710400&v=beta&t=67mpJTfRmSTf4IIIZoGy4P_e8mWIIvBc_mg1kuBkcac",
              },
              {
                name: "Ranjith Kumar",
                role: "Founder",
                image: "/ranjith-kumar.png",
              },
              {
                name: "Palani Murugan",
                role: "Founder",
                image:
                  "https://media.licdn.com/dms/image/v2/D5603AQGHHcDCYYfGww/profile-displayphoto-shrink_800_800/B56ZTk.4rvGoAc-/0/1739008478715?e=1752710400&v=beta&t=Wp42Hao--tM6of4LTlarFKsr9Cqgo1949_kdBU9mnT8",
              },
              {
                name: "Neeleshwar",
                role: "Co-Founder & Tech Head",
                image:
                  "https://media.licdn.com/dms/image/v2/D5603AQFLsgDh9pnmsg/profile-displayphoto-shrink_400_400/B56ZUJNg8lGUAg-/0/1739616297998?e=1752710400&v=beta&t=ThaDLtDuAz4pJbaxKSFIqh3rhgo7ry5QndlS2juGw-8",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden group"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-blue-500 text-white hover:bg-blue-500/20" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Join Our Team <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900/20 to-violet-900/20 backdrop-blur-sm border border-gray-800 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Ready to Work With Us?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how BIT PATTERNS can help bring your digital vision to life.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
