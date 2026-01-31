"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SectionHeading from "@/components/section-heading"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create clean email content
    const subject = `New Contact Form Submission - ${formState.name}`
    const body = `Dear BIT PATTERNS Team,

I hope this email finds you well. I am reaching out through your website contact form with the following inquiry:

CONTACT DETAILS:
Name: ${formState.name}
Email: ${formState.email}
Phone: ${formState.phone || "Not provided"}
Service of Interest: ${formState.service || "Not specified"}

MESSAGE:
${formState.message}

I would appreciate it if you could get back to me at your earliest convenience to discuss this further.

Thank you for your time and consideration.

Best regards,
${formState.name}

---
This message was submitted through the BIT PATTERNS website contact form.
Contact Email: ${formState.email}
Submission Date: ${new Date().toLocaleDateString()}
  `.trim()

    // Create mailto URL
    const mailtoUrl = `mailto:bitpatterns.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Simulate form processing delay
    setTimeout(() => {
      setIsSubmitting(false)

      // Open email client
      window.location.href = mailtoUrl

      // Show success message
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1000)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get in Touch</h1>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Have a project in mind or want to learn more about our services? We'd love to hear from you. Fill out the
            form below or use our contact information to reach out.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Contact Information"
                subtitle="Reach out to us directly through any of these channels."
              />

              <div className="space-y-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email Us</h3>
                    <p className="text-gray-300 mb-1">For general inquiries:</p>
                    <a
                      href="mailto:bitpatterns.official@gmail.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      bitpatterns.official@gmail.com
                    </a>
                    <p className="text-gray-300 mt-2 mb-1">For support:</p>
                    <a
                      href="mailto:support@bitpatterns.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      support@bitpatterns.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-violet-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Call Us</h3>
                    <p className="text-gray-300 mb-1">Main Office:</p>
                    <a href="tel:+91 9940947158" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +91 9940947158
                    </a>
                    <p className="text-gray-300 mt-2 mb-1">Customer Support:</p>
                    <a href="tel:+91 9940947158" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +91 9843527903
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                    <p className="text-gray-300 mb-1">Headquarters:</p>
                    <address className="text-gray-300 not-italic">
                      Rajapalayam
                      <br />
                      Tamil Nadu
                      <br />
                      India
                    </address>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/20 to-violet-900/20 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday:</span>
                    <span className="text-gray-300">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday:</span>
                    <span className="text-gray-300">10:00 AM - 2:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday:</span>
                    <span className="text-gray-300">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
              />

              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="text-green-500" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-300">
                      Thank you for reaching out to BIT PATTERNS. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Arun Kumar"
                          required
                          className="bg-gray-800/50 border-gray-700"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="arunkumar@gmail.com"
                          required
                          className="bg-gray-800/50 border-gray-700"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+91 9940947158"
                          className="bg-gray-800/50 border-gray-700"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium">
                          Service Interested In
                        </label>
                        <Select value={formState.service} onValueChange={handleSelectChange}>
                          <SelectTrigger className="bg-gray-800/50 border-gray-700">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="ai-ml">AI/ML Solutions</SelectItem>
                            <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                            <SelectItem value="custom-software">Custom Software</SelectItem>
                            <SelectItem value="other">Hackathon-Sponserships</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        required
                        rows={5}
                        className="bg-gray-800/50 border-gray-700"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message <Send size={16} />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Location" subtitle="Find us at our headquarters in Digital City." />

          <div className="relative h-96 w-full rounded-lg overflow-hidden border border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d79.9288258931176!3d13.04762754759632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1684146523780!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about working with BIT PATTERN."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What is your typical project timeline?",
                answer:
                  "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you offer ongoing maintenance and support?",
                answer:
                  "Yes, we offer various maintenance and support packages to ensure your application continues to run smoothly after launch. These can include regular updates, security patches, and technical support.",
              },
              {
                question: "What is your development process?",
                answer:
                  "We follow an agile development methodology with regular client check-ins. Our process typically includes discovery, planning, design, development, testing, and deployment phases, with continuous feedback and iteration.",
              },
              {
                question: "How do you handle project pricing?",
                answer:
                  "We offer both fixed-price and time-and-materials pricing models depending on the project requirements. We'll discuss the best option for your specific needs during our initial consultation.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
