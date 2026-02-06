'use client'

import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'Is Facetimer GDPR compliant?',
    answer: 'Yes, Facetimer is fully compliant with GDPR regulations, ensuring robust data privacy and security for all employee data. We prioritize the protection of sensitive information with end-to-end encryption and strict data handling protocols.'
  },
  {
    question: 'Do I need special hardware to use Facetimer?',
    answer: 'No, Facetimer is designed to work with your existing tablets and smartphones, making setup quick, easy, and cost-effective. Simply download our app and get started - no expensive hardware purchases required.'
  },
  {
    question: 'How does Facetimer ensure accuracy and prevent fraud?',
    answer: 'Our AI-powered face recognition technology provides highly accurate identification, significantly reducing errors and eliminating "buddy punching" by verifying each clock-in with a unique biometric scan. The system captures and analyzes facial features in real-time.'
  },
  {
    question: 'Can Facetimer integrate with our existing HR/payroll system?',
    answer: 'Facetimer offers flexible integration options to seamlessly connect with your current HR and payroll systems. We support API integrations and can provide custom solutions for specific system compatibility. Contact our team for detailed integration documentation.'
  },
  {
    question: 'What kind of support is available?',
    answer: 'We offer comprehensive support to ensure your success with Facetimer, including online resources, email support, live chat, and dedicated assistance for enterprise clients. Our support team is available during EU business hours with priority response times for critical issues.'
  },
  {
    question: 'How long does it take to implement Facetimer?',
    answer: 'Most businesses are up and running within 24-48 hours. The setup process is straightforward: install the app on your devices, configure your account settings, add employees, and you\'re ready to go. We provide step-by-step onboarding assistance.'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-ghost">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-navy mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-navy/60">
            Find answers to common questions about Facetimer
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-[20px] overflow-hidden border border-navy/5"
              style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left
                  hover:bg-ghost/50 transition-colors duration-200"
              >
                <span className="text-lg md:text-xl font-semibold text-navy pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-lavender" />
                  ) : (
                    <Plus className="w-6 h-6 text-navy/40" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 pt-2">
                  <p className="text-navy/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-navy/60 mb-4">
            Still have questions?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white text-lavender font-semibold rounded-xl
              border-2 border-lavender hover:bg-lavender hover:text-white 
              transition-all duration-300"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
