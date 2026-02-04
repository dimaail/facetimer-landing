# Facetimer Ireland Landing Page

Premium B2B SaaS landing page for Facetimer - an AI-powered face recognition time tracking solution designed for Irish businesses.

## 🎨 Design Features

- **Modern Enterprise Minimalist** aesthetic
- **Airy Tech** design with generous whitespace
- **Premium animations** using Framer Motion
- **Responsive** design for all devices
- **Brand colors:**
  - Navy `#0A192F` - Authority & trust
  - Lavender `#9D7BFF` - Innovation & tech-forward
  - Ghost `#F8F9FB` - Subtle backgrounds
  - Mint `#00D084` - Success states

## 🚀 Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion + GSAP
- **Icons:** Lucide React
- **Font:** Inter (optimized via next/font)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & Tailwind config
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx           # Hero with video placeholder
│   │   ├── FeatureGrid.tsx           # 6 key features
│   │   ├── ProblemSolution.tsx       # Split-screen challenges/solutions
│   │   ├── HowItWorks.tsx            # 3-step workflow
│   │   ├── BenefitsSection.tsx       # Irish market benefits
│   │   ├── FAQSection.tsx            # Accordion FAQ
│   │   └── FinalCTA.tsx              # Conversion section
│   └── layout/
│       └── Footer.tsx                # Site footer
```

## 🖼️ Screenshot Placeholders

The following placeholders need to be replaced with actual screenshots:

1. **[SCREENSHOT_PLACEHOLDER_1]** - AI Face Recognition interface (in Features)
2. **[SCREENSHOT_PLACEHOLDER_2]** - Mobile app view (in Features)
3. **[SCREENSHOT_PLACEHOLDER_3]** - Real-time reporting dashboard (in Features)
4. **[SCREENSHOT_PLACEHOLDER_4]** - Employee clock-in screen (in How It Works)
5. **[SCREENSHOT_PLACEHOLDER_5]** - Manager dashboard with analytics (in How It Works)

### Video Placeholder

- **[EDUCATIONAL_VIDEO_PLACEHOLDER]** in Hero section - 60-90 second product demo video

To replace placeholders, update the respective component files and replace the placeholder divs with actual `<Image>` components from `next/image`.

## 🎬 Animations

All sections include:

- **Fade-in animations** on scroll
- **Staggered reveals** for lists
- **Hover effects** on interactive elements
- **Smooth transitions** with cubic-bezier easing
- **60fps performance** target

## 🌍 Irish Market Focus

The landing page specifically addresses:

- **WTR Compliance** - Organisation of Working Time Act
- **GDPR** - Full EU data protection compliance
- **Irish Business Culture** - Professional yet approachable tone
- **No Hardware Costs** - Use existing devices

## 📝 Content Sections

1. **Hero** - Main value proposition with video
2. **Feature Grid** - 6 key product features
3. **Problem/Solution** - Business challenges vs Facetimer solutions
4. **How It Works** - 3-step implementation process
5. **Benefits** - 5 advantages for Irish businesses
6. **FAQ** - 6 common questions with accordion
7. **Final CTA** - Conversion focused call-to-action
8. **Footer** - Navigation, contact, legal links

## 🎯 Performance Targets

- **Lighthouse Score:** 90+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Cumulative Layout Shift:** < 0.1

## ✅ SEO

- Semantic HTML5 structure
- Optimized metadata in `layout.tsx`
- Single H1 per page
- Proper heading hierarchy
- Image optimization via `next/image`

## 🔧 Development

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Follow existing animation patterns
4. Use brand colors from globals.css

### Customizing Colors

Update `src/app/globals.css`:

```css
:root {
  --navy: #0a192f;
  --lavender: #9d7bff;
  --ghost: #f8f9fb;
  --mint: #00d084;
}
```

## 📄 License

© 2026 Facetimer. All rights reserved.

## 📞 Support

For questions or support:

- Email: hello@facetimer.ie
- Phone: +353 1 234 5678
- Location: Dublin, Ireland
