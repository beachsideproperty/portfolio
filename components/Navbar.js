import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Toggle from './Toggle';

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);

  return (
    <nav className='bg-light-gray-100 text-kelly-green dark:bg-dark-gray-800 dark:text-hot-pink py-4 px-8 flex justify-between items-center shadow-md'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <img
            src='https://e1.pngegg.com/pngimages/56/670/png-clipart-pixel-pink-pink-hello-kitty-art-thumbnail.png'
            alt='Logo'
            className='h-10 w-10'
          />
        </Link>
        <span className='text-lg text-gray-300 font-manrope'>lisa k.</span>
      </div>
      <div className='flex items-center space-x-4'>
        <Link
          href='/about'
          className='text-gray-300 hover:text-kelly-green dark:text-gray-300 dark:hover:text-hot-pink'
        >
          About
        </Link>
        <Link
          href='/projects'
          className='text-gray-300 hover:text-kelly-green dark:text-gray-300 dark:hover:text-hot-pink'
        >
          Projects
        </Link>
        <Link
          href='/contact'
          className='text-gray-300 hover:text-kelly-green dark:text-gray-300 dark:hover:text-hot-pink'
        >
          Contact
        </Link>
        <Toggle />
      </div>
    </nav>
  );
}
