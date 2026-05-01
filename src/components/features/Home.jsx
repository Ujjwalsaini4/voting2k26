import { Link } from 'react-router-dom';
import { MessageSquare, Clock, BookOpen, HelpCircle } from 'lucide-react';
import Card from '../ui/Card';

function Home() {
  return (
    <div>
      <header className="hero-section">
        <div className="container">
          <h1 className="hero-title">Learn How Elections Work in India</h1>
          <p className="hero-subtitle">
            Your interactive guide to understanding the world's largest democratic exercise. 
            Simple, easy-to-follow, and designed for every citizen.
          </p>
        </div>
      </header>

      <section className="container">
        <div className="quick-actions-grid">
          <Link to="/guide" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="action-card" ariaLabel="Go to How to Vote guide">
              <div className="action-icon" aria-hidden="true">
                <BookOpen size={32} />
              </div>
              <h3>How to Vote</h3>
              <p className="color-text-muted">Step-by-step guide on registering and casting your vote.</p>
            </Card>
          </Link>

          <Link to="/timeline" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="action-card" ariaLabel="View Election Timeline">
              <div className="action-icon" aria-hidden="true">
                <Clock size={32} />
              </div>
              <h3>Election Timeline</h3>
              <p className="color-text-muted">Understand the phases from announcement to results.</p>
            </Card>
          </Link>

          <Link to="/chat" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="action-card" style={{ borderColor: 'var(--color-primary)' }} ariaLabel="Ask a Question to AI Assistant">
              <div className="action-icon" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }} aria-hidden="true">
                <MessageSquare size={32} />
              </div>
              <h3>Ask a Question</h3>
              <p className="color-text-muted">Chat with our AI assistant for personalized guidance.</p>
            </Card>
          </Link>

          <Link to="/faq" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="action-card" ariaLabel="View Frequently Asked Questions">
              <div className="action-icon" aria-hidden="true">
                <HelpCircle size={32} />
              </div>
              <h3>Common Questions</h3>
              <p className="color-text-muted">Learn about EVMs, VVPAT, NOTA and more.</p>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
