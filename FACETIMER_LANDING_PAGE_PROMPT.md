# Facetimer Ireland Landing Page - Development Brief

## Project Overview

Create a **premium B2B SaaS landing page** for **Facetimer** - an AI-powered face recognition time tracking solution for the Irish market. Must achieve immediate "WOW" factor with modern design and sophisticated animations.

## Product Summary

**Facetimer** provides:

- AI face recognition for employee time tracking
- Irish WTR compliance automation
- Fraud prevention (eliminates "buddy punching")
- Real-time reporting & analytics
- Works with existing devices (no hardware needed)
- Full GDPR compliance

**Target:** Irish SMEs in hospitality, retail, manufacturing, construction

---

## Design System

### Color Palette

- **White:** `#FFFFFF` - Primary background
- **Deep Navy:** `#0A192F` - Text, CTAs, authority
- **Lavender Purple:** `#9D7BFF` - Accents, innovation
- **Ghost White:** `#F8F9FB` - Section backgrounds
- **Mint Green:** `#00D084` - Success states

### Typography

- **Headings:** Inter Bold/Extra Bold (up to 64px hero)
- **Body:** Inter Regular/Medium (16-18px)

### Style Principles

- Generous whitespace (Airy Tech aesthetic)
- Soft shadows: `box-shadow: 0 20px 40px rgba(0,0,0,0.05)`
- Large border radius: 24px+
- Glassmorphism effects
- Premium, enterprise-grade feel

---

## Page Structure

### 1. Hero Section

- **Headline:** "Effortless Time Tracking. Irish Compliance. AI-Powered."
- **Sub-headline:** "Simplify employee time management and ensure regulatory adherence with Facetimer's smart, secure solution."
- **`[EDUCATIONAL_VIDEO_PLACEHOLDER]`** - 60-90s demo video (autoplay muted)
- Lottie/SVG face scanning animation
- Primary CTA: "Start Your Free Trial"
- Secondary CTA: "Book a Demo"
- Social proof: "Trusted by 20,000+ businesses worldwide"

**Animations:** Fade-in slide-up on load, micro-interactions on CTAs, lavender glow on hover

### 2. Problem/Solution Split Screen

**Problem (Left):**

- Manual timesheets causing errors
- WTR compliance complexity
- "Buddy punching" fraud
- Administrative burden

**Solution (Right):**

- AI-powered accuracy
- Automated compliance
- Biometric fraud prevention
- Streamlined operations

**Animation:** Parallax scroll, slide-in from sides

### 3. Key Features Grid (6 Cards)

1. AI Face Recognition - `[SCREENSHOT_PLACEHOLDER_1]`
2. Irish Compliance Ready
3. No Dedicated Hardware - `[SCREENSHOT_PLACEHOLDER_2]`
4. Cloud-Based Accessibility
5. Real-time Reporting - `[SCREENSHOT_PLACEHOLDER_3]`
6. GDPR Compliant

**Animation:** Staggered fade-in with 100ms delay, hover lift effect

### 4. How It Works (3 Steps)

1. Employee Clocks In/Out - `[SCREENSHOT_PLACEHOLDER_4]`
2. Data Securely Recorded
3. Managers Access Reports - `[SCREENSHOT_PLACEHOLDER_5]`

**Implementation:** Sticky scroll animation building UI progressively

### 5. Benefits for Irish Businesses

- Reduced Compliance Risk
- Increased Accuracy & Fraud Prevention
- Cost Savings
- Improved Productivity
- Enhanced Transparency

### 6. Testimonials & Social Proof

- 3 testimonial cards with carousel
- Infinite logo marquee
- Star ratings

### 7. FAQ Accordion

- GDPR compliance
- Hardware requirements
- Fraud prevention mechanism
- Integration capabilities
- Support availability

### 8. Final CTA

- **Headline:** "Ready to Modernize Your Time Tracking?"
- Primary/Secondary CTAs
- "No credit card required. Cancel anytime."

### 9. Footer

- Links, privacy policy, social media

---

## Technical Stack

**Core:**

- Next.js (TypeScript strict mode)
- Tailwind CSS (custom theme)
- Framer Motion + GSAP
- Shadcn UI + Radix UI
- Lucide React (icons)
- React Hook Form + Zod

**Animation Strategy:**

- Timing: 200ms micro, 600-800ms sections
- Easing: `cubic-bezier(0.2, 0, 0, 1)`
- 60fps target (transform/opacity only)
- Trigger at 20% element visibility

---

## Screenshot Placeholders

```jsx
<div
  className="relative w-full h-64 bg-gradient-to-br from-navy/5 to-lavender/10 
  rounded-xl border-2 border-dashed border-navy/20 flex items-center justify-center"
>
  <p className="text-navy/50 font-medium">[SCREENSHOT_PLACEHOLDER_X]</p>
</div>
```

**Required:**

1. Face recognition interface
2. Mobile app view
3. Reporting dashboard
4. Employee clock-in screen
5. Manager analytics dashboard

**Video placeholder (Hero):**

```jsx
<div
  className="relative w-full aspect-video bg-gradient-to-br from-navy to-lavender/80 
  rounded-2xl flex items-center justify-center"
>
  <PlayCircle className="w-20 h-20" />
  <p>[EDUCATIONAL_VIDEO_PLACEHOLDER]</p>
</div>
```

---

## Component Architecture

```
src/
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── FeatureGrid.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   ├── FAQAccordion.tsx
│   │   └── FinalCTA.tsx
│   ├── ui/ (Shadcn)
│   └── animations/
├── lib/
└── pages/
```

---

## Development Plan (10 Days)

**Phase 1 (Days 1-2):** Setup Next.js, Tailwind config, install dependencies, Layout/Navbar/Footer

**Phase 2 (Days 3-5):** Hero, Problem/Solution, Features, How It Works, Benefits sections

**Phase 3 (Days 6-7):** Testimonials, FAQ, Final CTA, forms, logo marquee

**Phase 4 (Days 8-9):** All animations, Lottie face scan, GSAP scroll effects, micro-interactions

**Phase 5 (Day 10):** Testing, optimization, accessibility, SEO

---

## Performance Targets

- Lighthouse Score: 90+
- FCP: < 1.5s
- TTI: < 3.5s
- CLS: < 0.1

## SEO Requirements

- Semantic HTML5
- Single H1, proper hierarchy
- Next.js metadata API
- Schema.org markup
- Image optimization

## Accessibility (WCAG 2.1 AA)

- Full keyboard navigation
- ARIA labels
- Color contrast compliance
- Focus indicators
- Screen reader support

---

## Success Criteria

✅ Immediate visual "WOW" factor  
✅ 60fps animations  
✅ Value clear within 5 seconds  
✅ Perfect mobile experience  
✅ < 2s page load on 4G  
✅ Enterprise-grade quality

---

## Key Notes

- **DO NOT use actual screenshots** - placeholders only
- **Preserve whitespace** - critical to Airy Tech aesthetic
- **TypeScript strict** - no `any` types
- **Test on lower-end devices**
- **Follow animation timing exactly**

**References:** Databox.com, Notion.so, Apple.com, Linear.app, Vercel.com
