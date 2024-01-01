import React from 'react';
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
        <header className="container header flex flex-row">
            <div className='leftmenu'>
                <Menu />    
             </div>
            <div className='rightmenu'> </div>
      </header>
    );
};
