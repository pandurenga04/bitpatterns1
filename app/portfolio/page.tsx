"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    description:
      "A comprehensive financial analytics dashboard with real-time data visualization and predictive insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Web Development",
    technologies: ["React", "Node.js", "D3.js", "MongoDB"],
  },
  {
    id: 2,
    title: "AI-Powered Chatbot",
    description:
      "An intelligent customer service chatbot with natural language processing capabilities for a major retail chain.",
    image:
      "https://aunoa.ai/wp-content/uploads/2024/05/tipos-de-chatbots.webp",
    category: "AI/ML Solutions",
    technologies: ["Python", "TensorFlow", "NLP", "React"],
  },
  {
    id: 3,
    title: "E-Commerce Mobile App For Super-store",
    description:
      "A cross-platform mobile application for an e-commerce business with personalized recommendations and secure payments.",
    image:
      "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    category: "Mobile App Development",
    technologies: ["React Native", "Firebase", "Stripe", "Redux"],
  },
  {
    id: 4,
    title: "Healthcare Management System",
    description:
      "A comprehensive healthcare management platform for hospitals to streamline patient care and administrative processes.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Custom Software",
    technologies: ["Angular", "Java Spring", "PostgreSQL", "Docker"],
  },
  {
    id: 5,
    title: "Cattle Web Marketplace",
    description: "A livestocks listing and management platform the users can able to sell or buy a cow using this Platform.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Web Development",
    technologies: ["Next.js", "Three.js", "Supabase", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "Supply Chain Analytics",
    description: "A predictive analytics solution for optimizing supply chain operations and inventory management.",
    image:
      "https://nats.ca/wp-content/uploads/2024/03/ai-in-supply-chain-graphic_shutterstock_2052342230-scaled.jpg",
    category: "AI/ML Solutions",
    technologies: ["Python", "Scikit-learn", "Tableau", "AWS"],
  },
]

