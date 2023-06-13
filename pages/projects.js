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
      <div className='flex items-center'>
        <div className='mr-4'>
          <Image src={Pathfinder} alt='pathfinder' width={400} />
        </div>
        <div>
          <h1 className='text-3xl font-bold mb-4'>Pathfinder</h1>
          <p className='mb-4'>
            A user-friendly travel itinerary site that mimics the experience of
            being taken around the city by a local expert.
          </p>
          <p className='mb-4'>
            Contributions: UX/UI, user routes, MyTrips page
          </p>
          <p className='mb-4'>Technologies: Google API, MUI, PERN stack, JWT</p>
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
      <div className='flex items-center'>
        <div className='mr-4'>
          <Image src={Progression} alt='progression' width={400} />
        </div>
        <div>
          <h1 className='text-3xl font-bold mb-4'>Progression of Chords</h1>
          <p className='mb-4'>
            A productivity/wellness space for daily mood tracking, meditation,
            and relaxation.
          </p>
          <p className='mb-4'>
            Contributions: mood calendar, meditation timer, Pixi game
          </p>
          <p className='mb-4'>
            Technologies: React Calendar, Material UI, PERN stack, JWT
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
      <div className='flex items-center'>
        <div className='mr-4'>
          <Image src={GraceShopper} alt='graceshopper' width={400} />
        </div>
        <div>
          <h1 className='text-3xl font-bold mb-4'>Grace Shopper</h1>
          <p className='mb-4'>
            An e-commerce, four person team project that made heavy use of
            Git/GitHub and Agile methodologies.
          </p>
          <p className='mb-4'>
            Contributions: user routes, admin experience, CSS
          </p>
          <p className='mb-4'>
            Technologies: Stripe payments, PERN stack, vanilla CSS, JWT
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
