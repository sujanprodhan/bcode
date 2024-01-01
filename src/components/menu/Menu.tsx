import React from 'react';
import Link from 'next/link';

import './menu.module.css';

interface MenuProps {
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Menu = ({
    ...props
}: MenuProps) => {
    const mode =  'storybook-button--primary';
    return (
        <div className="container bg-black-800 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                    <Link href="/">Your Logo</Link>
                </h1>
                <button className="bg-indigo-500 ...">
  Save changes
</button>
                <nav className="space-x-4">
                    <Link href="/" className="text-white">
                       Home
                    </Link>
                    <Link href="/about" className="text-white">
                    About
                    </Link>
                    <div className="relative group">
                        <button className="text-white">Dropdown</button>
                        <div className="absolute hidden bg-gray-800 text-white p-2 space-y-2">
                            <Link href="/dropdown-item1">
                              ropdown Item 1
                            </Link>
                            <Link href="/dropdown-item2">
                                Dropdown Item 2
                            </Link>
                            {/* Add more dropdown items as needed */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};
