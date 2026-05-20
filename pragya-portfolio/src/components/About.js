import React from 'react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const [ref, inView] = useInView();

  return (
    <section id="about" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
        {/* Left: Text */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateX(-30px)', transition: 'all 0.7s ease' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: 'var(--accent)' }} />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}>About Me</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>
            Turning ideas into<br />
            <span style={{ color: 'var(--accent2)' }}>intelligent systems.</span>
          </h2>
          <p style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: 18, fontSize: '1.02rem' }}>
            I'm a 3rd-year B.Tech IT student at <strong style={{ color: 'var(--text)' }}>VIT Vellore</strong>, passionate about building at the intersection of AI and full-stack engineering. From real-time computer vision apps to scalable cloud-deployed platforms, I love crafting solutions that matter.
          </p>
          <p style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: 18, fontSize: '1.02rem' }}>
            My work spans <strong style={{ color: 'var(--accent2)' }}>Generative AI</strong>, <strong style={{ color: 'var(--accent2)' }}>Machine Learning</strong>, and <strong style={{ color: 'var(--accent2)' }}>full-stack development</strong>. I recently built RecruitIQ — an AI-powered resume screener — during my GenAI internship at Incture Technologies.
          </p>
          <p style={{ color: 'var(--text2)', lineHeight: 1.8, fontSize: '1.02rem' }}>
            Beyond code, I'm a core committee member at <strong style={{ color: 'var(--text)' }}>MFC-VIT (Mozilla Firefox Club)</strong> and have conducted web development workshops, blending teaching with building.
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            {['AI/ML', 'Full Stack', 'Cloud', 'Open Source'].map(tag => (
              <span key={tag} style={{
                background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)',
                borderRadius: 100, padding: '4px 14px', fontSize: '0.8rem',
                color: 'var(--accent2)', fontWeight: 500,
              }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Right: Visual card */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateX(30px)', transition: 'all 0.7s ease 0.2s' }}>
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 20, padding: 32, position: 'relative', overflow: 'hidden',
          }}>
            {/* Decorative corner */}
            <div style={{
              position: 'absolute', top: 0, right: 0, width: 120, height: 120,
              background: 'radial-gradient(circle at top right, rgba(108,99,255,0.2), transparent 70%)',
            }} />

            <div style={{ marginBottom: 28, display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 64, height: 64, borderRadius: 16,
                background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'white',
                boxShadow: '0 8px 24px rgba(108,99,255,0.4)',
              }}>PS</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem' }}>Pragya Singh</div>
                <div style={{ color: 'var(--text2)', fontSize: '0.85rem' }}>pragyas1008@gmail.com</div>
              </div>
            </div>

            {[
              { label: 'Education', val: 'B.Tech IT — VIT Vellore' },
              { label: 'Batch', val: '2023–2027' },
              { label: 'Focus', val: 'AI/ML + Full Stack Dev' },
              { label: 'Location', val: 'Vellore, India' },
              { label: 'Status', val: '🟢 Open to Opportunities' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '10px 0', borderBottom: '1px solid var(--border)',
              }}>
                <span style={{ color: 'var(--text3)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.label}</span>
                <span style={{ color: 'var(--text)', fontSize: '0.9rem', fontWeight: 500 }}>{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
