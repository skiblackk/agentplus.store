import Image from "next/image"

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return <Image src="/agentpluslogo.jpg" alt="" width={40} height={40} className={className} priority />
}
