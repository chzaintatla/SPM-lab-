import { Bot, Terminal, FolderOpen, Globe, Mail, Clock, Database, Brain, Calendar, Mic, Smartphone, ChevronRight, CheckCircle2 } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar glass-panel">
        <div className="container nav-content">
          <div className="logo">
            <div className="logo-icon">
              <Bot size={24} color="white" />
            </div>
            <span className="logo-text">NeuroDesk AI</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#architecture">Architecture</a>
            <a href="#team">Team</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <div className="hero-text animate-fade-in-up">
            <div className="badge">Introducing NeuroDesk AI</div>
            <h1 className="hero-title">Control Your Computer with <span className="text-gradient">AI</span></h1>
            <p className="hero-subtitle">
              An intelligent desktop automation agent that executes real tasks using natural language commands.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">
                View Demo <ChevronRight size={18} style={{ marginLeft: '8px' }} />
              </button>
              <button className="btn btn-secondary">Explore Features</button>
            </div>
          </div>
          <div className="hero-visual animate-fade-in-up delay-200">
            <div className="workflow-diagram glass-panel">
              <div className="workflow-step"><Smartphone size={32} /><span>Mobile App</span></div>
              <div className="workflow-arrow">→</div>
              <div className="workflow-step"><Brain size={32} /><span>AI Brain</span></div>
              <div className="workflow-arrow">→</div>
              <div className="workflow-step"><Terminal size={32} /><span>Desktop Agent</span></div>
              <div className="workflow-arrow">→</div>
              <div className="workflow-step"><Terminal size={32} /><span>Computer</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text animate-fade-in-up">
              <h2 className="section-title" style={{ textAlign: 'left' }}>What is NeuroDesk AI?</h2>
              <p>
                NeuroDesk AI is an AI-powered desktop automation agent that allows users to control their computers using natural language commands through a Flutter mobile application.
              </p>
              <p>
                Unlike traditional automation tools that require complex scripting or UI interactions, NeuroDesk AI understands your intent. The system consists of a Mobile App, Backend Server, AI Brain, and Desktop Agent seamlessly working together.
              </p>
            </div>
            <div className="about-stats glass-panel animate-fade-in-up delay-200">
              <div className="stat-item">
                <h3>100%</h3>
                <p>Natural Language</p>
              </div>
              <div className="stat-item">
                <h3>0</h3>
                <p>Scripts Required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section bg-light">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <p className="section-subtitle">Powerful automation capabilities driven by advanced AI.</p>
          
          <div className="features-grid">
            {[
              { icon: <Mic />, title: "Natural Language", desc: "Speak or type commands naturally." },
              { icon: <Brain />, title: "AI Command Processing", desc: "Intelligent understanding of intent." },
              { icon: <Terminal />, title: "Desktop Automation", desc: "Seamless system level control." },
              { icon: <FolderOpen />, title: "File Management", desc: "Organize, move, and find files easily." },
              { icon: <Globe />, title: "Browser Automation", desc: "Automate repetitive web tasks." },
              { icon: <Mail />, title: "Email Automation", desc: "Draft and send emails automatically." },
              { icon: <Clock />, title: "Real-Time Updates", desc: "Live feedback on task execution." },
              { icon: <Database />, title: "Persistent Memory", desc: "Learns from your habits." },
              { icon: <Calendar />, title: "Task Scheduling", desc: "Automate tasks at specific times." }
            ].map((feature, idx) => (
              <div className="feature-card glass-panel" key={idx}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Four simple steps to automate your desktop.</p>
          
          <div className="steps-container">
            {[
              { num: "01", title: "User Command", desc: "Send command from mobile app" },
              { num: "02", title: "AI Understanding", desc: "AI Brain understands the command" },
              { num: "03", title: "Execution Plan", desc: "An execution plan is generated" },
              { num: "04", title: "Task Execution", desc: "Desktop Agent performs the task" }
            ].map((step, idx) => (
              <div className="step-card glass-panel" key={idx}>
                <div className="step-num">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="arch-section bg-light">
        <div className="container">
          <h2 className="section-title">System Architecture</h2>
          <p className="section-subtitle">Built on a robust, scalable technology stack.</p>
          
          <div className="arch-diagram glass-panel">
            <div className="arch-node">Flutter Mobile App</div>
            <div className="arch-arrow">↓</div>
            <div className="arch-node">FastAPI Backend (WebSocket)</div>
            <div className="arch-arrow">↓</div>
            <div className="arch-node">AI Brain (LLM, LangChain)</div>
            <div className="arch-arrow">↓</div>
            <div className="arch-node">Desktop Agent (Python)</div>
            <div className="arch-arrow">↓</div>
            <div className="arch-node">Windows Desktop</div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="comparison-section">
        <div className="container">
          <h2 className="section-title">Competitive Advantage</h2>
          <p className="section-subtitle">Why NeuroDesk AI stands out.</p>
          
          <div className="table-responsive glass-panel">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Features</th>
                  <th className="highlight">NeuroDesk AI</th>
                  <th>Siri / Alexa</th>
                  <th>AutoGPT</th>
                  <th>UiPath</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Desktop Control</td>
                  <td className="highlight"><CheckCircle2 color="var(--success)" /></td>
                  <td>Limited</td>
                  <td>Limited</td>
                  <td><CheckCircle2 color="var(--success)" /></td>
                </tr>
                <tr>
                  <td>Mobile Control</td>
                  <td className="highlight"><CheckCircle2 color="var(--success)" /></td>
                  <td><CheckCircle2 color="var(--success)" /></td>
                  <td>No</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Real Task Execution</td>
                  <td className="highlight"><CheckCircle2 color="var(--success)" /></td>
                  <td>Basic</td>
                  <td><CheckCircle2 color="var(--success)" /></td>
                  <td><CheckCircle2 color="var(--success)" /></td>
                </tr>
                <tr>
                  <td>Persistent Memory</td>
                  <td className="highlight"><CheckCircle2 color="var(--success)" /></td>
                  <td>No</td>
                  <td>Basic</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section bg-light">
        <div className="container">
          <h2 className="section-title">The Team</h2>
          <p className="section-subtitle">The minds behind NeuroDesk AI.</p>
          
          <div className="team-grid">
            <div className="team-card glass-panel">
              <div className="avatar">MZ</div>
              <h3>Muhammad Zain Ul Abidin</h3>
              <p>Team Lead & Full Stack Developer</p>
            </div>
            <div className="team-card glass-panel">
              <div className="avatar">MT</div>
              <h3>Maha Tahir</h3>
              <p>Documentation & Research Analyst</p>
            </div>
            <div className="team-card glass-panel">
              <div className="avatar">TM</div>
              <h3>Third Member</h3>
              <p>QA & System Analyst</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <Bot size={24} color="var(--primary)" />
                <span className="logo-text">NeuroDesk AI</span>
              </div>
              <p>Control your computer with AI.</p>
              <div className="social-links">
                <a href="#">GH</a>
                <a href="#">LI</a>
                <a href="#"><Mail /></a>
              </div>
            </div>
            <div className="footer-contact glass-panel">
              <h3>Contact Us</h3>
              <form>
                <input type="text" placeholder="Name" className="input-field" />
                <input type="email" placeholder="Email" className="input-field" />
                <textarea placeholder="Message" className="input-field" rows={3}></textarea>
                <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 NeuroDesk AI. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy</a>
              <a href="#">Documentation</a>
              <a href="#">GitHub Repository</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
