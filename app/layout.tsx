import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AgentPlus.ai - AI Agents That Work 24/7 for Your Business",
  description:
    "Get AI agents that work for your business 24/7. WhatsApp Business Agents, Website Chatbots, Customer Support AI, and more. Simple, non-technical solutions for small businesses.",
  keywords: [
    "AI agents",
    "business automation",
    "WhatsApp chatbot",
    "customer support AI",
    "website chatbot",
    "24/7 business assistant",
    "AI solutions Kenya",
    "business AI",
  ],
  openGraph: {
    title: "AgentPlus.ai - AI Agents That Work 24/7",
    description: "AI agents that work for your business around the clock. Set it up once, watch it work forever.",
    url: "https://agentplus.ai",
    siteName: "AgentPlus.ai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentPlus.ai - AI Agents That Work 24/7",
    description: "AI agents that work for your business around the clock.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Agent Plus",
              alternateName: "SmartSync Associates",
              url: "https://agentplus.store",
              logo: "https://agentplus.store/agentplus.logo.jpg",
              description: "AI agent solutions for business automation and transformation",
              founder: {
                "@type": "Person",
                name: "Joshua Musumbi",
                jobTitle: "CEO and Founder",
                affiliation: [
                  {
                    "@type": "Organization",
                    name: "Agent Plus",
                  },
                  {
                    "@type": "Organization",
                    name: "SmartSync Associates",
                  },
                ],
              },
              sameAs: ["https://www.instagram.com/agentplus.store"],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+254759256514",
                contactType: "Customer Service",
                availableLanguage: "English",
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "Starter Package",
                  price: "50",
                  priceCurrency: "USD",
                  description: "Perfect for small businesses starting with AI automation",
                },
                {
                  "@type": "Offer",
                  name: "Professional Package",
                  price: "299",
                  priceCurrency: "USD",
                  description: "Ideal for growing businesses scaling their operations",
                },
                {
                  "@type": "Offer",
                  name: "Premium Package",
                  price: "1000",
                  priceCurrency: "USD",
                  description: "Enterprise-grade AI solutions with custom training",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Joshua Musumbi",
              jobTitle: "CEO and Founder",
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Agent Plus",
                  url: "https://agentplus.store",
                },
                {
                  "@type": "Organization",
                  name: "SmartSync Associates",
                },
              ],
              description:
                "CEO and Founder of Agent Plus and SmartSync Associates, specializing in AI agent solutions and business automation",
              url: "https://agentplus.store",
              sameAs: ["https://www.instagram.com/agentplus.store"],
            }),
          }}
        />
      </head>
      <body>
        <Suspense fallback={null}>{children}</Suspense>
        <SpeedInsights />
      </body>
    </html>
  )
}
