import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

// Images directly inside src/assets
import mobile from "../assets/mobile.png";
import backend from "../assets/backend.png";
import web from "../assets/web.png";
import goldrushcafe from "../assets/goldrushcafe.png";
import royalchacentre from "../assets/royalchacentre.png";
import taskmanager from "../assets/taskmanager.png";
import zomatoclonetomato from "../assets/zomatoclonetomato.png";
import reciepesharing from "../assets/reciepesharing.png";
import sadafuleagro from "../assets/sadafuleagro.png";

// Images inside src/assets/tech
import javascript from "../assets/tech/javascript.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import git from "../assets/tech/git.png";
import mongodb from "../assets/tech/mongodb.png";
import tailwind from "../assets/tech/tailwind.png";
import reactjs from "../assets/tech/reactjs.png";
import nodejs from "../assets/tech/nodejs.png";
import threejs from "../assets/tech/threejs.svg";


import certificate2 from "../assets/certificates/certificate2.png";
import certificate3 from "../assets/certificates/certificate3.png";
import certificate4 from "../assets/certificates/certificate4.png";
import certificate6 from "../assets/certificates/certificate6.png";
export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  { title: "Software Engineering", icon: backend },
  { title: "Full Stack Development", icon: web },
  { title: "Data Analysis", icon: mobile },
  { title: "Responsive Web Development", icon: reactjs },
];

const technologies: TTechnology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Java", icon: backend },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "SQL", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Three JS", icon: threejs },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Learning Intern",
    companyName: "EY Global Delivery Services & AITE",
    icon: backend,
    iconBg: "#383E56",
    date: "February 2025 - March 2025",
    points: [
      "Developed foundational full-stack development skills through practical learning and guided projects.",
      "Worked with web development concepts and modern application development practices.",
      "Strengthened problem-solving and software development fundamentals for an IT career.",
    ],
  },
  {
    title: "Foundation & AI / Green Skills Intern",
    companyName: "Edunet Foundation",
    icon: web,
    iconBg: "#E6DEDD",
    date: "February 2025 - March 2025",
    points: [
      "Completed foundational training focused on essential IT and career-ready skills.",
      "Gained exposure to Artificial Intelligence and green skills through the Skills4Future program.",
      "Learned from industry guidance and structured training activities.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial: "Full Stack Development Internship Certificate",
    name: "Full Stack Learning Intern",
    designation: "EY Global Delivery Services & AITE",
    company: "EY Global Delivery Services & AITE",
    image: certificate6,
  },
  {
    testimonial: "Foundation & AI / Green Skills Certificate",
    name: "AI / Green Skills Intern",
    designation: "Edunet Foundation",
    company: "Edunet Foundation",
    image: certificate2,
  },
  {
    testimonial: "JavaScript Certification",
    name: "JavaScript Developer",
    designation: "Certification",
    company: "Your Organization",
    image: certificate3,
  },
  {
    testimonial: "Additional Achievement",
    name: "Achievement Certificate",
    designation: "Certification",
    company: "Your Organization",
    image: certificate4,
  },
];

const projects: TProject[] = [
  {
    name: "Sadafule Agro",
    description: "Professional agricultural machinery website with product catalogue, responsive UI and a live business presentation for customers and dealers.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "responsive", color: "green-text-gradient" },
      { name: "business-site", color: "pink-text-gradient" },
    ],
    image: sadafuleagro,
    sourceCodeLink: "https://sadaphuleagro.netlify.app/",
  },
  {
    name: "Gold Rush Cafe",
    description: "Deployed cafe website project created as a real-world business web project.",
    tags: [
      { name: "web-development", color: "blue-text-gradient" },
      { name: "responsive", color: "green-text-gradient" },
      { name: "netlify", color: "pink-text-gradient" },
    ],
    image: goldrushcafe,
    sourceCodeLink: "https://goldrushcafenarhe.netlify.app",
  },
  {
    name: "Royal Chaha Centre",
    description: "Deployed responsive business website created as a real-world web project.",
    tags: [
      { name: "html-css", color: "blue-text-gradient" },
      { name: "responsive", color: "green-text-gradient" },
      { name: "deployment", color: "pink-text-gradient" },
    ],
    image: royalchacentre,
    sourceCodeLink: "https://royal-chaha-centre.netlify.app",
  },
  {
    name: "Responsive Task Manager",
    description: "Task management web app for creating, updating and tracking tasks with deadlines, categories, status and progress tracking. Built with responsive React UI and modern CSS.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "responsive-ui", color: "pink-text-gradient" },
    ],
    image: taskmanager,
    sourceCodeLink: "https://github.com/sumitsadafule/suranjan-agrotech-updated.git",
  },
  {
    name: "Zomato Clone (Tomato)",
    description: "Food delivery web application inspired by Zomato, with authentication, restaurant listings, menu browsing, cart management and order placement using the MERN stack.",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: zomatoclonetomato,
    sourceCodeLink: "https://github.com/sumitsadafule/zomato-clone",
  },
  {
    name: "Recipe Sharing",
    description: "Full-stack recipe sharing application with user authentication, CRUD operations and RESTful APIs, backed by MongoDB and Express with a responsive React interface.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: reciepesharing,
    sourceCodeLink: "https://github.com/sumitsadafule/recipesharing.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
