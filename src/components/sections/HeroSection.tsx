'use client'

import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h1 className="text-6xl md:text-7xl font-extrabold text-navy mb-6 leading-tight">
            Effortless Time Tracking.<br />
            <span className="text-navy">Irish Compliance.</span>{' '}
            <span className="text-lavender">AI-Powered.</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-navy/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Simplify employee time management and ensure regulatory adherence 
            with Facetimer's smart, secure solution, designed for Irish businesses.
          </p>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative w-full aspect-video bg-gradient-to-br from-navy to-lavender/80 
              rounded-[24px] flex items-center justify-center mb-12 overflow-hidden group cursor-pointer"
            style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-lavender/20 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <PlayCircle className="w-20 h-20 text-white/90 mx-auto mb-4" />
              </motion.div>
              <p className="text-white text-lg font-semibold mb-2">
                [EDUCATIONAL_VIDEO_PLACEHOLDER]
              </p>
              <p className="text-white/70 text-sm">
                60-90 second product demo video
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-navy text-white font-semibold rounded-xl text-lg
                transition-all duration-300 min-w-[220px]"
              style={{ boxShadow: '0 0 20px rgba(157, 123, 255, 0.3)' }}
            >
              Start Your Free Trial
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

          {/* Social Proof */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 text-sm text-navy/50"
          >
            Trusted by 20,000+ businesses worldwide
          </motion.p>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-lavender/10 to-transparent 
        rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-mint/10 to-transparent 
        rounded-full blur-3xl opacity-50 pointer-events-none" />
    </section>
  )
}
