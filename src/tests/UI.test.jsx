import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';

describe('UI Components', () => {
  it('Card renders children correctly', () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText('Test Content')).toBeDefined();
  });

  it('Button handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    screen.getByText('Click Me').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Button respects disabled state', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} disabled>Disabled</Button>);
    screen.getByText('Disabled').click();
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('SectionHeader renders title and subtitle', () => {
    render(<SectionHeader title="Main Title" subtitle="Sub Title" />);
    expect(screen.getByText('Main Title')).toBeDefined();
    expect(screen.getByText('Sub Title')).toBeDefined();
  });
});
