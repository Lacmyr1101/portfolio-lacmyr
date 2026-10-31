import type { Experience } from "../models/experience";

export const experienceList: Experience[] = [
    {
    id: 1,
    company: "Alcaldía del Municipio Lagunillas",
    position: "Computer Engineer - Interships",
    description: [
      "Activity Management System: Developed a system to help different municipal departments organize and track their daily activities in real time, improving task visibility, internal coordination, and workflow organization.",
      "IT Support & Maintenance: Provided technical support to multiple departments, assisting with troubleshooting and performing computer maintenance to help ensure the proper functioning of their IT equipment.",
    ],
    startDate: new Date("2025-01-27"),
    endDate: new Date("2025-04-05"),
    color: "#0D67D5",
  },
  {
    id: 2,
    company: "Renser Oriente C.A",
    position: "System & IT Analyst",
    description: [
      "AI-Powered Documentation: Developed an AI agent to assist laboratory staff with document drafting and management, automating part of the documentation workflow and saving approximately 6 hours of work per week.",
      "Workflow Management & Collaboration: Implemented tools such as Trello and Kawak to improve task tracking, streamline communication between departments, and provide management with real-time visibility into ongoing activities.",
      "Operational Efficiency: Improved coordination and monitoring of internal processes, reducing reliance on lengthy operational meetings of approximately two hours and making progress easier to track.",
      "IT Inventory Management System: Designed and developed an internal system to centralize IT asset tracking and related documentation, improving information organization and accessibility within the IT department.",
      "Process & Request Optimization: Improved internal workflows by organizing IT-related information and procedures, making it easier to manage requests, retrieve records, and coordinate departmental operations.",
    ],
    startDate: new Date("2026-04-16"),
    endDate: new Date("2026-10-16"),
    color: "#01756C",
  },
];
