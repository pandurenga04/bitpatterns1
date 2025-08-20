"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import { ArrowRight, ExternalLink } from "lucide-react"

const products = [
  {
    id: 1,
    title: "MediVault- AI Powered Medical Intellingence",
    description:
      "Smarter patient record management & AI dashboard with real-time data visualization and predictive insights.",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQGzBzHGeDwHTQ/feedshare-shrink_1280/B56Zhl_i8MG4Ak-/0/1754057816786?e=1756944000&v=beta&t=AAYl_jfFS-5Ingnw4p17Le7RBjoPioOUDjCDDNvvkis",
    category: "AI & Web Based",
    technologies: ["React", "Node.js", "Next.js", "GenAI"],
  },
  {
    id: 2,
    title: "MomEase -𝑨𝑰-𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑪𝒐𝒎𝒑𝒂𝒏𝒊𝒐𝒏 𝒇𝒐𝒓 𝑴𝒐𝒕𝒉𝒆𝒓𝒉𝒐𝒐𝒅",
    description:
      " comprehensive digital platform designed specifically for new mothers navigating their journey with confidence and support",
    image: "https://media.licdn.com/dms/image/v2/D5622AQG3y9SDROvoyA/feedshare-shrink_2048_1536/B56ZehEErGHQAs-/0/1750753890747?e=1756944000&v=beta&t=TeMaSdm1DO9Eo55hcE4QDq0uzzwYGqHqGV_3XY4OQFA",
    category: "AI/ML Solutions",
    technologies: ["Python", "TensorFlow", "NLP", "React"],
  },
  {
    id: 3,
    title: "Namma Kart -A cross-platform mobile application for an e-commerce",
    description:
      "A cross-platform mobile application for an e-commerce business with personalized recommendations and secure payments.",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQFTzIuZEM1HHg/feedshare-shrink_2048_1536/B56ZcqDQ.YGQAo-/0/1748757192213?e=1756944000&v=beta&t=B0lsD0414Dr_s7hpV27ULKJY_pWXLEXGC41nPpdBaxI",
    category: "Mobile App Development",
    technologies: ["React Native", "Firebase", "RazorPay", "Redux"],
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
    title: "Moo Mart",
    description:
      "A livestocks listing and management platform the users can able to sell or buy a cow using this Platform.",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQHdz6Ecp3nx7g/feedshare-shrink_2048_1536/B56ZfkwgMUHUAo-/0/1751889612182?e=1756944000&v=beta&t=SqlfMQ7I-BMfuyVoZXsz2Y5gTe8xWzqFMzcybf0RAB0",
    category: "Web Development",
    technologies: ["Next.js", "Three.js", "Supabase", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "Supply Chain Analytics",
    description: "A predictive analytics solution for optimizing supply chain operations and inventory management.",
    image: "https://nats.ca/wp-content/uploads/2024/03/ai-in-supply-chain-graphic_shutterstock_2052342230-scaled.jpg",
    category: "AI/ML Solutions",
    technologies: ["Python", "Scikit-learn", "Tableau", "AWS"],
  },
]

export default function ProductsPage() {
  const handleProductInquiry = (product: (typeof products)[0]) => {
    const subject = `Product Inquiry - ${product.title}`
    const body = `Dear BIT PATTERNS Team,

I hope this email finds you well. I am writing to inquire about your product "${product.title}" that I found on your products page.

PRODUCT DETAILS:
Product Name: ${product.title}
Category: ${product.category}
Technologies: ${product.technologies.join(", ")}
Description: ${product.description}

INQUIRY PURPOSE:
I am interested in discussing how you can help me with a similar product for my business. I would like to know more about:

• Technical implementation approach
• Product timeline and milestones
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
Inquiry Source: BIT PATTERNS Products Page
Date: ${new Date().toLocaleDateString()}
Product Reference: ${product.title}
    `.trim()

    const mailtoUrl = `mailto:bitpatterns.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Products</h1>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Explore our diverse range of products that showcase our expertise in web development, AI/ML solutions,
            mobile apps, and custom software.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden card-hover"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={product.id <= 3} // Prioritize loading first 3 images
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-sm font-medium px-2 py-1 rounded bg-blue-500/80 text-white">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.technologies.map((tech, index) => (
                      <span key={index} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-blue-500 text-white hover:bg-blue-500/20"
                    onClick={() => handleProductInquiry(product)}
                  >
                    <div className="flex items-center justify-center gap-2 w-full">
                      View Product <ExternalLink size={14} />
                    </div>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Featured Product */}
<section className="py-20 bg-gradient-to-b from-gray-900 to-black">
  <div className="container mx-auto px-4">
    <SectionHeading
      title="Featured Product"
      subtitle="A closer look at one of our most impactful products."
    />

    <div className="bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-gray-800 rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
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

        {/* Content */}
        <div className="p-8">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Web Development & AI
          </span>

          <h3 className="text-2xl font-bold mb-4">
            FinTech Dashboard: Transforming Financial Analytics
          </h3>

          <p className="text-gray-300 mb-6">
            We partnered with a leading financial services company to develop a comprehensive analytics dashboard that revolutionized how they process and visualize data. The solution included real-time monitoring, predictive analytics, and customizable reporting features.
          </p>

          <div className="space-y-4 mb-6">
            <div>
              <h4 className="font-semibold">The Challenge</h4>
              <p className="text-gray-400">
                The client needed to consolidate data from multiple sources and provide actionable insights to their team and customers in real-time.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Our Solution</h4>
              <p className="text-gray-400">
                We developed a scalable platform with intuitive data visualization, AI-powered predictions, and a responsive interface accessible across all devices.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Results</h4>
              <p className="text-gray-400">
                The solution led to a 40% increase in operational efficiency, 25% reduction in decision-making time, and significant improvement in customer satisfaction.
              </p>
            </div>
          </div>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    const subject = "Product Inquiry - FinTech Dashboard"
                    const body = `Dear BIT PATTERNS Team,

I hope this email finds you well. I am writing to inquire about your FinTech Dashboard product that I found on your products page.

PRODUCT INTEREST:
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
Inquiry Source: BIT PATTERNS Products Page
Date: ${new Date().toLocaleDateString()}
                    `.trim()

                    const mailtoUrl = `mailto:bitpatterns.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                    window.location.href = mailtoUrl
                  }}
                >
                  <div className="flex items-center gap-2">
                    Learn More About Product <ArrowRight size={16} />
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
          <SectionHeading
            title="Client Testimonials"
            subtitle="What our clients say about working with BIT PATTERNS."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Govintha sutharsan",
                position: "Head, SSF Mills",
                quote:
                  "BIT PATTERNS delivered an exceptional solution that exceeded our expectations. Their technical expertise and attention to detail were impressive.",
                image:
                  "https://pnghq.com/wp-content/uploads/pnghq.com-user-icon-cutout-png-clipart-images.png",
              },
              {
                name: "Mr.Kannan",
                position: "Founder, SSF Mills",
                quote:
                  "Bit Patterns transformed our vision into a stunning digital reality with unmatched precision and creativity!.",
                image:
                  "https://pnghq.com/wp-content/uploads/pnghq.com-user-icon-cutout-png-clipart-images.png",
              },
              {
                name: "Mrs.Sundhari",
                position: "Manager, SSF Mills",
                quote:
                  "Partnering with Bit Patterns has streamlined our operations and elevated our digital strategy beyond expectations.",
                image:
                  "https://www.clker.com/cliparts/D/4/B/O/k/2/female-user-icon-bright-blue-md.png",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Ready to Build Your Next Product?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how BIT PATTERNS can help bring your digital vision to life with our expertise and
              innovative solutions.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                const subject = "New Product Inquiry"
                const body = `Dear BIT PATTERNS Team,

I hope this email finds you well. I am reaching out to discuss a potential product development collaboration with your team.

PRODUCT INQUIRY:
I am interested in exploring how BIT PATTERNS can help me with my upcoming product requirements.

SERVICES OF INTEREST:
• Web Development
• AI/ML Solutions  
• Mobile App Development
• Custom Software Development
• Other: _______________

NEXT STEPS:
I would appreciate the opportunity to schedule a consultation call to discuss my product requirements in detail.

Please let me know your availability and the best way to proceed.

Thank you for your time and consideration. I look forward to hearing from you soon.

Best regards,
[Your Name]
[Your Company]
[Your Phone Number]
[Your Email Address]

---
Inquiry Source: BIT PATTERNS Products Page
Date: ${new Date().toLocaleDateString()}
                `.trim()

                const mailtoUrl = `mailto:bitpatterns.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                window.location.href = mailtoUrl
              }}
            >
              Start Your Product
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
