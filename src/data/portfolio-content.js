// Portfolio Content Data - Juan Andrés García
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Juan Andrés García G.",
    title: "Senior Business Intelligence Analyst",
    subtitle: "Ex-Graphite Contractor | SaaS Metrics Specialist",
    email: "jgarci60@eafit.edu.com",
    phone: "+57 321 772 6074",
    location: "Medellín, Colombia",
    linkedin: "https://linkedin.com/in/juanandresgarcia",
    github: "https://github.com/intelguy8000",
    resumeUrl: "/resume/JuanAndresGarcia_CV.pdf",
  },

  // Hero Section
  hero: {
    tagline: "Your curiosity's collaborator",
    headline: "Transforming Data into Strategic Insights",
    subtitle: "Where complexity meets clarity",
    description: "Senior Business Intelligence Analyst with 6+ years building data solutions for SaaS and enterprise companies. Recently completed 8-month contract with Graphite (YC-backed) building SaaS metrics infrastructure.",
    stats: [
      { label: "Dashboards Delivered", value: 50, suffix: "+" },
      { label: "Cost Savings", value: 2, prefix: "$", suffix: "M+" },
      { label: "Records Processed", value: 500, suffix: "M+" },
      { label: "Years Experience", value: 6, suffix: "+" },
    ],
  },

  // Types of Work
  typesOfWork: [
    {
      icon: "📊",
      title: "Data Architecture",
      description: "Building scalable data pipelines and infrastructure that turn raw data into strategic assets.",
      tags: ["ETL/ELT", "Warehousing", "Analytics"],
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Implementing intelligent solutions that learn, adapt, and deliver measurable business value.",
      tags: ["NLP", "Predictive", "Automation"],
    },
    {
      icon: "📈",
      title: "Business Intelligence",
      description: "Transforming data into actionable insights through interactive dashboards and reports.",
      tags: ["Dashboards", "Reports", "Insights"],
    },
  ],

  // About Section
  about: {
    bio: `Hi, I'm Juan Andrés García, a Senior BI Analyst based in Medellín, Colombia. 
    I recently completed an 8-month contract with Graphite (YC-backed startup) where I built 
    their entire SaaS metrics infrastructure tracking $50M+ ARR.
    
    I specialize in transforming complex data into actionable insights using Power BI, 
    Looker Studio, and BigQuery. My passion lies in the intersection of business strategy 
    and data technology.
    
    Currently pursuing AI & Data Governance studies at EAFIT University while maintaining 
    a senior role at TCL, where I've deployed 50+ production dashboards.`,
    
    highlights: [
      "Ex-Graphite contractor (YC-backed SaaS)",
      "6+ years in BI and data analytics",
      "Expert in Power BI, Looker Studio, BigQuery",
      "Specialized in SaaS metrics (ARR/MRR/Churn)",
      "Led teams of 8+ analysts",
      "$2M+ in cost savings identified",
    ],
  },

  // Experience Timeline
  experience: [
    {
      company: "Graphite",
      role: "Business Intelligence Contractor",
      period: "Mar 2025 - Oct 2025",
      location: "Remote (San Francisco, CA)",
      description: "Built SaaS metrics infrastructure for YC-backed startup",
      achievements: [
        "Designed SaaS metrics dashboards tracking $50M+ ARR, MRR, and churn",
        "Processed 500M+ events monthly using BigQuery",
        "Created unified metrics dashboard for board meetings",
        "Reduced metric discrepancies by 95%",
      ],
      technologies: ["Looker Studio", "BigQuery", "SQL", "Python"],
      type: "contract",
    },
    {
      company: "TCL / Kairos",
      role: "Senior Data Analyst & Automation Specialist",
      period: "May 2024 - Present",
      location: "Remote (Miami, FL)",
      description: "Leading BI initiatives and automation projects",
      achievements: [
        "Deployed 53+ Power BI dashboards processing 10M+ records daily",
        "Reduced manual processes by 35% through automation",
        "Identified $2M in cost-saving opportunities",
        "Optimized DAX queries for 60% faster performance",
      ],
      technologies: ["Power BI", "Power Automate", "Azure", "SQL"],
      type: "full-time",
    },
    {
      company: "Million and Up",
      role: "Business Analytics Leader",
      period: "Dec 2021 - May 2024",
      location: "Remote (Miami/NYC)",
      description: "Real estate analytics for $1.6B+ in sales",
      achievements: [
        "Led analytics for $500M+ in transactions",
        "Increased conversion rate by 22% through predictive analytics",
        "Developed Python-based ETL pipelines",
        "Mentored team of 5 junior analysts",
      ],
      technologies: ["Power BI", "Python", "SQL", "APIs"],
      type: "full-time",
    },
    {
      company: "Smart CS",
      role: "Business Intelligence Analyst Leader",
      period: "July 2020 - Dec 2021",
      location: "Remote (Miami/Bogotá)",
      description: "Led BI solutions across multiple industries",
      achievements: [
        "Managed team of 8 analysts",
        "Achieved 26% efficiency increase",
        "Won Business Success Case Award",
        "Delivered solutions for 15+ enterprise clients",
      ],
      technologies: ["Power BI", "SQL", "Cloud", "Python"],
      type: "full-time",
    },
    {
      company: "Avery Dennison",
      role: "BI Analyst - South America",
      period: "June 2018 - June 2020",
      location: "South America",
      description: "Fortune 500 - Regional BI implementation",
      achievements: [
        "Established BI infrastructure across 6 countries",
        "Tracked 50M+ units annually",
        "Improved operational efficiency by 18%",
        "2x Employee of the Month",
      ],
      technologies: ["SQL", "Tableau", "Excel", "SAP"],
      type: "full-time",
    },
  ],

  // Projects
  projects: [
    {
      id: "graphite-saas",
      title: "Graphite SaaS Metrics Dashboard",
      category: "SaaS Analytics",
      description: "Unified metrics dashboard for YC-backed startup tracking $50M+ ARR, MRR, churn, and cohort retention. Used in board meetings and investor updates.",
      image: "/images/projects/graphite-dashboard.png",
      technologies: ["Looker Studio", "BigQuery", "SQL", "Python"],
      metrics: {
        "Events Processed": "500M+ monthly",
        "Accuracy Improvement": "95%",
        "ARR Tracked": "$50M+",
        "Report Time": "Real-time",
      },
      links: {
        demo: "#",
        case: "#",
      },
      featured: true,
    },
    {
      id: "plataforma-global",
      title: "Plataforma Global - AI Analytics Platform",
      category: "Full-Stack",
      description: "Full-stack analytics platform with real-time visualization and AI-powered chat assistant for data exploration using natural language.",
      image: "/images/projects/plataforma-global.png",
      technologies: ["React", "Python", "PostgreSQL", "OpenAI", "Power BI"],
      metrics: {
        "Response Time": "<2s",
        "Uptime": "99.9%",
        "Users": "500+",
        "Queries/Day": "1000+",
      },
      links: {
        github: "https://github.com/intelguy8000/plataforma_global",
        demo: "#",
      },
      featured: true,
    },
    {
      id: "sales-pipeline",
      title: "Sales Pipeline Analytics",
      category: "Power BI",
      description: "End-to-end sales analytics with predictive forecasting for real estate company managing $1.6B+ in sales.",
      image: "/images/projects/sales-pipeline.png",
      technologies: ["Power BI", "DAX", "Azure", "Python"],
      metrics: {
        "Sales Tracked": "$500M+",
        "Conversion Increase": "22%",
        "Forecast Accuracy": "89%",
        "Processing Time": "60% faster",
      },
      links: {
        demo: "#",
        pdf: "/projects/sales-pipeline.pdf",
      },
      featured: true,
    },
    {
      id: "customer-analytics",
      title: "E-commerce Customer Analytics",
      category: "Machine Learning",
      description: "Customer segmentation and lifetime value prediction model with churn analysis for e-commerce platform.",
      image: "/images/projects/customer-analytics.png",
      technologies: ["Python", "Scikit-learn", "Streamlit", "SQL"],
      metrics: {
        "Prediction Accuracy": "89%",
        "Churn Reduction": "15%",
        "ROI": "400%",
        "Processing": "Real-time",
      },
      links: {
        github: "#",
        demo: "#",
      },
      featured: false,
    },
    {
      id: "inventory-optimization",
      title: "Inventory Optimization System",
      category: "Operations",
      description: "Automated inventory management system with demand forecasting and stock optimization algorithms.",
      image: "/images/projects/inventory.png",
      technologies: ["Python", "PostgreSQL", "Airflow", "Docker"],
      metrics: {
        "Cost Reduction": "30%",
        "Stock-outs": "-45%",
        "Efficiency": "+35%",
        "ROI": "250%",
      },
      links: {
        case: "#",
      },
      featured: false,
    },
  ],

  // Skills
  skills: {
    "Business Intelligence": [
      { name: "Power BI", level: 5 },
      { name: "Looker Studio", level: 5 },
      { name: "Tableau", level: 4 },
      { name: "DAX", level: 5 },
      { name: "Data Modeling", level: 5 },
      { name: "KPI Design", level: 5 },
    ],
    "Data Engineering": [
      { name: "SQL", level: 5 },
      { name: "BigQuery", level: 5 },
      { name: "Python", level: 4 },
      { name: "ETL/ELT", level: 4 },
      { name: "Snowflake", level: 4 },
      { name: "PostgreSQL", level: 4 },
    ],
    "SaaS Metrics": [
      { name: "ARR/MRR", level: 5 },
      { name: "Churn Analysis", level: 5 },
      { name: "Cohort Retention", level: 5 },
      { name: "LTV/CAC", level: 4 },
      { name: "Unit Economics", level: 4 },
      { name: "Growth Metrics", level: 5 },
    ],
    "Cloud & Tools": [
      { name: "Azure", level: 4 },
      { name: "GCP", level: 4 },
      { name: "Git", level: 4 },
      { name: "Docker", level: 3 },
      { name: "Airflow", level: 3 },
      { name: "APIs", level: 4 },
    ],
  },

  // Education & Certifications
  education: {
    current: {
      degree: "AI Analytics & Data Governance",
      institution: "EAFIT University",
      year: "2025",
      status: "In Progress",
    },
    degrees: [
      {
        degree: "Bachelor of Business Administration",
        institution: "EAFIT University",
        year: "2018",
        gpa: "3.7/4.0",
      },
    ],
    certifications: [
      {
        name: "Data Science with Python: Machine Learning",
        issuer: "NYC Hybrid Program",
        year: "2023-2025",
        status: "In Progress",
      },
      {
        name: "Machine Learning in Python",
        issuer: "Microsoft & EAFIT",
        year: "2022",
        hours: 100,
      },
      {
        name: "Automation Specialist",
        issuer: "Clean Automation",
        year: "2024",
        status: "Completed",
      },
    ],
    upcoming: [
      "Microsoft Power BI Data Analyst (PL-300)",
      "Google Cloud Data Engineer",
      "Snowflake SnowPro Core",
    ],
  },

  // Testimonials (optional - add when you have them)
  testimonials: [
    {
      name: "Engineering Manager",
      company: "Graphite",
      text: "Juan built our entire SaaS metrics infrastructure from scratch. His expertise in Looker Studio and BigQuery was instrumental in creating our single source of truth for board meetings.",
      image: "/images/testimonials/graphite.png",
    },
    {
      name: "VP of Operations",
      company: "Million and Up",
      text: "Juan's predictive analytics model increased our conversion rate by 22%. His ability to translate complex data into actionable insights is exceptional.",
      image: "/images/testimonials/millionup.png",
    },
  ],

  // Blog Posts (optional)
  blog: [
    {
      title: "5 DAX Functions That Changed My Power BI Game",
      excerpt: "Essential DAX functions every BI analyst should master for efficient dashboard development.",
      date: "2025-11-01",
      tags: ["Power BI", "DAX", "Tutorial"],
      readTime: "5 min",
      slug: "dax-functions-power-bi",
    },
    {
      title: "Building SaaS Metrics: Lessons from Graphite",
      excerpt: "Key insights from building a comprehensive SaaS metrics infrastructure for a YC startup.",
      date: "2025-10-15",
      tags: ["SaaS", "Metrics", "Case Study"],
      readTime: "8 min",
      slug: "saas-metrics-graphite",
    },
  ],
};

export default portfolioData;
