import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Toggle from './Toggle';
import Image from 'next/image';
import IconMini from '../images/iconmini.png';

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);

  return (
    <nav className='font-synthetique nav-text bg-light-gray-100 text-kelly-green dark:bg-dark-gray-800 dark:text-hot-pink py-4 px-8 flex justify-between items-center shadow-md'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image src={IconMini} alt='iconmini' width={30} height={30} />
        </Link>
        <span className='font-bold'>lisa kraisriwatana</span>
      </div>
      <div className='flex items-center space-x-4'>
        <Link
          href='/about'
          className='text-gray-500 hover:text-kelly-green dark:text-gray-300 dark:hover:text-hot-pink'
        >
          About
        </Link>
        <Link
          href='/projects'
          className='text-gray-500 hover:text-kelly-green dark:text-gray-300 dark:hover:text-hot-pink'
        >
          Projects
        </Link>
        <Link
          href='/contact'
          className='text-gray-500 hover:text-kelly-green dark:text-gray-300 dark:hover:text-hot-pink'
        >
          Contact
        </Link>
        <Toggle />
      </div>
    </nav>
  );
}
