"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
  className?: string
}

export default function TypewriterEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
  className = "",
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleTyping = () => {
      const currentWord = words[currentWordIndex]

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1))
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1))
      }

      // Determine the delay for the next update
      let delay = isDeleting ? deletingSpeed : typingSpeed

      // If finished typing current word
      if (!isDeleting && currentText === currentWord) {
        delay = delayBetweenWords
        setIsDeleting(true)
      }
      // If finished deleting current word
      else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((currentWordIndex + 1) % words.length)
      }

      timeoutId = setTimeout(handleTyping, delay)
    }

    timeoutId = setTimeout(handleTyping, 100)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}
