import React from 'react';
import Link from 'next/link';
import ContainerBlock from '../components/ContainerBlock';
import Image from 'next/image';
import Hi from '../images/hi.png';

export default function Home() {
  return (
    <ContainerBlock
      title="lisa k's secret garden"
      description='sweet portfolio website'
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-4'>
        <div className='aspect-w-16 aspect-h-9 overflow-hidden'>
          <Image src={Hi} alt='Hi' />
        </div>
        <div className='mb-4 mt-4'>
          <h1 className='font-synthetique text-3xl font-bold mb-4'>
            welcome 🌿
          </h1>
          <p>Hi, I'm Lisa Kraisriwatana--you can call me Lisa K!</p>
          <p>
            I'm a developer with a background in molecular biology research.
          </p>
          <p>
            Actively pursuing roles where I can apply a mix of creative and
            critical thinking 🧚
          </p>
          <p className='mt-4'>
            Let's connect on{' '}
            <Link
              href='https://www.linkedin.com/in/lisakraisriwatana/'
              className='text-hot-pink dark:text-kelly-green hover:text-kelly-green dark:text-gray-300 dark:hover:text-hot-pink'
            >
              LinkedIn
            </Link>
          </p>
          <p className='mt-4'>
            Check out my{' '}
            <Link
              href='https://github.com/beachsideproperty'
              className='text-hot-pink dark:text-kelly-green hover:text-kelly-green dark:text-gray-300 dark:hover:text-hot-pink'
            >
              GitHub
            </Link>
          </p>
        </div>
      </div>
    </ContainerBlock>
  );
}
