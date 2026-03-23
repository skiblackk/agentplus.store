'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

interface SplineEmbedProps {
  sceneUrl: string
  title?: string
  className?: string
}

export function SplineEmbed({ sceneUrl, title = '3D Experience', className = '' }: SplineEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showPlaceholder, setShowPlaceholder] = useState(true)
  const [isLowEnd, setIsLowEnd] = useState(false)

  useEffect(() => {
    // Detect low-end devices
    const connection = (navigator as any).connection
    const cores = navigator.hardwareConcurrency || 2

    if (connection?.effectiveType === '4g' && cores < 4) {
      setIsLowEnd(true)
    }

    // Load iframe
    const handleLoad = () => {
      setIsLoaded(true)
      setTimeout(() => setShowPlaceholder(false), 300)
    }

    if (iframeRef.current) {
      iframeRef.current.addEventListener('load', handleLoad)
    }

    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener('load', handleLoad)
      }
    }
  }, [])

  if (isLowEnd) {
    return (
      <div className={`${className} bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-gray-600 font-medium">3D Experience</p>
          <p className="text-sm text-gray-500 mt-1">Optimized for standard devices</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`${className} relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50`}
    >
      {showPlaceholder && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/50 mb-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 3a9 9 0 0 0 0 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.div>
            </div>
            <p className="text-gray-700 font-medium text-sm">Loading 3D Experience...</p>
          </div>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={sceneUrl}
        title={title}
        className="w-full h-full aspect-video"
        style={{ border: 'none' }}
        allow="fullscreen"
        loading="lazy"
      />
    </motion.div>
  )
}
