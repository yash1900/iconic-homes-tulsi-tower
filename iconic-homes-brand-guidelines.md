# Iconic Homes Infracon — Brand Guidelines
### Website Design System · May 2026

---

## 1. Brand Positioning

**One-line position:** A family-owned developer you can trust to deliver — builder-direct, no shortcuts, your home treated like ours.

**Brand personality:** The trusted family elder — knowledgeable, calm, direct, genuinely invested in the buyer's outcome. Not a salesperson.

**Four brand words:** Warm · Dependable · Grounded · Aspirational

**What we are not:** Ultra-luxury. Corporate. Flashy. Vague.

---

## 2. Color Palette

### Primary Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Brand Primary | **Deep Slate Navy** | `#1C2E4A` | Navigation, footer, primary CTAs, section headers |
| Brand Accent | **Warm Gold** | `#C8922A` | Highlights, icon accents, secondary CTAs, stats numbers |
| Background | **Warm Cream** | `#F7F2EB` | Page background, alternate section fills |

### Supporting Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Body Text | **Charcoal** | `#2C2C2C` | All body copy |
| Secondary Text | **Mid Grey** | `#6B6B6B` | Captions, metadata, supporting text |
| Card Background | **Light Warm Grey** | `#EDE9E3` | Card fills, dividers, subtle section separation |
| Surface | **White** | `#FFFFFF` | Content panels, form backgrounds |

### Semantic Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Trust / RERA | **Forest Green** | `#2A6049` | RERA verified badges, compliance indicators |
| Urgency | **Amber** | `#E6952A` | "Limited units" alerts, notification banners |
| WhatsApp | **WA Green** | `#25D366` | Floating WhatsApp button only — do not use elsewhere |

### Color Combinations (approved pairings)

- Navy background + Cream text + Gold accent → Hero sections, footer
- White background + Charcoal text + Gold CTA → Content sections
- Cream background + Navy text + Gold underline → Alternate sections
- Navy background + White text → Stats bar, testimonials strip

---

## 3. Typography

### Font Stack

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| **Display / Headlines** | Playfair Display | Bold (700) | Warmth, heritage, premium without ultra-luxury |
| **Subheadings** | Playfair Display | Regular (400) | H3, H4, pull quotes |
| **Body & UI** | Inter | Regular (400), Medium (500), SemiBold (600) | All body copy, buttons, nav, labels |
| **Hindi / Devanagari** | Noto Sans Devanagari | Regular / Medium | Regional taglines, Hindi toggle content |

Google Fonts links:
- `https://fonts.google.com/specimen/Playfair+Display`
- `https://fonts.google.com/specimen/Inter`
- `https://fonts.google.com/noto/specimen/Noto+Sans+Devanagari`

### Type Scale

| Level | Desktop | Mobile | Font | Weight | Line Height |
|-------|---------|--------|------|--------|-------------|
| H1 / Hero | 56px | 36px | Playfair Display | Bold | 1.15 |
| H2 / Section | 40px | 28px | Playfair Display | Bold | 1.2 |
| H3 / Card Title | 28px | 22px | Playfair Display | Regular | 1.3 |
| H4 / Label | 20px | 18px | Inter | SemiBold | 1.4 |
| Body Large | 18px | 17px | Inter | Regular | 1.7 |
| Body | 16px | 15px | Inter | Regular | 1.7 |
| Caption / Meta | 14px | 13px | Inter | Regular | 1.6 |
| Tag / Badge | 12px | 12px | Inter | SemiBold | 1.5 (uppercase, tracked +0.05em) |

---

## 4. UI Components

### Buttons

**Primary CTA** (Gold)
- Background: `#C8922A` · Text: `#FFFFFF` · Font: Inter SemiBold 16px
- Border radius: 8px · Padding: 14px 28px
- Hover: darken to `#A8781A` · Active: scale 0.98
- Example: "Enquire Now", "View Tulsi Tower"

**Secondary CTA** (Navy outline)
- Background: transparent · Border: 2px solid `#1C2E4A` · Text: `#1C2E4A`
- Border radius: 8px · Padding: 12px 26px
- Hover: background `#1C2E4A`, text white
- Example: "Our Story", "Download Floor Plan"

**Ghost / Text Link**
- No background, no border · Text: `#C8922A` · Underline on hover
- Example: inline links, "Read more"

### Cards

- Background: `#FFFFFF` · Border: 1px solid `#EDE9E3`
- Border radius: 12px · Box shadow: `0 2px 12px rgba(0,0,0,0.07)`
- Padding: 24px · Hover: shadow lifts to `0 6px 24px rgba(0,0,0,0.12)`

### Navigation

- Background: `#FFFFFF` (scrolled) / transparent (hero overlay)
- Logo left · Nav links center · "Enquire Now" CTA button right
- Nav font: Inter Medium 15px · Color: `#2C2C2C` · Active: `#1C2E4A`
- Sticky on scroll · Mobile: hamburger → full-screen overlay menu

### Stats Bar

