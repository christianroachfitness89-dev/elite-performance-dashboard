# Front-End Brand Installation Guide

## ✅ What's Been Updated

Your Vercel dashboard now has the **Elite Performance** brand guidelines installed:

### 🎨 Tailwind Config (`tailwind.config.js`)
- Custom brand colors (deepest black → red glow)
- Typography (Bebas Neue for headings, Inter/Outfit for body)
- Glow effects and shadows
- Carbon fiber and grain texture backgrounds

### 🎯 Global CSS (`styles/globals.css`)
- Dark mode base styles
- Brand cards with red accent borders
- Elite buttons with hover glow effects
- Text gradients and border glows
- Utility classes for quick styling

---

## 🚀 Next Steps

### 1. Install Dependencies
```bash
cd /home/ubuntu/.openclaw/workspace/vercel-dashboard
npm install
```

### 2. Add Brand Fonts
Create `public/fonts/` folder and add:
- `BebasNeue-Regular.ttf`
- `Inter-Regular.ttf`
- `Inter-Italic.ttf`
- `Outfit-Regular.ttf`

Or use Google Fonts in your `_document.js`:
```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,wght@0,400;0,600;1,400&family=Outfit:wght@400;600&display=swap" rel="stylesheet">
```

### 3. Add Textures (Optional)
Create `public/textures/` folder:
- `carbon-fiber.png`
- `grain-overlay.png`

### 4. Test the Brand
Run the dev server:
```bash
npm run dev
```

---

## 🎨 Usage Examples

### Buttons
```jsx
<button className="btn-elite">Get Started</button>
```

### Cards
```jsx
<div className="card-elite">
  <h2>Client Transformation</h2>
  <p>Before/After content here</p>
</div>
```

### Text Gradients
```jsx
<h1 className="text-gradient">Elite Performance</h1>
```

### Glow Effects
```jsx
<div className="glow-strong">
  High-impact content
</div>
```

---

## 📋 Color Reference

| Name | Hex | Usage |
|------|-----|-------|
| Deepest | `#0A0A0A` | Main background |
| Deep | `#121212` | Cards/Sections |
| Elevated | `#1C1C1C` | Hover states |
| Red Primary | `#D12D30` | Buttons/Accents |
| Red Bright | `#E13C3E` | CTAs |
| Red Glow | `#F04C50` | High-attention |
| Text Primary | `#FAFAFA` | Main text |
| Text Secondary | `#B8B8B8` | Muted text |

---

## 🛠️ Need Help?

If you want me to:
- Create a sample landing page with this brand
- Update existing pages to use the new styles
- Add more components (hero sections, pricing cards, etc.)

Just ask! ⚡
