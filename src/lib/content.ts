export type Lang = 'en' | 'pt';

export const content = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      notes: 'Notes',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    hero: {
      location: 'São Paulo, Brazil',
      role: 'QA Engineer & Web Developer',
      description:
        'Focused on test automation, web development, and DevOps culture — Cypress, Robot Framework, React, TypeScript, CI/CD, API Testing.',
      viewPortfolio: 'View Portfolio',
      downloadCV: 'Download CV',
    },
    about: {
      label: '[01] — ABOUT',
      h2a: 'ABOUT',
      h2b: 'ME',
      cta1: 'Get in Touch',
      cta2: 'View CV',
      bio1: 'QA Engineer with experience in requirements validation, business rules, and data consistency across web applications, APIs, and digital products. Skilled in planning and executing functional, exploratory, regression, and API tests, with structured documentation of test scenarios, evidence, and defect management.',
      bio2: 'Beyond QA, I actively participate in full-stack web development — building React/TypeScript frontends, Python/FastAPI backends, Chrome extensions, and complete CI/CD pipelines. This dual perspective as a developer and quality engineer lets me integrate quality from the very first line of code.',
      bio3: 'Currently pursuing a B.Sc. in Software Engineering and preparing for ISTQB CTFL certification, I work in agile environments in close collaboration with development teams — from quality planning through hands-on technical contribution.',
      stats: ['Years Old', 'Years in QA', 'Years in Technology', 'Tech Projects', 'Certifications'],
    },
    ticker: [
      'QA Automation', 'React', 'TypeScript', 'Cypress', 'Robot Framework',
      'API Testing', 'DevOps', 'CI/CD', 'Docker', 'Python', 'GitHub Actions',
      'Postman', 'Selenium', 'Full-Stack', 'Chrome Extensions',
    ],
    experience: {
      label: '[02] — EXPERIENCE',
      h2a: 'PROFESSIONAL',
      h2b: 'EXPERIENCE',
      items: [
        {
          company: 'Nuclear Gaming',
          role: 'QA Engineer & Product Developer',
          period: 'Jan 2025 – Present',
          location: 'Remote — Freelance',
          description:
            'Hybrid role at a software and digital games company covering QA, code review, pipeline infrastructure, and product development. I plan and execute functional, regression, and exploratory tests across products, log and prioritize defects with full evidence, and maintain release checklists. On the product side I conceive and refine new products, structure MVPs, perform code review with a quality focus, and configure CI/CD pipelines to standardize delivery environments.',
          tags: ['Unity', 'WebGL', 'Code Review', 'CI/CD', 'Docker', 'QA'],
        },
        {
          company: 'QA Engineer — Web & SaaS Projects',
          role: 'Freelance',
          period: 'Mar 2023 – Present',
          location: 'Remote',
          description:
            'Quality Assurance for web applications and SaaS products under active development, focused on requirements validation, business rules, and release risk reduction. Planning and execution of functional, exploratory, regression, and API tests with full documentation of scenarios, evidence, and defect management. Automation of critical user journeys with Cypress and Robot Framework, along with support for release checklists and acceptance criteria definition.',
          tags: ['Cypress', 'Robot Framework', 'Postman', 'API Testing', 'Regression'],
        },
        {
          company: 'PER5 Engenharia',
          role: 'QA Analyst — OpenBIM (IFC)',
          period: 'Oct 2024 – Present',
          location: 'Remote — Freelance',
          description:
            'Responsible for the quality of BIM deliverables, performing QA/QC on IFC models and standardizing technical documentation to ensure interdisciplinary interoperability, reduce rework, and raise the overall quality of project outputs. Defines traceable acceptance criteria and bridges client requirements to the operational team with clear scope boundaries.',
          tags: ['OpenBIM', 'IFC', 'ISO 19650', 'QA/QC', 'Documentation'],
        },
        {
          company: 'Grupo BIM',
          role: 'Data & Process Quality Analyst',
          period: 'Jan 2017 – Aug 2025',
          location: 'On-site',
          description:
            'Development and ongoing evolution of internal operational control systems over 9 years, with solutions used by up to 20 concurrent team members across 50+ projects. Designed processes and tools for accounts payable, HR, document management, and construction project tracking. Led SIENGE ERP implementation. Developed JavaScript and Python automations for validation, data transformation, and automated reporting.',
          tags: ['JavaScript', 'Python', 'ERP', 'Data Quality', 'Process Automation'],
        },
      ],
    },
    projects: {
      label: '[03] — PROJECTS',
      h2a: 'MY',
      h2b: 'WORK',
      productBadge: 'FOR LICENSING',
    },
    notes: {
      label: '[04] — STUDY NOTES',
      h2a: 'LEARNING',
      h2b: 'RESOURCES',
      description:
        'A curated collection of notes, study summaries, and learning resources compiled throughout my QA and development journey. Continuously updated as I learn and grow.',
      driveLabel: 'Access on Google Drive',
      driveUrl: 'https://drive.google.com/drive/folders/1FxiMYio-i2LRwopK0s9DcsQZzKuoU9Oi?usp=sharing',
      categories: [
        { label: 'Software Testing & QA Fundamentals', desc: 'Theory, test design techniques, and QA principles' },
        { label: 'Test Automation — Cypress & Robot Framework', desc: 'Framework architecture, Page Objects, and advanced patterns' },
        { label: 'API Testing & Postman', desc: 'REST strategies, collections, and contract testing' },
        { label: 'Python & JavaScript for QA', desc: 'Automation scripts, data handling, and practical examples' },
        { label: 'DevOps, CI/CD & Docker', desc: 'Pipelines, containerization basics, and continuous testing' },
        { label: 'React & TypeScript', desc: 'Component patterns, hooks, and frontend best practices' },
      ],
    },
    certifications: {
      label: '[05] — EDUCATION & CERTIFICATIONS',
      h2a: 'KNOWLEDGE &',
      h2b: 'CREDENTIALS',
      certsTitle: 'Certifications',
      eduTitle: 'Education',
      langsTitle: 'Languages',
      next: 'Next',
    },
    contact: {
      label: '[06] — CONTACT',
      h2a: "LET'S",
      h2b: 'WORK',
      sendMessage: 'Send a message',
    },
    footer: {
      copyright: '© 2026 GUILHERME BIM · QA ENGINEER & WEB DEV · SÃO PAULO',
      downloadCV: 'Download CV',
    },
  },

  pt: {
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      notes: 'Notas',
      certifications: 'Certificações',
      contact: 'Contato',
    },
    hero: {
      location: 'São Paulo, Brasil',
      role: 'Engenheiro de QA & Desenvolvedor Web',
      description:
        'Focado em automação de testes, desenvolvimento web e cultura DevOps — Cypress, Robot Framework, React, TypeScript, CI/CD, API Testing.',
      viewPortfolio: 'Ver Portfólio',
      downloadCV: 'Baixar CV',
    },
    about: {
      label: '[01] — SOBRE',
      h2a: 'SOBRE',
      h2b: 'MIM',
      cta1: 'Entre em Contato',
      cta2: 'Ver CV',
      bio1: 'Engenheiro de QA com experiência em validação de requisitos, regras de negócio e consistência de dados em aplicações web, APIs e produtos digitais. Habilidade em planejar e executar testes funcionais, exploratórios, regressão e de API, com documentação estruturada de cenários, evidências e gestão de defeitos.',
      bio2: 'Além do QA, participo ativamente do desenvolvimento full-stack — construindo frontends em React/TypeScript, backends em Python/FastAPI, extensões Chrome e pipelines CI/CD completos. Essa visão dupla como desenvolvedor e engenheiro de qualidade me permite integrar qualidade desde a primeira linha de código.',
      bio3: 'Cursando Engenharia de Software e me preparando para a certificação ISTQB CTFL, atuo em ambientes ágeis em estreita colaboração com times de desenvolvimento — desde o planejamento de qualidade até a contribuição técnica direta.',
      stats: ['Anos de Idade', 'Anos em QA', 'Anos em Tecnologia', 'Projetos Tech', 'Certificações'],
    },
    ticker: [
      'Automação de Testes', 'React', 'TypeScript', 'Cypress', 'Robot Framework',
      'Testes de API', 'DevOps', 'CI/CD', 'Docker', 'Python', 'GitHub Actions',
      'Postman', 'Selenium', 'Full-Stack', 'Extensões Chrome',
    ],
    experience: {
      label: '[02] — EXPERIÊNCIA',
      h2a: 'EXPERIÊNCIA',
      h2b: 'PROFISSIONAL',
      items: [
        {
          company: 'Nuclear Gaming',
          role: 'Engenheiro de QA & Desenvolvedor de Produto',
          period: 'Jan 2025 – Presente',
          location: 'Remoto — Freelance',
          description:
            'Função híbrida em empresa de software e jogos digitais cobrindo QA, code review, infraestrutura de pipelines e desenvolvimento de produto. Planejo e executo testes funcionais, regressão e exploratórios, registro defeitos com evidências completas e mantenho checklists de release. No lado de produto, concebo novos produtos, estruturo MVPs, realizo code review com foco em qualidade e configuro pipelines CI/CD para padronizar o ambiente de entrega.',
          tags: ['Unity', 'WebGL', 'Code Review', 'CI/CD', 'Docker', 'QA'],
        },
        {
          company: 'Engenheiro de QA — Projetos Web & SaaS',
          role: 'Freelance',
          period: 'Mar 2023 – Presente',
          location: 'Remoto',
          description:
            'Garantia de qualidade para aplicações web e produtos SaaS em desenvolvimento ativo, focado em validação de requisitos, regras de negócio e redução de risco nas releases. Planejamento e execução de testes funcionais, exploratórios, regressão e de API com documentação completa de cenários, evidências e gestão de defeitos. Automação de jornadas críticas com Cypress e Robot Framework.',
          tags: ['Cypress', 'Robot Framework', 'Postman', 'API Testing', 'Regressão'],
        },
        {
          company: 'PER5 Engenharia',
          role: 'Analista de QA — OpenBIM (IFC)',
          period: 'Out 2024 – Presente',
          location: 'Remoto — Freelance',
          description:
            'Responsável pela qualidade de entregáveis BIM, realizando QA/QC em modelos IFC e padronizando documentação técnica para garantir interoperabilidade interdisciplinar, reduzir retrabalho e elevar a qualidade dos projetos. Define critérios de aceitação rastreáveis e faz a ponte entre os requisitos do cliente e a equipe operacional com limites de escopo claros.',
          tags: ['OpenBIM', 'IFC', 'ISO 19650', 'QA/QC', 'Documentação'],
        },
        {
          company: 'Grupo BIM',
          role: 'Analista de Qualidade de Dados & Processos',
          period: 'Jan 2017 – Ago 2025',
          location: 'Presencial',
          description:
            'Desenvolvimento e evolução contínua de sistemas internos de controle operacional ao longo de 9 anos, com soluções utilizadas por até 20 usuários simultâneos em mais de 50 projetos. Projetou processos e ferramentas para contas a pagar, RH, gestão documental e acompanhamento de obras. Liderou a implementação do ERP SIENGE. Desenvolveu automações em JavaScript e Python para validação de dados e relatórios automatizados.',
          tags: ['JavaScript', 'Python', 'ERP', 'Qualidade de Dados', 'Automação'],
        },
      ],
    },
    projects: {
      label: '[03] — PROJETOS',
      h2a: 'MEU',
      h2b: 'TRABALHO',
      productBadge: 'DISPONÍVEL PARA LICENÇA',
    },
    notes: {
      label: '[04] — NOTAS DE ESTUDO',
      h2a: 'RECURSOS DE',
      h2b: 'APRENDIZADO',
      description:
        'Uma coleção curada de notas, resumos de estudo e recursos de aprendizado compilados ao longo da minha jornada em QA e desenvolvimento. Continuamente atualizado.',
      driveLabel: 'Acessar no Google Drive',
      driveUrl: 'https://drive.google.com/drive/folders/1FxiMYio-i2LRwopK0s9DcsQZzKuoU9Oi?usp=sharing',
      categories: [
        { label: 'Fundamentos de QA & Testes de Software', desc: 'Teoria, técnicas de design de testes e princípios de QA' },
        { label: 'Automação — Cypress & Robot Framework', desc: 'Arquitetura de frameworks, Page Objects e padrões avançados' },
        { label: 'Testes de API & Postman', desc: 'Estratégias REST, coleções e testes de contrato' },
        { label: 'Python & JavaScript para QA', desc: 'Scripts de automação, manipulação de dados e exemplos práticos' },
        { label: 'DevOps, CI/CD & Docker', desc: 'Pipelines, fundamentos de containerização e testes contínuos' },
        { label: 'React & TypeScript', desc: 'Padrões de componentes, hooks e boas práticas de frontend' },
      ],
    },
    certifications: {
      label: '[05] — EDUCAÇÃO & CERTIFICAÇÕES',
      h2a: 'CONHECIMENTO &',
      h2b: 'CREDENCIAIS',
      certsTitle: 'Certificações',
      eduTitle: 'Educação',
      langsTitle: 'Idiomas',
      next: 'Próxima',
    },
    contact: {
      label: '[06] — CONTATO',
      h2a: 'VAMOS',
      h2b: 'TRABALHAR',
      sendMessage: 'Envie uma mensagem',
    },
    footer: {
      copyright: '© 2026 GUILHERME BIM · ENGENHEIRO DE QA & DEV WEB · SÃO PAULO',
      downloadCV: 'Baixar CV',
    },
  },
} as const;

export type Content = typeof content;
