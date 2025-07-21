"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
  const messageEndRef = useRef<HTMLDivElement | null>(null)

  const getResponse = (msg: string): string => {
    const message = msg.toLowerCase()
    if (["hello", "hi", "hey"].some((w) => message.includes(w))) return rand(predefinedResponses.greeting)
    if (["service", "offerings", "what do you do"].some((w) => message.includes(w))) return rand(predefinedResponses.services)
    if (["contact", "email", "phone", "reach"].some((w) => message.includes(w))) return rand(predefinedResponses.contact)
    if (["price", "cost", "pricing", "quote"].some((w) => message.includes(w))) return rand(predefinedResponses.pricing)
    if (["projects", "work", "products", "examples"].some((w) => message.includes(w))) return rand(predefinedResponses.portfolio)
    if (["web development", "website"].some((w) => message.includes(w))) return "We specialize in full-stack web development using React, Next.js, and Node.js. Want to know more?"
    if (["ai", "ml", "machine learning"].some((w) => message.includes(w))) return "We build custom AI/ML models, predictive analytics, and smart assistants. What solution do you need?"
    if (["mobile", "app"].some((w) => message.includes(w))) return "We build cross-platform mobile apps for Android & iOS using React Native. Got an idea?"
    if (["thanks", "thank"].some((w) => message.includes(w))) return "You're welcome! Let me know if there's anything else you’d like to explore."

    return rand(predefinedResponses.default)
  }

  const rand = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

  const handleSendMessage = () => {
    if (!inputValue.trim()) return
    const userMsg: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    const botMsg: Message = {
      id: messages.length + 2,
      text: getResponse(inputValue),
      sender: "bot",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMsg, botMsg])
    setInputValue("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSendMessage()
  }

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 hover:opacity-90 text-white shadow-lg animate-pulse"
          size="icon"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center gap-3">
              <Bot size={24} />
              <div>
                <h3 className="font-semibold">BIT PATTERNS Assistant</h3>
                <p className="text-xs opacity-90">Online</p>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-700">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.sender === "user" ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-100 border border-gray-700"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {msg.sender === "bot" && <Bot size={16} className="mt-1" />}
                      {msg.sender === "user" && <User size={16} className="mt-1" />}
                      <p className="text-sm">{msg.text}</p>
                    </div>
                    <p className="text-[10px] text-right opacity-60 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={messageEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-700 bg-gray-800">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="bg-gray-700 border border-gray-600 text-white"
                />
                <Button onClick={handleSendMessage} size="icon" className="bg-blue-600 hover:bg-blue-700">
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
