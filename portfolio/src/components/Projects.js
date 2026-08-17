import { useState } from 'react';
import './Projects.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Intelligent Crash Detection with Real-Time GPS Emergency Alerts',
    description:
      'Built an AI-powered crash detection system using YOLOv8 to identify accidents from video feeds and instantly send GPS-tagged emergency alerts via Telegram to responders.',
    stack: ['Python', 'YOLOv8', 'GPS', 'Telegram API'],
    images: [`${process.env.PUBLIC_URL}/pro2.jpeg`, `${process.env.PUBLIC_URL}/pro2a.jpeg`],
    github: 'https://github.com/bhuvanesh6566',
    demo: null,
  },
  {
    title: 'Realtime Bus Tracking Web App',
    description:
      'Developed a live bus tracking web application that shows real-time bus locations on a map, helping students and commuters track arrival times with Firebase-powered updates.',
    stack: ['React', 'Firebase'],
    images: null,
    github: 'https://github.com/bhuvanesh6566',
    demo: null,
  },
  {
    title: 'AI-Based Dynamic Traffic Signal Timing System',
    description:
      'Designed a smart traffic management system that uses machine learning to dynamically adjust signal timings based on real-time vehicle density, reducing congestion.',
    stack: ['React', 'Machine Learning'],
    images: [`${process.env.PUBLIC_URL}/pro1.jpeg`, `${process.env.PUBLIC_URL}/pro1a.jpeg`],
    github: 'https://github.com/bhuvanesh6566',
    demo: null,
  },
  {
    title: 'Smart Campus — WiFi Attendance & Realtime Tracking',
    description:
      'Created a smart campus platform with automated WiFi-based attendance marking and real-time student location tracking using Firebase and React.',
    stack: ['React', 'Firebase'],
    images: null,
    github: 'https://github.com/bhuvanesh6566',
    demo: null,
  },
  {
    title: 'EduConnect — AI-Powered Learning Platform',
    description:
      'Built a full-featured EdTech web app with live classes, AI-assisted learning, 1-on-1 and group chat, skill tracker, and quizzes — all in one platform.',
    stack: ['React', 'Firebase'],
    images: [`${process.env.PUBLIC_URL}/pro3.jpeg`, `${process.env.PUBLIC_URL}/pro3a.jpeg`],
    github: 'https://github.com/bhuvanesh6566',
    demo: null,
  },
];

function ProjectCard({ project }) {
  const [active, setActive] = useState(0);

  return (
    <div className={`project-card ${!project.images ? 'no-img' : ''}`}>
      {project.images && (
        <div className="project-images">
          <img src={project.images[active]} alt={project.title} className="project-main-img" />
          <div className="project-thumbs">
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={`thumb ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      )}
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-stack">
          {project.stack.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">
            <FiGithub /> GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="proj-link accent">
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  );
}
