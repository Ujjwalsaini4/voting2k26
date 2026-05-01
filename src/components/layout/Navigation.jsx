import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Sun, Moon, Monitor, Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { trackEvent } from '../../utils/firebase';
import Button from '../ui/Button';

function Navigation() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path ? 'page' : undefined;
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (page) => {
    trackEvent('navigation_click', { page });
    closeMenu();
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav className="navbar">
        <div className="container navbar-content">
          <Link to="/" className="navbar-brand" onClick={() => handleNavClick('home')}>
            <BookOpen size={24} aria-hidden="true" />
            <span>India Election Guide</span>
          </Link>

        {/* Mobile Toggle */}
        <Button 
          className="mobile-menu-btn"
          variant="none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          ariaLabel={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </Button>

        <div className={`navbar-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link" aria-current={isActive('/')} onClick={() => handleNavClick('home')}>Home</Link>
          <Link to="/chat" className="nav-link" aria-current={isActive('/chat')} onClick={() => handleNavClick('chat')}>Assistant</Link>
          <Link to="/timeline" className="nav-link" aria-current={isActive('/timeline')} onClick={() => handleNavClick('timeline')}>Timeline</Link>
          <Link to="/guide" className="nav-link" aria-current={isActive('/guide')} onClick={() => handleNavClick('guide')}>Guide</Link>
          <Link to="/faq" className="nav-link" aria-current={isActive('/faq')} onClick={() => handleNavClick('faq')}>FAQ</Link>
          
          <div className="theme-toggle-group" role="group" aria-label="Theme selection">
             <Button 
                variant="none" 
                title="Light Mode" 
                ariaLabel="Switch to Light Mode" 
                onClick={() => { setTheme('light'); closeMenu(); }} 
                className={theme === 'light' ? 'active' : ''}
              >
               <Sun size={16} aria-hidden="true" />
             </Button>
             <Button 
                variant="none" 
                title="Dark Mode" 
                ariaLabel="Switch to Dark Mode" 
                onClick={() => { setTheme('dark'); closeMenu(); }} 
                className={theme === 'dark' ? 'active' : ''}
              >
               <Moon size={16} aria-hidden="true" />
             </Button>
             <Button 
                variant="none" 
                title="System Default" 
                ariaLabel="Switch to System Default" 
                onClick={() => { setTheme('system'); closeMenu(); }} 
                className={theme === 'system' ? 'active' : ''}
              >
               <Monitor size={16} aria-hidden="true" />
             </Button>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
