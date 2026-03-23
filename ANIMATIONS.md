# AgentPlus Animation System

## Overview

This document describes the animation and depth effect system integrated into the AgentPlus.ai website. The system is built using Framer Motion for smooth, performant animations with full accessibility support.

## Key Features

### 1. Performant Animations
- **GPU-Accelerated**: All animations use CSS transforms and opacity
- **Reduced Motion Support**: Respects `prefers-reduced-motion` media query
- **Touch-Optimized**: Disables heavy hover effects on touch devices
- **Mobile-First**: Simplified animations on low-end devices

### 2. Animation Components

#### AnimatedCard
- Smooth fade-in and upward motion on scroll
- 3D hover effects (elevation, glow) on desktop
- Tap animations on mobile
- Staggered animations for card grids

```tsx
import { AnimatedCard } from '@/components/animated-card'

<AnimatedCard delay={0.1}>
  <YourContent />
</AnimatedCard>
```

#### AnimatedButton
- Scale and glow effects on hover
- Tap feedback on touch devices
- Optional glow animation
- Respects accessibility preferences

```tsx
import { AnimatedButton } from '@/components/animated-button'

<AnimatedButton isGlow={true}>
  Click Me
</AnimatedButton>
```

#### AnimatedBackground
- Subtle animated gradient mesh in hero section
- Floating circles with pulse effects
- SVG-based for performance
- Automatically hidden on reduced-motion

```tsx
import { AnimatedBackground } from '@/components/animated-background'

<AnimatedBackground />
```

#### ParallaxSection
- Parallax scroll effects
- Configurable offset
- Smooth performance

```tsx
import { ParallaxSection } from '@/components/parallax-section'

<ParallaxSection offset={50}>
  <YourContent />
</ParallaxSection>
```

### 3. Custom Hooks

#### useScrollAnimation
Detects when elements enter viewport and triggers animations.

```tsx
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const { ref, isVisible } = useScrollAnimation({
  threshold: 0.1,
  triggerOnce: true,
  rootMargin: '0px 0px -50px 0px'
})

return (
  <div ref={ref}>
    {isVisible && <AnimatedContent />}
  </div>
)
```

#### usePrefersReducedMotion
Checks user's motion preference setting.

```tsx
const prefersReducedMotion = usePrefersReducedMotion()

if (prefersReducedMotion) {
  // Use static version
} else {
  // Use animated version
}
```

#### useTouchDevice
Detects if device is touch-enabled.

```tsx
const isTouch = useTouchDevice()

if (isTouch) {
  // Use tap animations
} else {
  // Use hover animations
}
```

### 4. Animation Variants

Pre-configured Framer Motion variants in `lib/animation-config.ts`:

- `fadeInUp` - Fade in with upward motion
- `fadeInDown` - Fade in with downward motion
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `scaleIn` - Scale animation from 95% to 100%
- `hoverScale` - Hover scale effect
- `cardHover3D` - 3D card hover with shadow
- `buttonHover` - Button hover glow effect
- `staggerContainer` - Stagger children animations
- `staggerItem` - Individual item in stagger

## Performance Optimizations

### For All Devices
- Uses `will-change` CSS property strategically
- Animations run at 60fps
- No layout shifts (animations use transforms only)
- GPU acceleration enabled

### For Mobile
- Reduced opacity and scale values
- Shorter animation durations
- No mouse-tracking effects
- Tap feedback instead of hover

### For Accessibility
- All animations disabled for users with `prefers-reduced-motion`
- Focus states clearly visible
- No animations blocking interaction
- Semantic HTML maintained

## Implementation Examples

### Scroll-Triggered Fade In
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-50px' }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Staggered Card Grid
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }}
  className="grid gap-8"
>
  {items.map((item, i) => (
    <AnimatedCard key={i} delay={i * 0.1}>
      {item}
    </AnimatedCard>
  ))}
</motion.div>
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari 12+, Chrome Mobile)

## Disabling Animations

To disable all animations globally, set `prefersReducedMotion` to true in `usePrefersReducedMotion()` hook or add this to your CSS:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Future Enhancements

- 3D model support with Three.js (optional)
- Spline integration for hero section
- Custom parallax scroll zones
- Advanced gesture animations
- Interaction-based animations
