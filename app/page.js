"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = ["Docs", "Pricing", "Changelog", "GitHub"];

const FEATURES = [
  {
    icon: "⬡",
    title: "Unified wallet connection",
    desc: "One API to connect wallets across Ethereum, Solana, and any future chain. No more per-chain boilerplate.",
    code: "const wallet = await kit.connect()",
    highlight: "One line. Any chain."
  },
  {
    icon: "⌬",
    title: "Multi-chain abstraction",
    desc: "Write chain-agnostic code. OmniKit normalizes chain differences so you focus on product, not plumbing.",
    code: "kit.getBalance({ chain: 'ethereum' })\nkit.getBalance({ chain: 'solana' })",
    highlight: "Same API everywhere"
  },
  {
    icon: "⊞",
    title: "React hooks & UI",
    desc: "Drop-in hooks and pre-built components. Connect a wallet in under 10 lines of code.",
    code: "const { connect, wallet } = useOmniKit()\nawait connect()",
    highlight: "React-first design"
  },
  {
    icon: "◈",
    title: "Auth & sessions",
    desc: "Sign-in with Ethereum and Solana. Persistent session management with secure token handling.",
    code: "const session = await kit.authenticate({\n  wallet,\n  message: 'Sign in'\n})",
    highlight: "Secure by default"
  },
  {
    icon: "⬕",
    title: "Chain adapters",
    desc: "Modular plugin architecture. Add new chains without touching existing code.",
    code: "new OmniKit({\n  adapters: [ethereum(), solana(), base()]\n})",
    highlight: "Plug & play"
  },
  {
    icon: "◎",
    title: "Token & balance APIs",
    desc: "Fetch balances, tokens, and NFTs with a unified interface across all supported chains.",
    code: "const tokens = await kit.getTokens({\n  chain: 'ethereum',\n  address: wallet.address\n})",
    highlight: "Complete data access"
  },
];

const CHAIN_SUPPORT = [
  { 
    name: "Ethereum", 
    symbol: "ETH", 
    status: "Live",
    info: "Full support for EVM chains",
    wallets: "MetaMask, WalletConnect, Coinbase"
  },
  { 
    name: "Solana", 
    symbol: "SOL", 
    status: "Live",
    info: "Native Solana integration",
    wallets: "Phantom, Solflare, Backpack"
  },
  { 
    name: "Base", 
    symbol: "BASE", 
    status: "Soon",
    info: "Coinbase L2 support",
    wallets: "Coming Q2 2025"
  },
  { 
    name: "Polygon", 
    symbol: "POL", 
    status: "Soon",
    info: "Polygon PoS & zkEVM",
    wallets: "Coming Q2 2025"
  },
];

