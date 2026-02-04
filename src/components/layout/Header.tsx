'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-soft' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-2xl font-bold text-navy"
            >
              Facetimer
              <span className="text-lavender">.</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  className={`font-medium transition-colors relative group ${
                    isScrolled ? 'text-navy/70 hover:text-navy' : 'text-navy/70 hover:text-navy'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lavender 
                    group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 text-navy font-semibold hover:text-lavender transition-colors"
              >
                Sign In
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-navy text-white font-semibold rounded-xl
                  hover:bg-lavender transition-colors duration-300"
                style={{ boxShadow: '0 0 20px rgba(157, 123, 255, 0.2)' }}
              >
                Start Free Trial
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-navy hover:text-lavender transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-20 left-0 right-0 z-40 md:hidden overflow-hidden
          bg-white/98 backdrop-blur-md border-b border-navy/10"
      >
        <div className="container mx-auto px-6 py-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: isMobileMenuOpen ? 0 : -20,
                  opacity: isMobileMenuOpen ? 1 : 0 
                }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-navy/70 hover:text-lavender
                  transition-colors py-2 border-b border-navy/5"
              >
                {link.name}
              </motion.a>
            ))}
            
            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full px-6 py-3 text-navy font-semibold border-2 border-navy/20
                  rounded-xl hover:bg-navy/5 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full px-6 py-3 bg-navy text-white font-semibold rounded-xl
                  hover:bg-lavender transition-colors"
              >
                Start Free Trial
              </button>
            </div>
          </nav>
        </div>
      </motion.div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  )
}
