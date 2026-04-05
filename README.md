# Relentix Resume Builder — Full SaaS
### AI-Powered Career Accelerator for Indian Job Seekers

---

## 🚀 QUICK START

### 1. Install dependencies
```bash
npm install
```

### 2. Add your API key
```bash
cp .env.example .env.local
```
Open `.env.local` and add your Anthropic API key:
```
ANTHROPIC_API_KEY=sk-ant-api03-...
```
Get your key at: https://console.anthropic.com → API Keys

### 3. Run locally
```bash
npm run dev
```
Open http://localhost:3000

---

## 🌐 DEPLOY TO VERCEL (2 minutes)

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```
When prompted, add your environment variable:
- Key: `ANTHROPIC_API_KEY`
- Value: `sk-ant-api03-...`

### Option B — Vercel Dashboard
1. Push code to GitHub
2. Go to vercel.com → New Project → Import repo
3. Add `ANTHROPIC_API_KEY` in Environment Variables
4. Click Deploy ✅

---

## 💰 PAYMENT SETUP (Already wired in)

Your UPI details are hardcoded in:
- `components/PaymentModal.tsx` — UPI ID, phone, QR code
- UPI ID: `prasannakumar2564@okicici`
- Phone: `8778421719`

To change them, edit `PaymentModal.tsx`:
```tsx
const UPI_ID = "prasannakumar2564@okicici";
const UPI_PHONE = "8778421719";
const PAYEE = "Relentix Resume Builder";
```

---

## 🏗 PROJECT STRUCTURE

```
relentix-saas/
├── app/
│   ├── page.tsx              # Main app (all state, flow logic)
│   ├── layout.tsx            # Root layout + fonts
│   ├── globals.css           # Dark theme + animations
│   └── api/
│       ├── analyze/route.ts  # Free ATS analysis API
│       └── generate/route.ts # Paid kit generation API
├── components/
│   ├── BackgroundOrbs.tsx    # Animated background
│   ├── Navbar.tsx            # Sticky nav
│   ├── HeroSection.tsx       # Hero + stats
│   ├── ResumeUploader.tsx    # Resume input + analyze CTA
│   ├── ResultsPanel.tsx      # All results (free + paid)
│   ├── ATSScoreCard.tsx      # Animated score ring
│   ├── LockedFeature.tsx     # Blurred locked sections
│   ├── GeneratingKit.tsx     # Loading state
│   ├── PaidResults.tsx       # Full kit display + copy buttons
│   ├── PaywallModal.tsx      # Upgrade modal
│   ├── PaymentModal.tsx      # UPI QR + verify flow
│   ├── FeaturesSection.tsx   # Feature grid
│   ├── TestimonialsSection.tsx
│   ├── PricingSection.tsx    # Pricing cards
│   └── Footer.tsx
├── .env.local                # Your secrets (not committed)
├── .env.example              # Template
└── vercel.json               # Optional Vercel config
```

---

## 💡 HOW THE MONEY FLOW WORKS

1. User pastes resume → hits Analyze (FREE)
2. API calls Claude → returns ATS score + 1 tip
3. Rest of results are blurred/locked on screen
4. User clicks "Unlock" → Plan selector appears
5. Payment modal opens with:
   - Live UPI QR code (auto-generated for exact amount)
   - UPI ID to copy
   - Phone number to copy
6. User pays via PhonePe/GPay/Paytm → enters Transaction ID
7. `/api/generate` calls Claude → builds full kit
8. Paid results appear instantly on same page
9. Copy buttons let user grab each section

---

## 🎯 PRICING

| Plan      | Price | What's Included |
|-----------|-------|-----------------|
| Free      | ₹0    | ATS Score + 1 Tip |
| Basic Kit | ₹149  | Resume Rewrite + 1 Cover Letter + 10 Interview Q&A |
| Pro Kit   | ₹249  | Everything in Basic + 3 Cover Letters + LinkedIn Bio + 5 Cold DMs + 20 Q&A |

---

## 📱 GET FIRST CUSTOMERS (No ads needed)

### Reddit (post tonight):
**r/developersIndia, r/cscareerquestions, r/india**
> "I built a free AI tool that gives your resume an ATS score and tells you exactly why you're not getting calls. Try it free: [your-vercel-url]"

### LinkedIn Comments:
Search "open to work" → comment on posts:
> "Check your ATS score free — I built a tool for this. DM me the link."

### Telegram Job Groups:
> "Free ATS resume checker with AI rewrite upgrade. No signup needed: [link]"

---

## 🔧 TECH STACK

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS** + inline styles for precision
- **Framer Motion** — animations, modals, scroll reveals
- **Anthropic Claude API** (claude-sonnet-4-20250514)
- **QR Server API** — live UPI QR generation (free)
- **Vercel** — deployment

---

## 📞 SUPPORT

WhatsApp: +91 8778421719
