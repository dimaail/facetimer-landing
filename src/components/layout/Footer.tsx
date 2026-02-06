'use client'

import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Case Studies', href: '#' },
    { name: 'Integrations', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
  legal: [
    { name: 'GDPR Compliance', href: '#' },
    { name: 'Data Protection', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'EU WTR Info', href: '#' },
  ]
}

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Facetimer</h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              AI-powered time tracking solution designed for EU businesses. 
              Ensure compliance, eliminate fraud, and streamline operations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lavender flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/60">
                  Brussels, EU
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-lavender flex-shrink-0" />
                <a href="mailto:hello@facetimer.ie" className="text-sm text-white/60 hover:text-lavender transition-colors">
                  hello@facetimer.ie
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-lavender flex-shrink-0" />
                <a href="tel:+353123456789" className="text-sm text-white/60 hover:text-lavender transition-colors">
                  +353 1 234 5678
                </a>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-white/60 hover:text-lavender transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-white/60 hover:text-lavender transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-white/60 hover:text-lavender transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-white/60 hover:text-lavender transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Facetimer. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center
                  hover:bg-lavender/20 hover:scale-110 transition-all duration-300"
              >
                <social.icon className="w-5 h-5 text-white/60 hover:text-lavender" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
