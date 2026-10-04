import { CaseStudy, ConsultingService, AuditQuestion } from '../types';

export const CONSULTANT_INFO = {
  name: 'Ramesh Madaan',
  title: 'Business Growth Strategist & Sales Transformation Expert',
  tagline: 'Predictable, Scalable Revenue Architecture for B2B & Manufacturing Enterprises',
  phone: '+91 9780022101',
  email: 'ramesh.madaan@yahoo.com',
  linkedin: 'https://www.linkedin.com/in/rameshmadaan',
  location: 'New Delhi, India',
  experienceYears: '28+',
  summary:
    'With nearly three decades of enterprise leadership across Havells, Crompton Greaves, and Fine Switchgears, I advise manufacturing founders and B2B executive boards on architecting predictable revenue engines, expanding PAN-India distribution networks, securing tier-1 institutional approvals, and upskilling sales leadership.',
  education: [
    {
      institution: 'Indian Institute of Management, Lucknow',
      degree: 'Master of Business Administration (MBA)',
      year: '2020 – 2022',
      focus: 'Executive Business Strategy & General Management',
    },
    {
      institution: 'Punjab Technical University',
      degree: 'B.Tech, Industrial Engineering',
      year: '2007 – 2010',
      focus: 'Operations Research & Industrial Systems Optimization',
    },
    {
      institution: 'Punjab Technical University',
      degree: 'Master of Business Administration (MBA)',
      year: '2004 – 2006',
      focus: 'Business Management, Marketing & Channel Distribution',
    },
    {
      institution: 'Punjab State Board of Technical Education',
      degree: 'Diploma in Electrical Engineering',
      year: '1990 – 1993',
      focus: 'Power Systems, Switchgears & Control Panels',
    },
  ],
  leadershipMilestones: [
    {
      metric: '₹200+ Cr',
      label: 'B2B Business Executed',
      context: 'Pan-India Industrial & Flame-Proof Lighting leadership at Crompton Greaves',
    },
    {
      metric: '48% CAGR',
      label: 'Sustained Branch Growth',
      context: 'Achieved over a decade heading Havells branch operations with strict financial discipline',
    },
    {
      metric: '#1 Position',
      label: 'Market Share Turnaround',
      context: 'Catapulted Crompton fan division in Punjab from 5th to 1st place with 29% market share in 12 months',
    },
    {
      metric: '36+ Officers',
      label: 'Sales Engineers Led',
      context: 'Cross-functional enterprise sales teams managing panels, switchgears, cables & automation',
    },
  ],
};

