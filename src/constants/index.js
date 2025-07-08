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
  java,
  angular
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
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },  
  {
    name: "Springboot",
    icon: redux,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular JS",
    icon: angular,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Three JS",
    icon: threejs,
  },  
  {
    name: "figma",
    icon: figma,
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
    name: "Youtube Clone",
    description:
      "Built and load-tested RESTful APIs using Node.js, Express.js, and MongoDB, supporting over 1,000+ concurrent requests with <200 ms average response time.",
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/DoDoxD1/youtube-clone",
  },
  {
    name: "Home Automation",
    description:
      "Developed an advanced home automation app with Flutter, AWS and Firebase, improving smart device control by 40% through seamless hardware integration.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/DoDoxD1/fllutter-home-automation",
  },
  {
    name: "Codeana",
    description:
      "Designed and deployed an AI-powered code review system using SpringBoot and PostgreSQL, enabling detection of logic flaws, vulnerabilities, and best practice violations.",
    tags: [
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/DoDoxD1/codeana",
  },
];

export { services, technologies, experiences, testimonials, projects };
