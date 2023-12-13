import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import SideBar from './SideBar';

// Mocking the useSelector hook
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('SideBar component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders SideBar when isMenuOpen is true', () => {
    // Mocking useSelector to return true for isMenuOpen
    useSelector.mockReturnValue(true);

    render(<SideBar />);

    // Assert that SideBar is rendered when isMenuOpen is true
    expect(screen.queryByText('Subscriptions')).toBeInTheDocument();
    expect(screen.queryByText('Explore')).toBeInTheDocument();
  });

  test('Does not render SideBar when isMenuOpen is false', () => {
    // Mocking useSelector to return false for isMenuOpen
    useSelector.mockReturnValue(false);

    render(<SideBar />);

    // Assert that SideBar is not rendered when isMenuOpen is false
    expect(screen.queryByText('Subscriptions')).not.toBeInTheDocument();
    expect(screen.queryByText('Explore')).not.toBeInTheDocument();
  });
});