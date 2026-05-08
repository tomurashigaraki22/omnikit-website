"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const NAV_LINKS = ["Docs", "Pricing", "Changelog", "GitHub"];

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const canvasRef = useRef(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * 1600,
      y: Math.random() * 800,
      r: Math.random() * 1.2 + 0.2,
      o: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.3 + 0.05,
    }));

    let t = 0;
    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      t += 0.005;
      stars.forEach((s) => {
        const flicker = s.o + Math.sin(t * s.speed * 10 + s.x) * 0.15;
        ctx.beginPath();
        ctx.arc(s.x % w, s.y % h, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, flicker)})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <Link href="/" className="nav-logo">
          <img src="/logo.png" alt="OmniKit" className="nav-logo-img" />
          OmniKit
        </Link>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l} href={l === "GitHub" ? "https://github.com/tomurashigaraki22/omnikit" : "#"} className="nav-link">{l}</a>
          ))}
        </div>
        <div className="nav-right">
          <a href="https://github.com/tomurashigaraki22/omnikit" className="nav-gh">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
            </svg>
            Star
            <span style={{ color: "var(--text)", fontWeight: 600 }}>—</span>
          </a>
          <Link href="/" className="nav-cta">Back to Home</Link>
        </div>
      </nav>

      <section className="hero">
        <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
        
        <div className="login-container">
          {/* LOGIN CARD */}
          <div className="login-card">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              {isSignUp ? 'Join the community' : 'Welcome back'}
            </div>
            
            <h1 className="hero-h1" style={{ fontSize: '32px', marginBottom: '16px' }}>
              {isSignUp ? (
                <>Sign up to <em>OmniKit</em></>
              ) : (
                <>Sign in to <em>OmniKit</em></>
              )}
            </h1>
            
            <p className="hero-sub" style={{ fontSize: '15px', marginBottom: '32px', maxWidth: 'none' }}>
              {isSignUp 
                ? 'Start building multi-chain applications with our production-ready SDK.'
                : 'Access your dashboard and continue building the future of Web3.'
              }
            </p>

            <div className="social-login-section">
              <button className="social-btn" onClick={() => console.log('Google')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              <button className="social-btn" onClick={() => console.log('GitHub')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                </svg>
                Continue with GitHub
              </button>
            </div>

            <div className="divider-section">
              <hr className="divider" />
              <span className="divider-text">or email</span>
              <hr className="divider" />
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              {isSignUp && (
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" className="form-input" placeholder="Enter your name" onChange={handleInputChange} />
                </div>
              )}
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-input" placeholder="name@company.com" onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" name="password" className="form-input" placeholder="••••••••" onChange={handleInputChange} required />
              </div>
              <button type="submit" className="btn-primary login-btn">
                {isSignUp ? 'Create account' : 'Sign in'}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>

            <div className="login-footer">
              <p className="switch-text">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button className="switch-btn" onClick={() => setIsSignUp(!isSignUp)}>
                  {isSignUp ? 'Sign in' : 'Sign up'}
                </button>
              </p>
            </div>
          </div>

          {/* INFO SIDE */}
          <div className="login-info">
            <div className="info-content">
              <h2 className="hero-h1" style={{ fontSize: '28px', textAlign: 'left', marginBottom: '16px' }}>
                Production-ready <em>multi-chain</em> SDK
              </h2>
              <p className="hero-sub" style={{ fontSize: '15px', textAlign: 'left', maxWidth: 'none', marginBottom: '32px' }}>
                Join thousands of developers building the future of Web3 with OmniKit's unified infrastructure.
              </p>
              
              <div className="info-stats">
                <div className="stat-item">
                  <span className="stat-number">6</span>
                  <span className="stat-label">Packages</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Chains</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Live</span>
                  <span className="stat-label">Production</span>
                </div>
              </div>

              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="terminal-title">quick-start.ts</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line">
                    <span className="terminal-prompt">$</span>
                    <span className="terminal-command">npm install @watchupltd/omnikit</span>
                  </div>
                  <div className="terminal-line success">
                    <span className="terminal-output">✓ Ready to build!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}