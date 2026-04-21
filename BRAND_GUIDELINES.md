# Elite Performance Brand Guidelines

## Brand Identity

**Name:** Elite Performance AI  
**Business:** Christian Roach Fitness  
**Tagline:** "Transforming bodies, building confidence, changing lives"

---

## Brand Colors

### Primary Palette

| Color | Name | Hex | Usage |
|-------|------|-----|-------|
| **Elite Purple** | Primary | `#667eea` | Headers, gradients, primary actions |
| **Deep Purple** | Primary Dark | `#5a67d8` | Hover states, accents |
| **Soft Purple** | Primary Light | `#818cf3` | Highlights, secondary elements |

### Secondary Palette

| Color | Name | Hex | Usage |
|-------|------|-----|-------|
| **Elite Gold** | Gold | `#fbbf24` | Premium features, success highlights |
| **Rich Gold** | Gold Dark | `#f59e0b` | CTAs, important accents |
| **Bright Gold** | Gold Light | `#fcd34d` | Highlights, badges |

### Functional Colors

| Color | Name | Hex | Usage |
|-------|------|-----|-------|
| **Success Green** | Growth | `#10b981` | Active status, wins, positive metrics |
| **Alert Red** | Urgency | `#ef4444` | Failed payments, urgent items |
| **Elite Silver** | Balance | `#94a3b8` | Neutral elements, secondary text |

### Neutrals

| Color | Name | Hex | Usage |
|-------|------|-----|-------|
| **Brand Black** | Deep | `#0f172a` | Primary text, headings |
| **Charcoal** | Dark | `#1e293b` | Secondary text |
| **Gray** | Medium | `#64748b` | Tertiary text, captions |
| **Light** | Soft | `#f1f5f9` | Backgrounds, dividers |
| **White** | Pure | `#ffffff` | Cards, content areas |

---

## Typography

### Font Family
- **Primary:** Inter (Google Fonts)
- **Fallback:** system-ui, -apple-system, sans-serif

### Hierarchy

| Element | Size | Weight | Style |
|---------|------|--------|-------|
| H1 | 2.5rem (40px) | 700 | Tight tracking |
| H2 | 1.875rem (30px) | 700 | Tight tracking |
| H3 | 1.5rem (24px) | 600 | Normal tracking |
| Body | 1rem (16px) | 400 | Normal |
| Small | 0.875rem (14px) | 500 | Normal |
| Tiny | 0.75rem (12px) | 600 | Uppercase, tracked |

---

## Visual Elements

### Gradients

**Primary Gradient (Header):**
```css
background: linear-gradient(135deg, #667eea 0%, #7c3aed 100%);
```

**Gold Gradient (Premium):**
```css
background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
```

### Shadows

**Card Shadow:**
```css
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
```

**Hover Shadow:**
```css
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

### Border Radius

- **Cards:** 12px
- **Buttons:** 8px
- **Badges:** 9999px (pill)
- **Large containers:** 16px

---

## Component Styles

### Cards

- White background
- 12px border radius
- Subtle shadow
- Hover: lift -4px with deeper shadow
- Left border accent (4px) for agent cards:
  - Active: Green
  - Standby: Gold
  - Inactive: Red

### Buttons

- Primary: Purple gradient
- Hover: Lift -2px with glow shadow
- Padding: 0.75rem × 1.5rem
- Font: 600 weight

### Badges

- Pill shape (9999px radius)
- Light background with dark text
- Active: Green bg + green text
- Standby: Gold bg + gold text
- Alert: Red bg + red text

### Tables

- Header: Purple gradient background, white text
- Rows: White with light border
- Hover: Light gray background
- Padding: 1rem × 1.5rem

---

## Voice & Tone

### Dashboard Language

- **Clear:** No jargon, direct labels
- **Confident:** Assertive but not aggressive
- **Professional:** Polished, not casual
- **Action-oriented:** Focus on what needs attention

### Examples

✅ "15 failed payments need attention"  
❌ "Uh oh, looks like some payments failed"

✅ "12 sessions scheduled"  
❌ "You've got 12 sessions tomorrow"

✅ "8 buffer violations detected"  
❌ "There are some scheduling problems"

---

## Iconography

- Use emoji sparingly for quick visual recognition
- Primary icons: ⚡ (Hermes), 🤖 (Agents), ⚙️ (Ops), 👑 (Executive)
- Metric icons: 💰 (Revenue), 📅 (Calendar), 📧 (Email), 📋 (Forms)

---

## Layout Principles

1. **Hierarchy first:** Most important info at top (metrics bar)
2. **Group by function:** Executive → Agents → Operations
3. **Whitespace:** Generous padding, don't crowd
4. **Consistency:** Same card styles, same spacing throughout
5. **Mobile-responsive:** Stack on mobile, grid on desktop

---

## Animation

- **Transitions:** 0.3s cubic-bezier for smooth feel
- **Hover effects:** Subtle lift (-2px to -4px)
- **Live indicator:** Pulse animation (2s infinite)
- **Loading:** Spinner with brand primary color

---

## Accessibility

- Minimum contrast ratio: 4.5:1 for text
- Don't rely on color alone (use badges + icons)
- Focus states visible on all interactive elements
- Alt text on any images (if added)

---

*These guidelines ensure the Elite Performance dashboard feels premium, professional, and unmistakably Christian Roach Fitness.*
