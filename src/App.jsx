import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, MessageSquare, Clock, BookOpen, HelpCircle, Sun, Moon, Monitor, Menu, X } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import Home from './components/Home';
import ChatAssistant from './components/ChatAssistant';
import Timeline from './components/Timeline';
import VotingGuide from './components/VotingGuide';
import FAQ from './components/FAQ';

function Navigation() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <BookOpen size={24} />
          <span>India Election Guide</span>
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
          <Link to="/chat" className={`nav-link ${isActive('/chat')}`} onClick={closeMenu}>Assistant</Link>
          <Link to="/timeline" className={`nav-link ${isActive('/timeline')}`} onClick={closeMenu}>Timeline</Link>
          <Link to="/guide" className={`nav-link ${isActive('/guide')}`} onClick={closeMenu}>Guide</Link>
          <Link to="/faq" className={`nav-link ${isActive('/faq')}`} onClick={closeMenu}>FAQ</Link>
          
          <div className="theme-toggle-group">
             <button title="Light Mode" onClick={() => { setTheme('light'); closeMenu(); }} className={theme === 'light' ? 'active' : ''}>
               <Sun size={16} />
             </button>
             <button title="Dark Mode" onClick={() => { setTheme('dark'); closeMenu(); }} className={theme === 'dark' ? 'active' : ''}>
               <Moon size={16} />
             </button>
             <button title="System Default" onClick={() => { setTheme('system'); closeMenu(); }} className={theme === 'system' ? 'active' : ''}>
               <Monitor size={16} />
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <main className="main-content container animate-fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatAssistant />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/guide" element={<VotingGuide />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
