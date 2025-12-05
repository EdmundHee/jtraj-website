# JTR Auction House - Development Todo
## Complete Feature Checklist & Implementation Guide

**Tech Stack:** Nuxt 4 | TailwindCSS | Supabase  
**Project:** jtraj.com Website Revamp

---

## Quick Reference - AI Prompts

### Master Prompt for Full Project Setup
```
I need to create a property auction website for JTR Auction House Malaysia using:
- Nuxt 4 (latest)
- TailwindCSS 4
- Supabase (PostgreSQL, Auth, Storage)
- TypeScript

The website is for Malaysia's largest real estate auctioneer since 1985. 
Features include property listings from banks (RHB, BSN, AFFIN, LPPSA, Bank Islam), 
online eBidding guide, owner sale submissions, and admin panel.

Start with project initialization and folder structure setup.
```

---

## Phase 1: Project Foundation

### 1.1 Project Setup
- [ ] Initialize Nuxt 4 project with TypeScript
- [ ] Install and configure TailwindCSS 4
- [ ] Setup Supabase project and get credentials
- [ ] Configure environment variables
- [ ] Setup folder structure
- [ ] Configure Nuxt modules (SEO, Image, Sitemap)

**Prompt:**
```
Initialize a Nuxt 4 project with the following:
1. TypeScript enabled
2. TailwindCSS 4 with custom config
3. Supabase integration (@nuxtjs/supabase)
4. @nuxt/image for image optimization
5. @nuxtjs/seo for meta tags
6. @nuxtjs/sitemap for XML sitemap

Folder structure:
/components (ui/, property/, layout/, forms/)
/composables
/layouts
/pages
/server/api
/types
/utils
/assets/css

Create the nuxt.config.ts with all configurations.
```

### 1.2 TailwindCSS Configuration
- [ ] Setup custom color palette
- [ ] Configure custom fonts (Inter)
- [ ] Setup responsive breakpoints
- [ ] Create utility classes for common patterns
- [ ] Configure dark mode (optional)

**Prompt:**
```
Create a TailwindCSS configuration for a professional property auction website:

Color palette:
- Primary: Royal Blue (#1E40AF)
- Secondary: Emerald Green (#059669)  
- Accent: Amber (#F59E0B)

Typography: Inter font family
Custom components: buttons, cards, badges, form inputs
Add container padding and max-width configurations
```

### 1.3 Supabase Database Setup
- [ ] Create all database tables (see PRD for schema)
- [ ] Setup Row Level Security policies
- [ ] Create database indexes for performance
- [ ] Setup storage buckets (property-images, documents)
- [ ] Create database functions/triggers

**Prompt:**
```
Create Supabase database schema for a property auction website:

Tables needed:
1. profiles (extends auth.users) - user profiles with roles
2. banks - bank/institution information
3. properties - auction property listings with all details
4. owner_submissions - property owner sale requests
5. subscribers - newsletter subscriptions
6. inquiries - property inquiries
7. auction_dates - upcoming auction dates
8. pages - CMS content pages
9. documents - downloadable files

Include:
- UUID primary keys
- Timestamps (created_at, updated_at)
- Proper foreign key relationships
- Row Level Security policies
- Indexes on frequently queried columns

Property table should have: title, description, address, state, city, 
property_type, reserve_price, auction_date, bank_id, sale_type, 
images array, documents array, status, coordinates
```

### 1.4 Authentication Setup
- [ ] Configure Supabase Auth
- [ ] Create login page
- [ ] Create registration page
- [ ] Create password reset flow
- [ ] Setup auth middleware
- [ ] Create auth composables

**Prompt:**
```
Implement authentication system for Nuxt 4 with Supabase:

1. Create pages:
   - /auth/login - email/password login
   - /auth/register - user registration with profile
   - /auth/forgot-password - password reset request
   - /auth/reset-password - password reset form

2. Create composables:
   - useAuth() - login, logout, register, resetPassword
   - useUser() - current user state, profile

3. Create middleware:
   - auth.ts - protect authenticated routes
   - admin.ts - protect admin routes

4. Features:
   - Social login (Google) - optional
   - Email verification
   - Remember me option
   - Redirect after login

Use Supabase Auth with TailwindCSS styled forms.
```

### 1.5 Base Layout Components
- [ ] Create default layout
- [ ] Create admin layout
- [ ] Build header/navigation component
- [ ] Build footer component
- [ ] Build mobile menu
- [ ] Create breadcrumb component

