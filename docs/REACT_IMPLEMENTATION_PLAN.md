# Facetimer Landing Page - React Implementation Plan

## Project Setup

### 1. Initialize Next.js Project

```bash
npx create-next-app@latest facetimer-landing --typescript --tailwind --app --src-dir
cd facetimer-landing
```

### 2. Install Dependencies

```bash
# Core animation libraries
npm install framer-motion gsap

# UI Components
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card accordion dialog

# Icons & utilities
npm install lucide-react

# Form handling
npm install react-hook-form zod @hookform/resolvers

# Lottie animations (optional)
npm install lottie-react
```

### 3. Tailwind Configuration

**tailwind.config.ts:**

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A192F",
        lavender: "#9D7BFF",
        ghost: "#F8F9FB",
        mint: "#00D084",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 40px rgba(0, 0, 0, 0.05)",
        "lavender-glow": "0 0 20px rgba(157, 123, 255, 0.3)",
      },
      borderRadius: {
        xl: "24px",
      },
    },
  },
};
export default config;
```

---

## Component Implementation

### Hero Section

**src/components/sections/HeroSection.tsx**

```typescript
'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { PlayCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-6xl font-extrabold text-navy mb-6 leading-tight">
            Effortless Time Tracking.<br />
            Irish Compliance. AI-Powered.
          </h1>

          <p className="text-xl text-navy/70 mb-8 max-w-2xl mx-auto">
            Simplify employee time management and ensure regulatory adherence
            with Facetimer's smart, secure solution, designed for Irish businesses.
          </p>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative w-full aspect-video bg-gradient-to-br from-navy to-lavender/80
              rounded-2xl flex items-center justify-center mb-8 shadow-soft"
          >
            <PlayCircle className="w-20 h-20 text-white/80" />
            <p className="absolute bottom-4 text-white/60 text-sm">
              [EDUCATIONAL_VIDEO_PLACEHOLDER]
            </p>
          </motion.div>

          {/* CTAs */}
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-navy hover:bg-navy/90 shadow-lavender-glow"
            >
              Start Your Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-lavender text-lavender hover:bg-lavender/10"
            >
              Book a Demo
            </Button>
          </div>

          <p className="mt-6 text-sm text-navy/50">
            Trusted by 20,000+ businesses worldwide
          </p>
        </motion.div>
      </div>
    </section>
  )
}
```

---

### Feature Grid

**src/components/sections/FeatureGrid.tsx**

```typescript
'use client'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Shield, Cloud, Smartphone, BarChart3, Lock, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'AI Face Recognition',
    description: 'Advanced facial recognition ensures accurate employee identification.',
    placeholder: '[SCREENSHOT_PLACEHOLDER_1]'
  },
  {
    icon: CheckCircle,
    title: 'Irish Compliance Ready',
    description: 'Automated record-keeping tailored for WTR requirements.',
    placeholder: null
  },
  {
    icon: Smartphone,
    title: 'No Dedicated Hardware',
    description: 'Works with existing tablets and smartphones.',
    placeholder: '[SCREENSHOT_PLACEHOLDER_2]'
  },
  {
    icon: Cloud,
title: 'Cloud-Based Accessibility',
    description: 'Manage your team from anywhere, anytime.',
    placeholder: null
  },
  {
    icon: BarChart3,
    title: 'Real-time Reporting',
    description: 'Instant insights into attendance and hours worked.',
    placeholder: '[SCREENSHOT_PLACEHOLDER_3]'
  },
  {
    icon: Lock,
    title: 'GDPR Compliant',
    description: 'Robust data protection meeting EU standards.',
    placeholder: null
  }
]

