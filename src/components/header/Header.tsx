import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './header.css';
import { Menu } from '../menu/Menu';

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
    return (
        <footer className="container header mx-auto w-full w-100 px-10">
            <Menu />
            <div className='flex justify-between'>
                <div className='w-2/5 relative justify-content' >
                    <h1 className='space-x-10 mt-20 pt-20 text-4xl text-white text-bold'> Empowering Trades with Our Capital 🔥</h1>
                    <p className='space-x-10  my-5 text-lg text-white'> Global Reach, Local Support: Funding Your Trading Dreams Up to $300,000</p>
                    <Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Get up to $300,000 funds 🙌
                    </Link>
                </div>
                <div className='w-2/5 space-x-10 mx-10 my-10 relative'>
                    <Image
                        src="https://placehold.co/400x500"
                        alt="Intro Image"
                        className="rounded-md object-cover img-responsive"
                        height={500}
                        width={400}
                    />
                </div>
            </div>
        </footer>
    );
};
