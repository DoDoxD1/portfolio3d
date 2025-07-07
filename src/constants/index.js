import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carelon,
  wipro,
  readymotive,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: " SDE Intern",
    company_name: "Readymotive",
    icon: readymotive,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Dec 2022",
    points: [
      "Developed a RESTful API to ingest real-time sensor data from ESP32 via MQTT, which improved data ingestion reliability by 25%.",
      "Wrote C++ scripts for ESP32 to process sensor readings, unit-tested using the Arduino IDE, achieving sub-second latency for telemetry push.",
      "Improved SEO visibility by 20% using responsive design and Next JS.",
    ],
  },
  {
    title: "Java Full-Stack Trainee",
    company_name: "Wipro",
    icon: wipro,
    iconBg: "#E6DEDD",
    date: "May 2023 - Sep 2023",
    points: [
      "Built a sample Microservices-based e-commerce application in Spring Boot with H2/MySQL, using Hibernate for persistence and REST controllers for CRUD operations.",
      "Successfully completed an in-depth Java training program, gaining expertise in core Java concepts, Spring Boot for building scalable applications, ORM tools for efficient database mapping, and Hibernate for object-relational persistence.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Carelon Global Solution",
    icon: carelon,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
      "Optimized Spring Boot service layer by refactoring inefficient JPA queries and adding B-tree indices - Reduced API response time by 80%.",
      "Designed and implemented RESTful endpoints for associate data, ensuring SSO-based authentication and role-based access control.",
      "Troubleshooted and resolved critical bugs in Angular front-end by coordinating with backend teams to improve API contracts, cutting page load times by 50%.",
      "Collaborated with DevOps to containerize microservices (Docker), automated builds with Jenkins pipelines, and deployed to AWS ECS, resulting in 30% faster release cycles.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
