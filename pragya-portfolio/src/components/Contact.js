import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const [ref, inView] = useInView();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('pragyas1008@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { label: 'Email', value: 'pragyas1008@gmail.com', href: 'mailto:pragyas1008@gmail.com', icon: '✉️', color: '#6c63ff', action: copyEmail },
    { label: 'LinkedIn', value: 'linkedin.com/in/pragya-singh', href: 'https://www.linkedin.com/in/pragya-singh-13b7a8292/', icon: '💼', color: '#0077b5' },
    { label: 'GitHub', value: 'github.com/pragyas1008', href: 'https://github.com/pragyas1008', icon: '🐙', color: '#a78bfa' },
    { label: 'Phone', value: '+91 8389831466', href: 'tel:+918389831466', icon: '📱', color: '#22c55e' },
  ];

  return (
    <section id="contact" style={{ padding: '100px 24px 60px', position: 'relative', overflow: 'hidden' }}>
      {/* Background orb */}
      <div style={{
        position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(108,99,255,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div ref={ref} style={{ textAlign: 'center', opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: 'var(--accent)' }} />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>Contact</span>
            <div style={{ width: 32, height: 2, background: 'var(--accent)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16, lineHeight: 1.1 }}>
            Let's <span style={{ color: 'var(--accent2)' }}>Connect</span>
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 500, margin: '0 auto 48px' }}>
            Open to internships, full-time roles, research collaborations, and exciting projects. Let's build something together.
          </p>

          {/* Contact Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14, marginBottom: 48 }}>
            {links.map((link, i) => (
              <a key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={link.action ? (e) => { e.preventDefault(); link.action(); } : undefined}
                style={{
                  display: 'block', textDecoration: 'none',
                  background: 'var(--surface)', border: `1px solid ${link.color}25`,
                  borderRadius: 14, padding: '20px 16px', textAlign: 'center',
                  transition: 'all 0.3s ease', cursor: 'pointer',
                  opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
                  transitionDelay: `${0.1 + i * 0.07}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 16px 32px ${link.color}22`;
                  e.currentTarget.style.borderColor = link.color + '55';
                  e.currentTarget.style.background = 'var(--surface2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = link.color + '25';
                  e.currentTarget.style.background = 'var(--surface)';
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: 10 }}>{link.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: link.color, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{link.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text3)', lineHeight: 1.4, wordBreak: 'break-word' }}>
                  {link.label === 'Email' && copied ? '✅ Copied!' : link.value}
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(108,99,255,0.12), rgba(167,139,250,0.08))',
            border: '1px solid rgba(108,99,255,0.2)', borderRadius: 20, padding: '36px 32px',
            opacity: inView ? 1 : 0, transition: 'all 0.7s ease 0.4s',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: 12 }}>👋</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem', marginBottom: 10, color: 'var(--text)' }}>
              Looking for a passionate developer?
            </h3>
            <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 24, maxWidth: 420, margin: '0 auto 24px' }}>
              I'm actively seeking opportunities in AI/ML, full-stack development, and software engineering. My resume is ready to share!
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:pragyas1008@gmail.com" style={{
                padding: '12px 28px', borderRadius: 10, textDecoration: 'none',
                background: 'linear-gradient(135deg, var(--accent), #7c3aed)',
                color: 'white', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem',
                boxShadow: '0 4px 20px rgba(108,99,255,0.4)', transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(108,99,255,0.6)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(108,99,255,0.4)'; }}
              >
                ✉️ Say Hello
              </a>
              <a href="/resume.pdf" target="_blank" style={{
                padding: '12px 28px', borderRadius: 10, textDecoration: 'none',
                background: 'transparent', border: '1px solid var(--border2)',
                color: 'var(--text2)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent2)'; e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)'; e.currentTarget.style.background = 'rgba(108,99,255,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.background = 'transparent'; }}
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: 60, paddingTop: 28, borderTop: '1px solid var(--border)', color: 'var(--text3)', fontSize: '0.82rem' }}>
          <p>Designed & Built by <span style={{ color: 'var(--accent2)', fontWeight: 600 }}>Pragya Singh</span> · B.Tech IT, VIT Vellore 2027</p>
          <p style={{ marginTop: 6 }}>Made with React · Deployed on Vercel</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
