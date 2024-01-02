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
        <footer className="container header mx-auto w-full w-100 px-10">
            <Menu />
            <div className='flex'>
                <div className='w-3/4 pt-20' >
                    <h1 className='space-x-10 my-5 text-4xl text-white text-bold'> Empowering Trades with Our Capital 🔥</h1>
                    <p className='space-x-10  my-5 text-lg text-white'> Global Reach, Local Support: Funding Your Trading Dreams Up to $300,000</p>
                    <Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"> 
                    Get up to $300,000 funds 🙌
                </Link>
                </div>  
                <div className='w-1/4 space-x-10 mx-40 my-10 relative'>
                    <Image
                        src="/public/person.png"
                        alt="Person Image"
                        // layout="fill"
                        // objectFit="cover"
                        height={400}
                        width={250}
                        style={{border:'1px solid white', borderRadius: '10px'}}
                    />
                </div>  
            </div>      
      </footer>
    );
};
