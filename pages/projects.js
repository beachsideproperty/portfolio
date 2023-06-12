import React from 'react';
import ContainerBlock from '../components/ContainerBlock';
import Link from 'next/link';
import Image from 'next/image';
import Pathfinder from '../images/pathfinder.png';

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
          <p className='mb-4'>Technologies: MUI, PERN stack, and Google API</p>
          <p className='mb-4'>
            Contributions: UX/UI, user routes, MyTrips page
          </p>
          <p>
            Visit the:{' '}
            <Link href='https://travelapp-xiri.onrender.com/'>Live Site</Link>
            <Link href='https://github.com/FSA-Capstone-Pitfall/TravelApp'>
              Github
            </Link>
          </p>
        </div>
      </div>
    </ContainerBlock>
  );
}