export default function PortfolioPage() {
  const handleProjectInquiry = (project: (typeof projects)[0]) => {
    const subject = `Project Inquiry - ${project.title}`
    const body = `Dear BIT PATTERNS Team,

I hope this email finds you well. I am writing to inquire about your project "${project.title}" that I found on your portfolio.

PROJECT DETAILS:
Project Name: ${project.title}
Category: ${project.category}
Technologies: ${project.technologies.join(", ")}
Description: ${project.description}

INQUIRY PURPOSE:
I am interested in discussing how you can help me with a similar project for my business. I would like to know more about:

• Technical implementation approach
• Project timeline and milestones
• Cost estimation and pricing structure
• Your development process
• Post-launch support and maintenance

NEXT STEPS:
Please let me know your availability for a consultation call to discuss my requirements in detail.

Thank you for your time and consideration. I look forward to hearing from you soon.

Best regards,
[Your Name]
[Your Company]
[Your Phone Number]
[Your Email Address]

---
Inquiry Source: BIT PATTERNS Portfolio Page
Date: ${new Date().toLocaleDateString()}
Project Reference: ${project.title}
    `.trim()

    const mailtoUrl = `mailto:bitpatterns.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Portfolio</h1>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Explore our diverse range of projects that showcase our expertise in web development, AI/ML solutions,
            mobile apps, and custom software.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden card-hover"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={project.id <= 3} // Prioritize loading first 3 images
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-sm font-medium px-2 py-1 rounded bg-blue-500/80 text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-blue-500 text-white hover:bg-blue-500/20"
                    onClick={() => handleProjectInquiry(project)}
                  >
                    <div className="flex items-center justify-center gap-2 w-full">
                      View Project <ExternalLink size={14} />
                    </div>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <SectionHeading title="Featured Case Study" subtitle="A closer look at one of our most impactful projects." />

          <div className="bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-gray-800 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                  alt="FinTech Dashboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                  Web Development & AI
                </span>
                <h3 className="text-2xl font-bold mb-4">FinTech Dashboard: Transforming Financial Analytics</h3>
                <p className="text-gray-300 mb-6">
                  We partnered with a leading financial services company to develop a comprehensive analytics dashboard
                  that revolutionized how they process and visualize data. The solution included real-time monitoring,
                  predictive analytics, and customizable reporting features.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold">The Challenge</h4>
                    <p className="text-gray-400">
                      The client needed to consolidate data from multiple sources and provide actionable insights to
                      their team and customers in real-time.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Our Solution</h4>
                    <p className="text-gray-400">
                      We developed a scalable platform with intuitive data visualization, AI-powered predictions, and a
                      responsive interface accessible across all devices.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Results</h4>
                    <p className="text-gray-400">
                      The solution led to a 40% increase in operational efficiency, 25% reduction in decision-making
                      time, and significant improvement in customer satisfaction.
                    </p>
                  </div>
                </div>

                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    const subject = "Case Study Inquiry - FinTech Dashboard"
                    const body = `Dear BIT PATTERNS Team,

I hope this email finds you well. I am writing to inquire about your FinTech Dashboard case study that I found on your portfolio.

CASE STUDY INTEREST:
I am particularly interested in learning more about your approach to financial analytics and dashboard development.

SPECIFIC AREAS OF INTEREST:
• Technical architecture and implementation
• AI-powered analytics integration
• Real-time data processing capabilities
• User interface and experience design
• Scalability and performance optimization

BUSINESS CONTEXT:
I believe a similar solution could benefit my organization, and I would like to discuss how you can help us achieve comparable results.

NEXT STEPS:
Please let me know your availability for a consultation to discuss our requirements and how your expertise can help us.

Thank you for your time and consideration.

Best regards,
[Your Name]
[Your Company]
[Your Phone Number]
[Your Email Address]

---
Inquiry Source: BIT PATTERNS Portfolio Case Study
Date: ${new Date().toLocaleDateString()}
                    `.trim()

                    const mailtoUrl = `mailto:bitpatterns.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                    window.location.href = mailtoUrl
                  }}
                >
                  <div className="flex items-center gap-2">
                    Read Full Case Study <ArrowRight size={16} />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading title="Client Testimonials" subtitle="What our clients say about working with BIT PATTERN." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Guru Moorthy",
                position: "CTO, FinTech Innovations",
                quote:
                  "BIT PATTERNS delivered an exceptional solution that exceeded our expectations. Their technical expertise and attention to detail were impressive.",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
              },
              {
                name: "Sundari Sutharsan",
                position: "CEO, Health Solutions Inc.",
                quote:
                  "Working with BIT PATTERNS was a game-changer for our business. They understood our needs and delivered a product that transformed our operations.",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
              },
              {
                name: "Ramm",
                position: "Product Manager, E-Commerce Plus",
                quote:
                  "The mobile app developed by BIT PATTERNS has significantly improved our customer engagement and sales. Their team was professional and responsive throughout.",
                image:
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-gray-800 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Ready to Build Your Next Project?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how BIT PATTERNS can help bring your digital vision to life with our expertise and
              innovative solutions.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                const subject = "New Project Inquiry"
                const body = `Dear BIT PATTERNS Team,

I hope this email finds you well. I am reaching out to discuss a potential project collaboration with your team.

PROJECT INQUIRY:
I am interested in exploring how BIT PATTERNS can help me with my upcoming project requirements.

SERVICES OF INTEREST:
• Web Development
• AI/ML Solutions  
• Mobile App Development
• Custom Software Development
• Other: _______________

NEXT STEPS:
I would appreciate the opportunity to schedule a consultation call to discuss my project requirements in detail.

Please let me know your availability and the best way to proceed.

Thank you for your time and consideration. I look forward to hearing from you soon.

Best regards,
[Your Name]
[Your Company]
[Your Phone Number]
[Your Email Address]

---
Inquiry Source: BIT PATTERNS Portfolio Page
Date: ${new Date().toLocaleDateString()}
                `.trim()

                const mailtoUrl = `mailto:bitpatterns.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                window.location.href = mailtoUrl
              }}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
