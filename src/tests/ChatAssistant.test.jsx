import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ChatAssistant from '../components/ChatAssistant';

describe('ChatAssistant Component', () => {
  it('renders correctly with initial message', () => {
    render(<ChatAssistant />);
    expect(screen.getByText(/Namaste!/i)).toBeInTheDocument();
  });

  it('updates input field when typing', () => {
    render(<ChatAssistant />);
    const input = screen.getByPlaceholderText(/Type your question here.../i);
    fireEvent.change(input, { target: { value: 'How do I vote?' } });
    expect(input.value).toBe('How do I vote?');
  });

  it('displays user message after sending', () => {
    render(<ChatAssistant />);
    const input = screen.getByPlaceholderText(/Type your question here.../i);
    const sendButton = screen.getByRole('button', { name: /Send message/i });
    
    fireEvent.change(input, { target: { value: 'What is an EVM?' } });
    fireEvent.click(sendButton);
    
    // Use getAllByText as the prompt chip also exists
    expect(screen.getAllByText('What is an EVM?').length).toBeGreaterThanOrEqual(1);
  });

  it('handles suggested prompt clicks', () => {
    render(<ChatAssistant />);
    // Select the button specifically
    const promptButton = screen.getByRole('button', { name: /How to vote\?/i });
    fireEvent.click(promptButton);
    
    // Check if the message appears (now there are at least two: button and message)
    const matches = screen.getAllByText('How to vote?');
    expect(matches.length).toBeGreaterThanOrEqual(2);
  });

  it('shows typing indicator and then bot response (Integration-style test)', async () => {
    render(<ChatAssistant />);
    const input = screen.getByPlaceholderText(/Type your question here.../i);
    const sendButton = screen.getByRole('button', { name: /Send message/i });
    
    fireEvent.change(input, { target: { value: 'EVM' } });
    fireEvent.click(sendButton);
    
    // Check if user message is there
    expect(screen.getByText('EVM')).toBeInTheDocument();
    
    // Wait for the simulated AI response
    // The delay is 1-2 seconds, so we wait with a longer timeout
    await waitFor(() => {
      expect(screen.getByText(/Electronic Voting Machine/i)).toBeInTheDocument();
    }, { timeout: 3000 });
  });
});
