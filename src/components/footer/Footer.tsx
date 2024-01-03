
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './footer.css';
import { Menu } from '../menu/Menu';

interface FooterProps {
    width?: 'fullwidth' | 'halfwidth';
}

export const Footer = ({
    width,
    ...props
}: FooterProps) => {

    return (
        <header className="container footer mx-auto w-full w-full  py-20">
            <div className='flex px-20 py-5 items-center justify-between border-b border-gray-600'>
                <div className='w-2/4 w-50'>
                    <h1 className='space-x-10  text-3xl text-white text-bold'> Join the Global Community for the Traders ✌️</h1>
                </div>
                <div className='w-1/4'>
                    <Link href="/about" className="h-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Join our discord
                    </Link>
                </div>
            </div>
            <div className='flex px-20 py-5  justify-between border-b border-gray-600'>
                <div className='w-1/4'>
                    <p className='text-white'> Empowering global traders with unrivalled financial support. Navigate markets confidently with our innovative funding models and expert guidance.</p>
                    <ul className="flex items-center justify-center space-x-4 py-5 flex-start">
                        <li>
                            <a href="#" className="text-white hover:text-gray-500">
                                <svg
                                    className={`w-6 h-6 `}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13 22V12h3l.786-4H13V6.144C13 5.088 13.308 4 15.92 4H18V.673A24.117 24.117 0 0015.124 0C11.1 0 9 3.594 9 6.82V8H5v4h4v10h4z"
                                        fill="#1877f2"
                                    />
                                </svg>

                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-500">
                                <svg
                                    className={`w-6 h-6`}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M22 5.67c-.67.3-1.39.5-2.17.588.78-.47 1.38-1.22 1.66-2.11-.73.43-1.54.74-2.39.91-.68-.73-1.65-1.18-2.71-1.18-2.05 0-3.71 1.66-3.71 3.71 0 .29.03.57.08.84-3.09-.16-5.82-1.65-7.66-3.91-.32.54-.5 1.17-.5 1.85 0 1.29.65 2.43 1.64 3.1-.6 0-1.16-.18-1.65-.48v.05c0 1.8 1.28 3.3 2.97 3.64-.31.08-.64.13-.98.13-.24 0-.48-.02-.71-.05.48 1.49 1.87 2.57 3.53 2.6-1.29 1.06-2.91 1.7-4.66 1.7-.3 0-.59-.02-.89-.05 1.66 1.06 3.63 1.68 5.75 1.68 6.89 0 10.65-5.7 10.65-10.65 0-.16 0-.32-.01-.47.73-.53 1.36-1.2 1.86-1.95z"
                                    />
                                </svg>

                            </a>
                        </li>

                    </ul>
                </div>
                <div className='w-1/4'>
                    <ul className="space-x-4 px-4">
                        <li className='py-2'>
                            <Link href="/" className="text-white hover:text-gray-500 font-bold">
                            Important Link
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link href="/about"  className="text-white hover:text-gray-500">
                            Overview
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link href="/important-link" className="text-white hover:text-gray-500">
                            Affiliate Partner
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link href="/important-link" className="text-white hover:text-gray-500">
                            Payment Partner
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link href="/important-link" className="text-white hover:text-gray-500">
                            Success Stories
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='w-1/4'>
                <ul className="space-x-4 px-4">
                        <li className='py-2'>
                            <Link href="/" className="text-white hover:text-gray-500 font-bold">
                            Models
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link href="/about"  className="text-white hover:text-gray-500">
                            Express
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link href="/important-link" className="text-white hover:text-gray-500">
                            Evaluation 
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link href="/important-link" className="text-white hover:text-gray-500">
                            Stellar Challenge
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className='w-1/4'>
                <ul className="space-x-4 px-4">
                        <li className='py-2'>
                            <Link href="/" className="text-white hover:text-gray-500 font-bold">
                            Contact Information
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link href="/about"  className="text-white hover:text-gray-500">
                            info@wearenext.com
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link href="/important-link" className="text-white hover:text-gray-500">
                            +986 8989 899
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link href="/important-link" className="text-white hover:text-gray-500">
                            +986 8989 899
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>

            <div className="flex justify-between px-20 pt-10">
                <p className='text-white'> © copy 2023 alll rights reserved. </p>
                <div> </div>
                <div className='text-white mx-10 px-5'> 
                    <Link href="#"> Cookie </Link>
                    <Link href="#"> Privacy Policy </Link>
                    <Link href="#"> Terms & Conditions </Link>
                </div>
                </div>
        </header>
    );
};
