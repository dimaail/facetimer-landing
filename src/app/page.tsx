import HeroSection from '@/components/sections/HeroSection'
import FeatureGrid from '@/components/sections/FeatureGrid'
import ProblemSolution from '@/components/sections/ProblemSolution'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeatureGrid />
      <ProblemSolution />
      {/* Additional sections will be added here */}
    </main>
  )
}
