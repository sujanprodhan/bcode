import React from 'react';
import './homepage.css';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Intro } from '../intro/Intro';

export const HomePage = () => {
    return (
        <div className='homepage container'>
            <Header />
            <Intro />
            <Footer />
        </div>
    );
};
