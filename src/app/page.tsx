import HeroSection from '@/components/sections/HeroSection'
import FeatureGrid from '@/components/sections/FeatureGrid'
import ProblemSolution from '@/components/sections/ProblemSolution'
import HowItWorks from '@/components/sections/HowItWorks'
import BenefitsSection from '@/components/sections/BenefitsSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeatureGrid />
      <ProblemSolution />
      <HowItWorks />
      <BenefitsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
