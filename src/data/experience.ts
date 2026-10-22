import type { Experience } from "../models/experience";

export const experienceList: Experience[] = [
    {
    id: 1,
    company: "Alcaldía del Municipio Lagunillas",
    position: "Computer Engineer - Interships",
    description: [
      "Developing a Task Managment System for every single department of the municipality, allowing for better organization and management of tasks and activities.",
      "Comprehensive technical support for the differents departments, including the maintence for the IT infrastructure.",
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
      "Development of an AI agent for an equipment calibration laboratory, aimed at supporting staff in drafting and managing documentation.",
      "Implementation of applications and technologies, such as Trello and Kawak, to improve efficiency and communication across all company activities, enabling management to oversee operations in real time and achieve greater process efficiency.",
      "Development of an IT inventory management system to better track all resources and documentation related to the Systems department.",
      "Assistance in the preparation of certificates for courses offered by the academy, as well as the creation of staff ID cards.",
      "Comprehensive technical support, as well as preventive and corrective maintenance for the IT equipment used by the various departments.",
    ],
    startDate: new Date("2026-04-16"),
    endDate: new Date("2026-10-16"),
    color: "#01756C",
  },
];
