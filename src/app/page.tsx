import HeroSection from '@/components/sections/HeroSection'
import FeatureGrid from '@/components/sections/FeatureGrid'
import ProblemSolution from '@/components/sections/ProblemSolution'
import HowItWorks from '@/components/sections/HowItWorks'
import BenefitsSection from '@/components/sections/BenefitsSection'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeatureGrid />
      <ProblemSolution />
      <HowItWorks />
      <BenefitsSection />
      {/* Additional sections will be added here */}
    </main>
  )
}
