export const translations = {
  es: {
    nav: {
      about: "Sobre Mí",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      contact: "Contacto",
      resume: "CV",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Enrico Perania",
      role: "Ingeniero Backend Líder",
      description:
        "Ingeniero de Software con ~9 años de experiencia desarrollando sistemas escalables y orientados a producto en entornos fintech y SaaS. Especializado en backend y arquitecturas distribuidas.",
      cta_resume: "Descargar CV",
      cta_contact: "Contáctame",
    },
    about: {
      title: "Sobre Mí",
      description:
        "Ingeniero de Software con ~9 años de experiencia desarrollando sistemas escalables y orientados a producto en entornos fintech y SaaS. Especializado en backend y arquitecturas distribuidas utilizando Java y el ecosistema Spring. Experiencia comprobada optimizando rendimiento, resiliencia y procesamiento de datos a gran escala. Profesional multilingüe con sólida experiencia colaborando en equipos remotos internacionales.",
      location: "San Martín de Porres, Lima, Perú",
      remote: "Disponible para trabajo remoto",
      years: "9+",
      years_label: "Años de Experiencia",
      projects: "50+",
      projects_label: "Proyectos Entregados",
      uptime: "99.95%",
      uptime_label: "Disponibilidad Lograda",
      languages_title: "Idiomas",
      spanish: "Español (fluido)",
      english: "Inglés (fluido)",
      japanese: "Japonés (fluido)",
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle: "Tecnologías y herramientas con las que trabajo día a día",
      frontend: "Interfaz (Frontend)",
      backend: "Servidor (Backend)",
      cloud: "Nube / DevOps",
      data: "Datos y Observabilidad",
      testing: "Herramientas y Pruebas",
    },
    experience: {
      title: "Experiencia Profesional",
      subtitle: "Trayectoria construyendo productos de alto impacto",
      present: "Presente",
      achievements: "Logros Destacados",
      product: "Producto",
      jobs: [
        {
          company: "Kueski",
          location: "México — Remoto desde Perú",
          role: "Ingeniero Backend Líder",
          period: "Ago 2024 – Presente",
          description:
            "Plataforma fintech líder en préstamos en línea en México, procesando millones de transacciones mensuales.",
          achievements: [
            "Lideré el desarrollo de una plataforma financiera de alto volumen, incrementando el throughput en 40% mediante Kafka Streams",
            "Diseñé una arquitectura de microservicios basada en eventos con Spring Boot y Kafka, reduciendo la latencia en 30%",
            "Implementé herramientas de soporte a decisiones crediticias usando LLMs con pipelines RAG, reduciendo el tiempo de revisión manual en 25%",
            "Desarrollé copilotos internos con recuperación basada en vectores, aumentando la productividad operativa en 20%",
            "Implementé patrones de resiliencia (circuit breakers, retries, DLQ), logrando 99.95% de disponibilidad",
            "Establecí estándares de observabilidad con OpenTelemetry y Grafana, reduciendo el tiempo de resolución de incidentes en 35%",
          ],
          product_description:
            "Plataforma de préstamos digitales con evaluación crediticia en tiempo real y procesamiento de pagos automatizado.",
        },
        {
          company: "Retool",
          location: "Estados Unidos — Remoto desde Perú",
          role: "Ingeniero Backend Senior",
          period: "Abr 2021 – Jul 2024",
          description:
            "Plataforma líder para construir herramientas internas, utilizada por más de 10K usuarios empresariales.",
          achievements: [
            "Diseñé servicios backend distribuidos con Java, Spring Boot y Kafka, soportando herramientas utilizadas por más de 10K usuarios",
            "Construí pipelines de datos en tiempo real con Kafka Streams y Connect, mejorando la eficiencia en 45%",
            "Desarrollé APIs escalables (REST/gRPC) reduciendo tiempos de respuesta en 35%",
            "Implementé Resilience4j, reduciendo fallos en picos de carga en 50%",
            "Lideré la migración de monolito a microservicios, aumentando la frecuencia de despliegue en 3x",
            "Implementé monitoreo con Prometheus, Grafana y ELK para mejorar la observabilidad del sistema",
          ],
          product_description:
            "Constructor visual de herramientas internas con componentes drag-and-drop y conexiones a múltiples fuentes de datos.",
        },
        {
          company: "Factorial",
          location: "España — Remoto desde Perú",
          role: "Ingeniero de Software (Full Stack)",
          period: "Ene 2019 – Mar 2021",
          description:
            "Plataforma SaaS de gestión de RRHH utilizada por miles de empresas en Europa y Latinoamérica.",
          achievements: [
            "Desarrollé servicios backend con Spring Boot y PostgreSQL para una plataforma SaaS de RRHH con miles de empresas activas",
            "Optimicé APIs REST reduciendo tiempos de respuesta en 25%",
            "Implementé procesamiento asíncrono con RabbitMQ (DLQ, reintentos), mejorando la confiabilidad en 40%",
            "Contribuí al desarrollo frontend con React, aumentando el engagement de usuarios en 15%",
            "Participé en el diseño de arquitectura modular del sistema",
          ],
          product_description:
            "Suite integral de RRHH para gestión de nómina, ausencias, evaluaciones de desempeño y onboarding de empleados.",
        },
        {
          company: "Holded",
          location: "España — Remoto desde Perú",
          role: "Ingeniero de Software Junior (Frontend)",
          period: "Jul 2016 – Dic 2018",
          description:
            "Plataforma ERP cloud para pymes que integra facturación, contabilidad, proyectos y CRM.",
          achievements: [
            "Desarrollé componentes UI con React, mejorando la retención de usuarios en 20%",
            "Integré frontend con APIs backend asegurando una experiencia fluida",
            "Optimicé el rendimiento reduciendo tiempos de carga en 30%",
            "Colaboré con equipos de producto y diseño en un entorno ágil",
            "Adquirí bases sólidas en desarrollo fullstack y consumo de APIs REST",
          ],
          product_description:
            "Software ERP todo-en-uno para gestión empresarial: facturación, contabilidad, inventario y proyectos.",
        },
      ],
    },
    education: {
      title: "Educación",
      degree: "Licenciatura en Ciencias de la Computación",
      university: "Universidad Nacional de Ingeniería, Perú",
      graduated: "Graduado: 2016",
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? ¡Conversemos!",
      name_label: "Nombre",
      name_placeholder: "Tu nombre",
      email_label: "Correo Electrónico",
      email_placeholder: "tu@email.com",
      subject_label: "Asunto",
      subject_placeholder: "¿Sobre qué quieres hablar?",
      message_label: "Mensaje",
      message_placeholder: "Cuéntame sobre tu proyecto...",
      send: "Enviar Mensaje",
      address_title: "Dirección",
      address: "Av. Universitaria 742, Urbanización Ingeniería, Distrito de San Martín de Porres, Lima, Perú",
      email_title: "Correo",
      phone_title: "Teléfono",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Enrico Perania",
      role: "Lead Backend Engineer",
      description:
        "Software Engineer with ~9 years of experience building scalable, product-oriented systems in fintech and SaaS environments. Specialized in backend and distributed architectures.",
      cta_resume: "Download Resume",
      cta_contact: "Contact Me",
    },
    about: {
      title: "About Me",
      description:
        "Software Engineer with ~9 years of experience building scalable, product-oriented systems in fintech and SaaS environments. Specialized in backend and distributed architectures using Java and the Spring ecosystem. Proven track record optimizing performance, resilience, and large-scale data processing. Multilingual professional with strong experience collaborating in international remote teams.",
      location: "San Martín de Porres, Lima, Peru",
      remote: "Available for remote work",
      years: "9+",
      years_label: "Years of Experience",
      projects: "50+",
      projects_label: "Projects Delivered",
      uptime: "99.95%",
      uptime_label: "Uptime Achieved",
      languages_title: "Languages",
      spanish: "Spanish (fluent)",
      english: "English (fluent)",
      japanese: "Japanese (fluent)",
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Technologies and tools I work with daily",
      frontend: "Frontend",
      backend: "Backend",
      cloud: "Cloud / DevOps",
      data: "Data & Observability",
      testing: "Tools & Testing",
    },
    experience: {
      title: "Professional Experience",
      subtitle: "Building high-impact products throughout my career",
      present: "Present",
      achievements: "Key Achievements",
      product: "Product",
      jobs: [
        {
          company: "Kueski",
          location: "Mexico — Remote from Peru",
          role: "Lead Backend Engineer",
          period: "Aug 2024 – Present",
          description:
            "Mexico's leading online lending fintech platform, processing millions of monthly transactions.",
          achievements: [
            "Led the development of a high-volume financial platform, increasing throughput by 40% via Kafka Streams",
            "Designed an event-driven microservices architecture with Spring Boot and Kafka, reducing latency by 30%",
            "Implemented credit decision support tools using LLMs with RAG pipelines, reducing manual review time by 25%",
            "Developed internal copilots with vector-based retrieval, boosting operational productivity by 20%",
            "Implemented resilience patterns (circuit breakers, retries, DLQ), achieving 99.95% availability",
            "Established observability standards with OpenTelemetry and Grafana, reducing incident resolution time by 35%",
          ],
          product_description:
            "Digital lending platform with real-time credit scoring and automated payment processing.",
        },
        {
          company: "Retool",
          location: "United States — Remote from Peru",
          role: "Senior Backend Engineer",
          period: "Apr 2021 – Jul 2024",
          description:
            "Leading platform for building internal tools, used by 10K+ enterprise users.",
          achievements: [
            "Designed distributed backend services with Java, Spring Boot, and Kafka, supporting tools used by 10K+ users",
            "Built real-time data pipelines with Kafka Streams and Connect, improving efficiency by 45%",
            "Developed scalable APIs (REST/gRPC) reducing response times by 35%",
            "Implemented Resilience4j, reducing failures during peak loads by 50%",
            "Led monolith-to-microservices migration, increasing deployment frequency by 3x",
            "Implemented monitoring with Prometheus, Grafana, and ELK to improve system observability",
          ],
          product_description:
            "Visual internal tools builder with drag-and-drop components and multi-datasource connections.",
        },
        {
          company: "Factorial",
          location: "Spain — Remote from Peru",
          role: "Software Engineer (Full Stack)",
          period: "Jan 2019 – Mar 2021",
          description:
            "HR SaaS platform used by thousands of companies across Europe and Latin America.",
          achievements: [
            "Built backend services with Spring Boot and PostgreSQL for an HR SaaS platform with thousands of active companies",
            "Optimized REST APIs reducing response times by 25%",
            "Implemented async processing with RabbitMQ (DLQ, retries), improving reliability by 40%",
            "Contributed to frontend development with React, increasing user engagement by 15%",
            "Participated in designing the system's modular architecture",
          ],
          product_description:
            "Comprehensive HR suite for payroll management, time-off, performance reviews, and employee onboarding.",
        },
        {
          company: "Holded",
          location: "Spain — Remote from Peru",
          role: "Junior Software Engineer (Frontend)",
          period: "Jul 2016 – Dec 2018",
          description:
            "Cloud ERP platform for SMEs integrating invoicing, accounting, projects, and CRM.",
          achievements: [
            "Developed UI components with React, improving user retention by 20%",
            "Integrated frontend with backend APIs ensuring a seamless experience",
            "Optimized performance reducing load times by 30%",
            "Collaborated with product and design teams in an agile environment",
            "Built strong foundations in fullstack development and REST API consumption",
          ],
          product_description:
            "All-in-one ERP software for business management: invoicing, accounting, inventory, and projects.",
        },
      ],
    },
    education: {
      title: "Education",
      degree: "Bachelor's Degree in Computer Science",
      university: "National University of Engineering, Peru",
      graduated: "Graduated: 2016",
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk!",
      name_label: "Name",
      name_placeholder: "Your name",
      email_label: "Email",
      email_placeholder: "you@email.com",
      subject_label: "Subject",
      subject_placeholder: "What do you want to talk about?",
      message_label: "Message",
      message_placeholder: "Tell me about your project...",
      send: "Send Message",
      address_title: "Address",
      address: "Av. Universitaria 742, Urbanización Ingeniería, Distrito de San Martín de Porres, Lima, Peru",
      email_title: "Email",
      phone_title: "Phone",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
} as const;

export type Language = "es" | "en";
export type Translations = typeof translations;
