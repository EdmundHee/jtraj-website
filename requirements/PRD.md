# Product Requirements Document (PRD)
## JTR Auction House Website Revamp

**Version:** 1.0  
**Date:** December 2024  
**Project:** jtraj.com Website Modernization  
**Tech Stack:** Nuxt 4, TailwindCSS, Supabase

---

## 1. Executive Summary

### 1.1 Project Overview
JTR Auction House (managed by J.Thilagamraj Auctioneers Sdn Bhd) is one of Malaysia's largest Real Estate Auctioneers, operating since 1985. This project involves a complete revamp of the existing legacy ASP-based website (jtraj.com) into a modern, performant, and user-friendly platform using Nuxt 4, TailwindCSS, and Supabase.

### 1.2 Business Goals
- Modernize the user experience with a responsive, fast-loading website
- Improve property discovery with enhanced search and filtering capabilities
- Streamline the online eBidding registration and participation process
- Increase user engagement through better UI/UX design
- Enable easier content management for administrators
- Improve SEO and organic traffic acquisition

### 1.3 Target Users
- **Property Buyers**: Individuals seeking auction properties at reduced prices
- **Property Owners**: Private owners wanting to sell properties via auction
- **Bank/Institution Representatives**: Partners managing foreclosure properties
- **Administrators**: JTR staff managing listings and auctions

---

## 2. Existing Features Analysis (Current Website)

### 2.1 Property Listings & Search
| Feature | Description |
|---------|-------------|
| Property Listings | Display auction properties from multiple banks/institutions |
| Advanced Search | Filter by auction type, location (all Malaysian states), property type, price range, auction month, sale type, auction date, bank/lender |
| Bank Categories | RHB, BSN, AFFIN, LPPSA, Bank Islam, High Court Auctions, Land Office Auctions |
| Property Types | Apartment, Land, Condominium, Commercial, Flats, Industrial, Residential, Others |
| Price Ranges | From Below RM10,000 to RM5M Above (12 brackets) |

### 2.2 Online eBidding System
| Feature | Description |
|---------|-------------|
| eBidding Portal | External portal integration (auctionsale.com.my) |
| Registration Guide | Step-by-step registration instructions |
| Terms & Conditions | Legal bidding terms |
| Downloadable Forms | Online bid form (PDF), Authorization letter (PDF) |
| Demo | eBidding demonstration |

### 2.3 Owner Auction Sale
| Feature | Description |
|---------|-------------|
| How to Sell | Guide for property owners |
| Benefits | Information on auction selling advantages |
| Interest Submission | Form to submit property for auction |
| FAQ | Frequently asked questions |

### 2.4 Information Pages
| Page | Description |
|------|-------------|
| About Us | Company information and history |
| JTR Auction Hall | Physical auction venue information |
| Licensed Auctioneers | State license information |
| Awards & Appreciation | Company achievements |
| Our Services | Services offered |

### 2.5 Guides & Resources
| Guide | Description |
|-------|-------------|
| Auction Guide | How to participate in auctions |
| Bidding Tips | Do's and don'ts |
| Terms of Payment | Payment guidelines |
| Conditions of Sale | Legal conditions |
| Important Instructions | Critical bidding information |

### 2.6 Contact & Engagement
| Feature | Description |
|---------|-------------|
| Contact Information | Phone, WhatsApp, Email, Facebook |
| Newsletter Subscription | Email subscription for auction updates |
| WhatsApp QR Code | Quick contact access |
| Auction Calendar | Monthly auction date picker |

---

## 3. Technical Architecture

### 3.1 Tech Stack Specification

```
Frontend Framework: Nuxt 4 (Vue 3 Composition API)
Styling: TailwindCSS 4.x
Backend/Database: Supabase
  - PostgreSQL Database
  - Authentication
  - Storage (for images/PDFs)
  - Edge Functions
  - Realtime subscriptions
Deployment: Vercel / Netlify / Cloudflare Pages
```

### 3.2 Database Schema (Supabase)

```sql
-- Users table (extends Supabase Auth)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  full_name TEXT,
  phone TEXT,
  email TEXT,
  company_name TEXT,
  ic_number TEXT,
  address TEXT,
  role TEXT DEFAULT 'user', -- user, admin, agent
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Banks/Institutions
CREATE TABLE banks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  short_code TEXT UNIQUE,
  logo_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Property Listings
CREATE TABLE properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  address TEXT NOT NULL,
  state TEXT NOT NULL,
  city TEXT,
  postcode TEXT,
  property_type TEXT NOT NULL,
  tenure TEXT,
  land_area DECIMAL,
  built_up_area DECIMAL,
  reserve_price DECIMAL NOT NULL,
  market_value DECIMAL,
  auction_date DATE,
  auction_time TIME,
  auction_venue TEXT,
  bank_id UUID REFERENCES banks(id),
  sale_type TEXT NOT NULL,
  lot_number TEXT,
  case_number TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_reduced_price BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'upcoming', -- upcoming, ongoing, sold, cancelled
  images TEXT[], -- Array of image URLs
  documents TEXT[], -- Array of document URLs
  latitude DECIMAL,
  longitude DECIMAL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Owner Sale Submissions
CREATE TABLE owner_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  property_address TEXT NOT NULL,
  property_type TEXT NOT NULL,
  asking_price DECIMAL,
  contact_name TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  contact_email TEXT,
  description TEXT,
  status TEXT DEFAULT 'pending', -- pending, reviewing, approved, rejected
  admin_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter Subscribers
CREATE TABLE subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  is_active BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact Inquiries
CREATE TABLE inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new', -- new, responded, closed
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auction Dates
CREATE TABLE auction_dates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auction_date DATE NOT NULL,
  venue TEXT,
  bank_id UUID REFERENCES banks(id),
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Static Pages Content (CMS)
CREATE TABLE pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT,
  meta_title TEXT,
  meta_description TEXT,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pamphlets/Documents
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT,
  file_url TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 3.3 Supabase Row Level Security (RLS)

```sql
-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE banks ENABLE ROW LEVEL SECURITY;