- Background: `#1C2E4A` (navy) · Full-width strip
- Number: Playfair Display Bold 40px `#C8922A` (gold)
- Label: Inter Regular 14px uppercase `#FFFFFF`
- 4 stats in a row on desktop · 2×2 grid on mobile

### Forms

- Input background: `#FFFFFF` · Border: 1px solid `#EDE9E3`
- Focus border: `#1C2E4A` · Border radius: 8px · Padding: 12px 16px
- Label: Inter Medium 14px `#2C2C2C` · Error: `#C0392B`
- Submit: Primary CTA button (gold)

### WhatsApp Floating Button

- Position: fixed bottom-right, 24px from edges
- Circle: 56px diameter · Background: `#25D366`
- Icon: WhatsApp SVG white · Shadow: `0 4px 16px rgba(37,211,102,0.4)`
- Tooltip on hover: "Chat with us on WhatsApp"

### RERA Badge

- Background: `#EAF4EF` · Border: 1px solid `#2A6049` · Border radius: 6px
- Icon: shield/verified · Text: Inter SemiBold 13px `#2A6049`
- Display: "RERA Registered · MahaRERA P12345678" (example)

---

## 5. Layout & Spacing

### Grid

- Desktop: 12-column grid · Max content width: 1200px · Gutter: 24px
- Tablet: 8-column · Mobile: 4-column / single column

### Section Spacing

- Section vertical padding (desktop): 80px top + bottom
- Section vertical padding (mobile): 48px top + bottom
- Component internal gap: 16px / 24px / 32px (use multiples of 8px)

### Section Alternation (homepage scroll)

1. Cream background
2. White background
3. Cream background
4. Navy background (stats bar)
5. White background
6. Cream background

---

## 6. Photography & Imagery

### What to use

- **Real construction photos with date stamps** — highest trust signal for under-construction projects
- **Real people**: site engineer, founder Amar Malhotra, actual buyers (not stock models)
- **Architectural renders** only before construction starts — replace with real photos as work progresses
- **Completed project exteriors**: golden-hour / blue-hour light preferred
- **Interior shots**: natural light, furnished but not staged to look unlivable
- **Location context shots**: nearby landmarks, roads, greenery

### What to avoid

- Empty plots / barren land as hero images
- CGI-heavy renders with impossibly perfect skies as primary visuals
- Stock photo families (Indian buyers recognize them immediately)
- Dark, low-contrast construction site photos
- Heavy Instagram filters or oversaturated edits

### Image treatment

- Hero images: dark overlay `rgba(28, 46, 74, 0.55)` on photo for text legibility
- Card thumbnails: 16:9 ratio, object-fit cover
- Gallery: masonry or uniform grid, no cropping of faces

---

## 7. Iconography

- Style: Outlined icons, 2px stroke, rounded caps — **not** filled/solid
- Recommended library: Lucide Icons or Phosphor Icons (both free, consistent style)
- Color: `#C8922A` (gold) for feature icons · `#1C2E4A` (navy) for UI icons
- Size: 24px standard · 32px for feature/amenity icons · 48px for hero stat icons
- Never use emoji as icons in the UI

---

## 8. Logo Usage

*(Until the final logo is locked, these rules apply to any lockup variants)*

- **Primary lockup**: Wordmark + tagline on cream or white background
- **Reversed lockup**: White wordmark on navy background
- **Minimum digital size**: 120px wide
- **Clear space**: Maintain clear space equal to the cap-height of the first letter on all sides
- **Never place** on busy photographic backgrounds without a solid/semi-opaque panel behind it
- **Never recolor** the logo to gold or any non-approved color
- **Never stretch or distort**

---

## 9. Voice & Copy Rules

| Do | Don't |
|----|-------|
| "Built with care, delivered on time" | "World-class luxury residences" |
| "Real families, real homes" | "Dream home awaits" |
| Specific specs: "ISI-grade TMT steel" | Vague: "Premium quality materials" |
| "RERA No. P12345678" | No RERA number displayed |
| "Amar Malhotra, Founder" | Faceless "Our Team" section |
| Plain sentences, one idea each | Long feature paragraphs |

**Hindi tagline option (for regional trust):**
> "आपका घर, हमारी जिम्मेदारी" *(Your home, our responsibility)*

---

## 10. Design Do's and Don'ts

| Do | Don't |
|----|-------|
| Mobile-first layout decisions | Design desktop and shrink down |
| WhatsApp button on every page | Rely on phone calls alone |
| Show real progress with dates | Use same render for 2 years |
| One primary CTA per section | Three competing CTAs per section |
| Cream/white alternating sections | All-white sections (feels sterile) |
| Playfair for emotion, Inter for clarity | Use more than 2 fonts |
| Soft shadows on cards | Hard borders everywhere |
| Gold as accent only | Gold backgrounds for full sections |

---

*Brand guidelines for Iconic Homes Infracon · Prepared May 2026*
*Companion doc: [iconic-homes-website-outline.md](iconic-homes-website-outline.md)*
