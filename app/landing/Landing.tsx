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
              10+ years of Support Engineering experience, currently learning Cloud Engineering and DevOps practices, with a focus on AWS and Kubernetes.
            </h3>
          </div>
        </header>
        <div className="w-full max-w-4xl space-y-6 px-4">
          <section className="rounded-3xl border border-gray-700 bg-gray-900/60 p-6 shadow-sm">
            <h2 className="mb-5 text-center text-2xl font-semibold text-gray-100 dark:text-gray-100">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm sm:text-base">
              <ul className="space-y-3 text-gray-200 dark:text-gray-200">
                {technicalSkills.slice(0, 4).map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E2703E] text-center" />
                    {skill === "AWS - Certified Cloud Practitioner" ? (
                      <button
                        type="button"
                        onClick={() => setShowCertificate(true)}
                        className="flex-1 text-center underline underline-offset-2 hover:text-[#E2703E]"
                      >
                        {skill}
                      </button>
                    ) : (
                      <span className="flex-1 text-center">{skill}</span>
                    )}
                  </li>
                ))}
              </ul>
              <ul className="space-y-3 text-gray-200">
                {technicalSkills.slice(4, 8).map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E2703E]" />
                    <span className="flex-1 text-center">{skill}</span>
                  </li>
                ))}
              </ul>
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
  "AWS - Certified Cloud Practitioner",
  "SQL",
  "Root Cause Analysis (RCA)",
  "React.js - This page was built using React!",
  "Project Management",
  "Bash Scripting",
  "Cross-Region Coordination",
  "Workforce Planning",
];

const workExperience = [
  {
    title: "Managed Services Team Lead",
    company: "Solifi",
    dates: "August 2022 - October 2026",
    bullets: [
      "Support a growing customer count year-over-year from 23 to 52 and counting.",
      "Created streamlined processes for internal and external service requests and escalations.",
      "Acted as Project Manager for new customer onboarding from our Professial Services Team.",
      "Faciltated efforts to automate daily customer tasks using Bash scripts and automation tools, achieved 96% adoption rate on automation for all tasks.",
      "Maintained and serviced internal EC2 Linux test environments and customer PROD and UAT environments using AWS, SQL, Terraform, and Gitlab pipelines.",
      "Developed and maintained internal policy documentation to support global team expansion and integration with other teams.",
      "Administrative responsibilites such as workforce planning, candidate interviews, PTO approval, and customer onboarding."
    ],
  },
  {
    title: "Technical Support Engineer",
    company: "Calabrio",
    dates: "April 2022 - July 2022",
    bullets: [
      "Resolved technical issues for both on-prem and cloud-based instances of Calabrio ONE.",
      "Verified customer data integrity and setups using SQL Server Management Studio to maintain system reliability.",
      "Managed escalations and executed predefined scripts in Azure DevOps for customer instances and databases.",
    ],
  },
  {
    title: "Applications Engineer",
    company: "Exosite",
    dates: "February 2021 - April 2022",
    bullets: [
      "Provided written support via ticketing portal and escalated behaviors and feature requests to ensure timely resolution.",
      "Assisted in configuring IoT connectors through API/Webhooks, MQTT, or HTTP connectors, creating custom transformations and insights for IoT hardware while developing custom Python or JavaScript code for customers.",
      "Maintained and created documentation for new hardware and software partners, answering and creating community forum posts to enhance resourrces for end-users.",
    ],
  },
  {
    title: "Product Support Specialist III - Central Stations & Integrations",
    company: "Alarm.com",
    dates: "October 2016 - February 2021",
    bullets: [
      "Collaborated with Central Station partners to integrate backend APIs, enhancing seamless functionality for Dealer partners.",
      "Worked with Product Managers to determine priority levels of various ongoing projects and relay support team concerns or needs.",
      "Ensured Tier II Specialists handled escalations promptly, offering assistance and acting as a liaison between our Support Team and Software/Quality Engineers.",
      "Utilized Jira to manage creation, assignment, and timely completion of bug fixes and software enhancement tickets."
    ],
  },
];
