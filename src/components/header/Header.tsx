import React from 'react';
import './header.css';

interface HeaderProps {
    width?: 'fullwidth' | 'halfwidth';
}

/**
 * Primary UI component for user interaction
 */
export const Header = ({
    width,
    ...props
}: HeaderProps) => {
    const mode = width === 'fullwidth' ? 'fullwidth' : 'halfwidth';
    return (
        <header className="bg-gray-800 text-white p-4 header">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Your Header Content</h1>
          {/* Add more header content as needed */}
        </div>
      </header>
    );
};