**Prompt:**
```
Create base layout components for JTR Auction House:

1. Default Layout (/layouts/default.vue):
   - Header with logo, navigation, search, auth buttons
   - Main content area
   - Footer with links, contact info, newsletter

2. Navigation:
   - Desktop: horizontal nav with dropdowns
   - Mobile: hamburger menu with slide-out drawer
   - Links: Home, Find Property (dropdown), eBidding, Owner Sale, About (dropdown), Contact
   - Sticky header on scroll

3. Footer sections:
   - Quick Links
   - Contact Information (phone, WhatsApp, email)
   - Operating hours
   - Social media links
   - Newsletter signup
   - Copyright

4. Admin Layout:
   - Sidebar navigation
   - Top bar with user menu
   - Main content area

Use TailwindCSS with responsive design, mobile-first approach.
```

---

## Phase 2: Core Features

### 2.1 Homepage
- [ ] Hero section with CTA
- [ ] Quick search bar
- [ ] Featured properties carousel
- [ ] Upcoming auctions calendar widget
- [ ] Bank partners section
- [ ] Statistics counters
- [ ] Newsletter signup section
- [ ] Quick links grid

**Prompt:**
```
Create the homepage for JTR Auction House property auction website:

Sections:
1. Hero Section:
   - Background image/gradient
   - Headline: "Malaysia's Premier Property Auction House Since 1985"
   - Quick search bar (location, property type, price range)
   - CTA buttons: "View All Properties", "Sell Your Property"

2. Featured Properties:
   - Carousel/grid of 6-8 featured properties
   - Property card: image, title, price, location, auction date
   - "View All" link

3. Upcoming Auctions:
   - Calendar widget showing auction dates
   - Next 3 auctions with details
   - Filter by bank

4. Bank Partners:
   - Logo carousel: RHB, AFFIN, LPPSA, Bank Islam, BSN
   - Clickable to filter properties

5. Statistics:
   - Properties listed
   - Years of experience (39+)
   - Successful auctions
   - Animated counters

6. Why Choose Us:
   - 3-4 feature cards with icons

7. Newsletter Signup:
   - Email input with subscribe button
   - Brief description

Make it visually appealing, professional, and fully responsive.
```

### 2.2 Property Listing Page
- [ ] Property grid/list view
- [ ] Advanced filter sidebar
- [ ] Search functionality
- [ ] Sort options
- [ ] Pagination
- [ ] URL query params for filters
- [ ] Loading states
- [ ] Empty state
- [ ] Property cards

**Prompt:**
```
Create a property listing page with advanced filtering for auction properties:

Layout:
- Sidebar filters (desktop) / Bottom sheet filters (mobile)
- Main content with property grid
- Header with view toggle, sort, results count

Filters (all multi-select capable):
1. Bank/Institution: RHB, BSN, AFFIN, LPPSA, Bank Islam, High Court, Land Office, Owner Sale
2. State/Location: All 16 Malaysian states
3. Property Type: Apartment, Condominium, Landed, Commercial, Industrial, Land
4. Price Range: Slider from RM0 to RM5M+
5. Auction Date: Date range picker
6. Sale Type: LACA, High Court, Land Office, Owner Sale, Reduced Price

Features:
- Grid (3-4 cols) / List view toggle
- Sort: Auction Date, Price Low-High, Price High-Low, Newest
- Pagination or infinite scroll
- URL state sync for shareable filtered results
- Clear all filters button
- Active filters chips

Property Card:
- Image with badge (Reduced Price, Featured)
- Property type & state
- Title/Address
- Reserve Price
- Auction Date
- Bank logo
- Quick action buttons

Fetch from Supabase with server-side filtering.
```

### 2.3 Property Detail Page
- [ ] Image gallery with lightbox
- [ ] Property info sections
- [ ] Auction details
- [ ] Location map
- [ ] Inquiry form
- [ ] Share buttons
- [ ] Related properties
- [ ] Download documents
- [ ] Print view

