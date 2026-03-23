"use client"

import dynamic from "next/dynamic"

const PulsingBorderShader = dynamic(() => import("./pulsing-border-shader"), {
  ssr: false,
  loading: () => (
    <div className="w-[535px] h-[511px] bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg animate-pulse" />
  ),
})

export default function HeroShaderWrapper() {
  return <PulsingBorderShader />
}
