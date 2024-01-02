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
    const mode = width === 'fullwidth' ? 'fullwidth' : 'halfwidth';
    return (
        <header className="container header mx-auto w-full w-100">
            <Menu />
            <div className='flex'>
                <div className='w-3/4 ' >
                    <h1 className='space-x-10 mx-20 my-5'> Empowering Trades with Our Capital 🔥</h1>
                    <p className='space-x-10 mx-20 my-5'> Global Reach, Local Support: Funding Your Trading Dreams Up to $300,000</p>
                    <Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-20"> 
                    Get up to $300,000 funds 🙌
                </Link>
                </div>  
                <div className='w-1/4 space-x-10 mx-20 my-10 relative w-full h-64'>
                    <Image
                        src="/person.png"
                        alt="Person Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>  
            </div>      
      </header>
    );
};