**Prompt:**
```
Create a property detail page for auction properties:

URL: /properties/[id]

Sections:
1. Image Gallery:
   - Main image with thumbnail navigation
   - Lightbox on click
   - Swipeable on mobile
   - Support 5-10 images

2. Property Header:
   - Title/Address
   - Reserve Price (highlighted)
   - Property type badge
   - Bank/Institution logo
   - Share buttons (WhatsApp, Facebook, Copy Link)
   - Save to favorites (if logged in)

3. Auction Details Card:
   - Auction Date & Time
   - Venue/Location
   - Bank/Auctioneer
   - Case/Lot Number
   - Status badge

4. Property Information:
   - Type, Tenure
   - Land Area, Built-up Area
   - Number of rooms (if applicable)
   - Other specifications

5. Description:
   - Full property description
   - Conditions/Notes

6. Location:
   - Full address
   - Google Maps embed
   - Nearby landmarks

7. Documents:
   - Downloadable auction notice
   - Terms & conditions
   - PDF viewer/download

8. Inquiry Form:
   - Name, Email, Phone, Message
   - Sends to Supabase inquiries table

9. Related Properties:
   - 3-4 similar properties carousel

Implement SEO meta tags, structured data (JSON-LD) for the property.
```

### 2.4 Property Search
- [ ] Global search component
- [ ] Search results page
- [ ] Search suggestions/autocomplete
- [ ] Recent searches
- [ ] Search analytics

**Prompt:**
```
Implement property search functionality:

1. Global Search Bar (in header):
   - Text input with icon
   - Placeholder: "Search by location, property name..."
   - Autocomplete dropdown
   - Recent searches (localStorage)
   - Press Enter to search

2. Search Results Page (/search):
   - Query param: ?q=searchterm
   - Full-text search on: title, address, description, city
   - Display results in grid
   - "X results for 'query'"
   - No results state with suggestions

3. Autocomplete:
   - Show matching properties (top 5)
   - Show matching locations
   - Show matching property types
   - Debounced API calls

Use Supabase full-text search or implement client-side filtering.
```

### 2.5 Contact & Inquiries
- [ ] Contact page
- [ ] Contact form
- [ ] WhatsApp integration
- [ ] Inquiry submission to Supabase
- [ ] Email notifications (optional)

**Prompt:**
```
Create contact page and inquiry system:

Contact Page (/contact):
1. Contact Form:
   - Name, Email, Phone (required)
   - Subject dropdown
   - Message textarea
   - Submit to Supabase inquiries table
   - Success/error messages

2. Contact Information:
   - Office address with map
   - Phone: 03-2274 9999
   - Mobile: 014-6793 560
   - Email: admin@jtraj.com
   - WhatsApp with QR code
   - Operating hours: Mon-Fri 9am-6pm

3. Map:
   - Google Maps embed
   - Office location marker

4. Social Links:
   - Facebook
   - WhatsApp

WhatsApp Integration:
- Floating WhatsApp button (bottom right)
- Click to chat with pre-filled message
- Use WhatsApp API link

Property Inquiry (on detail page):
- Pre-fill property reference in message
- Store property_id in inquiries table
```

---

## Phase 3: Content Pages

### 3.1 eBidding Section
- [ ] eBidding overview page
- [ ] Registration guide (step-by-step)
- [ ] Terms & conditions page
- [ ] Downloadable forms page
- [ ] Demo/tutorial page
- [ ] Important instructions
- [ ] External portal link

**Prompt:**
```
Create eBidding guide section for online auction bidding:

Pages:
1. eBidding Overview (/ebidding):
   - What is online eBidding
   - Benefits of online bidding
   - Quick links to all guides
   - CTA to eBidding portal (external: auctionsale.com.my)

2. Registration Guide (/ebidding/register):
   - Step-by-step instructions with screenshots
   - Required documents list
   - Account creation process
   - Numbered steps with icons

3. Terms & Conditions (/ebidding/terms):
   - Full legal terms
   - Accordion sections for readability
   - Last updated date

4. Downloadable Forms (/ebidding/forms):
   - Online Bidding Registration Form (PDF)
   - Letter of Authorization (PDF)
   - Download buttons with file size
   - Store in Supabase Storage

5. Demo (/ebidding/demo):
   - Video tutorial (if available)
   - Interactive walkthrough
   - Screenshots gallery

6. Important Instructions (/ebidding/instructions):
   - Bidding process explanation
   - Do's and Don'ts
   - Technical requirements

Include breadcrumbs, sidebar navigation within section.
```

### 3.2 Owner Sale Section
- [ ] Owner sale landing page
- [ ] Benefits of auction sale
- [ ] How to sell guide
- [ ] Submission form
- [ ] FAQ page
- [ ] Success stories (optional)

