import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

const SKILLS = [
  {
    category: 'Languages',
    icon: '💻',
    color: '#6c63ff',
    items: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 78 },
      { name: 'TypeScript', level: 72 },
      { name: 'C / C++', level: 70 },
    ],
  },
  {
    category: 'Web Development',
    icon: '🌐',
    color: '#38bdf8',
    items: [
      { name: 'React.js', level: 88 },
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'MERN Stack', level: 84 },
      { name: 'HTML / CSS', level: 90 },
    ],
  },
  {
    category: 'AI / ML',
    icon: '🧠',
    color: '#a78bfa',
    items: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Deep Learning', level: 78 },
      { name: 'NLP', level: 75 },
      { name: 'Computer Vision', level: 80 },
      { name: 'Scikit-learn / NumPy', level: 87 },
    ],
  },
  {
    category: 'Tools & Cloud',
    icon: '☁️',
    color: '#22c55e',
    items: [
      { name: 'AWS', level: 72 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'REST APIs', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'Apache Spark', level: 65 },
    ],
  },
];

const SkillBar = ({ name, level, color, inView, delay }) => {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: '0.88rem', color: 'var(--text)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.78rem', color: 'var(--text3)', fontWeight: 600 }}>{level}%</span>
      </div>
      <div style={{ height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 10, overflow: 'hidden' }}>
        <div style={{
          height: '100%', borderRadius: 10,
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
          width: inView ? `${level}%` : '0%',
          transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
          boxShadow: `0 0 10px ${color}55`,
        }} />
      </div>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView();

  const extras = [
    'Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS',
    'Computer Architecture', 'Angular', 'SQL', 'NumPy', 'Pandas',
    'Apache Hadoop', 'HDFS', 'LLMs', 'RAG', 'GenAI',
  ];

  return (
    <section id="skills" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 60, opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: 'var(--accent)' }} />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>Skills</span>
            <div style={{ width: 32, height: 2, background: 'var(--accent)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 16 }}>
            My <span style={{ color: 'var(--accent2)' }}>Tech Stack</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: 460, margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
            Tools and technologies I work with to build intelligent, scalable systems.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 40 }}>
          {SKILLS.map((cat, ci) => (
            <div key={cat.category} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 28,
              opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)',
              transition: `all 0.6s ease ${ci * 0.1}s`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                <span style={{ fontSize: '1.4rem' }}>{cat.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: cat.color }}>{cat.category}</h3>
              </div>
              {cat.items.map((item, ii) => (
                <SkillBar key={item.name} name={item.name} level={item.level} color={cat.color} inView={inView} delay={ci * 0.1 + ii * 0.08} />
              ))}
            </div>
          ))}
        </div>

        {/* Additional skills cloud */}
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 16, padding: 28,
          opacity: inView ? 1 : 0, transition: 'all 0.6s ease 0.4s',
        }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text2)', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Also familiar with</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {extras.map(s => (
              <span key={s} style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
                borderRadius: 8, padding: '6px 14px', fontSize: '0.82rem',
                color: 'var(--text2)', transition: 'all 0.2s ease', cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(108,99,255,0.1)'; e.currentTarget.style.color = 'var(--accent2)'; e.currentTarget.style.borderColor = 'rgba(108,99,255,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
