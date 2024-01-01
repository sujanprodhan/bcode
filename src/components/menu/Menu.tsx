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
    const mode = 'storybook-button--primary';
    return (
        <div className="container bg-black-800 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">               
                <nav className="space-x-4">
                    <Link href="/" className="text-white">
                        Home
                    </Link>
                    <Link href="/about" className="text-white">
                        About
                    </Link>
                    <Link href="/about" className="text-white">
                        Service
                    </Link>
                    <Link href="/about" className="text-white">
                        Be a partner
                    </Link>
                    <Link href="/about" className="text-white">
                        More
                    </Link>

                </nav>
            </div>
        </div>
    );
};