export const SERVICES: ConsultingService[] = [
  {
    number: '01',
    title: 'Sales Organization Transformation',
    shortDesc: 'Re-engineering sales force structure, quota models, and conversion cadences to accelerate pipeline velocity.',
    fullDesc:
      'Turn reactive sales teams into predictable revenue engines. We review role design, territory distribution, KPI architectures, pipeline review rhythms, and frontline incentive models to remove sales frictions and eliminate revenue leaks.',
    deliverables: [
      'Comprehensive Sales Diagnostic & Gap Assessment',
      'Incentive & Quota Realignment Architecture',
      'Standardized B2B Sales Playbooks & Pipeline Milestones',
      'Managerial Coaching & Weekly Cadence Cadence Framework',
    ],
    idealFor: 'Manufacturing & engineering firms with plateaued sales cycles or underperforming regional teams.',
    tags: ['Sales Operations', 'Incentive Structuring', 'Pipeline Cadence'],
  },
  {
    number: '02',
    title: 'PAN-India Channel & Distribution Scaling',
    shortDesc: 'Designing distributor-dealer networks, super-stockist governance, and Point-of-Purchase (POP) extraction systems.',
    fullDesc:
      'Leverage battle-tested methodologies that expanded regional reach from 20% to 62% in saturated markets. We build dealer tiering, secondary sales tracking, dealer counter display formats, and structured margin schemes that ensure dealer loyalty.',
    deliverables: [
      'Multi-Tier Distribution Expansion Blueprint (State / Zonal / Tier-2/3)',
      'Dealer Selection, Onboarding & Extraction Playbook',
      'Point-of-Purchase (POP) & Display Counter Merchandising System',
      'DTR (Dealer-to-Retailer) & STR (Stockist-to-Retailer) Monitoring Protocols',
    ],
    idealFor: 'Electrical, building material, switchgear, and appliance brands aiming to conquer northern and pan-India regions.',
    tags: ['Dealer Networks', 'POP Visibility', 'Secondary Sales Extraction'],
  },
  {
    number: '03',
    title: 'Institutional & Specifier Approvals',
    shortDesc: 'Securing vendor approvals from top PSU consultants, EPC contractors, and marquee government agencies.',
    fullDesc:
      'Securing high-margin industrial project sales requires product approval by the nation’s strictest specifiers. Having secured approvals from EIL, NTPC, ONGC, Power Grid, MES, and CPWD, we guide your engineering and MARCOM teams to navigate the pre-qualification and consultant specification journey.',
    deliverables: [
      'Specifier Pre-Qualification Dossier Preparation',
      'Consultant Engagement Roadmap (EIL, Mecon, AECOM, Holtec, NTPC)',
      'Architectural & EPC Seminar Architecture (47+ verified seminar blueprint)',
      'Tender & Bid Compliance Advisory for Infrastructure Projects',
    ],
    idealFor: 'Industrial manufacturers seeking to supply central PSUs, EPC contractors, airports, and major infrastructure developers.',
    tags: ['PSU Approvals', 'Consultant Specifications', 'EPC Project Sales'],
  },
  {
    number: '04',
    title: 'Go-To-Market & Category Expansion',
    shortDesc: 'Systematic product line launches, competitive positioning, and cross-selling across enterprise accounts.',
    fullDesc:
      'Avoid costly product launch flops. Drawing from launching dozens of industrial lines (Flame-proof lighting, LT/HT switchgear, cables, motors, and wire ranges), we define pricing strategies, distributor launch schemes, and promotional roadmaps that drive immediate uptake.',
    deliverables: [
      'Competitive Landscape & Pricing Sensitivity Analysis',
      'Launch Scheme & Dealer Incentive Modeling',
      'Cross-Selling Matrix for Existing Customer Accounts',
      'Trade Marketing & MARCOM Promotional Campaign Execution',
    ],
    idealFor: 'Enterprises introducing new technical product categories or expanding into adjacent B2B verticals.',
    tags: ['GTM Strategy', 'Category Management', 'Cross-Selling Systems'],
  },
  {
    number: '05',
    title: 'Executive Advisory & Leadership Masterclasses',
    shortDesc: 'High-touch strategic mentorship for business promoters, sales directors, and guest lectures for top universities.',
    fullDesc:
      'Bridging operational field execution with executive acumen honed at IIM Lucknow. Ramesh Madaan provides monthly advisory board support, executive mentoring for first-generation promoters, and interactive guest lectures for management universities on industrial sales strategy.',
    deliverables: [
      'Monthly Strategic Boardroom & Review Sessions',
      'Mentorship for Emerging Sales Heads & Zonal Managers',
      'Custom Sales Capability Workshops for Frontline Teams',
      'University Guest Lectures on Industrial Strategy & Channel Dynamics',
    ],
    idealFor: 'Founders seeking an experienced fractional revenue advisor or academic institutions preparing business leaders.',
    tags: ['CXO Mentorship', 'Sales Workshops', 'University Lectures'],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'crompton-industrial-lighting',
    title: 'PAN-India ₹200 Cr Industrial Lighting Execution & Specifier Penetration',
    category: 'Industrial & B2B',
    organization: 'Crompton Greaves Consumer Electricals Limited',
    role: 'Sr Manager Sales – Industrial & Flame-Proof Lighting',
    metricHighlight: '₹200+ Cr',
    metricLabel: 'Industrial Business Executed',
    challenge:
      'High competition from entrenched global lighting conglomerates, coupled with stringent pre-qualification specifications required by national government PSUs and engineering consultants.',
    intervention:
      'Spearheaded B2B business across India. Organized direct technical positioning seminars with elite consulting engineers, created flame-proof lighting product approval pipelines, and structured custom industrial promotional schemes for regional distributors.',
    outcomes: [
      'Successfully generated and executed over ₹200 Crores in industrial lighting business across PAN India.',
      'Secured formal consultant approvals from premier regulatory and EPC bodies including EIL, AECOM, Mecon, Holtec, NTPC, ONGC, IOCL, Power Grid, and CPWD.',
      'Established high-margin flame-proof industrial lighting as a dominant market choice for hazardous industrial locations.',
    ],
    keyClientsOrApprovals: ['EIL', 'NTPC', 'ONGC', 'IOCL', 'Power Grid', 'AECOM', 'CPWD', 'MES', 'NHPC', 'ISGEC'],
  },
  {
    id: 'fan-division-turnaround',
    title: 'Regional Market Turnaround: Catapulting from #5 to #1 in 12 Months',
    category: 'Turnaround Strategy',
    organization: 'Crompton Greaves Consumer Electricals Ltd',
    role: 'Senior Manager Sales – Fan Division (Greater Punjab)',
    metricHighlight: '29% Market Share',
    metricLabel: 'From 5th to 1st Place in 1 Year',
    challenge:
      'Brand was ranked 5th in Greater Punjab with fragmented dealer visibility, low brand extraction, and aggressive regional competitor pricing.',
    intervention:
      'Implemented a rigorous Go-To-Market model centered on Reach Expansion and Reach Extraction. Established 6 flagship Galaxy experience displays, secured counter visibility in 100+ top retail counters, and organized 50 targeted positioning meetings with architects, builders, and government buyers.',
    outcomes: [
      'Vaulted from #5 ranking to absolute #1 market leader in Punjab within a single financial year.',
      'Captured and retained an industry-leading 29% market share throughout tenure.',
      'Augmented retail shelf and POP reach to 62% through strategic POP visibility campaigns.',
    ],
    keyClientsOrApprovals: ['100+ Retail Display Counters', '6 Galaxy Centers', '50 Architect & Specifier Forums'],
  },
  {
    id: 'havells-branch-cagr',
    title: 'Building a High-Growth Regional Powerhouse: 48% CAGR Over a Decade',
    category: 'Distribution & Channel',
    organization: 'Havells India Ltd',
    role: 'Branch Manager – Amritsar / Ludhiana Area (15 Years Tenure)',
    metricHighlight: '48% CAGR',
    metricLabel: 'Ten-Year Sustained Branch Growth',
    challenge:
      'Rapidly scaling market presence for multiple industrial product lines (panels, switchgear, busbar trunking, LT/HT cables, motors, wires) while enforcing strict credit control and financial discipline.',
    intervention:
      'Led an enterprise team of 36 professionals across sales, engineering, and commercial support. Conducted 47 high-impact specifier seminars for electrical engineers and government officials. Built cross-selling systems that incentivized dealers to stock the full breadth of the product portfolio.',
    outcomes: [
      'Delivered a continuous 48% Compound Annual Growth Rate (CAGR) over 10 consecutive years as branch head.',
      'Successfully launched and scaled flagship categories including Cables, Industrial Lighting, CFL, COS, and MCB series.',
      'Built a resilient network of long-term distributor partnerships that maintained target compliance, low debtor days, and high margin extraction.',
    ],
    keyClientsOrApprovals: ['36-Member Team', '47 Industry Seminars', 'Pan-Punjab Dealer Network'],
  },
  {
    id: 'fine-switchgears-leadership',
    title: 'Strategic Market Expansion & Commercial Operations Modernization',
    category: 'Distribution & Channel',
    organization: 'Fine Switchgears',
    role: 'Vice President Sales & Marketing',
    metricHighlight: 'PAN-India',
    metricLabel: 'Strategic Footprint & Channel Revamp',
    challenge:
      'Navigating intensifying competition in modern switchgear, streamlining regional operations, and developing next-generation sales leadership.',
    intervention:
      'Provided top-level executive direction covering product innovation, new territory entry, and sales team restructuring. Introduced structured performance management routines and aligned marketing communications with direct dealer incentive schemes.',
    outcomes: [
      'Expanded market footprint across key industrial states and established resilient dealer development frameworks.',
      'Mentored business leaders and regional managers on sales execution, pipeline tracking, and operational efficiency.',
      'Structured modernized product collateral and promotional campaigns that bolstered channel confidence.',
    ],
    keyClientsOrApprovals: ['Regional Distributor Boards', 'Institutional Accounts', 'Sales Leadership Roster'],
  },
];

