"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Dynamically import PulsingBorder to prevent server-side rendering issues
const PulsingBorder = dynamic(() => import("@paper-design/shaders-react").then((mod) => mod.PulsingBorder), {
  ssr: false,
  loading: () => <FallbackHalo />,
})

function FallbackHalo() {
  return (
    <div
      style={{
        width: "535px",
        height: "511px",
        borderRadius: "0px",
        background:
          "radial-gradient(circle in oklab, oklab(0% 0 -.0001 / 0%) 25.22%, oklab(30.5% 0.029 -0.184) 43.89%, oklab(0% 0 -.0001 / 0%) 60.04%)",
        animation: "spin 8s linear infinite",
        boxShadow: "0 0 60px rgba(88, 0, 255, 0.4), inset 0 0 60px rgba(190, 238, 255, 0.2)",
      }}
    />
  )
}

export default function PulsingBorderShader(props) {
  const [hasWebGL, setHasWebGL] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("webgl2")
      setHasWebGL(!!gl)
    } catch (e) {
      setHasWebGL(false)
    }
  }, [])

  if (!mounted) {
    return <FallbackHalo />
  }

  if (!hasWebGL) {
    return <FallbackHalo />
  }

  return (
    <div style={{ position: "relative" }}>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <PulsingBorder
        colors={["#5800FF", "#BEECFF", "#E77EDC", "#FF4C3E"]}
        colorBack="#00000000"
        speed={1.5}
        roundness={1}
        thickness={0.05}
        softness={0.1}
        intensity={1}
        spotsPerColor={5}
        spotSize={0.1}
        pulse={0.2}
        smoke={0.5}
        smokeSize={2}
        scale={0.65}
        rotation={0}
        frame={9161408.251009725}
        {...props}
        style={{
          width: "535px",
          height: "511px",
          borderRadius: "0px",
          backgroundImage:
            "radial-gradient(circle in oklab, oklab(0% 0 -.0001 / 0%) 25.22%, oklab(30.5% 0.029 -0.184) 43.89%, oklab(0% 0 -.0001 / 0%) 60.04%)",
        }}
      />
    </div>
  )
}
