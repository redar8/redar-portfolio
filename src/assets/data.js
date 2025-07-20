import {
  faGooglePlay,
  faFigma,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export const experiences = [
  {
    title: "Software Developer",
    company: "Zina Erbil | Remote",
    duration: "2023 - 2025",
    points: [
      "Developed cross-platform applications using Flutter & Dart with Firebase integration",
      "Implemented responsive UI designs with attention to performance",
      "Collaborated with clients to gather requirements and iterate on solutions",
    ],
  },
  {
    title: "Graphic & Motion Designer",
    company: "Dina Medical Polyclinic | Remote",
    duration: "2023 - 2025",
    points: [
      "Created animated promotional content using After Effects",
      "Designed print and digital marketing materials maintaining brand consistency",
      "Produced explainer videos and motion graphics for social media",
    ],
  },
  {
    title: "Software Developer",
    company: "Ravco Polyclinic Center | Remote",
    duration: "2022 - 2025",
    points: [
      "Built responsive web applications using React and Firebase with real-time database and authentication features",
      "Created dynamic user interfaces with React, ensuring performance and cross-browser compatibility",
      "Developed custom websites and admin dashboards tailored to client requirements",
    ],
  },
  {
    title: "Graphic & Motion Designer",
    company: "Zinal Al Dnya Laboratory | Remote",
    duration: "2021 - 2024",
    points: [
      "Created animated promotional content using After Effects",
      "Designed print and digital marketing materials maintaining brand consistency",
      "Produced explainer videos and motion graphics for social media",
    ],
  },
  {
    title: "Graphic & Motion Designer",
    company: "Zina Erbil | Remote",
    duration: "2021 - 2024",
    points: [
      "Created animated promotional content using After Effects",
      "Designed print and digital marketing materials maintaining brand consistency",
      "Produced explainer videos and motion graphics for social media",
    ],
  },
  {
    title: "Front-End Developer & UX/UI Designer",
    company: "Freelancer",
    duration: "2020 - Present",
    points: [
      "Designed and prototyped mobile and web interfaces using Figma and Adobe XD",
      "Created brand identities, logos, and marketing materials for various clients",
      "Developed front-end implementations of designs using HTML, CSS, JavaScript, React Js",
    ],
  },
  {
    title: "IT Support Specialist",
    company: "Meduim Company",
    duration: "2015 - 2018",
    points: [
      "Provided technical support and system troubleshooting",
      "Maintained IT infrastructure and ensured system security",
    ],
  },
];

export const projects = [
  {
    title: "Zina Erbil App",
    description:
      "Flutter-based app for browsing and purchasing medical equipment, powered by Firebase backend. Simple, secure, and designed for easy access to essential medical products.",
    image: "/images/z-image.webp",
    tags: ["Flutter/Dart", "Firebase", "UI/UX Design", "App Design"],
    links: [
      {
        icon: faGooglePlay,
        url: "https://play.google.com/store/apps/details?id=com.zinaerbil",
      },
      {
        icon: faFigma,
        url: "https://www.figma.com/design/zoB7IKAFLSSXYjy2DGEqBe/Zina-Erbil?node-id=31-2&t=WYC23hgl9DBauBB7-1",
      },
    ],
  },
  {
    title: "Climaverse App",
    description:
      "Climaverese is a sleek weather app built with React.js that provides real-time current, hourly, and daily forecasts using a weather API. It features responsive UI/UX design with HTML5, CSS3, JavaScript, and Bootstrap for a smooth user experience.",
    image: "/images/Climaverse.png",
    tags: [
      "React",
      "JavaScript",
      "HTML5/CSS3",
      "Bootstrap",
      "UI/UX Design",
      "App Design",
    ],
    links: [
      {
        icon: faGithub,
        url: "https://github.com/redar8/Climaverse",
      },
      {
        icon: faFigma,
        url: "https://www.figma.com/design/JzHZkqzSQ13N4nvHrx6uCs/Climaverse?node-id=0-1&t=QXclLCOaqYXbkma3-1",
      },
      {
        icon: faLink,
        url: "https://climaversee.netlify.app",
      },
    ],
  },
  {
    title: "Doctor Appointment System",
    description:
      "A responsive web app built with React.js, Firebase, and Bootstrap for managing doctor appointments. Includes a secure admin panel for creating and managing appointments, with a clean UI designed in Figma.",
    image: "/images/Dashboard.jpeg",
    tags: [
      "React",
      "JavaScript",
      "Firebase",
      "HTML5/CSS3",
      "Bootstrap",
      "UI/UX Design",
      "App Design",
    ],
    links: [
      {
        icon: faFigma,
        url: "https://www.figma.com/design/dE1b0SiJIfATWkDUlchcLy/Dr.-Rana-Appointment-System?node-id=0-1&t=69XtfJBPrj7tfAJo-1",
      },
      {
        icon: faGithub,
        url: "https://github.com/redar8/doctor_appointment_system_demo",
      },
      {
        icon: faLink,
        url: "https://doctor-appointment-system-redar.netlify.app/dashboard",
      },
    ],
  },

  // Add other projects similarly
];
