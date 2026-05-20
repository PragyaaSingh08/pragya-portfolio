import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home','about','projects','skills','experience','contact'];
      for (let s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) { setActive(s); break; }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '14px 0' : '22px 0',
      background: scrolled ? 'rgba(5,5,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(108,99,255,0.12)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button onClick={() => scrollTo('home')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem',
          color: 'var(--text)',
        }}>
          <span style={{ color: 'var(--accent)' }}>P</span>ragya
          <span style={{
            display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
            background: 'var(--accent3)', marginLeft: 3, verticalAlign: 'middle',
            animation: 'pulse-glow 2s ease-in-out infinite',
          }} />
        </button>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{
              background: active === l.id ? 'rgba(108,99,255,0.15)' : 'none',
              border: active === l.id ? '1px solid rgba(108,99,255,0.3)' : '1px solid transparent',
              borderRadius: 8, cursor: 'pointer', padding: '7px 16px',
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.875rem',
              color: active === l.id ? 'var(--accent2)' : 'var(--text2)',
              transition: 'all 0.2s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent2)'; e.currentTarget.style.borderColor = 'rgba(108,99,255,0.25)'; }}
              onMouseLeave={e => {
                if (active !== l.id) {
                  e.currentTarget.style.color = 'var(--text2)';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')} style={{
            marginLeft: 8, padding: '8px 20px', borderRadius: 8, cursor: 'pointer',
            background: 'linear-gradient(135deg, var(--accent), #7c3aed)',
            border: 'none', color: 'white', fontFamily: 'var(--font-body)',
            fontWeight: 600, fontSize: '0.875rem', transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(108,99,255,0.4)',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(108,99,255,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(108,99,255,0.4)'; }}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: '1px solid var(--border)', borderRadius: 8,
          padding: '8px 12px', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5,
        }} className="hamburger">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2, borderRadius: 2,
              background: menuOpen ? (i===1 ? 'transparent' : 'var(--accent)') : 'var(--text2)',
              transform: menuOpen ? (i===0 ? 'rotate(45deg) translate(5px,5px)' : i===2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none') : 'none',
              transition: 'all 0.3s ease',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(5,5,15,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)', padding: '20px 24px',
          animation: 'fadeUp 0.3s ease',
        }}>
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '12px 0', borderBottom: '1px solid var(--border)',
              fontFamily: 'var(--font-body)', fontSize: '1rem',
              color: active === l.id ? 'var(--accent2)' : 'var(--text)',
            }}>
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
