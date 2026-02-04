'use client'

import { motion } from 'framer-motion'
import { Scan, Upload, BarChart } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: Scan,
    title: 'Employee Clocks In/Out',
    description: 'Your team simply approaches a designated tablet or smartphone. A quick, secure face scan records their clock-in or clock-out time instantly.',
    placeholder: '[SCREENSHOT_PLACEHOLDER_4]',
    hasPlaceholder: true
  },
  {
    number: 2,
    icon: Upload,
    title: 'Data Securely Recorded',
    description: 'All attendance data is immediately and securely uploaded to your cloud dashboard. No manual entry, no delays, no errors.',
    placeholder: null,
    hasPlaceholder: false
  },
  {
    number: 3,
    icon: BarChart,
    title: 'Managers Access Real-time Reports',
    description: 'From any device, managers can view real-time attendance, generate detailed reports, and monitor compliance, empowering informed decision-making.',
    placeholder: '[SCREENSHOT_PLACEHOLDER_5]',
    hasPlaceholder: true
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-ghost">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-navy mb-6">
            See Facetimer in Action
          </h2>
          <p className="text-xl text-navy/60 max-w-2xl mx-auto">
            Simple, Smart, Secure — Experience the effortless workflow
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Step Number Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: index * 0.2 + 0.2 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full 
                    bg-lavender/10 border-2 border-lavender mb-6"
                >
                  <span className="text-2xl font-bold text-lavender">
                    {step.number}
                  </span>
                </motion.div>

                {/* Icon */}
                <div className="mb-4">
                  <step.icon className="w-12 h-12 text-lavender mx-auto lg:mx-0" />
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-navy/60 leading-relaxed max-w-md mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full">
                {step.hasPlaceholder ? (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-full h-80 bg-gradient-to-br from-navy/5 to-lavender/10 
                      rounded-[24px] border-2 border-dashed border-navy/20 flex items-center justify-center
                      overflow-hidden relative group"
                    style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="text-center relative z-10">
                      <p className="text-navy/50 font-semibold text-lg mb-2">
                        {step.placeholder}
                      </p>
                      <p className="text-navy/30 text-sm">
                        Actual screenshot will be inserted here
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="w-full h-80 bg-gradient-to-br from-lavender/20 via-mint/10 to-navy/5 
                      rounded-[24px] flex items-center justify-center relative overflow-hidden group"
                    style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)' }}
                  >
                    {/* Animated Icon */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className="relative"
                    >
                      <div className="w-32 h-32 rounded-full bg-white/80 backdrop-blur-sm 
                        flex items-center justify-center"
                        style={{ boxShadow: '0 0 20px rgba(157, 123, 255, 0.3)' }}
                      >
                        <step.icon className="w-16 h-16 text-lavender" />
                      </div>
                    </motion.div>

                    {/* Decorative Circles */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute w-48 h-48 rounded-full border-2 border-lavender/30"
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
