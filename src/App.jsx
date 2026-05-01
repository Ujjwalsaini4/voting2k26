import { useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { loginAnonymously } from './utils/firebase';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load feature components
const Home = lazy(() => import('./components/features/Home'));
const ChatAssistant = lazy(() => import('./components/features/ChatAssistant'));
const Timeline = lazy(() => import('./components/features/Timeline'));
const VotingGuide = lazy(() => import('./components/features/VotingGuide'));
const FAQ = lazy(() => import('./components/features/FAQ'));

function App() {
  useEffect(() => {
    // Automatically sign in anonymously when the app starts
    loginAnonymously().catch(err => console.error("Failed to sign in anonymously", err));
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <main id="main-content" className="main-content container animate-fade-in">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<ChatAssistant />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/guide" element={<VotingGuide />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
