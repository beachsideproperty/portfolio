import React from 'react';
import Link from 'next/link';
import ContainerBlock from '../components/ContainerBlock';
import Image from 'next/image';
import Depop from '../images/depop.png';

export default function About() {
  return (
    <ContainerBlock
      title="lisa k's secret garden"
      description='sweet portfolio website'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-4'>
        <div className='aspect-w-16 aspect-h-9 overflow-hidden'>
          <video autoPlay loop muted className='w-full h-full'>
            <source src='/actin_video.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='mr-4'>
          <h1 className='font-synthetique text-3xl font-bold mb-4'>about me</h1>
          <p className='mb-4'>
            I made the decision to transition from molecular biology to coding
            last year. My background in research has given me an interest in,
            and foundation for, software engineering--I love the thrill of
            dissecting new problems, exploring the space where functionality
            meets design, and am eager to join a team where I can apply these
            skills in a way that brings forth positive change and joy.
          </p>
          {/* <p className='mb-4'>
            Tech stack: Javascript, PostgreSQL, Express, React, Node,
            Redux, REST APIs, Next, Git, GitHub, Agile, HTML5/CSS, MUI,
            Tailwind, and more!
          </p> */}
          <p className='mb-4'>
            <i>
              On the left: a geometric actin structure I imaged at Nathan
              Shaner's lab in July 2022.
            </i>
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-4'>
        <div className='aspect-w-16 aspect-h-9 overflow-hidden'>
          <Image src={Depop} alt='Depop' className='w-full h-full' />
        </div>
        <div className='mr-4'>
          <h1 className='font-synthetique text-3xl font-bold mb-4'>
            work experience
          </h1>
          <p className='mb-4'>
            My past work includes being a multi-functional researcher and
            purchaser at a biotech startup a molecular biology researcher at a
            UCSD lab, an undergraduate researcher and lab technician, Mojave
            desert field worker, and various other jobs in fashion and the
            service industry.
          </p>
          <p className='mb-4'>
            My all time favorite hobby is thrifting. There are few things more
            thrilling to me than finding old treasures and giving them a new
            life!
          </p>
          <p className='mb-4'>
            <i>
              On the left: a small collection of vintage pieces I've parted with
              over the years.
            </i>
          </p>
        </div>
      </div>
    </ContainerBlock>
  );
}