**Prompt:**
```
Create Owner Auction Sale section for private property sellers:

Pages:
1. Owner Sale Landing (/sell):
   - Hero: "Sell Your Property at Auction"
   - Value proposition points
   - Process overview (4 steps)
   - CTA to submission form
   - Testimonials (optional)

2. Benefits (/sell/benefits):
   - Why sell at auction
   - Comparison with traditional sale
   - Statistics/success rates
   - Icon-based feature list

3. How to Sell Guide (/sell/guide):
   - Step-by-step process
   - Required documents
   - Timeline expectations
   - Fees and commissions
   - FAQs inline

4. Submission Form (/sell/submit):
   - Property details:
     - Address
     - Property type
     - Size (land/built-up)
     - Asking price
     - Reason for selling
   - Contact details
   - Document uploads (optional)
   - Submit to Supabase owner_submissions table
   - Success confirmation with next steps

5. FAQ (/sell/faq):
   - Accordion style Q&A
   - Categories: Process, Fees, Timeline, Legal
   - Contact CTA at bottom

6. Listed Properties (/sell/properties):
   - Filter properties by sale_type = 'owner_sale'
   - Reuse property listing components
```

### 3.3 About Section
- [ ] About us page
- [ ] JTR Auction House info
- [ ] Licensed auctioneers page
- [ ] Auction hall page
- [ ] Awards & appreciation
- [ ] Our services page

**Prompt:**
```
Create About section pages:

1. About Us (/about):
   - Company overview
   - History since 1985
   - Mission & Vision
   - Team leadership (optional)
   - Statistics/achievements
   - Image gallery

2. JTR Auction House (/about/auction-house):
   - About the company
   - Physical location
   - Services overview
   - Partner banks

3. Licensed Auctioneers (/about/auctioneers):
   - Table/grid of licensed auctioneers
   - Name, License number, State
   - Credentials display
   - Professional photos (if available)

4. Auction Hall (/about/hall):
   - Physical auction venue info
   - Photo gallery of the hall
   - Address and directions
   - Capacity and facilities
   - Map embed

5. Awards & Appreciation (/about/awards):
   - Awards received
   - Certifications
   - Partner recognitions
   - Image gallery
   - Timeline format

6. Our Services (/about/services):
   - Services offered:
     - Bank property auctions
     - High court auctions
     - Owner sale auctions
     - Property valuation
     - Auction marketing
   - Each service with description
   - CTA for each service

Use consistent layout with sidebar navigation within About section.
```

### 3.4 Resources & Guides
- [ ] Auction guide page
- [ ] Bidding tips page
- [ ] Terms of payment
- [ ] Conditions of sale
- [ ] Do's and Don'ts

**Prompt:**
```
Create Resources and Guides section:

1. Auction Guide (/guides/auction-guide):
   - Complete guide to participating in auctions
   - Pre-auction preparation
   - During the auction
   - Post-auction process
   - Payment procedures
   - Illustrated with icons/images

2. Bidding Tips (/guides/tips):
   - Professional tips for auction bidding
   - Research checklist
   - Financial preparation
   - Legal considerations
   - Common mistakes to avoid

3. Do's and Don'ts (/guides/dos-donts):
   - Two-column layout
   - Do's with green checkmarks
   - Don'ts with red X marks
   - Clear, concise points

4. Terms of Payment (/guides/payment):
   - Deposit requirements
   - Balance payment timeline
   - Accepted payment methods
   - Bank details
   - Penalty information

5. Conditions of Sale (/guides/conditions):
   - Legal conditions
   - Buyer responsibilities
   - Property transfer process
   - Disclaimer
   - Accordion sections

Create a guides index page (/guides) with cards linking to all guides.
```

---

## Phase 4: Admin Panel

### 4.1 Admin Dashboard
- [ ] Overview statistics cards
- [ ] Recent properties chart
- [ ] Recent inquiries list
- [ ] Quick actions
- [ ] Activity feed

**Prompt:**
```
Create Admin Dashboard for JTR Auction House:

URL: /admin (protected by admin middleware)

Dashboard Components:
1. Statistics Cards:
   - Total Properties (with trend)
   - Upcoming Auctions
   - Total Inquiries
   - Newsletter Subscribers
   - Pending Owner Submissions

2. Charts:
   - Properties by month (line chart)
   - Properties by type (pie chart)
   - Inquiries trend (bar chart)

3. Recent Activity:
   - Latest 10 inquiries
   - Latest 5 property additions
   - Latest owner submissions

4. Quick Actions:
   - Add New Property
   - View All Inquiries
   - Manage Auctions

5. Upcoming Auctions:
   - Next 5 auction dates
   - Property count per date

Use chart library (Chart.js or ApexCharts).
Admin layout with sidebar navigation.
```

