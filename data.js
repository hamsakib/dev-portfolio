// All portfolio content lives here so the home page and project pages stay in sync.
window.PORTFOLIO = {
  projects: [
    {
      slug: "skinmax",
      name: "Skinmax BD",
      tagline: "Production skincare e-commerce platform for Bangladesh",
      image: "assets/work/skinmax.webp",
      stack: ["Next.js 15", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS", "Vercel", "Gemini API"],
      live: "https://skinmaxbd.com",
      github: "",
      githubNote: "Private repository (a live business); code walkthrough available on request.",
      description:
        "A real online skincare shop that I designed, built and run as co-founder and CTO. Customers browse 35+ products from 16 brands, log in with an SMS one-time password, order with cash on delivery, and get personalised routines from a skin quiz. Behind it is a full admin back office: order management, courier booking through three courier APIs, barcode scanning with the phone camera, printable invoices, finance tracking and visitor insights. It has taken real customer orders since October 2026.",
      features: [
        "Phone-number login with SMS one-time passwords",
        "Skin test quiz that recommends a routine from live products",
        "Skinie, a Gemini-powered chat assistant that answers in English, Bangla and Banglish",
        "Admin dashboard: orders, courier booking (RedX, Steadfast, Pathao), invoices, finance",
        "English and Bangla SEO guides with structured data",
      ],
      challenges: [
        "Pages took 700 to 900 ms because the server ran in Ohio while customers are in Dhaka; moving to a Mumbai region and adding an edge cache brought cached pages down to under 100 ms.",
        "Caching pages safely: a cached page must never show one customer's cart or name to another, so pages are only cached when the request carries no identity cookie.",
        "Builds stalled on database connection pipelining; I traced it to the Postgres driver and rewrote the transaction handling.",
      ],
      future: [
        "Product reviews and ratings",
        "Online payment (bKash and cards) alongside cash on delivery",
        "Loyalty points for repeat customers",
      ],
    },
    {
      slug: "glowra",
      name: "Glowra",
      tagline: "Full-stack skincare marketplace with role-based dashboards",
      image: "assets/work/glowra.webp",
      stack: ["Next.js 16", "React 19", "Tailwind CSS", "Express 5", "MongoDB", "Mongoose", "JWT", "Recharts"],
      live: "",
      github: "",
      description:
        "A skincare marketplace with a Next.js front end and an Express and MongoDB API. Visitors explore products with search, filters, sorting and pagination; signed-in users buy, review and manage their own listings; admins manage users, products, categories and reports from a dashboard with live charts.",
      features: [
        "JWT authentication with bcrypt password hashing and role-based access (user and admin)",
        "Explore page with search, category and price filters, sorting and server-side pagination",
        "Product details with image gallery, specifications, reviews and related products",
        "User and admin dashboards with bar, line and pie charts from real data",
        "Light and dark mode, fully responsive layout",
      ],
      challenges: [
        "Keeping filtering, sorting and pagination on the server so the page stays fast as the catalogue grows.",
        "Designing role-based middleware so admin routes are protected on the API, not only hidden in the UI.",
      ],
      future: ["Online payments", "Seller verification flow", "Email notifications for orders"],
    },
    {
      slug: "ai-lead-qualifier",
      name: "AI Lead Qualifier",
      tagline: "LLM webhook service that scores sales leads and updates the CRM",
      image: "assets/work/ai-lead-qualifier.webp",
      stack: ["Node.js", "TypeScript", "Claude API", "Zod", "HubSpot API", "Slack API"],
      live: "",
      liveNote: "Back-end service (no web UI); see the repository for a demo run.",
      github: "https://github.com/hamsakib/ai-lead-qualifier",
      description:
        "A webhook service for small businesses whose website leads go cold. Each new lead is validated, scored by an LLM (Claude by default, with Gemini or a local Ollama model as alternatives) into a structured verdict, saved idempotently, written to HubSpot with the AI's reasoning as a note, and announced in Slack when it is hot.",
      features: [
        "Structured JSON scoring: score, intent, urgency, budget, summary and a suggested reply",
        "Business-rule check with one automatic retry, then a 'needs review' state for a person",
        "Idempotent saves so a repeated webhook never creates duplicates",
        "HubSpot contact upsert and Slack alerts for hot leads",
      ],
      challenges: [
        "LLM output is not always valid; I added schema validation and a retry that feeds the errors back to the model.",
        "Replying to the webhook fast while doing slow AI work afterwards, so the website form never times out.",
      ],
      future: ["A small dashboard for reviewing leads", "More CRM integrations (Pipedrive, Zoho)"],
    },
  ],
};
