'use client'

import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

const problems = [
  {
    title: 'Manual Timesheets & Errors',
    description: 'Tired of inaccurate paper timesheets prone to human error and time theft? Manual processes lead to payroll discrepancies and wasted hours.'
  },
  {
    title: 'Compliance Headaches',
    description: 'Navigating the EU Organisation of Working Time Act complexities is stressful. Ensuring accurate record-keeping is critical, yet often cumbersome.'
  },
  {
    title: '"Buddy Punching" & Fraud',
    description: 'Employees clocking in for colleagues costs businesses significantly. Traditional methods offer little defense against such fraud.'
  },
  {
    title: 'Administrative Burden',
    description: 'From collecting and verifying timesheets to preparing payroll, the overhead diverts valuable resources from your core business.'
  }
]

const solutions = [
  {
    title: 'AI-Powered Accuracy',
    description: 'Facetimer eliminates manual errors and time theft with advanced AI face recognition. Quick, secure scans ensure precise records every time.'
  },
  {
    title: 'Automated EU Compliance',
    description: 'Our system simplifies WTR adherence. Automatically records working hours, breaks, and attendance with auditable reports.'
  },
  {
    title: 'Fraud Prevention Built-In',
    description: 'Biometric verification makes "buddy punching" impossible. Each clock-in is verified by face, providing irrefutable proof of presence.'
  },
  {
    title: 'Streamlined Operations',
    description: 'Free up your time and resources. Facetimer automates record-keeping, generates real-time reports, allowing focus on growth.'
  }
]

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white">
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
            The Challenges of Time Tracking in EU?{' '}
            <span className="text-lavender">Solved.</span>
          </h2>
        </motion.div>

        {/* Split View */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full 
                font-semibold text-sm mb-4">
                The Challenge
              </span>
              <h3 className="text-3xl font-bold text-navy mb-4">
                Common Pain Points for EU Businesses
              </h3>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4 p-5 rounded-xl bg-red-50/50 border border-red-100"
                >
                  <div className="flex-shrink-0 mt-1">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2">{problem.title}</h4>
                    <p className="text-navy/60 text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-mint/10 text-mint rounded-full 
                font-semibold text-sm mb-4">
                The Solution
              </span>
              <h3 className="text-3xl font-bold text-navy mb-4">
                Facetimer: Your Smart, Secure Solution
              </h3>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4 p-5 rounded-xl bg-mint/5 border border-mint/20"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-mint" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2">{solution.title}</h4>
                    <p className="text-navy/60 text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
