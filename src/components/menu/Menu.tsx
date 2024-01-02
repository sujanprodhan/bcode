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
        <div className="flex justify-between space-x-4">
            <nav className="w-3/4 space-x-10 mx-20 my-10">
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
            <nav className="w-1/4 space-x-10 my-10">
                <Link href="/about" className="text-white">
                    Login
                </Link>
                <Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Join our discord
                </Link>
            </nav>
        </div>
    );
};