### 4.2 Property Management
- [ ] Property list with filters
- [ ] Add property form
- [ ] Edit property form
- [ ] Delete confirmation
- [ ] Bulk actions
- [ ] Image upload
- [ ] Document upload
- [ ] Status management

**Prompt:**
```
Create Property Management CRUD for admin panel:

1. Property List (/admin/properties):
   - Data table with columns: Image, Title, Bank, Price, Auction Date, Status, Actions
   - Filters: Bank, Status, Date range
   - Search by title/address
   - Pagination
   - Bulk select and delete
   - Status filter tabs: All, Upcoming, Sold, Cancelled

2. Add Property (/admin/properties/add):
   Form sections:
   - Basic Info: Title, Description
   - Location: Address, State, City, Postcode, Coordinates
   - Property Details: Type, Tenure, Land Area, Built-up Area
   - Auction Info: Date, Time, Venue, Bank, Case Number
   - Pricing: Reserve Price, Market Value
   - Media: Image upload (multiple, drag-drop), Document upload
   - Settings: Featured, Reduced Price, Status
   
   - Image preview and reorder
   - Save as draft option
   - Validation on all required fields

3. Edit Property (/admin/properties/[id]/edit):
   - Same form as Add
   - Pre-populated with existing data
   - Image management (add/remove)
   - Update history (optional)

4. Delete:
   - Confirmation modal
   - Soft delete option

Use Supabase Storage for images and documents.
Form validation with VeeValidate or native.
```

### 4.3 Content Management
- [ ] Bank/Institution management
- [ ] Auction dates management
- [ ] Static pages editor
- [ ] Document management

**Prompt:**
```
Create Content Management sections for admin:

1. Bank Management (/admin/banks):
   - List all banks/institutions
   - Add/Edit bank: Name, Short code, Logo upload, Active status
   - Used for property filtering

2. Auction Dates (/admin/auctions):
   - Calendar view of auction dates
   - Add auction: Date, Venue, Bank, Description
   - Edit/Delete existing
   - Mark as completed

3. Pages Management (/admin/pages):
   - List all static pages
   - Rich text editor for content (TipTap or similar)
   - Edit: Title, Slug, Content, Meta title, Meta description
   - Published/Draft status
   - Preview before publish

4. Documents (/admin/documents):
   - Upload PDFs and forms
   - Categories: eBidding, Legal, Marketing
   - Title, Category, File upload
   - Download/Delete
```

### 4.4 Inquiry Management
- [ ] Inquiry list
- [ ] Inquiry detail view
- [ ] Status updates
- [ ] Response tracking

**Prompt:**
```
Create Inquiry Management for admin:

1. Inquiry List (/admin/inquiries):
   - Table: Date, Name, Email, Property, Status, Actions
   - Filter by status: New, Responded, Closed
   - Search by name/email
   - Click to view details

2. Inquiry Detail (/admin/inquiries/[id]):
   - Full inquiry information
   - Property reference (link to property)
   - Contact details with click-to-call/email
   - Status dropdown to update
   - Notes field for admin
   - Response history

3. Quick Actions:
   - Mark as Responded
   - Send WhatsApp (open WhatsApp with number)
   - Send Email (mailto link)
```

### 4.5 Owner Submissions Management
- [ ] Submission list
- [ ] Review and status update
- [ ] Convert to property listing

**Prompt:**
```
Create Owner Submission Management:

1. Submissions List (/admin/submissions):
   - Table: Date, Owner Name, Property Address, Status, Actions
   - Filter: Pending, Reviewing, Approved, Rejected
   - Sort by date

2. Submission Detail (/admin/submissions/[id]):
   - All submission details
   - Property information
   - Contact information
   - Uploaded documents (if any)
   - Admin notes field
   - Status update dropdown
   
3. Actions:
   - Approve: Option to convert to property listing
   - Reject: Send rejection with reason
   - Request more info
   - Contact owner (WhatsApp/Email)

4. Convert to Property:
   - Pre-fill property form with submission data
   - Add additional required fields
   - Link submission to created property
```