export default function FeatureGrid() {
  return (
    <section className="py-20 bg-ghost">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-navy mb-4">
            Key Features Designed for Your Business Success
          </h2>
          <p className="text-lg text-navy/60">
            Discover how Facetimer empowers Irish businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 shadow-soft rounded-xl border-0 hover:-translate-y-2
                transition-transform duration-300">
                <feature.icon className="w-12 h-12 text-lavender mb-4" />
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-navy/60 mb-4">{feature.description}</p>

                {feature.placeholder && (
                  <div className="w-full h-40 bg-gradient-to-br from-navy/5 to-lavender/10
                    rounded-lg border-2 border-dashed border-navy/20 flex items-center justify-center">
                    <span className="text-navy/40 text-sm">{feature.placeholder}</span>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

### How It Works (Sticky Scroll)

**src/components/sections/HowItWorks.tsx**

```typescript
'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const steps = [
  {
    number: 1,
    title: 'Employee Clocks In/Out',
    description: 'A quick, secure face scan records clock-in time instantly.',
    placeholder: '[SCREENSHOT_PLACEHOLDER_4]'
  },
  {
    number: 2,
    title: 'Data Securely Recorded',
    description: 'Attendance data immediately uploaded to your cloud dashboard.',
    placeholder: null
  },
  {
    number: 3,
    title: 'Managers Access Reports',
    description: 'View real-time attendance and generate detailed reports from any device.',
    placeholder: '[SCREENSHOT_PLACEHOLDER_5]'
  }
]

export default function HowItWorks() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-navy mb-4">
            See Facetimer in Action
          </h2>
          <p className="text-lg text-navy/60">Simple, Smart, Secure.</p>
        </motion.div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex items-center gap-12 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-lavender/10 text-lavender
                  rounded-full font-bold mb-4">
                  Step {step.number}
                </div>
                <h3 className="text-3xl font-bold text-navy mb-4">{step.title}</h3>
                <p className="text-lg text-navy/60">{step.description}</p>
              </div>

              <div className="flex-1">
                {step.placeholder ? (
                  <div className="w-full h-64 bg-gradient-to-br from-navy/5 to-lavender/10
                    rounded-xl border-2 border-dashed border-navy/20 flex items-center justify-center">
                    <span className="text-navy/50 font-medium">{step.placeholder}</span>
                  </div>
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-lavender/20 to-mint/20
                    rounded-xl flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-20 h-20 bg-white rounded-full shadow-soft"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

### FAQ Accordion

**src/components/sections/FAQAccordion.tsx**

```typescript
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Is Facetimer GDPR compliant?',
    a: 'Yes, Facetimer is fully compliant with GDPR regulations, ensuring robust data privacy and security for all employee data.'
  },
  {
    q: 'Do I need special hardware to use Facetimer?',
    a: 'No, Facetimer works with your existing tablets and smartphones, making setup quick and cost-effective.'
  },
  {
    q: 'How does Facetimer ensure accuracy and prevent fraud?',
    a: 'Our AI-powered face recognition provides highly accurate identification, eliminating "buddy punching" through biometric verification.'
  },
  {
    q: 'Can Facetimer integrate with our existing HR/payroll system?',
    a: 'Yes, Facetimer offers flexible integration options. Contact us for specific system compatibility details.'
  },
  {
    q: 'What kind of support is available?',
    a: 'We offer comprehensive support including online resources, email support, and dedicated assistance for enterprise clients.'
  }
]

export default function FAQAccordion() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-5xl font-bold text-navy text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-navy/60 mb-12">
          Find answers to common questions about Facetimer
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}
              className="border border-navy/10 rounded-xl px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy hover:text-lavender">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-navy/70">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
```

---

## Main Page Assembly

**src/app/page.tsx**

```typescript
import HeroSection from '@/components/sections/HeroSection'
import FeatureGrid from '@/components/sections/FeatureGrid'
import HowItWorks from '@/components/sections/HowItWorks'
import FAQAccordion from '@/components/sections/FAQAccordion'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeatureGrid />
      <HowItWorks />
      <FAQAccordion />
      {/* Add other sections: ProblemSolution, Benefits, Testimonials, FinalCTA */}
    </main>
  )
}
```

---

## Animation Utilities

**src/lib/animations.ts**

```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
};
```

---

## Next Steps

1. **Complete remaining sections:** ProblemSolution, BenefitsSection, TestimonialCarousel, FinalCTA
2. **Add Navbar & Footer** components
3. **Implement logo marquee** animation
4. **Add Lottie face scan** animation to hero
5. **Optimize for mobile** responsiveness
6. **SEO metadata** in layout.tsx
7. **Performance testing** with Lighthouse
8. **Accessibility audit**

## Deployment

```bash
npm run build
npm run start
# or deploy to Vercel
vercel --prod
```

---

**Total estimated development time:** 8-10 days  
**Tech stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Shadcn UI
