"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function Featured_05() {
  const whatsappNumber = '254759256514'
  
  const sendToWhatsApp = () => {
    const message = encodeURIComponent('Hi! I am ready to transform my business with AgentPlus.')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section className="relative w-full mx-auto overflow-hidden rounded-3xl bg-black border border-white/10 shadow-2xl px-6 py-16 md:px-16 md:py-24 my-20">
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row relative z-10">
        <div className="max-w-xl text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-white underline decoration-white/30 underline-offset-8">Transform</span> Your Business?
          </h2>
          <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
            Join hundreds of forward-thinking businesses using AgentPlus to automate customer interactions, capture leads, and boost sales 24/7.
          </p>
          <Button 
            onClick={sendToWhatsApp}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-6 text-base font-semibold text-black transition hover:bg-neutral-200 shadow-xl"
          >
            Start Your Free Trial <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        <div className="relative h-[300px] md:h-[400px] w-full max-w-xl">
          <Globe className="absolute -bottom-20 -right-40 scale-150 md:scale-110 lg:scale-150" />
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
    </section>
  );
}

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.1, 0.1, 0.1],
  markerColor: [1, 1, 1],
  glowColor: [0.2, 0.2, 0.2],
  markers: [
    { location: [1.2921, 36.8219], size: 0.1 }, // Nairobi
    { location: [40.7128, -74.006], size: 0.08 }, // NY
    { location: [51.5074, -0.1278], size: 0.07 }, // London
    { location: [25.2048, 55.2708], size: 0.09 }, // Dubai
    { location: [1.3521, 103.8198], size: 0.08 }, // Singapore
    { location: [-33.8688, 151.2093], size: 0.07 }, // Sydney
    { location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
    { location: [48.8566, 2.3522], size: 0.06 }, // Paris
    { location: [37.7749, -122.4194], size: 0.1 }, // SF
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r],
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    })

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1"
    })
    return () => globe.destroy()
  }, [])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
