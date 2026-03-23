"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Clock, Sparkles, Loader2, AlertCircle, Calendar } from "lucide-react"

export default function AgentDemo() {
  const [timeRemaining, setTimeRemaining] = useState(420) // 7 minutes in seconds
  const [isExpired, setIsExpired] = useState(false)
  const [showPaywall, setShowPaywall] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [confirmLoad, setConfirmLoad] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)

  const iframeRef = useRef<HTMLIFrameElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!confirmLoad || !iframeLoaded || timeRemaining <= 0 || isExpired) return

    startTimeRef.current = Date.now()
    const initialTime = timeRemaining

    const updateTimer = () => {
      if (!startTimeRef.current) return

      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000)
      const newTime = Math.max(0, initialTime - elapsed)

      setTimeRemaining(newTime)

      if (newTime <= 0) {
        setIsExpired(true)
        setShowPaywall(true)
        if (timerRef.current) {
          clearInterval(timerRef.current)
        }
      }
    }

    timerRef.current = setInterval(updateTimer, 1000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [confirmLoad, iframeLoaded, isExpired])

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      if (iframeRef.current) {
        try {
          iframeRef.current.src = "about:blank"
          iframeRef.current.remove()
        } catch (e) {
          // Silently handle cleanup errors
        }
      }
    }
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleStartDemo = useCallback(() => {
    setHasStarted(true)
  }, [])

  const handleConfirmLoad = useCallback(() => {
    setConfirmLoad(true)
    setIsLoading(true)
    setLoadError(false)
  }, [])

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false)
    setIframeLoaded(true)
  }, [])

  const handleIframeError = useCallback(() => {
    setIsLoading(false)
    setLoadError(true)
    // Clean up iframe on error
    if (iframeRef.current) {
      try {
        iframeRef.current.src = "about:blank"
      } catch (e) {
        // Silently handle error
      }
    }
  }, [])

  const handleUpgrade = useCallback((type: "hourly" | "package") => {
    const message =
      type === "hourly"
        ? "Hi, I am interested in the 1-hour AI Agent Plus access for $15"
        : "Hi, I am interested in the AI Agent Plus packages"
    const whatsappUrl = `https://wa.me/254759256514?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }, [])

  const handleBookDemo = useCallback(() => {
    const message = "Hi, I would like to book a personalized demo of Agent Plus"
    const whatsappUrl = `https://wa.me/254759256514?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }, [])

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
            <span className="text-xs sm:text-sm text-purple-300">Try It Free</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Experience Agent Plus in Action
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Test our AI agent for free for 7 minutes. See how it can transform your workflow.
          </p>
        </div>

        {!hasStarted ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] sm:min-h-[500px] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20 p-6 sm:p-8">
            <div className="text-center space-y-4 sm:space-y-6 max-w-2xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white px-4">Ready to Try Agent Plus?</h3>
              <p className="text-gray-400 text-sm sm:text-base px-4">
                Get 7 minutes of free access to experience the power of AI automation
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6">
                <Button
                  onClick={handleStartDemo}
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Try Live Demo
                </Button>
                <Button
                  onClick={handleBookDemo}
                  size="lg"
                  variant="outline"
                  className="border-purple-500/50 text-white hover:bg-purple-500/20 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto bg-transparent"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        ) : !confirmLoad ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] sm:min-h-[500px] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20 p-6 sm:p-8">
            <div className="text-center space-y-4 sm:space-y-6 max-w-2xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-yellow-500/20 rounded-full flex items-center justify-center border-2 border-yellow-500/50">
                <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white px-4">Before You Start</h3>
              <div className="text-left space-y-3 bg-black/30 p-6 rounded-lg border border-purple-500/20">
                <p className="text-gray-300 text-sm sm:text-base">
                  <strong className="text-white">System Requirements:</strong>
                </p>
                <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                  <li>Stable internet connection required</li>
                  <li>Works best on desktop/laptop browsers</li>
                  <li>May use significant system resources</li>
                  <li>Close other tabs for best performance</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6">
                <Button
                  onClick={handleConfirmLoad}
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                >
                  Load Demo Now
                </Button>
                <Button
                  onClick={handleBookDemo}
                  size="lg"
                  variant="outline"
                  className="border-purple-500/50 text-white hover:bg-purple-500/20 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto bg-transparent"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Instead
                </Button>
              </div>

              <button
                onClick={() => setHasStarted(false)}
                className="text-gray-400 hover:text-white text-sm underline mt-4"
              >
                Go Back
              </button>
            </div>
          </div>
        ) : (
          <div className="relative">
            {iframeLoaded && !isExpired && (
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                <span
                  className={`text-base sm:text-lg font-mono ${timeRemaining < 60 ? "text-red-400" : "text-purple-400"}`}
                >
                  {formatTime(timeRemaining)} remaining
                </span>
              </div>
            )}

            <div className="relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl border border-purple-500/20 z-30 min-h-[500px]">
                  <div className="text-center space-y-4">
                    <Loader2 className="w-12 h-12 text-purple-400 animate-spin mx-auto" />
                    <p className="text-white text-lg">Loading Agent Plus...</p>
                    <p className="text-gray-400 text-sm">This may take up to 30 seconds</p>
                    <p className="text-gray-500 text-xs">Please be patient, the demo is loading</p>
                  </div>
                </div>
              )}

              {loadError && (
                <div className="flex flex-col items-center justify-center min-h-[500px] sm:min-h-[600px] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20 p-6">
                  <div className="text-center space-y-4 max-w-md">
                    <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-8 h-8 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Unable to Load Demo</h3>
                    <p className="text-gray-400">
                      The demo couldn't load. This might be due to your browser, internet connection, or device
                      limitations.
                    </p>
                    <div className="bg-black/30 p-4 rounded-lg border border-purple-500/20 text-left">
                      <p className="text-sm text-gray-300 mb-2">
                        <strong>Try these solutions:</strong>
                      </p>
                      <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                        <li>Use a desktop browser (Chrome, Firefox, Safari)</li>
                        <li>Close other tabs and applications</li>
                        <li>Check your internet connection</li>
                        <li>Try again in a few minutes</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3 justify-center mt-4">
                      <Button
                        onClick={handleBookDemo}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book a Personalized Demo
                      </Button>
                      <Button
                        onClick={() => {
                          setConfirmLoad(false)
                          setHasStarted(false)
                          setLoadError(false)
                        }}
                        variant="outline"
                        className="border-purple-500/50 text-white hover:bg-purple-500/20 w-full"
                      >
                        Go Back
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {!loadError && confirmLoad && (
                <div
                  className={`relative rounded-2xl overflow-hidden border border-purple-500/20 transition-opacity duration-300 ${
                    isExpired ? "opacity-50 pointer-events-none" : ""
                  } ${isLoading ? "opacity-0" : "opacity-100"}`}
                  style={{ minHeight: "500px" }}
                >
                  <iframe
                    ref={iframeRef}
                    src="https://app.relevanceai.com/agents/d7b62b/62f51980-ca03-4f9d-85ef-fad157ebc585/95470377-c219-4678-94ee-4d28244209f1/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=true&hide_description=false"
                    className="w-full h-[500px] sm:h-[600px]"
                    title="Agent Plus Demo"
                    onLoad={handleIframeLoad}
                    onError={handleIframeError}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    allow="clipboard-write"
                    loading="lazy"
                    style={{ border: "none" }}
                  />
                  {iframeLoaded && !loadError && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1.5 rounded-lg shadow-lg border border-purple-400/30 pointer-events-none z-10">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3 text-white" />
                        <span className="text-white font-semibold text-xs">Agent Plus AI</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {isExpired && !loadError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/90 rounded-2xl z-20 backdrop-blur-sm">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Free Trial Ended</h3>
                    <p className="text-gray-400">Continue using Agent Plus with our flexible options</p>
                    <Button
                      onClick={() => setShowPaywall(true)}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 mt-4"
                    >
                      View Options
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <Dialog open={showPaywall} onOpenChange={setShowPaywall}>
          <DialogContent className="bg-gray-900 border-purple-500/20 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl">Continue with Agent Plus</DialogTitle>
              <DialogDescription className="text-gray-400">
                Your free trial has ended. Choose an option to continue:
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-6">
              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">1 Hour Access</h4>
                    <p className="text-gray-400 text-sm">Perfect for quick tasks and testing</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">$15</div>
                    <div className="text-sm text-gray-400">one-time</div>
                  </div>
                </div>
                <Button
                  onClick={() => handleUpgrade("hourly")}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  Get 1 Hour Access
                </Button>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white mb-2">Get a Package</h4>
                  <p className="text-gray-400 text-sm">Best value with unlimited access and premium features</p>
                </div>
                <Button
                  onClick={() => handleUpgrade("package")}
                  variant="outline"
                  className="w-full border-purple-500/50 text-white hover:bg-purple-500/20"
                >
                  View Packages
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
