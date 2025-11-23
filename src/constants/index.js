import { meta, rogers, nimblerx, fiverr, lambton } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Technical Support Specialist, Tier 1",
    company_name: "Rogers Communications",
    icon: rogers,
    iconBg: "#accbe1",
    date: "Dec 2024 – Oct 2025",
    points: [
      "Served as the first point of contact for high-volume customer inquiries, successfully resolving 80% of issues on the initial call through standardized diagnostic procedures.",
      "Provided effective remote troubleshooting for common residential services, including cable modem resets, Wi-Fi configuration, email setup, and VoIP telephony issues.",
      "Utilized internal ticketing and CRM systems to accurately log, track, and escalate complex networking or infrastructure problems to Tier 2 support teams.",
      "Mentored over 1,500 customers on self-service tools, reducing the average call handle time (AHT) by improving first-call resolution rates.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "NimbleRx",
    icon: nimblerx,
    iconBg: "#fbc3bc",
    date: "May 2024 – Aug 2024",
    points: [
      "Contributed to the development of patient-facing application features using React and JavaScript, focusing on UI responsiveness and accessibility across devices.",
      "Collaborated with design and backend teams to integrate new API endpoints, ensuring accurate data retrieval and state management (e.g., using Redux or context).",
      "Leveraged Git for version control and Agile sprint tracking, collaborating directly with senior engineers and QA for code review and deployment preparation.",
    ],
  },
  {
    title: "Freelance Software Developer",
    company_name: "Remote",
    icon: fiverr,
    iconBg: "#b7e4c7",
    date: "2021 – 2025",
    points: [
      "Developed and deployed React and Next.js applications with a focus on responsive design, data visualization, and real-time performance.",
      "Implemented modular UI components and optimized rendering using TypeScript, TailwindCSS, and Framer Motion for smooth user interactions.",
      "Integrated device data from cloud services (MQTT/AWS) into dashboards, using MongoDB for persistent data storage to build user interfaces for real-time HVAC monitoring and control.",
    ],
  },

  {
    title: "Embedded Research Assistant",
    company_name: "Lambton College / Seneris Automation",
    icon: lambton,
    iconBg: "#accbe1",
    date: "Dec 2020 – Aug 2021",
    points: [
      "Developed C/C++ firmware for BLE- and Thread-enabled IoT sensor prototypes.",
      "Conducted wireless performance testing and analyzed throughput and latency metrics.",
      "Assisted with embedded debugging, data validation, and integration between the MCU and communication layers.",
      "Key Achievements: Reduced sensor communication delay by optimizing interrupt-driven logic in firmware; Supported prototype design, later integrated into a commercial IoT test platform.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/vyhoangquocnguyen",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/vyhqnguyen",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "HVAC Monitoring Dashboard",
    description:
      "Integrated device data from cloud services (MQTT/AWS) into dashboards, using MongoDB for persistent data storage to build user interfaces for real-time HVAC monitoring and control.",
    link: "https://github.com/vyhoangquocnguyen",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Patient-facing Application",
    description:
      "Contributed to the development of patient-facing application features using React and JavaScript, focusing on UI responsiveness and accessibility across devices.",
    link: "https://github.com/vyhoangquocnguyen",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "IoT Sensor Firmware",
    description:
      "Developed C/C++ firmware for BLE- and Thread-enabled IoT sensor prototypes. Conducted wireless performance testing and analyzed throughput and latency metrics.",
    link: "https://github.com/vyhoangquocnguyen",
  },
];
