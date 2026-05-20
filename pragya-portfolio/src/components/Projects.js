import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

const PROJECTS = [
  {
    title: 'AI Yoga Assistant',
    emoji: '🧘',
    desc: 'Real-time yoga posture detection and correction tool with voice & text feedback for effective online training.',
    longDesc: 'An AI-powered yoga posture detection and correction tool using YOLOv12, MediaPipe, and Deep Learning models. Features real-time pose tracking with voice and text feedback for effective online yoga training sessions.',
    tags: ['YOLOv12', 'MediaPipe', 'Deep Learning', 'Computer Vision', 'Python'],
    color: '#6c63ff',
    github: 'https://github.com/pragyas1008',
    demo: null,
    type: 'AI / CV',
  },
  {
    title: 'RecruitIQ — Resume Analyzer',
    emoji: '🤖',
    desc: 'AI-based resume screening system using RAG + LLMs to automate HR processes and rank candidates intelligently.',
    longDesc: 'Built at Incture Technologies during GenAI internship. React.js frontend with Python backend using Retrieval-Augmented Generation (RAG) and Large Language Models for resume evaluation and automated ranking.',
    tags: ['React.js', 'Python', 'RAG', 'LLMs', 'GenAI', 'FastAPI'],
    color: '#38bdf8',
    github: 'https://github.com/pragyas1008',
    demo: null,
    type: 'GenAI',
    featured: true,
  },
  {
    title: 'Smart Curriculum & Attendance App',
    emoji: '🎓',
    desc: 'AI-powered platform with facial recognition, predictive analytics, real-time dashboards & chatbot support.',
    longDesc: 'Developed an AI-powered Smart Curriculum & Attendance App with facial recognition and predictive analytics. Implemented hybrid ML/DL models (RF, XGBoost, CNN, LSTM) for academic performance prediction and insights.',
    tags: ['Random Forest', 'XGBoost', 'CNN', 'LSTM', 'Python', 'React'],
    color: '#a78bfa',
    github: 'https://github.com/pragyas1008',
    demo: null,
    type: 'ML / Full Stack',
  },
  {
    title: 'Fraud Email Spam Detection',
    emoji: '🛡️',
    desc: 'Semi-supervised ML model using NLP to detect spam and fraudulent emails with high accuracy.',
    longDesc: 'Building a semi-supervised ML model using Python, Scikit-learn, and NLP to detect spam and fraudulent emails with high accuracy by leveraging both labeled and unlabeled data for improved filtering and security.',
    tags: ['Scikit-learn', 'NLP', 'Python', 'Semi-supervised ML', 'Text Classification'],
    color: '#f97316',
    github: 'https://github.com/pragyas1008',
    demo: null,
    type: 'ML / NLP',
  },
  {
    title: 'Predictive Market Analysis',
    emoji: '📊',
    desc: 'Credit risk prediction framework on large-scale banking data using Hadoop + Spark MLlib.',
    longDesc: 'Developed a scalable credit risk prediction framework leveraging Apache Hadoop (HDFS) and Apache Spark MLlib. Implements a Random Forest classification model to analyze large-scale banking data and support accurate loan default risk assessment.',
    tags: ['Apache Spark', 'Hadoop', 'Random Forest', 'MLlib', 'Big Data'],
    color: '#22c55e',
    github: 'https://github.com/pragyas1008',
    demo: null,
    type: 'Big Data / ML',
  },
  {
    title: 'Library Management System',
    emoji: '📚',
    desc: 'Scalable and secure full-stack library system deployed on AWS with full CRUD and user management.',
    longDesc: 'Developed a scalable and secure library management system using the MERN stack (MongoDB, Express.js, React, Node.js) and deployed on AWS cloud infrastructure for production-grade reliability.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AWS', 'MERN'],
    color: '#ec4899',
    github: 'https://github.com/pragyas1008',
    demo: null,
    type: 'Full Stack',
  },
  {
    title: 'ExamPaperHub',
    emoji: '📝',
    desc: 'Web platform for VIT students to access and share past exam papers for better preparation.',
    longDesc: 'A web platform for students to access and share past exam papers for better preparation. Built with HTML, CSS, JavaScript, EJS, and Node.js, offering a user-friendly interface for browsing, uploading, and downloading papers. Built under IET-VIT.',
    tags: ['Node.js', 'EJS', 'JavaScript', 'HTML/CSS', 'MongoDB'],
    color: '#f59e0b',
    github: 'https://github.com/pragyas1008',
    demo: null,
    type: 'Web Dev',
  },
];

