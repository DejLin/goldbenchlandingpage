import { Hero } from "@/components/landing/hero"
import { VideoShowcase } from "@/components/landing/video-showcase"
import { Friction } from "@/components/landing/friction"
import { RevenueEngine } from "@/components/landing/revenue-engine"
import { WorkflowDemo } from "@/components/landing/workflow-demo"
import { MidCTA } from "@/components/landing/mid-cta"
import { UseCases } from "@/components/landing/use-cases"
import { Security } from "@/components/landing/security"
import { FinalCTA } from "@/components/landing/final-cta"
import { ScrollToTop } from "@/components/landing/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Hero />
      <VideoShowcase />
      <Friction />
      <RevenueEngine />
      <WorkflowDemo />
      <MidCTA />
      <UseCases />
      <Security />
      <FinalCTA />
      <ScrollToTop />
    </main>
  )
}
