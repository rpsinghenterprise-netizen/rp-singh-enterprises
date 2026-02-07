# Printing Services Landing Page - Components Guide

## Overview
This document outlines the modern, responsive React components created for the R.P. Singh Printing Services website using Tailwind CSS and Framer Motion.

## Component Architecture

### 1. **Hero Section** (`src/components/sections/Hero.jsx`)
A stunning hero banner with animated gradient text and call-to-action buttons.

**Features:**
- Full-screen dark background with background image overlay
- Animated gradient text using Framer Motion
- Staggered button animations
- Responsive design for mobile, tablet, and desktop
- Premium badge with fade-in animation

**Styling:**
- Background: Black with gradient overlay
- Text: White with pink-to-yellow gradient accent
- CTA Button: Gold (#D4AF37) with hover scale effect
- Secondary Button: White border with hover background

---

### 2. **Services Section** (`src/components/sections/ServicesSection.jsx`)
Displays printing services in a responsive grid with enhanced animations.

**Features:**
- 2-column grid layout (responsive: 1 column on mobile)
- Staggered fade-in animations for cards
- Hover effects: scale 1.02 with shadow enhancement
- Icon hover animation: color change and scale effect
- 5 service cards:
  - Offset Printing
  - Digital Printing
  - ID Card Printing
  - Flex & Banner Printing
  - Customized Branding

**Styling:**
- Background: Light grey (#f2f2f4)
- Cards: White background with subtle border and shadow
- Icons: Pink background (#FCA5C0) with pink text
- Header: Dark grey text with pink accent
- Font: Serif (Playfair Display) for titles

**Animations:**
- Container: Staggered children with 0.1s delay
- Cards: Slide up (y: 30 → 0) with fade-in
- Icons: Scale and color transform on hover

---

### 3. **Pricing Section** (`src/components/sections/PricingSection.jsx`)
Three-tier pricing package display with bulk discounts and pulse animation.

**Features:**
- 3-column responsive grid (2 columns on tablet, 1 on mobile)
- Three pricing tiers:
  - **Starter**: ₹5/piece - Digital printing focused
  - **Professional**: ₹8/piece - Highlighted as "Most Popular"
  - **Enterprise**: Custom quote - Full-service solutions
- Bulk discount information for each tier
- Feature lists with checkmarks
- CTA buttons with gradient on Professional card

**Styling:**
- Background: Light background section
- Cards: White with border and shadow
- Professional Card:
  - Gold/yellow gradient button (#D4AF37)
  - Ring highlight with pink accent
  - **Pulse animation effect** (continuous subtle glow)
  - "Most Popular" floating badge with bounce animation
- Other Cards: Primary color highlight on hover

**Animations:**
- Staggered card appearance
- Pulse animation on Professional card (2.5s cycle)
- Floating "Most Popular" badge
- Scale effect (1.02) on card hover
- Feature list items: Staggered fade-in with x-slide

**Unique Features:**
- CSS keyframe-based pulse animation for Professional card
- Bulk discount highlighting in separate section
- Spring physics for interactive elements

---

### 4. **Footer** (`src/components/Layout/Footer.jsx`)
Dark-themed footer with 4 columns and social links.

**Features:**
- **4-column layout** on desktop (responsive: 2 columns on tablet, 1 on mobile):
  1. Brand Info with social links
  2. Quick Links (navigation)
  3. Our Services (service shortcuts)
  4. Contact Information
- Social media icons with hover animations
- Brand logo with interactive animation
- Copyright notice and year auto-generation

**Styling:**
- Background: Very dark (#111111)
- Border: Subtle white border top (10% opacity)
- Text: Gradients from white to grey
- Logo: White background circle with RP initials
- Links: Grey with pink hover effects

**Animations:**
- Staggered column entrance (0.1s delay between columns)
- Social icons: Scale 1.1 and vertical movement on hover
- Links: Fade-in from left with marker dot animation
- Brand logo: Scale and rotate on hover
- Smooth color transitions on link hover (0.3s)

---

## Styling & Color Palette

### Primary Colors
- **Dark Grey**: #374151 (backgrounds)
- **Light Grey**: #f2f2f4 (section backgrounds)
- **Pink Accent**: #ec4899 (primary interactive elements)
- **Gold/Yellow**: #d97706 (highlight for popular items)
- **White**: #ffffff (cards and text)

### Typography
- **Headings**: Playfair Display (serif font)
- **Body Text**: Inter (sans-serif font)
- **Font Weights**: 
  - Bold: 600-700
  - Semibold: 600
  - Regular: 400-500

### Spacing & Border Radius
- **Card Padding**: p-8 (2rem)
- **Border Radius**: rounded-2xl to rounded-3xl
- **Gap**: 8px - 32px depending on context

---

## Framer Motion Animations

### Staggered Container Pattern
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};
```

### Slide-Up Card Animation
```javascript
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
```

### Hover Effects
- **Scale**: 1.02 - 1.05 depending on component
- **Spring Physics**: type: "spring", stiffness: 300, damping: 25
- **Y-axis**: -6 to -8px upward movement

### Pulse Animation (Professional Pricing Card)
- CSS keyframe animation
- 2.5s infinite cycle
- Outer glow effect with box-shadow
- Subtle, non-intrusive pulse

---

## Responsive Design

### Breakpoints
- **Mobile**: < 768px (1 column, stack vertically)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (2-3 columns)

### Key Changes
- Services Grid: 2 columns on desktop → 1 on mobile
- Pricing Grid: 3 columns on desktop → 2 on tablet → 1 on mobile
- Footer: 4 columns on desktop → 2 on tablet → 1 on mobile
- Padding/Margins: Reduced on smaller screens

---

## Component Integration

### Layout Structure
```
MainLayout
├── Navbar
├── Routes
│  ├── Home (uses Hero, ProductsSection, etc.)
│  ├── About
│  ├── Products
│  ├── Services (uses ServicesSection + detailed grid + PricingSection)
│  ├── Contact
│  └── [Other Pages]
├── Footer
└── FloatingChatButton
```

### Dependencies
- **React Router**: Navigation and routing
- **Framer Motion**: Animations and transitions
- **Lucide React**: Icon components
- **Tailwind CSS**: Utility-first styling

---

## Usage Examples

### Using Server-based Animations
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Hover Scale Effect
```jsx
<motion.div
  whileHover={{ y: -6, scale: 1.02 }}
  transition={{ type: "spring", stiffness: 300, damping: 25 }}
>
  Card Content
</motion.div>
```

### Staggered Animation
```jsx
<motion.div variants={containerVariants} initial="hidden" whileInView="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={cardVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## Performance Optimizations

1. **Viewport-based Animations**: Uses `whileInView` to avoid animating off-screen elements
2. **Once Animation**: `viewport={{ once: true }}` prevents re-animation on scroll
3. **Staggered Timing**: Distributes animation load across time
4. **CSS Keyframe Pulse**: More performant than JS animation for continuous motion
5. **Responsive Images**: Optimized image loading

---

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS custom properties (Tailwind CSS) support
- Framer Motion support (no IE11)

---

## Future Enhancements

1. Add dark mode toggle with theme switching
2. Implement lazy loading for images
3. Add more interactive 3D effects
4. Add form validation animations
5. Implement loading states for async operations
