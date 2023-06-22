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
      <div className='flex items-center'>
        <div className='mr-4'>
          <Image src={Hi} alt='Hi' />
        </div>
        <div>
          <h1 className='font-synthetique text-3xl font-bold mb-4'>
            welcome 🌿
          </h1>
          <h1>Hi, I'm Lisa Kraisriwatana!</h1>
          <div>
            I'm a developer with a background in molecular biology research.
          </div>
          <div>
            Actively seeking opportunities to apply a mix of creative and
            critical thinking 🧚{' '}
          </div>
          <div></div>
          <div className='mt-4'>
            Let's connect on{' '}
            <Link
              href='https://www.linkedin.com/in/lisakraisriwatana/'
              className='text-hot-pink dark:text-kelly-green hover:text-kelly-green dark:text-gray-300 dark:hover:text-hot-pink'
            >
              LinkedIn
            </Link>
          </div>
          <div className='mt-4'>
            Check out my{' '}
            <Link
              href='https://github.com/beachsideproperty'
              className='text-hot-pink dark:text-kelly-green hover:text-kelly-green dark:text-gray-300 dark:hover:text-hot-pink'
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
}
