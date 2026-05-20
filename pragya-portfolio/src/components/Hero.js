import React, { useEffect, useRef, useState } from 'react';

const ROLES = ['AI & Full Stack Developer', 'ML Engineer', 'GenAI Builder', 'Problem Solver'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout;
    if (!deleting) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '100px 24px 60px',
    }}>
      {/* Background orbs */}
      <div style={{
        position: 'absolute', top: '10%', left: '5%', width: 500, height: 500,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.14) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
        animation: 'float 10s ease-in-out infinite 2s',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }} />

      <div style={{ maxWidth: 900, width: '100%', position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.25)',
          borderRadius: 100, padding: '6px 16px', marginBottom: 28,
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
          transition: 'all 0.6s ease',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text2)', letterSpacing: '0.05em' }}>
            VIT Vellore · B.Tech IT · 2023–2027
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.05, letterSpacing: '-0.03em',
          marginBottom: 16, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)',
          transition: 'all 0.7s ease 0.1s',
        }}>
          <span style={{ display: 'block', color: 'var(--text)' }}>Pragya</span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent2) 50%, var(--accent3) 100%)',
            backgroundSize: '200% 200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', animation: 'gradient-shift 4s ease-in-out infinite',
          }}>Singh.</span>
        </h1>

        {/* Typewriter role */}
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
          fontWeight: 600, color: 'var(--accent2)', marginBottom: 20, height: '2rem',
          opacity: visible ? 1 : 0, transition: 'all 0.7s ease 0.2s',
        }}>
          {displayed}
          <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--accent3)' }}>|</span>
        </div>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'var(--text2)', lineHeight: 1.7,
          maxWidth: 580, marginBottom: 40,
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
          transition: 'all 0.7s ease 0.3s',
        }}>
          Building intelligent systems using AI, ML, and scalable web technologies.
          Turning complex problems into elegant, real-world solutions.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 56,
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
          transition: 'all 0.7s ease 0.4s',
        }}>
          <HeroBtn primary onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects →
          </HeroBtn>
          <HeroBtn href="https://github.com/pragyas1008" target="_blank">
            <GithubIcon /> GitHub
          </HeroBtn>
          <HeroBtn href="https://linkedin.com/in/pragya-singh" target="_blank">
            <LinkedinIcon /> LinkedIn
          </HeroBtn>
          <HeroBtn href="/resume.pdf" target="_blank" accent2>
            Resume ↗
          </HeroBtn>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 32,
          opacity: visible ? 1 : 0, transition: 'all 0.7s ease 0.5s',
        }}>
          {[
            { val: '6+', label: 'Projects Built' },
            { val: '2+', label: 'Years Coding' },
            { val: 'GenAI', label: 'Internship' },
            { val: 'AWS', label: 'Certified' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent2)', lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text3)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        color: 'var(--text3)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase',
        animation: 'fadeIn 1s ease 1.5s both',
      }}>
        <div style={{
          width: 20, height: 32, border: '1px solid var(--border2)', borderRadius: 10,
          display: 'flex', justifyContent: 'center', paddingTop: 6,
        }}>
          <div style={{
            width: 3, height: 8, borderRadius: 2, background: 'var(--accent)',
            animation: 'float 1.5s ease-in-out infinite',
          }} />
        </div>
        Scroll
      </div>
    </section>
  );
};

const HeroBtn = ({ children, primary, accent2, href, target, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '11px 24px', borderRadius: 10, cursor: 'pointer',
    fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem',
    textDecoration: 'none', transition: 'all 0.3s ease', border: 'none',
  };
  const styles = primary
    ? { ...base, background: hovered ? 'linear-gradient(135deg, #7c3aed, var(--accent))' : 'linear-gradient(135deg, var(--accent), #7c3aed)', color: 'white', boxShadow: hovered ? '0 8px 30px rgba(108,99,255,0.6)' : '0 4px 20px rgba(108,99,255,0.4)', transform: hovered ? 'translateY(-3px)' : 'none' }
    : accent2
    ? { ...base, background: hovered ? 'rgba(56,189,248,0.15)' : 'transparent', color: hovered ? 'var(--accent3)' : 'var(--text2)', border: '1px solid ' + (hovered ? 'rgba(56,189,248,0.5)' : 'var(--border2)'), transform: hovered ? 'translateY(-2px)' : 'none' }
    : { ...base, background: hovered ? 'rgba(108,99,255,0.12)' : 'transparent', color: hovered ? 'var(--accent2)' : 'var(--text2)', border: '1px solid ' + (hovered ? 'rgba(108,99,255,0.3)' : 'var(--border)'), transform: hovered ? 'translateY(-2px)' : 'none' };

  return href
    ? <a href={href} target={target} rel="noopener noreferrer" style={styles} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>{children}</a>
    : <button style={styles} onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>{children}</button>;
};

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default Hero;
