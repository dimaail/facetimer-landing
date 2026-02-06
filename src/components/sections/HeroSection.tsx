'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedGridBackground from '@/components/animations/AnimatedGridBackground'

const screenshots = [
  { id: 1, title: 'Dashboard Overview', color: 'from-blue-500 to-purple-600' },
  { id: 2, title: 'Time Tracking Interface', color: 'from-purple-500 to-pink-600' },
  { id: 3, title: 'Analytics & Reports', color: 'from-pink-500 to-orange-600' }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-20 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedGridBackground />
      </div>

      <div className="container mx-auto px-6 py-20 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h1 className="text-6xl md:text-7xl font-extrabold text-navy mb-6 leading-tight">
            Time tracking your team won&apos;t hate<br />
            <span className="bg-gradient-to-r from-lavender via-purple-500 to-blue-600 bg-clip-text text-transparent">AI powered compliance</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-navy/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-assisted, privacy-first, built for EU requirements.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-lavender to-purple-600 text-white font-semibold rounded-xl text-lg
                transition-all duration-300 min-w-[220px]"
              style={{ boxShadow: '0 0 20px rgba(157, 123, 255, 0.4)' }}
            >
              Try it free
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent text-lavender font-semibold rounded-xl text-lg
                border-2 border-lavender hover:bg-lavender/10 transition-all duration-300 min-w-[220px]"
            >
              Book a Demo
            </motion.button>
          </motion.div>

          {/* No card required */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12 text-sm text-navy/50"
          >
            No card required
          </motion.p>

          {/* Screenshot Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative w-full aspect-video mb-12 overflow-hidden rounded-[24px]"
            style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
          >
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                initial={{ x: '100%' }}
                animate={{
                  x: index === currentSlide ? '0%' : index < currentSlide ? '-100%' : '100%',
                  opacity: index === currentSlide ? 1 : 0
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.32, 0.72, 0, 1]
                }}
                className={`absolute inset-0 bg-gradient-to-br ${screenshot.color} flex items-center justify-center`}
              >
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📸</div>
                  <h3 className="text-2xl font-bold mb-2">[SCREENSHOT PLACEHOLDER]</h3>
                  <p className="text-lg opacity-90">{screenshot.title}</p>
                </div>
              </motion.div>
            ))}
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 text-sm text-navy/50"
          >
            Trusted by 1,000+ businesses worldwide
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
