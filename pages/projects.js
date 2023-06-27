import React from 'react';
import ContainerBlock from '../components/ContainerBlock';
import Link from 'next/link';
import Image from 'next/image';
import Pathfinder from '../images/pathfinder.png';
import Progression from '../images/progression.png';
import GraceShopper from '../images/graceshopper.png';

export default function Projects() {
  return (
    <ContainerBlock
      title="lisa k's secret garden"
      description='sweet portfolio website'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-4'>
        <div className='aspect-w-16 aspect-h-9 overflow-hidden'>
          <Image src={Pathfinder} alt='pathfinder' />
        </div>
        <div>
          <h1 className='font-synthetique text-4xl font-bold mb-4'>
            Pathfinder
          </h1>
          <p className='mb-4'>
            A user-friendly travel itinerary site that mimics the experience of
            being taken around the city by a local expert.
          </p>
          <p className='mb-4'>
            Contributions: UX/UI design, user routes, MyTrips functionality
          </p>
          <p className='mb-4'>
            Technologies: Google API, Material UI, JWT, PERN stack
          </p>
          <p>
            Visit the:{' '}
            <Link
              href='https://github.com/FSA-Capstone-Pitfall/TravelApp'
              className='text-hot-pink dark:text-kelly-green hover:text-kelly-green dark:hover:text-hot-pink'
            >
              Github
            </Link>
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-4'>
        <div className='aspect-w-16 aspect-h-9 overflow-hidden'>
          <Image src={Progression} alt='progression' />
        </div>
        <div>
          <h1 className='font-synthetique text-4xl font-bold mb-4'>
            Progression of Chords
          </h1>
          <p className='mb-4'>
            A productivity/wellness space for daily mood tracking, meditation,
            and relaxation.
          </p>
          <p className='mb-4'>
            Contributions: mood calendar, meditation timer, all other
            functionality
          </p>
          <p className='mb-4'>
            Technologies: React Calendar, Material UI, JWT, PERN stack
          </p>
          <p>
            Visit the:{' '}
            <Link
              href='https://github.com/beachsideproperty/progression-of-chords'
              className='text-hot-pink dark:text-kelly-green hover:text-kelly-green dark:hover:text-hot-pink'
            >
              Github
            </Link>
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-4'>
        <div className='aspect-w-16 aspect-h-9 overflow-hidden'>
          <Image src={GraceShopper} alt='graceshopper' />
        </div>
        <div>
          <h1 className='font-synthetique text-4xl font-bold mb-4'>
            Grace Shopper
          </h1>
          <p className='mb-4'>
            An e-commerce team project with three groupmates that made heavy use
            of Git, GitHub and Agile methodologies.
          </p>
          <p className='mb-4'>
            Contributions: admin dashboard, admin/user routes, site design
          </p>
          <p className='mb-4'>
            Technologies: Stripe payments, PERN stack, JWT, CSS
          </p>
          <p>
            Visit the:{' '}
            <Link
              href='https://github.com/Grace-Shopper-2212/Grace-Shopper'
              className='text-hot-pink dark:text-kelly-green hover:text-kelly-green dark:hover:text-hot-pink'
            >
              Github
            </Link>
          </p>
        </div>
      </div>
    </ContainerBlock>
  );
}
