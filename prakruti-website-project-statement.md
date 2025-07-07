# 🏡 Prakruti Interiors – Website Project Statement

## ✅ Project Overview
**Client:** Prakruti Interiors  
**Tagline:** *Interior that Reflects your Style*  
**Business Type:** Interior Design Studio  
**USP:** Eco-friendly fibre wood interiors with spiritual and elegant aesthetic  
**Website Goal:** To showcase services, portfolio, and attract new leads via consultation

---

## 🧩 Key Objectives
- Build a responsive, SEO-friendly website to showcase services and projects
- Emphasize eco-conscious design and spiritual branding
- Enable easy portfolio management via CMS (Sanity)
- Generate leads via contact/consultation form and WhatsApp integration

---

## 📁 Website Structure

### 1. **Homepage**
- Hero Section with logo, tagline, CTA
- About Preview  
- Services Preview (icon grid)  
- Featured Projects  
- Testimonials  
- Call to Action: Book Free Consultation  
- Footer with contact & socials

### 2. **About Us**
- Brand story  
- Mission & Vision  
- Spiritual Inspiration  
- Founder’s message (optional)

### 3. **Services**
List of services with images & blurbs:
- Modular Kitchen  
- Bedroom & Living Room Interiors  
- Office Interiors  
- Wardrobes & Storage  
- Eco-Friendly Furniture  
- Full Turnkey Solutions

### 4. **Projects / Portfolio**
- CMS-powered dynamic gallery  
- Filter by category  
- Project detail page (optional)

### 5. **Testimonials**
- Client feedback with names, city, and optional profile picture

### 6. **Contact**
- Embedded form: name, phone, email, message  
- WhatsApp CTA button  
- Embedded map + address + business hours

---

## 🎨 Brand & Design

### 🎯 Color Palette
- **Primary:** Deep Green (`#0F7D32`) – growth, calm  
- **Accent:** Bright Orange (`#F06A00`) – warmth, spirituality  
- **Neutral:** Light cream or soft gray backgrounds

### 🖋 Typography
- **Headings:** Playfair Display or Marcellus (serif, elegant)  
- **Body:** Inter, Poppins, or Open Sans

### 🖼 Visual Style
- Minimalist, natural textures, soft shadows  
- Elegant imagery with focus on interior work  
- Icons for services & features  
- Clean section padding, lots of whitespace

---

## 🛠 Tech Stack

| Area          | Tech / Tool                |
|---------------|----------------------------|
| Frontend      | Next.js 14 (App Router)    |
| Styling       | Tailwind CSS + ShadCN UI   |
| CMS           | Sanity.io                  |
| Hosting       | Vercel                     |
| Forms         | React Hook Form / Formspree |
| Animations    | Framer Motion / GSAP       |
| Icons         | Lucide / Tabler Icons      |

---

## 🧱 CMS Schema (Sanity)

### Schema: `project`
```ts
{
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'category', type: 'string' },
    { name: 'location', type: 'string' },
    { name: 'coverImage', type: 'image' },
    { name: 'gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'description', type: 'text' }
  ]
}
```

### Schema: `service`
```ts
{
  title: 'Service',
  name: 'service',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'icon', type: 'image' },
    { name: 'description', type: 'text' }
  ]
}
```

---

## 🧭 Project Milestones

### Phase 1 – Setup & Design
- [ ] Set up Next.js project with Tailwind & ShadCN  
- [ ] Define brand theme & fonts  
- [ ] Integrate Sanity CMS  

### Phase 2 – Page Development
- [ ] Homepage  
- [ ] About  
- [ ] Services  
- [ ] Projects  
- [ ] Contact  

### Phase 3 – Content & Launch
- [ ] Add all content from client  
- [ ] Connect form & WhatsApp  
- [ ] Test responsiveness  
- [ ] SEO setup (meta, OG tags, schema)  
- [ ] Deploy on Vercel

---

## 🔗 Integrations (Optional)
- WhatsApp floating chat: via GetButton or React Component  
- Google Analytics  
- Google Maps embed  
- Reviews widget (optional, if data exists)

---

## 🤖 AI Agent Use Ideas
- Generate SEO-friendly content per service  
- Auto-tag project uploads in CMS  
- Summarize client testimonials from WhatsApp chat dumps  
- Auto-generate Open Graph metadata for new blog posts (if blog added)

---


## 📖 About Prakruti Interiors

At Prakruti Interiors, we believe that a well-designed space reflects your inner self. With a vision rooted in spirituality and sustainability, we specialize in creating elegant, eco-friendly interiors using high-quality fibre wood. Our design philosophy blends nature with modern functionality to provide not just aesthetic appeal, but also a space that nurtures peace, positivity, and purpose.

Whether it’s a cozy modular kitchen or a complete home transformation, our team is committed to delivering interiors that are both beautiful and meaningful. Our work embodies harmony, simplicity, and the essence of natural living.


---

## 📂 Assets
- Logos: 2 versions uploaded  
- Form responses (PDF) with business details  
- Reference websites: Interrial, Interse

---

## 🏁 Ready to Start?
> Start with the Homepage. Focus on hero + services + projects preview section.  
> Use Sanity CMS for projects and services.  
> Deploy first version quickly and iterate with content updates.