export const AUDIT_QUESTIONS: AuditQuestion[] = [
  {
    id: 1,
    area: 'Distribution & Market Coverage',
    question: 'How would you describe your current dealer/distributor network coverage in your target markets?',
    options: [
      {
        label: 'Fragmented & Low Visibility',
        points: 5,
        description: 'Less than 30% of target retail/dealer counters stock our line; heavy dependence on 2–3 stockists.',
      },
      {
        label: 'Moderate Reach with High Leakage',
        points: 12,
        description: 'Present in key counters, but secondary sales extraction and POP visibility remain sluggish.',
      },
      {
        label: 'Structured & Governed Pan-Region',
        points: 20,
        description: 'Over 60% active reach with disciplined DTR/STR tracking and high counter loyalty.',
      },
    ],
  },
  {
    id: 2,
    area: 'Institutional & Specifier Approvals',
    question: 'What is your current approval status with key project consultants, architects, and PSU bodies (EIL, NTPC, CPWD)?',
    options: [
      {
        label: 'Virtually No Formal Approvals',
        points: 5,
        description: 'We lose out on high-value tenders because we lack vendor registration and specifier relationships.',
      },
      {
        label: 'Ad-Hoc / Single-Project Approvals',
        points: 12,
        description: 'We get occasional approvals when pushed by contractors, but lack systematic consultant coverage.',
      },
      {
        label: 'Institutional Vendor Pre-Qualification',
        points: 20,
        description: 'Regularly specified in tender documents and invited to direct institutional bids.',
      },
    ],
  },
  {
    id: 3,
    area: 'Sales Team Cadence & Accountability',
    question: 'How predictable and disciplined is your sales team’s weekly conversion cadence?',
    options: [
      {
        label: 'Reactive & Firefighting',
        points: 5,
        description: 'Sales calls are undocumented; revenue fluctuates wildly; forecast accuracy is below 40%.',
      },
      {
        label: 'Partial CRM / Informal Reviews',
        points: 12,
        description: 'Monthly targets exist, but reps lack structured coaching, account playbooks, and standardized cadences.',
      },
      {
        label: 'Disciplined Metric-Driven Execution',
        points: 20,
        description: 'Clear funnel metrics, weekly account milestone reviews, and performance-linked compensation.',
      },
    ],
  },
  {
    id: 4,
    area: 'Product Range & Cross-Selling Extraction',
    question: 'How successfully do you cross-sell multiple product categories to your existing customer and dealer base?',
    options: [
      {
        label: 'Single-Product Reliance',
        points: 5,
        description: 'Over 70% of revenue comes from a single legacy line; new category launches struggle to gain traction.',
      },
      {
        label: 'Inconsistent Bundling',
        points: 12,
        description: 'Dealers buy our main product but resist stocking our secondary or premium product lines.',
      },
      {
        label: 'High Basket Extraction',
        points: 20,
        description: 'Active cross-selling programs, bundled dealer incentives, and high multi-category penetration.',
      },
    ],
  },
  {
    id: 5,
    area: 'Leadership & Strategic Planning',
    question: 'Does your executive leadership have a clear 3-year regional expansion and capability roadmap?',
    options: [
      {
        label: 'Quarter-to-Quarter Survival',
        points: 5,
        description: 'No formalized regional expansion plan; growth is accidental rather than strategically engineered.',
      },
      {
        label: 'High Ambitions, Weak Execution System',
        points: 12,
        description: 'We know where we want to grow, but lack the frontline leadership and execution machinery to deliver it.',
      },
      {
        label: 'Rigorous 3-Year Strategic Architecture',
        points: 20,
        description: 'Clear territory roadmap, executive coaching, and budgeted investment in channel capability.',
      },
    ],
  },
];

