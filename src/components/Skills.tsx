"use client";

import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    key: "frontend" as const,
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/20 hover:border-cyan-500/40",
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-400",
    skills: ["React", "TypeScript", "HTML5", "CSS3"],
  },
  {
    key: "backend" as const,
    color: "from-indigo-500 to-violet-500",
    borderColor: "border-indigo-500/20 hover:border-indigo-500/40",
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-400",
    skills: [
      "Java (11/17+)",
      "Kotlin",
      "Spring Boot",
      "Spring Cloud",
      "Spring Data",
      "Spring Batch",
      "REST APIs",
      "gRPC",
      "GraphQL",
      "Apache Kafka",
      "Kafka Streams",
      "Kafka Connect",
      "Schema Registry",
      "RabbitMQ",
      "Resilience4j",
      "Saga Pattern",
    ],
  },
  {
    key: "cloud" as const,
    color: "from-orange-500 to-amber-500",
    borderColor: "border-orange-500/20 hover:border-orange-500/40",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-400",
    skills: ["AWS (EC2, S3, RDS)", "Docker", "Kubernetes", "CI/CD Pipelines"],
  },
  {
    key: "data" as const,
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-400",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "Cassandra",
      "Redis",
      "Elasticsearch",
      "OpenTelemetry",
      "Micrometer",
      "Prometheus",
      "Grafana",
      "ELK/OpenSearch",
      "Jaeger",
      "Zipkin",
    ],
  },
  {
    key: "testing" as const,
    color: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500/20 hover:border-pink-500/40",
    bgColor: "bg-pink-500/10",
    textColor: "text-pink-400",
    skills: ["JUnit", "Mockito", "Testcontainers", "Git", "Maven", "Gradle"],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">{t.skills.title}</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t.skills.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.key} delay={0.1 * i}>
              <div
                className={`glass-card rounded-2xl p-6 h-full border ${category.borderColor} transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`}
                  />
                  <h3 className="text-lg font-semibold text-white">
                    {t.skills[category.key]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg ${category.bgColor} ${category.textColor} border border-transparent hover:border-current/20 transition-colors`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
