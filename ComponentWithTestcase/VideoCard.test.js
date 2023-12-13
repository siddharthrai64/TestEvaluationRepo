import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard';

describe('VideoCard component', () => {
  const mockData = {
    snippet: {
      channelTitle: 'Channel Title',
      title: 'Video Title',
      thumbnails: {
        medium: {
          url: 'https://example.com/image.jpg',
        },
      },
    },
    statistics: {
      viewCount: 1000,
    },
  };

  test('Renders VideoCard component with correct information', () => {
    render(<VideoCard info={mockData} />);

    // Check if elements with specific text content exist
    expect(screen.getByText('Video Title')).toBeInTheDocument();
    expect(screen.getByText('Channel Title')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();

    const imageElement = screen.getByAltText('video');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toBe('https://example.com/image.jpg');
  });

  test('Does not render VideoCard component if info is missing', () => {
    const { container } = render(<VideoCard info={{}} />);

    expect(container.firstChild).toBeNull();
  });
});