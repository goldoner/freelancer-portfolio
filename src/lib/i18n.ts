export type Lang = "en" | "de";

export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      stack: "Stack",
      experience: "Experience",
      rates: "Rates",
      contact: "Contact",
      hire: "Hire Me",
      hintLight: "Try light mode ☀️",
      hintDark: "Try dark mode 🌙",
    },
    hero: {
      badge: "Available for freelance projects · Vienna, Austria",
      descPart1:
        "6+ years building scalable backend systems, microservices, and full-stack applications. Former ",
      descPart2:
        " engineer, now helping DACH and international clients ship faster with ",
      hire: "Hire Me",
      scroll: "Scroll to explore",
    },
    about: {
      label: "About",
      title: "The story behind the engineer",
      p1a: "I started my software journey at the ",
      p1b: ", where I studied Computer Science and quickly gravitated toward backend systems — the invisible machinery that makes everything else work.",
      p2a: "My career took off on Fiverr, building messenger bots and contributing to open source. From there I joined ",
      p2b: " in Germany, designing CI/CD pipelines and data migration tools before landing at ",
      p2c: " in Vienna — one of Austria's most demanding software environments.",
      p3: "At Porsche I designed high-performance microservices, drove legacy migrations, and deployed to production on Kubernetes and OpenShift. That experience gave me a rare combination: the rigor of enterprise engineering and the speed of a modern DevOps mindset.",
      p4a: "Now I freelance independently, registered as ",
      p4b: " in Austria. I work with DACH companies and international clients on Upwork, helping them build systems that scale — and delivering them faster by leveraging AI tools in my workflow.",
      highlightExperience: "Experience",
      highlightLocation: "Location",
      highlightDegree: "Degree",
      highlightLanguages: "Languages",
      setsApart: "What sets me apart",
      usps: [
        {
          title: "Enterprise-grade credibility",
          desc: "Shaped by years at Porsche Informatik — a benchmark for high-stakes, production-grade software in the automotive sector.",
        },
        {
          title: "Deep backend mastery",
          desc: "Java & Spring Boot specialist with hands-on expertise in Kubernetes, OpenShift, Kafka, and distributed systems at scale.",
        },
        {
          title: "AI-accelerated delivery",
          desc: "Actively integrates AI tooling into the development workflow — meaning faster iteration, fewer bugs, and sharper results.",
        },
        {
          title: "Architectural thinking",
          desc: "Domain-Driven Design and microservices aren't buzzwords — they're the lens through which every system is designed.",
        },
      ],
    },
    services: {
      label: "Services",
      title: "What I can build for you",
      subtitle:
        "From architecture decisions to production deployments — I own the full lifecycle.",
      items: [
        {
          title: "Backend Development",
          desc: "Production-grade Java & Spring Boot services — from greenfield microservices to hardened monoliths, built for scale and maintainability.",
        },
        {
          title: "Microservices Architecture",
          desc: "Design and implementation of event-driven, distributed systems using Kafka, RabbitMQ, and REST — with Domain-Driven Design as the compass.",
        },
        {
          title: "Legacy System Migration",
          desc: "Systematic modernisation of aging codebases — strangler fig patterns, incremental refactoring, zero-downtime migrations.",
        },
        {
          title: "REST API Development",
          desc: "Clean, versioned, documented APIs with Spring Security, OAuth2, and JWT. Integration-friendly from day one.",
        },
        {
          title: "CI/CD & DevOps",
          desc: "End-to-end pipeline setup with GitLab CI/CD, Docker, Kubernetes, and OpenShift. From commit to production, automated.",
        },
        {
          title: "Database Design & Optimisation",
          desc: "PostgreSQL schema design, query tuning, Redis caching strategies, and Elasticsearch integration for search-heavy workloads.",
        },
        {
          title: "Full-Stack Development",
          desc: "Angular + Java full-stack delivery. TypeScript, Next.js, and modern frontend practices when the project demands it.",
        },
        {
          title: "Cloud Deployment",
          desc: "Kubernetes, OpenShift, and AWS deployments. Infrastructure-as-code mindset, cost-aware and production-ready.",
        },
        {
          title: "AI Integration",
          desc: "Embed AI capabilities into existing systems — LLM-backed features, smart automation, and AI-assisted workflows that ship faster.",
        },
        {
          title: "Code Review & Performance",
          desc: "Deep dives into bottlenecks, thread safety, N+1 queries, and architectural anti-patterns. Actionable reports with fixes.",
        },
      ],
    },
    stack: {
      label: "Tech Stack",
      title: "Tools of the trade",
      categories: [
        { label: "Core Backend" },
        { label: "Frontend" },
        { label: "Messaging & Search" },
        { label: "Databases" },
        { label: "DevOps & Cloud" },
        { label: "Security & Architecture" },
      ],
    },
    experience: {
      label: "Experience",
      title: "Where I've worked",
      fullTime: "Full-time",
      freelance: "Freelance",
      education: "Education & Certifications",
      university: "University",
      degree: "Bachelor of Computer Science",
      school: "University of Salzburg · 2019–2023",
      jobs: [
        {
          bullets: [
            "Designed and delivered high-performance microservices for automotive business-critical systems",
            "Led legacy system migrations using strangler fig patterns with zero production downtime",
            "Deployed and operated services on Kubernetes and OpenShift in enterprise-grade environments",
            "Automated CI/CD pipelines with GitLab — reducing release cycle time significantly",
            "Stack: Java, Spring Boot, PostgreSQL, Kafka, Kubernetes, OpenShift, GitLab CI/CD",
          ],
        },
        {
          bullets: [
            "Built CI/CD pipeline infrastructure from the ground up, enabling reliable automated releases",
            "Developed data migration tooling for complex dataset transformations",
            "Implemented algorithms for sensor data processing on Raspberry Pi edge hardware",
            "Stack: Java, Python, Docker, GitLab CI/CD, Raspberry Pi",
          ],
        },
        {
          bullets: [
            "Delivered messenger bots and automation tools for international clients",
            "Applied OOP design patterns to build maintainable, reusable solutions",
            "Contributed to open-source projects alongside client work",
          ],
        },
      ],
    },
    rates: {
      label: "Rates",
      title: "Let's talk about your project",
      subtitle:
        "Every project is different. Reach out and we'll find the right engagement model — fixed-scope, retainer, or hourly.",
      cta: "Let's talk",
      model: "Fixed-scope · Retainer · Hourly — whatever fits your project",
      features: [
        "Defined deliverables & timeline",
        "Architecture-to-deployment ownership",
        "Ongoing maintenance retainer options",
        "DACH + international clients welcome",
        "Available via Upwork or direct contract",
        "Registered as Aleksandr Grek e.U. (Austria)",
      ],
      getInTouch: "Get in touch",
      alsoOn: "Also available on",
    },
    contact: {
      label: "Contact",
      title: "Let's build something together",
      subtitle:
        "Got a project in mind? Whether it's a quick architecture review or a long-term engagement, I'd love to hear about it. Response within 24 hours.",
      emailLabel: "Email",
      locationLabel: "Location",
      send: "Send me a message",
      footer:
        "Aleksandr Grek e.U. · Vienna, Austria · All rights reserved.",
    },
  },

  de: {
    nav: {
      about: "Über mich",
      services: "Leistungen",
      stack: "Stack",
      experience: "Erfahrung",
      rates: "Konditionen",
      contact: "Kontakt",
      hire: "Jetzt anfragen",
      hintLight: "Hellmodus probieren ☀️",
      hintDark: "Dunkelmodus probieren 🌙",
    },
    hero: {
      badge: "Verfügbar für Freelance-Projekte · Wien, Österreich",
      descPart1:
        "6+ Jahre Entwicklung skalierbarer Backend-Systeme, Microservices und Full-Stack-Anwendungen. Ehemaliger ",
      descPart2:
        " Engineer – jetzt helfe ich DACH- und internationalen Kunden, schneller zu liefern mit ",
      hire: "Jetzt anfragen",
      scroll: "Scrollen zum Entdecken",
    },
    about: {
      label: "Über mich",
      title: "Die Geschichte hinter dem Engineer",
      p1a: "Meine Softwarekarriere begann an der ",
      p1b: ", wo ich Informatik studierte und mich schnell für Backend-Systeme begeisterte — die unsichtbare Maschinerie, die alles andere am Laufen hält.",
      p2a: "Mein Karrierestart war auf Fiverr, wo ich Messenger-Bots entwickelte und zu Open-Source-Projekten beitrug. Danach wechselte ich zu ",
      p2b: " in Deutschland, wo ich CI/CD-Pipelines und Datenmigrations-Tools konzipierte, bevor ich zu ",
      p2c: " in Wien kam – einem der anspruchsvollsten Software-Umfelder Österreichs.",
      p3: "Bei Porsche entwarf ich hochperformante Microservices, führte Legacy-Migrationen durch und betrieb Systeme auf Kubernetes und OpenShift in der Produktion. Diese Erfahrung gab mir eine seltene Kombination: die Präzision von Enterprise Engineering und die Geschwindigkeit einer modernen DevOps-Denkweise.",
      p4a: "Heute arbeite ich als freier Unternehmer, eingetragen als ",
      p4b: " in Österreich. Ich arbeite mit DACH-Unternehmen und internationalen Kunden auf Upwork zusammen und helfe ihnen, skalierbare Systeme zu bauen – schneller durch den Einsatz von KI-Tools in meinem Workflow.",
      highlightExperience: "Erfahrung",
      highlightLocation: "Standort",
      highlightDegree: "Abschluss",
      highlightLanguages: "Sprachen",
      setsApart: "Was mich auszeichnet",
      usps: [
        {
          title: "Enterprise-Qualität auf höchstem Niveau",
          desc: "Geprägt durch Jahre bei Porsche Informatik – einem Maßstab für hochkritische, produktionsreife Software in der Automobilindustrie.",
        },
        {
          title: "Tiefe Backend-Expertise",
          desc: "Java & Spring Boot Spezialist mit praktischer Erfahrung in Kubernetes, OpenShift, Kafka und verteilten Systemen im großen Maßstab.",
        },
        {
          title: "KI-beschleunigtes Arbeiten",
          desc: "KI-Tools werden aktiv in den Entwicklungsworkflow integriert – schnellere Iteration, weniger Fehler, schärfere Ergebnisse.",
        },
        {
          title: "Architekturdenken",
          desc: "Domain-Driven Design und Microservices sind keine Buzzwords – sie sind die Linse, durch die jedes System entworfen wird.",
        },
      ],
    },
    services: {
      label: "Leistungen",
      title: "Was ich für Sie entwickeln kann",
      subtitle:
        "Von Architekturentscheidungen bis zum Produktivbetrieb – ich verantworte den gesamten Lebenszyklus.",
      items: [
        {
          title: "Backend-Entwicklung",
          desc: "Produktionsreife Java & Spring Boot Services – von Greenfield-Microservices bis zu robusten Monolithen, gebaut für Skalierbarkeit und Wartbarkeit.",
        },
        {
          title: "Microservices-Architektur",
          desc: "Design und Implementierung event-gesteuerter, verteilter Systeme mit Kafka, RabbitMQ und REST – mit Domain-Driven Design als Leitfaden.",
        },
        {
          title: "Legacy-System-Migration",
          desc: "Systematische Modernisierung veralteter Codebases – Strangler-Fig-Muster, inkrementelles Refactoring, Zero-Downtime-Migrationen.",
        },
        {
          title: "REST API-Entwicklung",
          desc: "Saubere, versionierte und dokumentierte APIs mit Spring Security, OAuth2 und JWT. Von Anfang an integrationsfreundlich.",
        },
        {
          title: "CI/CD & DevOps",
          desc: "Vollständige Pipeline-Einrichtung mit GitLab CI/CD, Docker, Kubernetes und OpenShift. Vom Commit zur Produktion – automatisiert.",
        },
        {
          title: "Datenbankdesign & Optimierung",
          desc: "PostgreSQL-Schema-Design, Query-Optimierung, Redis-Caching-Strategien und Elasticsearch-Integration für suchintensive Workloads.",
        },
        {
          title: "Full-Stack-Entwicklung",
          desc: "Angular + Java Full-Stack-Entwicklung. TypeScript, Next.js und moderne Frontend-Praktiken, wenn das Projekt es erfordert.",
        },
        {
          title: "Cloud-Deployment",
          desc: "Kubernetes-, OpenShift- und AWS-Deployments. Infrastructure-as-Code-Mindset, kostenbewusst und produktionsbereit.",
        },
        {
          title: "KI-Integration",
          desc: "KI-Fähigkeiten in bestehende Systeme integrieren – LLM-gestützte Features, intelligente Automatisierung und KI-unterstützte Workflows, die schneller liefern.",
        },
        {
          title: "Code-Review & Performance",
          desc: "Tiefgehende Analysen von Engpässen, Thread-Sicherheit, N+1-Queries und Architektur-Anti-Patterns. Umsetzbare Berichte mit Lösungen.",
        },
      ],
    },
    stack: {
      label: "Tech Stack",
      title: "Werkzeuge des Handwerks",
      categories: [
        { label: "Backend-Kern" },
        { label: "Frontend" },
        { label: "Messaging & Suche" },
        { label: "Datenbanken" },
        { label: "DevOps & Cloud" },
        { label: "Sicherheit & Architektur" },
      ],
    },
    experience: {
      label: "Erfahrung",
      title: "Meine berufliche Laufbahn",
      fullTime: "Vollzeit",
      freelance: "Freiberuflich",
      education: "Ausbildung & Zertifizierungen",
      university: "Universität",
      degree: "Bachelor of Computer Science",
      school: "Universität Salzburg · 2019–2023",
      jobs: [
        {
          bullets: [
            "Entwicklung und Lieferung hochperformanter Microservices für geschäftskritische Automobilsysteme",
            "Durchführung von Legacy-Migrationen mit Strangler-Fig-Mustern ohne Produktionsausfälle",
            "Betrieb von Services auf Kubernetes und OpenShift in Enterprise-Umgebungen",
            "Automatisierung von CI/CD-Pipelines mit GitLab – deutliche Reduzierung der Release-Zykluszeit",
            "Stack: Java, Spring Boot, PostgreSQL, Kafka, Kubernetes, OpenShift, GitLab CI/CD",
          ],
        },
        {
          bullets: [
            "Aufbau der CI/CD-Pipeline-Infrastruktur von Grund auf für zuverlässige automatisierte Releases",
            "Entwicklung von Datenmigrations-Tools für komplexe Datentransformationen",
            "Implementierung von Algorithmen zur Sensordatenverarbeitung auf Raspberry Pi Edge-Hardware",
            "Stack: Java, Python, Docker, GitLab CI/CD, Raspberry Pi",
          ],
        },
        {
          bullets: [
            "Entwicklung von Messenger-Bots und Automatisierungstools für internationale Kunden",
            "Anwendung von OOP-Designmustern für wartbare, wiederverwendbare Lösungen",
            "Beiträge zu Open-Source-Projekten neben der Kundenarbeit",
          ],
        },
      ],
    },
    rates: {
      label: "Konditionen",
      title: "Sprechen wir über Ihr Projekt",
      subtitle:
        "Jedes Projekt ist anders. Kontaktieren Sie mich und wir finden das passende Engagement-Modell – Festpreis, Retainer oder Stundenrate.",
      cta: "Lassen Sie uns reden",
      model:
        "Festpreis · Retainer · Stundenweise – was auch immer zu Ihrem Projekt passt",
      features: [
        "Definierte Lieferobjekte & Zeitplan",
        "Vollständige Verantwortung von Architektur bis Deployment",
        "Möglichkeiten für laufende Wartungsverträge",
        "DACH + internationale Kunden willkommen",
        "Verfügbar über Upwork oder direkten Vertrag",
        "Eingetragen als Aleksandr Grek e.U. (Österreich)",
      ],
      getInTouch: "Kontakt aufnehmen",
      alsoOn: "Auch verfügbar auf",
    },
    contact: {
      label: "Kontakt",
      title: "Lassen Sie uns gemeinsam etwas aufbauen",
      subtitle:
        "Haben Sie ein Projekt im Sinn? Ob schnelle Architekturanalyse oder langfristige Zusammenarbeit – ich freue mich, davon zu hören. Antwort innerhalb von 24 Stunden.",
      emailLabel: "E-Mail",
      locationLabel: "Standort",
      send: "Nachricht senden",
      footer:
        "Aleksandr Grek e.U. · Wien, Österreich · Alle Rechte vorbehalten.",
    },
  },
};

export type Translations = typeof translations.en;