-- Public read access for properties
CREATE POLICY "Properties are viewable by everyone" ON properties
  FOR SELECT USING (status IN ('upcoming', 'ongoing'));

-- Admin full access
CREATE POLICY "Admins have full access" ON properties
  FOR ALL USING (
    auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin')
  );
```

---

## 4. Feature Requirements

### 4.1 Public Website Features

#### 4.1.1 Homepage
**Priority: P0 (Must Have)**

- Hero section with key value proposition
- Quick property search bar
- Featured/Hot properties carousel
- Upcoming auction dates calendar widget
- Bank partners showcase
- Statistics counter (properties sold, years of experience, etc.)
- Newsletter subscription form
- Quick links to major sections

#### 4.1.2 Property Listing Page
**Priority: P0 (Must Have)**

- Grid/List view toggle
- Advanced filtering sidebar:
  - Bank/Institution (multi-select)
  - Location/State (multi-select)
  - Property Type (multi-select)
  - Price Range (slider)
  - Auction Date Range
  - Sale Type
- Sort options (date, price, newest)
- Pagination with infinite scroll option
- Map view of properties
- Quick view modal
- Save/Favorite properties (authenticated users)

#### 4.1.3 Property Detail Page
**Priority: P0 (Must Have)**

- Image gallery with lightbox
- Property information tabs
- Reserve price display
- Auction date/time/venue
- Bank/Institution info
- Property specifications
- Location map (Google Maps integration)
- Similar properties recommendations
- Inquiry form
- Share buttons (WhatsApp, Facebook, Copy Link)
- Download auction documents
- Print property details

#### 4.1.4 Online eBidding Section
**Priority: P0 (Must Have)**

- eBidding overview page
- Registration guide (step-by-step)
- Terms & conditions page
- Downloadable forms (PDF)
- Demo video/interactive guide
- Link to external eBidding portal
- FAQ section

#### 4.1.5 Owner Auction Sale
**Priority: P1 (Should Have)**

- Landing page explaining benefits
- How-to-sell guide
- Online submission form
- Sold properties showcase
- FAQ section
- Success stories/testimonials

#### 4.1.6 About Section
**Priority: P1 (Should Have)**

- Company history and overview
- Licensed auctioneers list
- Auction hall information with photos
- Awards and certifications
- Our services page
- Team section (optional)

#### 4.1.7 Resources & Guides
**Priority: P1 (Should Have)**

- Auction guide (how to bid)
- Buying tips
- Do's and Don'ts
- Terms of payment
- Conditions of sale
- Glossary of terms

#### 4.1.8 Contact Page
**Priority: P0 (Must Have)**

- Contact form
- Office location map
- Contact details (phone, WhatsApp, email)
- Operating hours
- Social media links
- WhatsApp direct chat button

### 4.2 User Features

#### 4.2.1 Authentication
**Priority: P1 (Should Have)**

- Email/password registration
- Social login (Google, Facebook)
- Email verification
- Password reset
- Profile management

#### 4.2.2 User Dashboard
**Priority: P2 (Nice to Have)**

- Saved/Favorite properties
- Inquiry history
- Owner submission tracking
- Alert preferences
- Profile settings

### 4.3 Admin Features

#### 4.3.1 Admin Dashboard
**Priority: P1 (Should Have)**

- Overview statistics
- Recent inquiries
- Recent submissions
- Quick actions

#### 4.3.2 Property Management
**Priority: P0 (Must Have)**

- CRUD operations for properties
- Bulk import from CSV/Excel
- Image upload and management
- Document upload
- Status management
- Featured property toggle

#### 4.3.3 Content Management
**Priority: P1 (Should Have)**

- Static pages editor
- Bank/Institution management
- Document management
- Auction dates management

#### 4.3.4 User Management
**Priority: P2 (Nice to Have)**

- View registered users
- Manage user roles
- View inquiry history

#### 4.3.5 Newsletter Management
**Priority: P2 (Nice to Have)**

- Subscriber list
- Send newsletters (integration with email service)
- Subscription analytics

---

## 5. Non-Functional Requirements

### 5.1 Performance
- Lighthouse score > 90 for all metrics
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Image optimization with next-gen formats (WebP, AVIF)
- Code splitting and lazy loading

### 5.2 SEO
- Server-side rendering (SSR) for all public pages
- Dynamic meta tags per page
- Structured data (JSON-LD) for properties
- XML sitemap generation
- robots.txt configuration
- Canonical URLs
- Open Graph and Twitter Card meta

### 5.3 Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast
- Alt text for all images

### 5.4 Security
- HTTPS enforcement
- Supabase RLS policies
- Input validation and sanitization
- CSRF protection
- Rate limiting on forms
- Secure authentication flow

### 5.5 Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Touch-friendly interfaces
- Responsive images

---

## 6. UI/UX Design Guidelines

### 6.1 Design Principles
- Clean and professional appearance
- Easy navigation
- Clear call-to-actions
- Consistent branding
- Trustworthy and authoritative feel

### 6.2 Color Palette (Suggested)
```
Primary: #1E40AF (Royal Blue)
Secondary: #059669 (Emerald Green)
Accent: #F59E0B (Amber)
Background: #F8FAFC (Slate 50)
Text Primary: #1E293B (Slate 800)
Text Secondary: #64748B (Slate 500)
Error: #DC2626 (Red 600)
Success: #16A34A (Green 600)
```

### 6.3 Typography
```
Headings: Inter (700)
Body: Inter (400, 500)
Font sizes follow TailwindCSS scale
```

### 6.4 Component Library
- Utilize TailwindCSS + HeadlessUI for components
- Consider Nuxt UI or Radix Vue for advanced components
- Consistent spacing using TailwindCSS spacing scale

---

## 7. Integration Requirements

### 7.1 Third-Party Integrations
| Service | Purpose |
|---------|---------|
| Google Maps API | Property location maps |
| WhatsApp Business API | Direct chat/inquiry |
| Google Analytics 4 | Website analytics |
| Facebook Pixel | Marketing tracking |
| Mailchimp/SendGrid | Newsletter emails |
| Cloudinary/Supabase Storage | Image management |

### 7.2 External Systems
| System | Integration Type |
|--------|------------------|
| auctionsale.com.my | Link/redirect to eBidding portal |
| Bank portals | Potential future API integration |

---

## 8. Project Phases

### Phase 1: Foundation (Weeks 1-3)
- Project setup (Nuxt 4, TailwindCSS, Supabase)
- Database schema implementation
- Authentication system
- Basic layout and navigation

### Phase 2: Core Features (Weeks 4-7)
- Property listing and search
- Property detail pages
- Homepage implementation
- Contact and inquiry system

### Phase 3: Content Pages (Weeks 8-9)
- About section pages
- eBidding guide pages
- Owner sale pages
- Resources and guides

### Phase 4: Admin Panel (Weeks 10-12)
- Admin dashboard
- Property management CRUD
- Content management
- User management

### Phase 5: Enhancement (Weeks 13-14)
- User dashboard
- Favorites/saved properties
- Newsletter integration
- Performance optimization

### Phase 6: Testing & Launch (Weeks 15-16)
- Comprehensive testing
- Content migration
- SEO optimization
- Deployment and launch

---

## 9. Success Metrics

| Metric | Target |
|--------|--------|
| Page Load Time | < 2 seconds |
| Mobile Responsiveness | 100% pages responsive |
| Lighthouse Performance | > 90 |
| Lighthouse SEO | > 95 |
| User Session Duration | > 3 minutes |
| Bounce Rate | < 50% |
| Form Conversion Rate | > 5% |

---

## 10. Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| Data migration complexity | Develop migration scripts early, test with production data |
| External eBidding portal dependency | Maintain clear integration points, plan for future in-house solution |
| SEO ranking drop | Implement proper redirects, maintain URL structure where possible |
| User adoption | Provide clear navigation, maintain familiar workflows |

---

## Appendix A: AI Prompt for Project Creation

```
Create a modern property auction website using Nuxt 4, TailwindCSS, and Supabase.

Project: JTR Auction House (Malaysia's premier real estate auction platform since 1985)

Key Features:
1. Property listing with advanced search (filter by bank, location, property type, price, auction date)
2. Property detail pages with image gallery, maps, and inquiry forms
3. Online eBidding guide section with downloadable forms
4. Owner auction sale section with submission form
5. About us, services, and contact pages
6. User authentication and favorites
7. Admin panel for property and content management
8. Newsletter subscription
9. SEO optimized with SSR

Tech Requirements:
- Nuxt 4 with Vue 3 Composition API
- TailwindCSS for styling
- Supabase for database, auth, and storage
- TypeScript support
- Responsive mobile-first design

Banks/Institutions: RHB, BSN, AFFIN, LPPSA, Bank Islam, High Court, Land Office
Property Types: Apartment, Land, Condominium, Commercial, Flats, Industrial, Residential
Malaysian States: All 16 states including Federal Territories

Design: Professional, trustworthy, clean UI with blue primary color scheme
```

---

**Document Version History**
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Dec 2024 | - | Initial PRD |