export const VERCEL_MASTER_PROMPT = `You are a world-class Full-Stack Web Architect and Senior Product Designer. Build a clean, high-converting, responsive, interactive static website for "Ramesh Madaan – Business Growth & Sales Transformation Advisory".

Target Persona & Pedigree:
- Executive: Ramesh Madaan (IIM Lucknow MBA, Punjab Technical University B.Tech Industrial Engineering + MBA, Diploma in Electrical Engineering).
- 28+ years of enterprise operating leadership across Crompton Greaves (executed ₹200 Cr PAN India industrial lighting business, turned around fan division from #5 to #1 with 29% market share), Havells India Ltd (15 years branch leadership with 48% CAGR over 10 years, managing 36-person team), and Fine Switchgears (VP Sales & Marketing).
- Core Advisory Focus: Sales Organization Transformation, PAN-India Distribution & Channel Scaling, Institutional & Specifier Approvals (EIL, NTPC, ONGC, Power Grid, CPWD), GTM Category Expansion, and CXO Leadership Coaching.

Key Website Architecture & Interactive Elements:
1. Executive Top Bar: Follows strict 3-zone contract (Wordmark: Ramesh Madaan; 5 clean navigation links; 2 clear CTAs).
2. Hero Section: Editorial typography (Plus Jakarta Sans + Playfair Display), bold value proposition, 4 quantified tabular metrics (₹200+ Cr B2B executed, 48% CAGR, #1 market share turnaround, 36+ engineers led).
3. Interactive B2B Growth & Revenue Leakage Calculator: Allows manufacturing/B2B leaders to input their annual revenue (₹5 Cr to ₹500 Cr), distribution model, and sales team size to calculate estimated revenue leakages and 12-month transformation ROI.
4. Interactive 5-Question Growth Diagnostic Audit: Self-assessment providing an instant readiness score and customized recommendations.
5. The 5 Advisory Pillars (Editorial Bento Grid): Structured outcomes, deliverables, and ideal client profiles.
6. Quantified Track Record & Case Study Filter: Searchable by Industrial B2B, Channel Distribution, and Turnaround Strategy.
7. Executive Credentials: IIM Lucknow & PTU engineering pedigree, corporate VP experience.
8. Interactive Discovery Consultation Booking Form: Validated inputs, custom message generator, and calendar integration.
9. Zero-Friction Static Deployment: Vite + React + Tailwind CSS with a clean vercel.json rewrite config for instant zero-configuration deployment on Vercel.`;

export const VERCEL_DEPLOY_STEPS = [
  {
    step: '1',
    title: 'Initialize Git & Push to GitHub',
    command: 'git init && git add . && git commit -m "Initial commit" && git branch -M main && git remote add origin https://github.com/YOUR_USERNAME/madaan-growth-advisory.git && git push -u origin main',
    description: 'Ensure your code is pushed to your private or public GitHub / GitLab / Bitbucket repository.',
  },
  {
    step: '2',
    title: 'Import Repository into Vercel',
    command: 'https://vercel.com/new',
    description: 'Log into vercel.com, click "Add New... > Project", select your GitHub repository, and click Import.',
  },
  {
    step: '3',
    title: 'Zero-Configuration Build & Launch',
    command: 'Build Command: npm run build | Output Directory: dist',
    description: 'Vercel will automatically detect Vite. The included vercel.json guarantees clean SPA routing without 404s. Click "Deploy" and your live website will be ready in ~30 seconds with free SSL!',
  },
];
