import { useState } from "react";
import cert from "../../cert.png"; // Import the certificate image

export function Landing() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <h1 className="text-4xl font-bold text-center">Austin Lothenbach</h1>
            <h2 className="text-2xl font-semibold text-center space-y-6">Senior Support Engineer</h2>
            <h3 className="mt-2 text-xs text-center text-gray-400">
              SaaS Technical Operations | AWS Cloud Infrastructure | Automation
            </h3>
          </div>
        </header>
        
        <div className="w-full max-w-4xl space-y-6 px-4">
          <section className="rounded-3xl border border-gray-700 bg-gray-900/60 p-6 shadow-sm">
            <h2 className="mb-4 text-center text-2xl font-semibold text-gray-100 dark:text-gray-100">
              Summary
            </h2>
            <p className="text-center text-xs leading-relaxed text-gray-200 sm:text-sm">
              Technical Operations Professional with 10 years of experience supporting SaaS platforms, managing customer production environments, and improving operational efficiency through automation. Experienced in AWS cloud services, Linux-based environments, SQL, Bash scripting, infrastructure tooling, and CI/CD pipeline operations. Background includes maintaining cloud-hosted environments, supporting technical integrations, implementing automated workflows, and collaborating with engineering teams to resolve complex technical issues. AWS Certified Cloud Practitioner with growing hands-on experience in cloud infrastrucutre, infrastucture as code, and DevOps practices.
            </p>
          </section>

          <section className="rounded-3xl border border-gray-700 bg-gray-900/60 p-6 shadow-sm">
            <h2 className="mb-5 text-center text-2xl font-semibold text-gray-100 dark:text-gray-100">
              Technical Skills
            </h2>
            <div className="grid gap-4 text-xs sm:text-sm">
              {technicalSkills.map(({ category, skills }) => (
                <section key={category}>
                  <h3 className="flex items-center gap-3 font-semibold text-gray-100">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#E2703E]" />
                    {category}
                  </h3>
                  <p className="mt-1 pl-6 text-gray-200 dark:text-gray-200">
                    {skills.map((skill) => (
                      <span key={skill}>
                        {skill === "AWS (EC2, S3, Route 53, Lambda, RDS, VPC) - Certified Cloud Practitioner" ? (
                          <button
                            type="button"
                            onClick={() => setShowCertificate(true)}
                            className="underline underline-offset-2 hover:text-[#E2703E]"
                          >
                            {skill}
                          </button>
                        ) : (
                          <span>{skill}</span>
                        )}
                        {skill !== skills[skills.length - 1] && " · "}
                      </span>
                    ))}
                  </p>
                </section>
              ))}
            </div>
          </section>
          <section className="rounded-3xl border border-gray-700 bg-gray-900/60 p-6 shadow-sm">
            <h2 className="mb-5 text-center text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Work Experience
            </h2>
            <div className="grid gap-4 md:grid-cols-1">
              {workExperience.map(({ title, company, dates, bullets }) => (
                <article
                  key={company}
                  className="rounded-2xl border border-gray-600 bg-[#1F2823] p-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
                  <p className="mt-1 text-md font-medium text-[#E2703E] dark:text-[#E2703E]">{company}</p>
                  <p className="mt-1 text-xs text-gray-300 italic">{dates}</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-200">
                    {bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="mt-4 flex justify-center"><a
            href="https://www.linkedin.com/in/austin-lothenbach-988a39155/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF] underline hover:text-[#E2703E] transition-colors duration-300"
          >LinkedIn
          </a></div>
          </section>

          <section className="rounded-3xl border border-gray-700 bg-gray-900/60 p-6 shadow-sm">
            <h2 className="mb-5 text-center text-2xl font-semibold text-gray-100 dark:text-gray-100">
              Personal Projects
            </h2>
            <div className="grid gap-4 md:grid-cols-1">
              {personalProjects.map(({ title, bullets }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-gray-600 bg-[#1F2823] p-4"
                >
                  <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-200">
                    {bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-gray-700 bg-gray-900/60 p-6 shadow-sm">
            <h2 className="mb-5 text-center text-2xl font-semibold text-gray-100 dark:text-gray-100">
              Additional Technical Experience
            </h2>
            <div className="grid gap-4 md:grid-cols-1">
              {additionalTechnicalExperience.map(({ title, company, dates, bullets }) => (
                <article
                  key={company}
                  className="rounded-2xl border border-gray-600 bg-[#1F2823] p-4"
                >
                  <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
                  <p className="mt-1 text-md font-medium text-[#E2703E]">{company}</p>
                  <p className="mt-1 text-sm text-gray-200">{dates}</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-200">
                    {bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>
        
      </div>
      <footer className="mt-8 self-end px-4 text-sm text-gray-400">
        <p>© Austin Lothenbach - 2026</p>
      </footer>
      {showCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setShowCertificate(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="AWS Certified Cloud Practitioner Certificate"
            className="relative max-h-[90vh] max-w-3xl rounded-xl bg-white p-4 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowCertificate(false)}
              aria-label="Close certificate"
              className="absolute right-2 top-2 rounded-full bg-white px-3 py-1 text-xl text-gray-900 shadow hover:text-[#E2703E]"
            >
              ×
            </button>
              <img
                src={cert}
              alt="AWS Certified Cloud Practitioner Certificate"
              className="max-h-[80vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}

const technicalSkills = [
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS (EC2, S3, Route 53, Lambda, RDS, VPC) - Certified Cloud Practitioner", "Terraform (Foundational)", "VirtualBox & VMWare"]
  },
  {
    category: "Operating Systems & Networking",
    skills: ["Linux/Ubuntu (Foundational)", "Windows Server (Foundational)", "Networking (TCP/IP, DNS, DHCP, VPN)"]
  },
  {
    category: "Programming & Scripts",
    skills: ["Python", "JavaScript", "React", "Bash", "SQL", "HTML/CSS"],
  },
  {
    category: "Development & Integration Tools",
    skills: ["GitLab CI/CD", "Azure DevOps", "VS Code", "REST APIs", "Webhooks", "MQTT", "HTTP Connectors", "GraphQL", "Postman"],
  },
  {
    category: "Systems Administration & Monitoring",
    skills: ["Active Directory", "Google Workspace Administration", "Grafana", "SQL Server Management Studio", "Jira"],
  },
];

const personalProjects = [
  {
    title: "AWS - Hosted Personal Website | austinlothenbach.com",
    bullets: ["Deployed a personal website (This one!) using AWS S3 static website hosting.",
      "Developed the website using React and TypeScript in VSCode on an Ubuntu environment running within VirtualBox.",
      "Configured Amazon Route 53 to associate a custom domain with the hosted website.", 
      "Gained hands-on experience deploying and managing a personal web presence using AWS cloud services."
    ]
  },
];

const additionalTechnicalExperience = [
  {
    title: "Network Technician",
    company: "vRad",
    dates: "2015 - 2016",
    bullets: ["Maintained and troubleshot Cisco VPN connections supporting secure network connectivity between hospitals, clinics, and remote radiologists.", 
      "Diagnosed connectivity issues affecting access to medical imaging systems and remote diagnostic workflows.",
      "Supported reliable communication between healthcare facilities and remote technical users by investigating and resolve VPN-related network issues."
    ],
  },
  {
    title: "IT Technician",
    company: "HOM Furniture",
    dates: "2014 - 2015",
    bullets: ["Provided IT support across multiple retail locations, troubleshooting desktop computers, printers, wireless access points, and general connectivity issues.",
      "Administered Windows Servers and Active Directory accounts, groups, and permissions, including basic Group Policy administration.",
      "Managed Google Workspace user accounts and email access, including account creation and deactivation.",
    ],
  },
];

const workExperience = [
  {
    title: "Managed Services Team Lead",
    company: "Solifi",
    dates: "August 2022 - October 2026",
    bullets: [
      "Supported maintenance of Linux-based AWS EC2 test environments and customer production and UAT environments, utilizing AWS, SQL, Terraform, and GitLab pipelines.",
      "Developed and implemented Bash automation solutions for recurring customer tasks, achieving a 96% adoption rate for automation across eligible workflows.",
      "Supported Managed Services growth from 23 to over 50 customers by establishing scalable operational processes and streamlining internal and external service requests.",
      "Coordinated customer onboarding projects and technical handoffs between Professional Services and Managed Services teams.",
      "Developed and maintained operational documentation and standardized procedures to support global team expansion and cross-functional collaboration.",
      "Managed team operations, including workforce planning, candidate interviews, PTO approvals, and customer onboarding presentations, while leading 5-10 application management specialists.",
    ],
  },
  {
    title: "Technical Support Engineer",
    company: "Calabrio",
    dates: "April 2022 - July 2022",
    bullets: [
      "Troubleshot technical issues across on-premise and cloud-based Calabrio WFM environments.",
      "Utilized SQL Server Management Studio to investigate customer data integrity and database configurations.",
      "Managed technical escalations through ServiceNow and executed predefined scripts through Azure DevOps for customer environments and databases."
    ],
  },
  {
    title: "Applications Engineer",
    company: "Exosite",
    dates: "February 2021 - April 2022",
    bullets: [
      "Supported customer IoT integrations through APIs, Webhooks, MQTT, and HTTP connectors.",
      "Developed and modified custom Python and JavaScript code to support customer-specific integrations, data transformations, and IoT hardware connectivity.",      "Maintained and created documentation for new hardware and software partners, answering and creating community forum posts to enhance resourrces for end-users.",
      "Investigated technical issues through customer support channels and coordinated escalations and feature requests with internal teams.",
      "Developed technical documentation for hardware and software integrations and maintained community knowledge resources."
    ],
  },
  {
    title: "Product Support Specialist III - Central Stations & Integrations",
    company: "Alarm.com",
    dates: "October 2016 - February 2021",
    bullets: [
      "Supported backend API integrations between Central Station partners and Alarm.com dealer platforms.",
      "Collaborated with Product Managers to prioritize technical projects and communicate operational requirements to engineering teams.",
      "Acted as a technical liaison between Tier 2 Support Specialists and Software/Quality Engineering teams to facilitate escaltion resolution.",
      "Utilized Jira to create, assign, track, and coordinate software defect and enhancement requests."
    ],
  },
];
