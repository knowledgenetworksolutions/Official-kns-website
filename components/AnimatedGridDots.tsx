'use client'

import { useEffect, useState } from 'react'

export default function AnimatedGridDots() {
  const [dots, setDots] = useState<{ left: string; top: string; delay: string; duration: string }[]>([])

  useEffect(() => {
    // Generate dots only on the client to avoid hydration mismatch
    const newDots = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${2 + Math.random() * 3}s`
    }))
    setDots(newDots)
  }, [])

  return (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-mauve-light rounded-full animate-pulse"
            style={{
              left: dot.left,
              top: dot.top,
              animationDelay: dot.delay,
              animationDuration: dot.duration
            }}
          />
        ))}
      </div>
    </div>
  )
}
