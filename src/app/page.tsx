import HeroSection from '@/components/sections/HeroSection'
import FeatureGrid from '@/components/sections/FeatureGrid'
import ProblemSolution from '@/components/sections/ProblemSolution'
import HowItWorks from '@/components/sections/HowItWorks'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeatureGrid />
      <ProblemSolution />
      <HowItWorks />
      {/* Additional sections will be added here */}
    </main>
  )
}
