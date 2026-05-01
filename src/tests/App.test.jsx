import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Component and Navigation', () => {
  it('renders the App and shows the landing page', () => {
    render(<App />);
    expect(screen.getByText(/Learn How Elections Work in India/i)).toBeInTheDocument();
  });

  it('navigates to the Assistant page when clicking the Assistant link', async () => {
    render(<App />);
    
    // Find the link in the navigation menu
    const navLinks = screen.getAllByText(/Assistant/i);
    fireEvent.click(navLinks[0]);
    
    // Check if ChatAssistant header is visible
    expect(screen.getByRole('heading', { name: /Election Assistant/i })).toBeInTheDocument();
  });

  it('navigates to the Timeline page', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /^Timeline$/i });
    fireEvent.click(link);
    expect(screen.getByRole('heading', { name: /Election Timeline/i })).toBeInTheDocument();
  });

  it('navigates to the Guide page', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /^Guide$/i });
    fireEvent.click(link);
    expect(screen.getByRole('heading', { name: /How to Vote/i })).toBeInTheDocument();
  });

  it('navigates to the FAQ page', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /^FAQ$/i });
    fireEvent.click(link);
    expect(screen.getByRole('heading', { name: /Frequently Asked Questions/i })).toBeInTheDocument();
  });
});
