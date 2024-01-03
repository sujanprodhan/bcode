import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './intro.css';

interface IntroProps {
    width?: 'fullwidth' | 'halfwidth';
    layout?: 'left' | 'right'
}

export const Intro = ({
    width,
    layout,
    ...props
}: IntroProps) => {
    return (
        <div className='intro container flex relative justify-between'>
            <div className='w-2/5 mx-30 py-20 px-20'>
                <h1 className="space-x-10 mt-20 text-3xl  text-bold"> Introducing FundedNext Stellar Challenge 🙌 </h1>
                <ul className='my-5'>
                    <li>  No Time Limit </li>
                    <li>  Balance Based Drawdown </li>
                    <li>  15% Profit Share from Challenge Phase </li>
                </ul>
                <Link href="#" className="h-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Learn More
                </Link>

            </div>
            <div className='w-2/5 space-x-10 mx-40 my-10 relative'>
            <Image
                src="https://placehold.co/500x500"
                alt="Intro Image"
                layout="fill"
                objectFit="cover"
                className="rounded-md w-full h-full"              
            />
            </div>
      </div>
    );
};