const STEPS = [
  { 
    step: "01", 
    title: "Install", 
    code: "npm install @omnikit/core",
    desc: "Add OmniKit to your project with a single command. Zero config required."
  },
  { 
    step: "02", 
    title: "Configure", 
    code: "new OmniKit({ adapters: [...] })",
    desc: "Initialize with your preferred chains. Add or remove adapters anytime."
  },
  { 
    step: "03", 
    title: "Connect", 
    code: "await kit.connect()",
    desc: "One method to connect any wallet on any supported chain. That's it."
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const canvasRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install @omnikit/core");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
        <div className="nav-logo">
          <img src="/logo.png" alt="OmniKit" className="nav-logo-img" />
          OmniKit
        </div>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l} href="#" className="nav-link">{l}</a>
          ))}
        </div>
        <div className="nav-right">
          <a href="#" className="nav-gh">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
            </svg>
            Star
            <span style={{ color: "var(--text)", fontWeight: 600 }}>—</span>
          </a>
          <a href="#" className="nav-cta">Get Started</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

        <div className="hero-badge">
          <span className="hero-badge-dot" />
          WatchUp LTD · Open Source · v0.1 Alpha
        </div>

        <h1 className="hero-h1">
          One SDK for
          <em> every chain,</em><br />
          every wallet.
        </h1>

        <p className="hero-sub">
          OmniKit unifies wallet connection, authentication, and transaction handling across Ethereum and Solana. Stop writing the same code twice.
        </p>

        <div className="hero-actions">
          <a href="#" className="btn-primary">
            Get Started Free
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <button className="btn-code" onClick={handleCopy} aria-label="Copy install command">
            <span className="btn-code-dollar">$</span>
            npm install @omnikit/core
            <span className={`btn-code-copy ${copied ? "active" : ""}`}>
              {copied ? "copied!" : "copy"}
            </span>
          </button>
        </div>

        <div className="hero-demo">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">terminal</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">npm install @omnikit/core</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">✓ Installed @omnikit/core</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">node app.js</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">🔗 Connecting to Ethereum...</span>
              </div>
              <div className="terminal-line success">
                <span className="terminal-output">✓ Wallet connected: 0x742d...3a9f</span>
              </div>
              <div className="terminal-line success">
                <span className="terminal-output">✓ Balance: 1.24 ETH</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-chains">
          <span style={{ marginRight: 4 }}>Supports:</span>
          {CHAIN_SUPPORT.map((c) => (
            <span
              key={c.name}
              className={`chain-pill ${c.status === "Live" ? "live" : ""}`}
            >
              {c.name}
            </span>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* FEATURES */}
      <section className="section">
        <div className="hero-badge" style={{ animationDelay: '0s' }}>
          <span className="hero-badge-dot" />
          Features
        </div>
        
        <h2 className="section-title-hero" style={{ animationDelay: '0.08s' }}>
          First-class<br />
          <em>developer experience</em>
        </h2>
        
        <p className="section-sub-hero" style={{ animationDelay: '0.16s' }}>
          Built for TypeScript-first teams. Zero config overhead. One coherent API across every chain you ship on.
        </p>

        <div className="features-grid-hero">
          {FEATURES.map((f, idx) => (
            <div key={f.title} className="feature-card-hero" style={{ animationDelay: `${0.24 + idx * 0.08}s` }}>
              <div className="feature-card-inner">
                <div className="feature-icon-hero">{f.icon}</div>
                <h3 className="feature-title-hero">{f.title}</h3>
                <p className="feature-desc-hero">{f.desc}</p>
                
                <div className="terminal-window terminal-compact">
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <span className="terminal-title">example-{idx + 1}.ts</span>
                  </div>
                  <div className="terminal-body">
                    <div className="terminal-line">
                      <span className="terminal-command">{f.code}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* DEVELOPER EXPERIENCE */}
      <section className="section">
        <div className="hero-badge" style={{ animationDelay: '0s' }}>
          <span className="hero-badge-dot" />
          Developer Experience
        </div>
        
        <h2 className="section-title-hero" style={{ animationDelay: '0.08s' }}>
          From zero to <em>connected</em><br />
          in minutes.
        </h2>

        <div className="steps-grid-hero">
          {STEPS.map((s, idx) => (
            <div key={s.step} className="step-card-hero" style={{ animationDelay: `${0.16 + idx * 0.08}s` }}>
              <div className="step-badge">{s.step}</div>
              <h3 className="step-title-hero">{s.title}</h3>
              <p className="step-desc-hero">{s.desc}</p>
              
              <div className="terminal-window terminal-compact">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="terminal-title">terminal</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line">
                    <span className="terminal-prompt">$</span>
                    <span className="terminal-command">{s.code}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="code-section-hero" style={{ animationDelay: '0.4s' }}>
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-tabs">
                {["connect.ts", "balance.ts", "auth.ts"].map((tab, i) => (
                  <button
                    key={tab}
                    className={`terminal-tab ${activeTab === i ? "active" : ""}`}
                    onClick={() => setActiveTab(i)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="terminal-body terminal-body-large">
              {activeTab === 0 && (
                <div>
                  <div className="terminal-line">
                    <span className="c-keyword">import</span>{" "}
                    <span className="c-val">{"{ OmniKit }"}</span>{" "}
                    <span className="c-keyword">from</span>{" "}
                    <span className="c-string">&apos;@omnikit/core&apos;</span>
                  </div>
                  <div className="terminal-line">
                    <span className="c-keyword">import</span>{" "}
                    <span className="c-val">{"{ ethereum, solana }"}</span>{" "}
                    <span className="c-keyword">from</span>{" "}
                    <span className="c-string">&apos;@omnikit/adapters&apos;</span>
                  </div>
                  <div className="terminal-line">&nbsp;</div>
                  <div className="terminal-line">
                    <span className="c-keyword">const</span>{" "}
                    <span className="c-val">kit</span> = <span className="c-keyword">new</span>{" "}
                    <span className="c-fn">OmniKit</span>{"({"}
                  </div>
                  <div className="terminal-line">
                    {"  "}<span className="c-prop">adapters</span>: [<span className="c-fn">ethereum</span>(), <span className="c-fn">solana</span>()],
                  </div>
                  <div className="terminal-line">
                    {"  "}<span className="c-prop">auth</span>: {"{ "}<span className="c-prop">sessionDuration</span>: <span className="c-string">&apos;7d&apos;</span>{" }"}
                  </div>
                  <div className="terminal-line">{"})"}  </div>
                  <div className="terminal-line">&nbsp;</div>
                  <div className="terminal-line">
                    <span className="c-comment">{"// Connect any wallet — one unified API"}</span>
                  </div>
                  <div className="terminal-line">
                    <span className="c-keyword">const</span>{" "}
                    <span className="c-val">wallet</span> = <span className="c-keyword">await</span>{" "}
                    <span className="c-val">kit</span>.<span className="c-fn">connect</span>()
                  </div>
                  <div className="terminal-line">&nbsp;</div>
                  <div className="terminal-line">
                    <span className="c-keyword">console</span>.<span className="c-fn">log</span>(wallet.<span className="c-prop">address</span>, wallet.<span className="c-prop">chain</span>)
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div>
                  <div className="terminal-line">
                    <span className="c-comment">{"// Unified balance across any chain"}</span>
                  </div>
                  <div className="terminal-line">
                    <span className="c-keyword">const</span>{" "}
                    <span className="c-val">balance</span> = <span className="c-keyword">await</span>{" "}
                    <span className="c-val">kit</span>.<span className="c-fn">getBalance</span>{"({"}
                  </div>
                  <div className="terminal-line">
                    {"  "}<span className="c-prop">chain</span>: <span className="c-string">&apos;ethereum&apos;</span>,
                  </div>
                  <div className="terminal-line">
                    {"  "}<span className="c-prop">address</span>: wallet.<span className="c-prop">address</span>,
                  </div>
                  <div className="terminal-line">{"})"}  </div>
                  <div className="terminal-line">&nbsp;</div>
                  <div className="terminal-line">
                    <span className="c-comment">{"// Fetch all tokens in one call"}</span>
                  </div>
                  <div className="terminal-line">
                    <span className="c-keyword">const</span>{" "}
                    <span className="c-val">tokens</span> = <span className="c-keyword">await</span>{" "}
                    <span className="c-val">kit</span>.<span className="c-fn">getTokens</span>{"({"}
                  </div>
                  <div className="terminal-line">
                    {"  "}<span className="c-prop">chain</span>: <span className="c-string">&apos;solana&apos;</span>,
                  </div>
                  <div className="terminal-line">
                    {"  "}<span className="c-prop">address</span>: wallet.<span className="c-prop">address</span>,
                  </div>
                  <div className="terminal-line">{"})"}</div>
                  <div className="terminal-line">&nbsp;</div>
                  <div className="terminal-line">
                    <span className="c-comment">{"// { native: '1.24 ETH', tokens: [...] }"}</span>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <div className="terminal-line">
                    <span className="c-comment">{"// Sign-in with Ethereum or Solana"}</span>
                  </div>
                  <div className="terminal-line">
                    <span className="c-keyword">const</span>{" "}
                    <span className="c-val">session</span> = <span className="c-keyword">await</span>{" "}
                    <span className="c-val">kit</span>.<span className="c-fn">authenticate</span>{"({"}
                  </div>
                  <div className="terminal-line">
                    {"  "}<span className="c-prop">wallet</span>: wallet,
                  </div>
                  <div className="terminal-line">
                    {"  "}<span className="c-prop">message</span>: <span className="c-string">&apos;Sign in to MyApp&apos;</span>,
                  </div>
                  <div className="terminal-line">{"})"}  </div>
                  <div className="terminal-line">&nbsp;</div>
                  <div className="terminal-line">
                    <span className="c-comment">{"// Verify on your backend"}</span>
                  </div>
                  <div className="terminal-line">
                    <span className="c-keyword">const</span>{" "}
                    <span className="c-val">valid</span> = <span className="c-keyword">await</span>{" "}
                    <span className="c-val">kit</span>.<span className="c-fn">verify</span>(session.<span className="c-prop">token</span>)
                  </div>
                  <div className="terminal-line">&nbsp;</div>
                  <div className="terminal-line">
                    <span className="c-comment">{"// { address, chain, verified: true }"}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* CHAIN SUPPORT */}
      <section className="section">
        <div className="hero-badge" style={{ animationDelay: '0s' }}>
          <span className="hero-badge-dot" />
          Chain Support
        </div>
        
        <h2 className="section-title-hero" style={{ animationDelay: '0.08s' }}>
          Start with <em>two.</em><br />
          Scale to any.
        </h2>
        
        <p className="section-sub-hero" style={{ animationDelay: '0.16s' }}>
          Ethereum and Solana are fully supported at launch. The modular adapter system means adding new chains never requires touching existing code.
        </p>

        <div className="chains-grid-hero">
          {CHAIN_SUPPORT.map((c, idx) => (
            <div key={c.name} className="chain-card-hero" style={{ animationDelay: `${0.24 + idx * 0.08}s` }}>
              <div className="chain-header-hero">
                <h3 className="chain-name-hero">{c.name}</h3>
                <span className={`chain-pill ${c.status === "Live" ? "live" : ""}`}>
                  {c.status === "Live" && <span className="hero-badge-dot" style={{ marginRight: 6 }}></span>}
                  {c.status}
                </span>
              </div>
              
              <div className="chain-symbol-hero">{c.symbol}</div>
              <p className="chain-info-hero">{c.info}</p>
              
              <div className="terminal-window terminal-compact">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="terminal-title">wallets</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line">
                    <span className="terminal-output">{c.wallets}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section-hero">
        <div className="cta-glow" aria-hidden="true" />
        
        <div className="hero-badge" style={{ animationDelay: '0s' }}>
          <span className="hero-badge-dot" />
          Open Source
        </div>
        
        <h2 className="cta-title-hero" style={{ animationDelay: '0.08s' }}>
          Build faster.<br />
          Ship with <em>confidence.</em>
        </h2>
        
        <p className="cta-sub-hero" style={{ animationDelay: '0.16s' }}>
          OmniKit is open source, TypeScript-native, and designed to grow with your stack. Start free, self-host forever.
        </p>
        
        <div className="hero-actions" style={{ animationDelay: '0.24s' }}>
          <a href="#" className="btn-primary">
            Start Building Free
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <button className="btn-code" onClick={handleCopy} aria-label="Copy install command">
            <span className="btn-code-dollar">$</span>
            npm install @omnikit/core
            <span className={`btn-code-copy ${copied ? "active" : ""}`}>
              {copied ? "copied!" : "copy"}
            </span>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-hero">
        <div className="footer-content">
          <div className="footer-left-hero">
            <div className="nav-logo">
              <img src="/logo.png" alt="OmniKit" className="nav-logo-img" />
              OmniKit
            </div>
            <p className="footer-tagline">
              © 2025 WatchUp LTD · Open source under MIT
            </p>
          </div>
          <div className="footer-links-hero">
            {["Docs", "GitHub", "Changelog", "Privacy"].map((l) => (
              <a key={l} href="#" className="footer-link-hero">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}