### 4.6 Newsletter Management
- [ ] Subscriber list
- [ ] Export subscribers
- [ ] Unsubscribe management

**Prompt:**
```
Create Newsletter Subscriber Management:

1. Subscriber List (/admin/subscribers):
   - Table: Email, Name, Subscribed Date, Status
   - Search by email
   - Filter: Active, Unsubscribed
   - Pagination

2. Actions:
   - Export to CSV
   - Bulk delete
   - Manual unsubscribe

3. Statistics:
   - Total subscribers
   - Growth chart
   - Recent signups

Optional: Integration with Mailchimp/SendGrid for sending newsletters
```

---

## Phase 5: User Features

### 5.1 User Dashboard
- [ ] Dashboard overview
- [ ] Saved properties
- [ ] My inquiries
- [ ] Profile settings

**Prompt:**
```
Create User Dashboard for authenticated users:

1. Dashboard Home (/dashboard):
   - Welcome message with name
   - Saved properties count
   - Recent inquiries
   - Quick actions

2. Saved Properties (/dashboard/saved):
   - Grid of favorited properties
   - Remove from saved
   - View property link
   - Empty state if none

3. My Inquiries (/dashboard/inquiries):
   - List of submitted inquiries
   - Property reference
   - Status indicator
   - Date submitted

4. Profile Settings (/dashboard/profile):
   - Edit profile information
   - Name, Phone, Address
   - Change password
   - Delete account option

5. Notifications (optional):
   - Email preferences
   - Auction reminders
```

### 5.2 Favorites/Save Property
- [ ] Save button on property cards
- [ ] Save button on property detail
- [ ] Favorites composable
- [ ] Persist to Supabase

**Prompt:**
```
Implement Save/Favorite Property feature:

1. Create saved_properties table:
   - user_id (FK to profiles)
   - property_id (FK to properties)
   - created_at

2. Composable useFavorites():
   - addFavorite(propertyId)
   - removeFavorite(propertyId)
   - isFavorite(propertyId)
   - getFavorites()

3. UI:
   - Heart icon button on property card
   - Toggle filled/outline state
   - Show toast on save/unsave
   - Require login if not authenticated

4. Integration:
   - Add to property card component
   - Add to property detail page
   - Show in user dashboard
```

---

## Phase 6: Enhancements

### 6.1 SEO Optimization
- [ ] Dynamic meta tags per page
- [ ] Structured data (JSON-LD)
- [ ] Sitemap generation
- [ ] robots.txt
- [ ] Canonical URLs
- [ ] Open Graph tags
- [ ] Twitter cards

**Prompt:**
```
Implement SEO optimization for the auction website:

1. Meta Tags (using @nuxtjs/seo):
   - Dynamic title: "Property Name | JTR Auction House"
   - Description from property/page content
   - Keywords
   - Canonical URLs

2. Structured Data:
   - Organization schema (JTR Auction House)
   - Property schema for listings (Product/Offer)
   - BreadcrumbList schema
   - LocalBusiness schema

3. Sitemap (/sitemap.xml):
   - All static pages
   - All properties (dynamic)
   - Update lastmod on changes
   - Priority settings

4. robots.txt:
   - Allow all public pages
   - Disallow /admin, /dashboard
   - Link to sitemap

5. Social Sharing:
   - Open Graph: title, description, image
   - Twitter Card: summary_large_image
   - WhatsApp preview optimization
```

### 6.2 Performance Optimization
- [ ] Image optimization
- [ ] Lazy loading
- [ ] Code splitting
- [ ] Caching strategy
- [ ] CDN setup

**Prompt:**
```
Implement performance optimizations:

1. Image Optimization:
   - Use @nuxt/image with responsive sizes
   - WebP/AVIF format support
   - Lazy loading below fold
   - Blur placeholder

2. Code Optimization:
   - Route-based code splitting (automatic in Nuxt)
   - Component lazy loading for heavy components
   - Tree-shaking unused code

3. Caching:
   - API response caching
   - Static page ISR (Incremental Static Regeneration)
   - Browser caching headers

4. Loading States:
   - Skeleton loaders for property cards
   - Loading spinners
   - Progressive image loading

5. Monitoring:
   - Core Web Vitals tracking
   - Lighthouse CI in deployment
```

### 6.3 Analytics & Tracking
- [ ] Google Analytics 4 setup
- [ ] Event tracking
- [ ] Conversion tracking
- [ ] Facebook Pixel (optional)

