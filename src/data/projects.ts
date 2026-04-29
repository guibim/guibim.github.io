export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  logo?: string;
  status?: 'in-development' | 'live';
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'portfolio-1',
    title: 'BTCHECK',
    subtitle: 'Bitcoin Data Platform',
    summary:
      'Personal project focused on automated Bitcoin news aggregation and market data analysis. Built with Python backend, automated scraping pipelines, API endpoints, and automated tests using Robot Framework and Cypress.',
    tags: ['Python', 'Robot Framework', 'Cypress', 'API', 'Scraping'],
    logo: '/logos/logo1-btcheck.png',
  },
  {
    id: 2,
    slug: 'portfolio-2',
    title: 'Nuclear Gaming',
    subtitle: 'Game QA & DevOps',
    summary:
      'QA Engineer in a Unity WebGL / HTML5 game development project. Performed functional testing, bug tracking, and supported DevOps workflows using Docker and CI/CD pipelines to improve release stability.',
    tags: ['Unity', 'WebGL', 'Docker', 'CI/CD', 'QA'],
    logo: '/logos/logo2-nuclear.png',
  },
  {
    id: 3,
    slug: 'portfolio-3',
    title: 'CONV+',
    subtitle: 'File Conversion API',
    summary:
      'Modular file conversion platform built with FastAPI, designed for extensible processing pipelines. Initially developed to convert Stata (DTA) datasets to CSV, evolving into a scalable API architecture with asynchronous upload and processing workflows.',
    tags: ['FastAPI', 'Python', 'API', 'Async'],
    logo: '/logos/logo3-conv.png',
  },
  {
    id: 4,
    slug: 'portfolio-4',
    title: 'Linkeiro',
    subtitle: 'SaaS QA',
    summary:
      'QA activities for a link management SaaS platform, including test case creation, manual testing, and exploratory testing. Focused on validating core user flows, platform stability, and business logic of link aggregation systems.',
    tags: ['QA', 'SaaS', 'Test Cases', 'Exploratory Testing'],
    logo: '/logos/logo4-linkeiro.png',
  },
  {
    id: 5,
    slug: 'portfolio-5',
    title: 'Oddswatch',
    subtitle: 'Predict Market QA',
    summary:
      'Responsible for test case design, manual testing, and automated regression validation in a Predict Market platform. Ensured system reliability by validating business rules, data integrity, and critical financial flows.',
    tags: ['QA', 'Regression Testing', 'Financial Systems', 'Data Integrity'],
    logo: '/logos/logo5-odds.png',
  },
  {
    id: 6,
    slug: 'portfolio-6',
    title: 'Per5HUB',
    subtitle: 'OpenBIM Project Platform',
    summary:
      'Custom-built project management platform designed for OpenBIM workflows. Integrates IFC, IDS, BCF, and OpenCDE validation processes with Kanban and Gantt collaboration tools to improve project traceability and team coordination.',
    tags: ['OpenBIM', 'IFC', 'Kanban', 'Gantt', 'Project Management'],
    logo: '/logos/logo6-per5hub.png',
  },
  {
    id: 7,
    slug: 'portfolio-7',
    title: 'PER5',
    subtitle: 'OpenBIM Quality & Business Integration',
    summary:
      'Responsible for OpenBIM (IFC) quality validation, deliverable standardization, and process traceability, ensuring interoperability and reducing project rework. Also act at the intersection of business and quality, translating client needs into structured scopes.',
    tags: ['OpenBIM', 'IFC', 'Quality', 'Business Integration'],
    logo: '/logos/logo7-per5.png',
  },
  {
    id: 8,
    slug: 'portfolio-8',
    title: 'Grupo BIM',
    subtitle: 'Internal Systems & Data Pipelines',
    summary:
      'Development and evolution of internal systems focused on process traceability, data consistency, and operational quality. Implemented validated dashboards, standardized spreadsheets, and automated data pipelines using JavaScript and Python.',
    tags: ['JavaScript', 'Python', 'Dashboards', 'Data Pipelines'],
    logo: '/logos/logo8-bim.png',
  },
  {
    id: 9,
    slug: 'portfolio-9',
    title: 'R2J',
    subtitle: 'Operations, Systems & Quality Structure',
    summary:
      'Led brand development, lead generation, and internal process structuring, connecting business operations with quality-oriented workflows. Designed internal systems, business rules, and administrative controls focused on process reliability and standardization.',
    tags: ['Operations', 'Systems Design', 'Quality', 'Process Structuring'],
    logo: '/logos/logo9-r2j.png',
  },
  {
    id: 10,
    slug: 'portfolio-10',
    title: 'FINLY',
    subtitle: 'Financial Management SaaS',
    summary:
      'Web platform for financial management of micro and small businesses — contracts, accounts payable/receivable, cash flow projection, DRE, and document management in a single multi-tenant SaaS application.',
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'SaaS'],
    status: 'in-development',
  },
  {
    id: 11,
    slug: 'portfolio-11',
    title: 'SCOPE',
    subtitle: 'Project Management for Service Offices',
    summary:
      'End-to-end web system for project-based businesses — lead CRM, versioned proposals with PDF export, per-project Kanban, financial tracking, and deadline management. Full cycle from first contact to final payment.',
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'SaaS'],
    status: 'in-development',
  },
  {
    id: 12,
    slug: 'portfolio-12',
    title: 'BIMZCDE',
    subtitle: 'Common Data Environment for AEC/BIM',
    summary:
      'Proprietary CDE platform for Architecture, Engineering, and Construction teams. IFC model management, 3D browser viewer, BCF 3.0 issue tracking, IDS validation, and ISO 19650 approval workflow — vendor-neutral, zero lock-in.',
    tags: ['React', 'FastAPI', 'Python', 'IfcOpenShell', 'Three.js', 'Docker', 'OpenBIM'],
    status: 'in-development',
  },
  {
    id: 13,
    slug: 'portfolio-13',
    title: 'PROMOBETA',
    subtitle: 'Price Comparison & Deal Alert Platform',
    summary:
      'Web platform for price comparison and deal alerts in the Brazilian e-commerce market. Monitors prices across Mercado Livre, Americanas, Magalu, and Amazon — distributes verified deals to Telegram/WhatsApp groups and notifies users when a tracked product hits their target price, with full price history to expose inflated reference values.',
    tags: ['React', 'TypeScript', 'Supabase', 'GitHub Actions', 'Telegram Bot'],
    status: 'in-development',
  },
];
