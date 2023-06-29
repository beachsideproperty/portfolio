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

  const fade2 = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 });

  const fade3 = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 600 });

  const fade4 = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 900 });

  return (
    <ContainerBlock
      title="lisa k's secret garden"
      description='sweet portfolio website'
    >
      <animated.div
        style={fade}
        className='grid grid-cols-1 lg:grid-cols-2 items-center gap-4'
      >
        <div className='aspect-w-16 aspect-h-9 overflow-hidden'>
          <Image src={Hi} alt='Hi' />
        </div>
        <div className='mt-4'>
          <animated.h1
            style={fade2}
            className='font-synthetique text-3xl font-bold mb-2'
          >
            welcome 🌿
          </animated.h1>
          <animated.div style={fade3}>
            <p>
              Hi, I'm Lisa Kraisriwatana (but you can call me{' '}
              <span className='text-hot-pink dark:text-kelly-green'>
                Lisa K
              </span>
              )!
            </p>
            <p>
              I'm a developer with a background in molecular biology research 👩🏻‍🔬
            </p>
            <p>
              Actively pursuing roles that require a mix of creative and
              critical thinking 🧚
            </p>
          </animated.div>
          <animated.div style={fade4} className='flex mt-4 mb-8'>
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
          </animated.div>
        </div>
      </animated.div>
    </ContainerBlock>
  );
}
