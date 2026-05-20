import React from 'react';
import { useInView } from '../hooks/useInView';

const Experience = () => {
  const [ref, inView] = useInView();

  const experiences = [
    {
      role: 'Gen-AI Intern',
      company: 'Incture Technologies',
      period: 'June 2025 – July 2025',
      type: 'Internship',
      color: '#6c63ff',
      icon: '🚀',
      points: [
        'Developed RecruitIQ — an AI-powered resume screening app with React.js frontend and Python (RAG + LLMs) backend.',
        'Automated resume analysis and candidate ranking using Retrieval-Augmented Generation and Large Language Models.',
        'Enhanced HR efficiency significantly by eliminating manual resume review bottlenecks using GenAI.',
      ],
      tags: ['RAG', 'LLMs', 'React.js', 'Python', 'GenAI', 'FastAPI'],
    },
    {
      role: 'Core Committee Member',
      company: 'MFC-VIT (Mozilla Firefox Club)',
      period: '2023 – Present',
      type: 'Activity',
      color: '#f97316',
      icon: '🦊',
      points: [
        'Active core committee member contributing to tech community building at VIT Vellore.',
        'Conducted a hands-on web development workshop at Williams School, teaching HTML, CSS, and JavaScript fundamentals.',
        'Organized and participated in hackathons, tech talks, and open-source events.',
      ],
      tags: ['Community', 'Web Dev', 'Teaching', 'Open Source'],
    },
  ];

  const certifications = [
    {
      name: 'AWS Cloud Practitioner Essentials',
      issuer: 'AWS Training & Certification',
      date: 'Feb 2026',
      color: '#f59e0b',
      icon: '☁️',
      details: [
        'Foundational AWS Cloud concepts, core services, security, pricing, and billing',
        'AWS global infrastructure, IAM basics, and shared responsibility model',
      ],
    },
    {
      name: 'Pep Supply Chain Stars Workshop',
      issuer: 'PepsiCo India & Internshala',
      date: 'Oct 2025',
      color: '#22c55e',
      icon: '🏭',
      details: [
        'Practical exposure to FMCG supply chain management and PepsiCo\'s real-world operations',
        'Fundamentals of supply chain flow, industry challenges, and career pathways in SCM',
      ],
    },
  ];

  return (
    <section id="experience" style={{ padding: '100px 24px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 60, opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: 'var(--accent)' }} />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>Experience & Certs</span>
            <div style={{ width: 32, height: 2, background: 'var(--accent)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Where I've <span style={{ color: 'var(--accent2)' }}>Grown</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginBottom: 48 }}>
          {experiences.map((exp, i) => (
            <div key={exp.company} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 28, position: 'relative', overflow: 'hidden',
              opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)',
              transition: `all 0.6s ease ${i * 0.15}s`,
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: exp.color, borderRadius: '4px 0 0 4px' }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14, gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                    background: exp.color + '20', border: `1px solid ${exp.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem',
                  }}>{exp.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text)', marginBottom: 2 }}>{exp.role}</h3>
                    <div style={{ color: exp.color, fontSize: '0.85rem', fontWeight: 600 }}>{exp.company}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{
                    background: exp.color + '15', border: `1px solid ${exp.color}30`,
                    borderRadius: 100, padding: '3px 10px', fontSize: '0.7rem', color: exp.color, fontWeight: 600, whiteSpace: 'nowrap',
                  }}>{exp.type}</div>
                  <div style={{ color: 'var(--text3)', fontSize: '0.75rem', marginTop: 4 }}>{exp.period}</div>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 16 }}>
                {exp.points.map((p, pi) => (
                  <li key={pi} style={{ display: 'flex', gap: 8, marginBottom: 8, fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.6 }}>
                    <span style={{ color: exp.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                    {p}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {exp.tags.map(t => (
                  <span key={t} style={{
                    background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)',
                    borderRadius: 6, padding: '3px 9px', fontSize: '0.72rem', color: 'var(--text3)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem',
          color: 'var(--text2)', marginBottom: 20, textTransform: 'uppercase',
          letterSpacing: '0.1em', opacity: inView ? 1 : 0, transition: 'all 0.6s ease 0.3s',
        }}>
          🎖 Certifications
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {certifications.map((cert, i) => (
            <div key={cert.name} style={{
              background: 'var(--surface)', border: `1px solid ${cert.color}30`,
              borderRadius: 14, padding: 24,
              opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
              transition: `all 0.6s ease ${0.35 + i * 0.1}s`,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: 80, background: `radial-gradient(circle at top right, ${cert.color}15, transparent 70%)` }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <span style={{ fontSize: '1.6rem' }}>{cert.icon}</span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)', marginBottom: 2 }}>{cert.name}</h4>
                  <div style={{ color: cert.color, fontSize: '0.8rem', fontWeight: 600 }}>{cert.issuer}</div>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 14 }}>
                {cert.details.map((d, di) => (
                  <li key={di} style={{ display: 'flex', gap: 8, marginBottom: 6, fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.5 }}>
                    <span style={{ color: cert.color, flexShrink: 0 }}>·</span> {d}
                  </li>
                ))}
              </ul>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: cert.color + '12', border: `1px solid ${cert.color}25`,
                borderRadius: 100, padding: '4px 12px', fontSize: '0.75rem', color: cert.color, fontWeight: 600,
              }}>📅 {cert.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