**Prompt:**
```
Implement analytics tracking:

1. Google Analytics 4:
   - Install vue-gtag or nuxt-gtag
   - Page view tracking
   - Event tracking:
     - Property view
     - Inquiry submission
     - Search performed
     - Filter used
     - Document download
     - WhatsApp click
     - Newsletter signup

2. Custom Events:
   - track_property_view(propertyId)
   - track_inquiry_submit(propertyId)
   - track_search(query)
   - track_download(documentName)

3. Enhanced Ecommerce (optional):
   - Property impressions
   - Property clicks
   - Add to favorites

4. Facebook Pixel (optional):
   - ViewContent on property pages
   - Lead on inquiry submission
```

### 6.4 Email Notifications
- [ ] Inquiry notification to admin
- [ ] Inquiry confirmation to user
- [ ] Newsletter welcome email
- [ ] Submission status updates

**Prompt:**
```
Implement email notifications using Supabase Edge Functions + SendGrid/Resend:

1. Inquiry Notifications:
   - To admin: New inquiry received
   - To user: Inquiry confirmation

2. Newsletter:
   - Welcome email on subscription

3. Owner Submission:
   - Confirmation email
   - Status update emails (approved/rejected)

4. Implementation:
   - Create Supabase Edge Functions
   - Use email service API (SendGrid/Resend)
   - Email templates (HTML)
   - Trigger on database inserts/updates
```

---

## Phase 7: Testing & Deployment

### 7.1 Testing
- [ ] Unit tests for composables
- [ ] Component testing
- [ ] E2E tests for critical flows
- [ ] Accessibility testing
- [ ] Cross-browser testing
- [ ] Mobile testing

**Prompt:**
```
Set up testing for the Nuxt application:

1. Unit Tests (Vitest):
   - Test composables (useAuth, useFavorites)
   - Test utility functions
   - Test form validation

2. Component Tests:
   - Property card rendering
   - Filter component
   - Form submissions

3. E2E Tests (Playwright):
   - Homepage loads correctly
   - Property search and filter
   - Property detail page
   - Inquiry form submission
   - User login flow
   - Admin property CRUD

4. Accessibility:
   - axe-core integration
   - Keyboard navigation
   - Screen reader testing
```

### 7.2 Deployment
- [ ] Choose hosting (Vercel/Netlify/Cloudflare)
- [ ] Configure deployment pipeline
- [ ] Setup custom domain
- [ ] SSL certificate
- [ ] Environment variables
- [ ] Database backups

**Prompt:**
```
Deploy Nuxt application:

1. Hosting Setup (Vercel recommended):
   - Connect GitHub repository
   - Configure build settings
   - Set environment variables (Supabase URL, Key)
   - Custom domain: jtraj.com

2. DNS Configuration:
   - Point domain to hosting
   - SSL certificate (automatic)
   - www redirect

3. CI/CD:
   - Auto-deploy on main branch push
   - Preview deployments for PRs
   - Build checks before deploy

4. Supabase Production:
   - Enable production mode
   - Configure backups
   - Review RLS policies
   - Set up monitoring
```

### 7.3 Data Migration
- [ ] Export existing data from ASP site
- [ ] Transform data to new schema
- [ ] Import to Supabase
- [ ] Verify data integrity
- [ ] URL redirects

**Prompt:**
```
Plan data migration from existing website:

1. Data Export:
   - Extract property listings
   - Extract user data (if any)
   - Extract static content

2. Data Transformation:
   - Map old fields to new schema
   - Clean and normalize data
   - Generate UUIDs

3. Import Process:
   - Use Supabase CLI or CSV import
   - Batch imports for large datasets
   - Verify relationships

4. URL Redirects:
   - Map old URLs to new structure
   - Create redirect rules
   - Preserve SEO value
   
   Examples:
   - /property_listing.asp?mark=rhb → /properties?bank=rhb
   - /aboutus1.html → /about
```

---

## Quick Commands Reference

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate

# Run tests
npm run test

# Run linting
npm run lint
```

### Supabase CLI
```bash
# Login to Supabase
supabase login

# Link to project
supabase link --project-ref YOUR_PROJECT_REF

# Generate types
supabase gen types typescript --project-id YOUR_PROJECT_ID > types/supabase.ts

# Run migrations
supabase db push

