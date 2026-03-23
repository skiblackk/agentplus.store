import { Button } from "@/components/ui/button"
import HeroShaderWrapper from "./components/hero-shader-wrapper"
import { ArrowRight, Sparkles, Instagram } from "lucide-react"
import Logo from "./components/logo"

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

      <header className="relative z-20 container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Logo className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Agent Plus
            </span>
          </div>
          <a
            href="https://www.instagram.com/agentplus.store?igsh=MW1scHgzaHB4cWl2cw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 hover:border-purple-500/50 transition-all group"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
            <span className="text-sm text-purple-300 group-hover:text-purple-200 transition-colors hidden sm:inline">
              Follow Us
            </span>
          </a>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="space-y-6 sm:space-y-8 lg:pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs sm:text-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              AI-Powered Personal Assistant
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                Your personal{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Agent Plus +
                </span>
              </h1>

              <p className="text-base sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Experience the future of productivity with an AI agent that understands you, learns from you, and works
                tirelessly to make your life easier.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full group w-full sm:w-auto"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-6 sm:pt-8 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available 24/7
              </div>
              <div>No setup required</div>
              <div>Enterprise ready</div>
            </div>
          </div>

          {/* Right side - Animation */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative scale-75 sm:scale-90 lg:scale-100">
              {/* Glow effect behind the shader */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl scale-110" />

              {/* Main shader component */}
              <div className="relative">
                <HeroShaderWrapper />
              </div>

              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="absolute top-1/3 -left-6 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute bottom-1/4 -right-8 w-4 h-4 bg-pink-400 rounded-full animate-bounce"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  )
}
