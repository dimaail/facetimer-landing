'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const features = [
  'No credit card required',
  'Cancel anytime',
  'Get started in minutes',
  'Full feature access'
]

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-lavender/80" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mint/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Ready to Modernize Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender via-mint to-lavender">
              Time Tracking?
            </span>
          </h2>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Start your free trial today and experience the future of employee management
            — compliant, efficient, and secure.
          </p>

          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/90"
              >
                <div className="w-5 h-5 rounded-full bg-mint/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-mint" />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(157, 123, 255, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 bg-white text-navy font-bold rounded-xl text-lg
                transition-all duration-300 min-w-[260px] flex items-center justify-center gap-3"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-transparent text-white font-bold rounded-xl text-lg
                border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm
                transition-all duration-300 min-w-[260px]"
            >
              Book a Demo
            </motion.button>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 pt-12 border-t border-white/10"
          >
            <p className="text-white/60 text-sm mb-4">
              Trusted by businesses across Ireland and the EU
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {/* Logo placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center
                    backdrop-blur-sm"
                >
                  <span className="text-white/40 text-xs">Logo {i}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
