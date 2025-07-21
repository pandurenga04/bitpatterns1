"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
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
    "Hello! Welcome to BIT PATTERNS. How can I assist you today?",
    "Hi there! I'm here to help with any questions about our services.",
    "Welcome! I'm the BIT PATTERNS assistant. What's on your mind?",
  ],
  services: [
    "We offer Web Development, AI/ML Solutions, Mobile App Development, and Custom Software. Which service interests you?",
    "Our services include Web Development, AI/ML Solutions, Mobile Apps, and Custom Software. Want details on any specific service?",
  ],
  contact: [
    "Reach us at bitpatterns.official@gmail.com or call +91 9940947158. Anything else I can help with?",
    "Contact us via email at bitpatterns.official@gmail.com or phone +91 9940947158. How can I assist further?",
  ],
  pricing: [
    "Pricing varies based on project requirements. Contact our team at bitpatterns.official@gmail.com for a detailed quote.",
    "Costs depend on project scope. Reach out to bitpatterns.official@gmail.com for a personalized estimate.",
  ],
  portfolio: [
    "Visit our Portfolio page to see projects like FinTech Dashboard, AI Chatbots, and E-commerce apps.",
    "Check out our Portfolio section for examples of our work in Web Development, AI/ML, and Mobile Apps.",
  ],
  default: [
    "I'm here to help! Ask about our services, contact info, or anything else about BIT PATTERNS.",
    "Great question! Contact our team at bitpatterns.official@gmail.com for detailed information.",
    "Happy to assist! Could you be more specific about what you'd like to know?",
  ],
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to BIT PATTERNS. I'm here to help with any questions about our services. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)]
    }
    if (message.includes("service") || message.includes("what do you do") || message.includes("offerings")) {
      return predefinedResponses.services[Math.floor(Math.random() * predefinedResponses.services.length)]
    }
    if (message.includes("contact") || message.includes("email") || message.includes("phone") || message.includes("reach")) {
      return predefinedResponses.contact[Math.floor(Math.random() * predefinedResponses.contact.length)]
    }
    if (message.includes("price") || message.includes("cost") || message.includes("pricing") || message.includes("quote")) {
      return predefinedResponses.pricing[Math.floor(Math.random() * predefinedResponses.pricing.length)]
    }
    if (message.includes("products") || message.includes("work") || message.includes("projects") || message.includes("examples")) {
      return predefinedResponses.portfolio[Math.floor(Math.random() * predefinedResponses.portfolio.length)]
    }
    if (message.includes("web development") || message.includes("website")) {
      return "We specialize in full-stack web development using modern frameworks like React, Next.js, and Node.js. Want to know more about our process?"
    }
    if (message.includes("ai") || message.includes("machine learning") || message.includes("ml")) {
      return "Our AI/ML solutions include custom model development, chatbots, predictive analytics, and data visualization. Interested in a specific AI solution?"
    }
    if (message.includes("mobile") || message.includes("app")) {
      return "We develop cross-platform mobile apps for iOS and Android using React Native and native technologies. Got a mobile app project in mind?"
    }
    if (message.includes("thank") || message.includes("thanks")) {
      return "You're welcome! Feel free to ask if you have any other questions about BIT PATTERNS."
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

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)
    setInputValue("")

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000) // 1-second delay for typing effect
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      <style jsx>{`
        .chatbot-window {
          transition: all 0.3s ease-in-out;
          transform: ${isOpen ? 'translateY(0)' : 'translateY(20px)'};
          opacity: ${isOpen ? 1 : 0};
          visibility: ${isOpen ? 'visible' : 'hidden'};
        }
        .message {
          transition: all 0.3s ease;
          transform: translateY(10px);
          opacity: 0;
        }
        .message-visible {
          transform: translateY(0);
          opacity: 1;
        }
        .toggle-button {
          transition: all 0.2s ease;
        }
        .toggle-button:hover {
          transform: scale(1.1);
        }
        .toggle-button:active {
          transform: scale(0.95);
        }
        .send-button:hover {
          transform: scale(1.1);
        }
        .send-button:active {
          transform: scale(0.95);
        }
        .typing-indicator {
          display: flex;
          gap: 6px;
          padding: 10px;
          background: #374151;
          border-radius: 10px;
          width: fit-content;
        }
        .typing-dot {
          width: 6px;
          height: 6px;
          background: #60a5fa;
          border-radius: 50%;
          animation: blink 1.4s infinite both;
        }
        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes blink {
          0% { opacity: 0.2; }
          20% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>

      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="toggle-button w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-xl"
          size="icon"
        >
          <span className="transition-transform duration-300" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
            {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
          </span>
        </Button>
      </div>

      {/* Chatbot Window */}
      <div
        className="chatbot-window fixed bottom-24 right-6 w-96 max-w-[90vw] h-[28rem] bg-gray-800 border border-gray-700 rounded-2xl shadow-xl z-50 flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-t-2xl flex items-center gap-3">
          <Bot size={28} />
          <div>
            <h3 className="font-bold text-lg">BIT PATTERNS Assistant</h3>
            <p className="text-xs opacity-80">Always here to help</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900/50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message message-visible flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] p-3 rounded-xl ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-100 border border-gray-600"
                } shadow-md`}
              >
                <div className="flex items-start gap-2">
                  {message.sender === "bot" && <Bot size={18} className="mt-1 flex-shrink-0 text-blue-300" />}
                  {message.sender === "user" && <User size={18} className="mt-1 flex-shrink-0 text-white" />}
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
                <p className="text-xs opacity-60 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="typing-indicator">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-700 bg-gray-800">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="bg-gray-900 border-gray-600 text-white focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            <Button
              onClick={handleSendMessage}
              size="icon"
              className="send-button bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-200"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
