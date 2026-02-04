'use client'

import { motion } from 'framer-motion'
import { Shield, Cloud, Smartphone, BarChart3, Lock, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'AI Face Recognition',
    description: 'Advanced facial recognition technology ensures accurate employee identification, eliminating manual errors and preventing "buddy punching".',
    placeholder: '[SCREENSHOT_PLACEHOLDER_1]',
    hasPlaceholder: true
  },
  {
    icon: CheckCircle,
    title: 'Irish Compliance Ready',
    description: 'Automated record-keeping and reporting tools tailored to meet the specific requirements of the Organisation of Working Time Act.',
    placeholder: null,
    hasPlaceholder: false
  },
  {
    icon: Smartphone,
    title: 'No Dedicated Hardware',
    description: 'Leverage your existing tablets and smartphones. Quick and cost-effective deployment without expensive new equipment.',
    placeholder: '[SCREENSHOT_PLACEHOLDER_2]',
    hasPlaceholder: true
  },
  {
    icon: Cloud,
    title: 'Cloud-Based Accessibility',
    description: 'Manage your team and access critical data from anywhere, at any time. Secure cloud platform with real-time insights.',
    placeholder: null,
    hasPlaceholder: false
  },
  {
    icon: BarChart3,
    title: 'Real-time Reporting',
    description: 'Gain instant visibility into attendance, hours worked, and employee activity. Generate comprehensive reports in seconds.',
    placeholder: '[SCREENSHOT_PLACEHOLDER_3]',
    hasPlaceholder: true
  },
  {
    icon: Lock,
    title: 'GDPR Compliant',
    description: 'Your data, and your employees\' privacy, are our top priority. Adheres to strict GDPR regulations for robust data protection.',
    placeholder: null,
    hasPlaceholder: false
  }
]

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-ghost">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-navy mb-6">
            Key Features Designed for Your Business Success
          </h2>
          <p className="text-xl text-navy/60 max-w-2xl mx-auto">
            Discover how Facetimer empowers Irish businesses with intelligent time management
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1 
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[24px] p-8 transition-all duration-300"
              style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)' }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-lavender/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-lavender" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-navy mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-navy/60 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Screenshot Placeholder */}
              {feature.hasPlaceholder && (
                <div className="w-full h-48 bg-gradient-to-br from-navy/5 to-lavender/10 
                  rounded-xl border-2 border-dashed border-navy/20 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-navy/40 text-sm font-medium">{feature.placeholder}</p>
                    <p className="text-navy/20 text-xs mt-1">Screenshot will be inserted here</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
