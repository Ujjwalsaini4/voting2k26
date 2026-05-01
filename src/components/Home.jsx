import { Link } from 'react-router-dom';
import { MessageSquare, Clock, BookOpen, HelpCircle } from 'lucide-react';

function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Learn How Elections Work in India</h1>
          <p className="hero-subtitle">
            Your interactive guide to understanding the world's largest democratic exercise. 
            Simple, easy-to-follow, and designed for every citizen.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="quick-actions-grid">
          <Link to="/guide" className="card action-card">
            <div className="action-icon">
              <BookOpen size={32} />
            </div>
            <h3>How to Vote</h3>
            <p className="color-text-muted">Step-by-step guide on registering and casting your vote.</p>
          </Link>

          <Link to="/timeline" className="card action-card">
            <div className="action-icon">
              <Clock size={32} />
            </div>
            <h3>Election Timeline</h3>
            <p className="color-text-muted">Understand the phases from announcement to results.</p>
          </Link>

          <Link to="/chat" className="card action-card" style={{ borderColor: 'var(--color-primary)' }}>
            <div className="action-icon" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
              <MessageSquare size={32} />
            </div>
            <h3>Ask a Question</h3>
            <p className="color-text-muted">Chat with our AI assistant for personalized guidance.</p>
          </Link>

          <Link to="/faq" className="card action-card">
            <div className="action-icon">
              <HelpCircle size={32} />
            </div>
            <h3>Common Questions</h3>
            <p className="color-text-muted">Learn about EVMs, VVPAT, NOTA and more.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
