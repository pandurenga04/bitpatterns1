"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const predefinedResponses = {
  greeting: [
    "Hello! Welcome to BIT PATTERNS. How can I help you today?",
    "Hi there! I'm here to assist you with any questions about our services.",
    "Welcome! I'm the BIT PATTERNS assistant. What would you like to know?",
  ],
  services: [
    "We offer Web Development, AI/ML Solutions, Mobile App Development, and Custom Software. Which service interests you?",
    "Our main services include: Web Development, AI/ML Solutions, Mobile Apps, and Custom Software. Would you like details about any specific service?",
  ],
  contact: [
    "You can reach us at bitpatterns.official@gmail.com or call +91 9940947158. Would you like me to help you with anything else?",
    "Feel free to contact us via email at bitpatterns.official@gmail.com or phone +91 9940947158. How else can I assist you?",
  ],
  pricing: [
    "Our pricing varies based on project requirements. I'd recommend contacting our team at bitpatterns.official@gmail.com for a detailed quote.",
    "Project costs depend on complexity and scope. Please reach out to bitpatterns.official@gmail.com for a personalized estimate.",
  ],
  portfolio: [
    "You can view our portfolio on the Portfolio page to see our recent projects including FinTech Dashboard, AI Chatbots, and E-commerce apps.",
    "Check out our Portfolio section to see examples of our work in Web Development, AI/ML, and Mobile Apps.",
  ],
  default: [
    "I'm here to help! You can ask me about our services, contact information, or anything else about BIT PATTERNS.",
    "That's a great question! For detailed information, I'd recommend contacting our team at bitpatterns.official@gmail.com.",
    "I'd be happy to help! Could you please be more specific about what you'd like to know?",
  ],
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to BIT PATTERNS. I'm here to help you with any questions about our services. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)]
    }

    if (message.includes("service") || message.includes("what do you do") || message.includes("offerings")) {
      return predefinedResponses.services[Math.floor(Math.random() * predefinedResponses.services.length)]
    }

    if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("phone") ||
      message.includes("reach")
    ) {
      return predefinedResponses.contact[Math.floor(Math.random() * predefinedResponses.contact.length)]
    }

    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("pricing") ||
      message.includes("quote")
    ) {
      return predefinedResponses.pricing[Math.floor(Math.random() * predefinedResponses.pricing.length)]
    }

    if (
      message.includes("products") ||
      message.includes("work") ||
      message.includes("projects") ||
      message.includes("examples")
    ) {
      return "You can view our products on the Products page to see our recent work including FinTech Dashboard, AI Chatbots, and E-commerce apps."
    }

    if (message.includes("web development") || message.includes("website")) {
      return "We specialize in full-stack web development using modern frameworks like React, Next.js, and Node.js. Would you like to know more about our web development process?"
    }

    if (message.includes("ai") || message.includes("machine learning") || message.includes("ml")) {
      return "Our AI/ML solutions include custom model development, chatbots, predictive analytics, and data visualization. What specific AI solution are you interested in?"
    }

    if (message.includes("mobile") || message.includes("app")) {
      return "We develop cross-platform mobile applications for iOS and Android using React Native and native technologies. Do you have a mobile app project in mind?"
    }

    if (message.includes("thank") || message.includes("thanks")) {
      return "You're welcome! Feel free to ask if you have any other questions about BIT PATTERNS."
    }

    const updatedDefaultResponses = {
      ...predefinedResponses.default,
      1: "Check out our Products section to see examples of our work in Web Development, AI/ML, and Mobile Apps.",
    }

    return predefinedResponses.default[Math.floor(Math.random() * predefinedResponses.default.length)]
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    const botResponse: Message = {
      id: messages.length + 2,
      text: getResponse(inputValue),
      sender: "bot",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage, botResponse])
    setInputValue("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          size="icon"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center gap-3">
            <Bot size={24} />
            <div>
              <h3 className="font-semibold">BIT PATTERNS Assistant</h3>
              <p className="text-xs opacity-90">Online now</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-100 border border-gray-700"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.sender === "bot" && <Bot size={16} className="mt-1 flex-shrink-0" />}
                    {message.sender === "user" && <User size={16} className="mt-1 flex-shrink-0" />}
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="bg-gray-800 border-gray-600 text-white"
              />
              <Button onClick={handleSendMessage} size="icon" className="bg-blue-600 hover:bg-blue-700">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
