'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function AnimatedGradientBg() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const container = containerRef.current
    canvas.width = container.clientWidth
    canvas.height = container.clientHeight

    let animationFrameId: number

    const colors = [
      { r: 124, g: 58, b: 255 }, // Purple
      { r: 59, g: 130, b: 246 }, // Blue
      { r: 168, g: 85, b: 247 }, // Purple-light
    ]

    let time = 0

    const animate = () => {
      time += 0.001

      // Create gradient with animated colors
      for (let i = 0; i < canvas.height; i++) {
        const progress = i / canvas.height
        const hueShift = Math.sin(time + progress * Math.PI) * 0.5 + 0.5

        const color1 = colors[0]
        const color2 = colors[1]

        const r = Math.round(color1.r * (1 - hueShift) + color2.r * hueShift)
        const g = Math.round(color1.g * (1 - hueShift) + color2.g * hueShift)
        const b = Math.round(color1.b * (1 - hueShift) + color2.b * hueShift)

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
        ctx.fillRect(0, i, canvas.width, 1)
      }

      // Add noise/grain effect
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 10
        data[i] += noise
        data[i + 1] += noise
        data[i + 2] += noise
      }

      ctx.putImageData(imageData, 0, 0)

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    window.addEventListener('resize', handleResize)

    // Append canvas to container
    container.innerHTML = ''
    container.appendChild(canvas)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ pointerEvents: 'none' }}
    />
  )
}
