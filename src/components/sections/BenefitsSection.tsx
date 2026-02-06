'use client'

import { motion } from 'framer-motion'
import { Shield, TrendingUp, DollarSign, Zap, Users } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Reduced Compliance Risk',
    description: 'Effortlessly meet the stringent requirements of the Organisation of Working Time Act. Automated, auditable records protect your business from potential penalties.'
  },
  {
    icon: TrendingUp,
    title: 'Increased Accuracy & Fraud Prevention',
    description: 'Eliminate costly errors and "buddy punching" with AI-powered face recognition. Every minute worked is accurately recorded and verified.'
  },
  {
    icon: DollarSign,
    title: 'Significant Cost Savings',
    description: 'Say goodbye to expensive hardware installations and reduce administrative overhead. Leverage existing devices for cost-effective time management.'
  },
  {
    icon: Zap,
    title: 'Improved Operational Productivity',
    description: 'Free up management and HR teams from tedious manual tasks. With automated processes and real-time data, focus shifts to strategic growth.'
  },
  {
    icon: Users,
    title: 'Enhanced Transparency & Fairness',
    description: 'Provide clear, consistent, and fair timekeeping for all employees. Transparent records foster trust and improve employee relations.'
  }
]

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-lavender/10 to-transparent 
        rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-mint/10 to-transparent 
        rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-navy mb-6">
            Why Facetimer is the Right Choice<br />
            <span className="text-lavender">for Your EU Business</span>
          </h2>
          <p className="text-xl text-navy/60 max-w-3xl mx-auto">
            Unlock efficiency, ensure compliance, and boost productivity with a solution 
            tailored for the EU market
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.slice(0, 3).map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full p-8 rounded-[24px] bg-gradient-to-br from-white to-ghost
                border border-navy/5 transition-all duration-300 group-hover:border-lavender/30"
                style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}
              >
                <div className="w-14 h-14 rounded-xl bg-lavender/10 flex items-center justify-center mb-6
                  group-hover:bg-lavender/20 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-lavender" />
                </div>
                
                <h3 className="text-2xl font-bold text-navy mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-navy/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Last Row - 2 items centered */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.slice(3).map((benefit, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 3) * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full p-8 rounded-[24px] bg-gradient-to-br from-white to-ghost
                border border-navy/5 transition-all duration-300 group-hover:border-lavender/30"
                style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}
              >
                <div className="w-14 h-14 rounded-xl bg-lavender/10 flex items-center justify-center mb-6
                  group-hover:bg-lavender/20 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-lavender" />
                </div>
                
                <h3 className="text-2xl font-bold text-navy mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-navy/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
