import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import ServiceCard from "@/components/service-card"
import {
  Code2,
  Brain,
  Smartphone,
  Database,
  Globe,
  ShoppingCart,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Services</h1>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            We offer a comprehensive range of digital solutions to help businesses thrive in today's technology-driven
            world. From web and mobile development to AI integration and custom software, we have the expertise to bring
            your vision to life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Development"
              description="Full-stack web applications with modern frameworks, responsive design, and seamless user experiences."
              icon={<Code2 className="text-blue-500" />}
              glowColor="blue"
              className="h-full"
            />

            <ServiceCard
              title="AI/ML Solutions"
              description="Custom AI models and machine learning solutions to automate processes and gain valuable insights from your data."
              icon={<Brain className="text-violet-500" />}
              glowColor="violet"
              className="h-full"
            />

            <ServiceCard
              title="Mobile App Development"
              description="Cross-platform and native mobile applications for iOS and Android that deliver exceptional user experiences."
              icon={<Smartphone className="text-green-500" />}
              glowColor="green"
              className="h-full"
            />

            <ServiceCard
              title="Custom Software"
              description="End-to-end software products tailored to your specific business requirements and objectives."
              icon={<Database className="text-blue-500" />}
              glowColor="blue"
              className="h-full"
            />

            <ServiceCard
              title="E-Commerce Solutions"
              description="Scalable and secure online stores with payment integration, inventory management, and customer analytics."
              icon={<ShoppingCart className="text-violet-500" />}
              glowColor="violet"
              className="h-full"
            />

            <ServiceCard
              title="Business Intelligence"
              description="Data visualization and analytics tools to help you make informed business decisions based on real-time insights."
              icon={<BarChart3 className="text-green-500" />}
              glowColor="green"
              className="h-full"
            />

            <ServiceCard
              title="Web3 & Blockchain"
              description="Decentralized applications, smart contracts, and blockchain integration for next-generation digital solutions."
              icon={<Globe className="text-blue-500" />}
              glowColor="blue"
              className="h-full"
            />

            <ServiceCard
              title="Cybersecurity"
              description="Comprehensive security assessments, implementation of best practices, and ongoing monitoring to protect your digital assets."
              icon={<Shield className="text-violet-500" />}
              glowColor="violet"
              className="h-full"
            />
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Web Development"
            subtitle="Creating powerful, responsive, and user-friendly web applications."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="text-gray-300 mb-6">
                Our web development services encompass everything from simple landing pages to complex web applications.
                We use the latest technologies and frameworks to ensure your web presence is modern, responsive, and
                optimized for performance.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Frontend Development</h4>
                    <p className="text-gray-400">
                      React, Next.js, Vue.js, and other modern frameworks to create responsive and interactive user
                      interfaces.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Backend Development</h4>
                    <p className="text-gray-400">
                      Node.js, Python, Java, and other technologies to build robust server-side applications and APIs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Database Design</h4>
                    <p className="text-gray-400">
                      SQL and NoSQL database implementation with optimized data structures and queries.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Discuss Your Web Project <ArrowRight size={16} />
                </Link>
              </Button>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-violet-900/20 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Web Development Process</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Discovery & Planning</h4>
                    <p className="text-gray-400">
                      Understanding your requirements and creating a detailed project roadmap.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Design & Prototyping</h4>
                    <p className="text-gray-400">Creating wireframes and interactive prototypes for your approval.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Development</h4>
                    <p className="text-gray-400">
                      Building the application with clean, efficient, and maintainable code.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Testing & QA</h4>
                    <p className="text-gray-400">
                      Rigorous testing to ensure functionality, performance, and security.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Deployment & Support</h4>
                    <p className="text-gray-400">
                      Launching your application and providing ongoing maintenance and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SectionHeading
            title="AI/ML Solutions"
            subtitle="Harnessing the power of artificial intelligence to drive innovation and efficiency."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-r from-violet-900/20 to-blue-900/20 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">AI/ML Applications</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="text-violet-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Predictive Analytics</h4>
                    <p className="text-gray-400">
                      Forecast trends and make data-driven decisions based on historical patterns.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="text-violet-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Natural Language Processing</h4>
                    <p className="text-gray-400">
                      Chatbots, sentiment analysis, and text classification for enhanced customer interactions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="text-violet-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Computer Vision</h4>
                    <p className="text-gray-400">
                      Image recognition, object detection, and visual data analysis for various applications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="text-violet-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Recommendation Systems</h4>
                    <p className="text-gray-400">
                      Personalized content and product recommendations to enhance user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://cdn.mgmtech.org/media/news/20240227/65ddb6f42c711_88.jpg"
                  alt="AI/ML Solutions"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-gray-300 mb-6">
                Our AI/ML solutions help businesses automate processes, gain insights from data, and create intelligent
                applications. We work with you to identify the right AI technologies for your specific needs and
                implement them effectively.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-violet-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Custom AI Model Development</h4>
                    <p className="text-gray-400">
                      Building and training machine learning models tailored to your specific business requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-violet-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">AI Integration</h4>
                    <p className="text-gray-400">
                      Incorporating AI capabilities into your existing applications and workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-violet-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Data Analysis & Visualization</h4>
                    <p className="text-gray-400">
                      Extracting meaningful insights from your data and presenting them in intuitive dashboards.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-violet-600 hover:bg-violet-700 text-white" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Explore AI Solutions <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900/20 to-violet-900/20 backdrop-blur-sm border border-gray-800 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Need a Custom Solution?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and how BIT PATTERNS can help you achieve your digital goals.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
