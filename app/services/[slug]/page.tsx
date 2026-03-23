'use client'

import { getServiceBySlug } from '@/lib/services-data'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import ServiceDetailClient from './client'

export default function ServicePage() {
  const params = useParams()
  const [service, setService] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const slug = params.slug as string
      const foundService = getServiceBySlug(slug)
      if (foundService) {
        setService(foundService)
        setLoading(false)
      } else {
        setLoading(false)
      }
    } catch (error) {
      console.error('[v0] Error loading service:', error)
      setLoading(false)
    }
  }, [params.slug])

  if (!service && loading) {
    return (
      <main className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-foreground">Loading...</div>
      </main>
    )
  }

  if (!service) {
    // Still render the page structure even if service isn't loaded yet
    // It will load from getServiceBySlug once component mounts
    return (
      <main className="bg-background min-h-screen">
        <nav className="sticky top-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-xl glass-effect">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img
                  src="/agentpluslogo.jpg"
                  alt=""
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <span className="text-lg font-bold text-foreground">AgentPlus</span>
              </Link>
              <Link href="/#features">
                <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Services
                </Button>
              </Link>
            </div>
          </div>
        </nav>
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <div className="text-foreground">Loading service details...</div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-background min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-xl glass-effect">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img
                src="/agentpluslogo.jpg"
                alt=""
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-lg font-bold text-foreground">AgentPlus</span>
            </Link>
            <Link href="/#features">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <ServiceDetailClient service={service} />
    </main>
  )
}