const ProjectCard = ({ project, index, inView }) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--surface2)' : 'var(--surface)',
        border: `1px solid ${hovered ? project.color + '44' : 'var(--border)'}`,
        borderRadius: 16, padding: 28, cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: inView ? (hovered ? 'translateY(-6px)' : 'none') : 'translateY(30px)',
        opacity: inView ? 1 : 0,
        transitionDelay: `${index * 0.08}s`,
        boxShadow: hovered ? `0 20px 40px ${project.color}22` : 'none',
        position: 'relative', overflow: 'hidden',
        gridColumn: project.featured ? 'span 2' : 'span 1',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${project.color}, transparent)`,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease',
      }} />

      {project.featured && (
        <div style={{
          position: 'absolute', top: 16, right: 16,
          background: 'rgba(108,99,255,0.2)', border: '1px solid rgba(108,99,255,0.4)',
          borderRadius: 100, padding: '3px 10px', fontSize: '0.7rem',
          color: 'var(--accent2)', fontWeight: 600, letterSpacing: '0.08em',
        }}>⭐ FEATURED</div>
      )}

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12, flexShrink: 0,
          background: project.color + '20', border: `1px solid ${project.color}40`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem',
          transition: 'transform 0.3s ease', transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'none',
        }}>{project.emoji}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', margin: 0 }}>{project.title}</h3>
          </div>
          <span style={{
            display: 'inline-block', marginTop: 4,
            background: project.color + '18', border: `1px solid ${project.color}33`,
            borderRadius: 100, padding: '2px 10px', fontSize: '0.72rem', color: project.color, fontWeight: 600,
          }}>{project.type}</span>
        </div>
      </div>

      <p style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 16 }}>
        {expanded ? project.longDesc : project.desc}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
        {project.tags.map(t => (
          <span key={t} style={{
            background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)',
            borderRadius: 6, padding: '3px 10px', fontSize: '0.75rem', color: 'var(--text3)',
          }}>{t}</span>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 8 }}>
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '7px 14px', borderRadius: 8, textDecoration: 'none',
            background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)',
            color: 'var(--text2)', fontSize: '0.8rem', fontWeight: 500,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(108,99,255,0.15)'; e.currentTarget.style.color = 'var(--accent2)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text2)'; }}
        >
          <GithubIcon /> Code
        </a>
        <button onClick={() => setExpanded(!expanded)} style={{
          padding: '7px 14px', borderRadius: 8, cursor: 'pointer',
          background: 'transparent', border: '1px solid var(--border)',
          color: 'var(--text3)', fontSize: '0.8rem', fontWeight: 500,
          transition: 'all 0.2s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent2)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--text3)'; }}
        >
          {expanded ? 'Less ↑' : 'More ↓'}
        </button>
      </div>
    </div>
  );
};

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Projects = () => {
  const [ref, inView] = useInView();

  return (
    <section id="projects" style={{ padding: '100px 24px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 60, opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: 'var(--accent)' }} />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>Projects</span>
            <div style={{ width: 32, height: 2, background: 'var(--accent)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 16 }}>
            Things I've <span style={{ color: 'var(--accent2)' }}>Built</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: 500, margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
            A mix of AI research prototypes, full-stack applications, and data-intensive systems.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} inView={inView} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
