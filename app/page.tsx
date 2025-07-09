"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import TypewriterEffect from "@/components/typewriter-effect"
import ServiceCard from "@/components/service-card"
import SectionHeading from "@/components/section-heading"
import { Code2, Brain, Smartphone, Database, ArrowRight, CheckCircle2, Users, Zap, Clock, Award } from "lucide-react"

export default function Home() {
  const handleGetStarted = () => {
    window.location.href =
      "mailto:bitpatterns.official@gmail.com?subject=Project Inquiry&body=Hello BIT PATTERNS team, I'm interested in discussing a project with you."
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroAnimation />

        {/* Watermark Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] opacity-15">
            <Image src="/bitpatterns-logo.png" alt="BIT PATTERNS Watermark" fill className="object-contain" priority />
          </div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Transforming Ideas Into <br />
            <span className="gradient-text">Software Realities</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            <span>We build </span>
            <TypewriterEffect
              words={["web applications", "mobile apps", "AI solutions", "custom software"]}
              className="text-blue-400"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleGetStarted}>
              Let's Build Together
            </Button>
            <Button size="lg" variant="outline" className="border-blue-500 text-white hover:bg-blue-500/20" asChild>
              <Link href="/products">View Our Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-[#050b2c] to-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a comprehensive range of digital solutions to help your business thrive in the digital landscape."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Web Development"
              description="Full-stack web applications with modern frameworks and responsive design."
              icon={<Code2 className="text-blue-500" />}
              glowColor="blue"
            />
            <ServiceCard
              title="AI/ML Solutions"
              description="Custom AI models and machine learning solutions for your business needs."
              icon={<Brain className="text-violet-500" />}
              glowColor="violet"
            />
            <ServiceCard
              title="Mobile Apps"
              description="Cross-platform mobile applications for iOS and Android devices."
              icon={<Smartphone className="text-green-500" />}
              glowColor="green"
            />
            <ServiceCard
              title="Custom Software"
              description="End-to-end software products tailored to your specific requirements."
              icon={<Database className="text-blue-500" />}
              glowColor="blue"
            />
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-blue-500 text-white hover:bg-blue-500/20" asChild>
              <Link href="/services" className="flex items-center gap-2">
                Explore All Services <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#050b2c] relative">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Why Choose BIT PATTERNS"
            subtitle="We combine technical expertise with creative problem-solving to deliver exceptional digital solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800">
              <CheckCircle2 className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Technical Excellence</h3>
              <p className="text-gray-400">
                Our team of expert developers ensures high-quality code and optimal performance.
              </p>
            </div>

            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800">
              <Users className="text-violet-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Client-Focused Approach</h3>
              <p className="text-gray-400">
                We prioritize your needs and work closely with you throughout the development process.
              </p>
            </div>

            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800">
              <Zap className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Innovative Solutions</h3>
              <p className="text-gray-400">
                We leverage cutting-edge technologies to create forward-thinking digital products.
              </p>
            </div>

            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800">
              <Clock className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
              <p className="text-gray-400">
                We adhere to project timelines and ensure on-time delivery without compromising quality.
              </p>
            </div>

            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800">
              <Award className="text-violet-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-400">
                Rigorous testing and quality control processes ensure a flawless end product.
              </p>
            </div>

            <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800">
              <Database className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Scalable Architecture</h3>
              <p className="text-gray-400">
                We build solutions that can grow with your business and adapt to changing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-[#050b2c]">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-gray-800 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Ready to Transform Your Ideas?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to build innovative digital solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleGetStarted}>
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-white hover:bg-blue-500/20" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
