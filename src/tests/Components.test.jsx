import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Timeline from '../components/Timeline';
import FAQ from '../components/FAQ';

describe('Timeline Component', () => {
  it('renders all election phases', () => {
    render(<Timeline />);
    expect(screen.getByRole('heading', { name: /Election Timeline/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Announcement/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Nomination/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Campaigning/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Voting Day/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Counting/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Results & Government Formation/i })).toBeInTheDocument();
  });
});

describe('FAQ Component', () => {
  it('renders FAQ questions', () => {
    render(<FAQ />);
    expect(screen.getByText(/What is an EVM\?/i)).toBeInTheDocument();
    expect(screen.getByText(/What is VVPAT\?/i)).toBeInTheDocument();
  });

  it('toggles answer visibility when clicking a question', () => {
    render(<FAQ />);
    const question = screen.getByText(/What is an EVM\?/i);
    
    // Answer should not be visible initially (not in the DOM or hidden)
    // In our implementation, it's conditionally rendered: {openId === faq.id && ...}
    expect(screen.queryByText(/Electronic Voting Machine/i)).not.toBeInTheDocument();
    
    // Click to open
    fireEvent.click(question);
    expect(screen.getByText(/Electronic Voting Machine/i)).toBeInTheDocument();
    
    // Click to close
    fireEvent.click(question);
    expect(screen.queryByText(/Electronic Voting Machine/i)).not.toBeInTheDocument();
  });
});
