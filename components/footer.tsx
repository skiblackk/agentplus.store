import Logo from "./logo"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 sm:py-12 px-4 border-t border-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Agent Plus
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md">
              Agent Plus is revolutionizing business automation with intelligent AI agents that work 24/7. Our mission
              is to make advanced AI technology accessible and affordable for businesses of all sizes, helping them
              scale efficiently and serve customers better.
            </p>
            <p className="text-sm text-purple-400">
              Founded by CEO <span className="font-semibold text-purple-300">Joshua Musumbi</span>
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <a
              href="https://www.instagram.com/agentplus.store?igsh=MW1scHgzaHB4cWl2cw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 hover:border-purple-500/50 transition-all group w-fit"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <span className="text-sm text-purple-300 group-hover:text-purple-200 transition-colors">
                @agentplus.store
              </span>
            </a>
            <p className="text-xs sm:text-sm text-gray-500 mt-4">
              WhatsApp:{" "}
              <a href="https://wa.me/254759256514" className="text-purple-400 hover:text-purple-300 transition-colors">
                +254 759 256514
              </a>
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} Agent Plus. All rights reserved by smartsyncassociates
          </p>
        </div>
      </div>
    </footer>
  )
}
