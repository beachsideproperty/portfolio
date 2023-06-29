import React from 'react';
import Link from 'next/link';
import { useSpring, animated } from '@react-spring/web';
import ContainerBlock from '../components/ContainerBlock';
import Image from 'next/image';
import Hi from '../images/hi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Home() {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  const slideIn = useSpring({
    from: { opacity: 0, marginLeft: -500 },
    to: { opacity: 1, marginLeft: 0 },
  });

  return (
    <ContainerBlock
      title="lisa k's secret garden"
      description='sweet portfolio website'
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-4'>
        <animated.div
          style={fade}
          className='aspect-w-16 aspect-h-9 overflow-hidden'
        >
          <Image src={Hi} alt='Hi' />
        </animated.div>
        <div className='mb-4 mt-4'>
          <animated.h1
            style={slideIn}
            className='font-synthetique text-3xl font-bold mb-4'
          >
            welcome 🌿
          </animated.h1>
          <p>
            Hi, I'm Lisa Kraisriwatana (but you can call me{' '}
            <span className='text-hot-pink dark:text-kelly-green'>Lisa K</span>
            )!
          </p>
          <p>
            I'm a developer with a background in molecular biology research.
          </p>
          <p>
            Actively pursuing roles where I can apply a mix of creative and
            critical thinking 🧚
          </p>
          <div className='flex mt-4 mb-4'>
            <Link
              href='https://www.linkedin.com/in/lisakraisriwatana/'
              className='text-hot-pink dark:text-kelly-green hover:text-kelly-green dark:text-gray-300 dark:hover:text-hot-pink'
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ height: '40px' }} />
            </Link>
            <Link
              href='https://github.com/beachsideproperty'
              className='text-hot-pink dark:text-kelly-green hover:text-kelly-green dark:text-gray-300 dark:hover:text-hot-pink ml-4'
            >
              <FontAwesomeIcon icon={faGithub} style={{ height: '40px' }} />
            </Link>
            <Link
              href='/contact'
              className='text-hot-pink dark:text-kelly-green hover:text-kelly-green dark:text-gray-300 dark:hover:text-hot-pink ml-4'
            >
              <FontAwesomeIcon icon={faEnvelope} style={{ height: '40px' }} />
            </Link>
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
}