# Reset database
supabase db reset
```

---

## Dependencies Checklist

### Core
- [ ] nuxt@^4.0.0
- [ ] vue@^3.5.0
- [ ] typescript

### Styling
- [ ] tailwindcss@^4.0.0
- [ ] @tailwindcss/forms
- [ ] @tailwindcss/typography

### Nuxt Modules
- [ ] @nuxtjs/supabase
- [ ] @nuxt/image
- [ ] @nuxtjs/seo
- [ ] @nuxtjs/sitemap
- [ ] nuxt-icon

### UI Components
- [ ] @headlessui/vue
- [ ] @vueuse/core

### Forms & Validation
- [ ] vee-validate
- [ ] @vee-validate/zod
- [ ] zod

### Utilities
- [ ] date-fns
- [ ] slugify

### Development
- [ ] @types/node
- [ ] eslint
- [ ] prettier

---

## File Structure Reference

```
jtr-auction-house/
├── .nuxt/
├── assets/
│   └── css/
│       └── main.css
├── components/
│   ├── ui/
│   │   ├── Button.vue
│   │   ├── Card.vue
│   │   ├── Modal.vue
│   │   ├── Badge.vue
│   │   └── ...
│   ├── layout/
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── MobileMenu.vue
│   │   └── Breadcrumb.vue
│   ├── property/
│   │   ├── PropertyCard.vue
│   │   ├── PropertyGrid.vue
│   │   ├── PropertyFilters.vue
│   │   ├── PropertyGallery.vue
│   │   └── PropertyMap.vue
│   └── forms/
│       ├── InquiryForm.vue
│       ├── ContactForm.vue
│       ├── SearchForm.vue
│       └── OwnerSubmissionForm.vue
├── composables/
│   ├── useAuth.ts
│   ├── useProperties.ts
│   ├── useFavorites.ts
│   ├── useInquiries.ts
│   └── useSearch.ts
├── layouts/
│   ├── default.vue
│   └── admin.vue
├── middleware/
│   ├── auth.ts
│   └── admin.ts
├── pages/
│   ├── index.vue
│   ├── properties/
│   │   ├── index.vue
│   │   └── [id].vue
│   ├── ebidding/
│   │   ├── index.vue
│   │   ├── register.vue
│   │   ├── terms.vue
│   │   └── forms.vue
│   ├── sell/
│   │   ├── index.vue
│   │   ├── benefits.vue
│   │   ├── guide.vue
│   │   ├── submit.vue
│   │   └── faq.vue
│   ├── about/
│   │   ├── index.vue
│   │   ├── auction-house.vue
│   │   ├── auctioneers.vue
│   │   ├── hall.vue
│   │   ├── awards.vue
│   │   └── services.vue
│   ├── guides/
│   │   ├── index.vue
│   │   ├── auction-guide.vue
│   │   ├── tips.vue
│   │   ├── dos-donts.vue
│   │   ├── payment.vue
│   │   └── conditions.vue
│   ├── contact.vue
│   ├── search.vue
│   ├── auth/
│   │   ├── login.vue
│   │   ├── register.vue
│   │   └── forgot-password.vue
│   ├── dashboard/
│   │   ├── index.vue
│   │   ├── saved.vue
│   │   ├── inquiries.vue
│   │   └── profile.vue
│   └── admin/
│       ├── index.vue
│       ├── properties/
│       ├── banks/
│       ├── auctions/
│       ├── inquiries/
│       ├── submissions/
│       ├── subscribers/
│       └── pages/
├── public/
│   ├── favicon.ico
│   └── images/
├── server/
│   └── api/
├── types/
│   ├── index.ts
│   └── supabase.ts
├── utils/
│   ├── formatters.ts
│   └── validators.ts
├── nuxt.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Progress Tracker

| Phase | Status | Progress |
|-------|--------|----------|
| Phase 1: Foundation | ⬜ Not Started | 0% |
| Phase 2: Core Features | ⬜ Not Started | 0% |
| Phase 3: Content Pages | ⬜ Not Started | 0% |
| Phase 4: Admin Panel | ⬜ Not Started | 0% |
| Phase 5: User Features | ⬜ Not Started | 0% |
| Phase 6: Enhancements | ⬜ Not Started | 0% |
| Phase 7: Testing & Deploy | ⬜ Not Started | 0% |

**Legend:** ⬜ Not Started | 🟡 In Progress | ✅ Completed

---

*Last Updated: December 2024*