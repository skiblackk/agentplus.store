'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactNode } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface GSAPScrollTriggerProps {
  children: ReactNode
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scale' | 'slideDown'
  duration?: number
  delay?: number
  stagger?: number
  className?: string
}

export function GSAPScrollTrigger({
  children,
  animation = 'fadeInUp',
  duration = 0.8,
  delay = 0,
  stagger = 0,
  className = '',
}: GSAPScrollTriggerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.querySelectorAll('[data-animate]')
    if (elements.length === 0) return

    const animationConfig: Record<string, { from: any; to: any }> = {
      fadeInUp: {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
      },
      fadeInLeft: {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0 },
      },
      fadeInRight: {
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0 },
      },
      scale: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
      },
      slideDown: {
        from: { opacity: 0, y: -30 },
        to: { opacity: 1, y: 0 },
      },
    }

    const config = animationConfig[animation]

    gsap.set(elements, config.from)

    elements.forEach((element, index) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none',
          markers: false,
        },
        ...config.to,
        duration,
        delay: delay + index * stagger,
        ease: 'power2.out',
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [animation, duration, delay, stagger])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
