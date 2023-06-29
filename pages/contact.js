import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSpring, animated } from '@react-spring/web';
import ContainerBlock from '../components/ContainerBlock';

export default function Home() {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_02vcnwr',
        'template_r21o1bq',
        form.current,
        'auZSvVtLcGKIzVFYC'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const styling =
    'w-full block mb-4 bg-light-gray-100 text-kelly-green dark:bg-dark-gray-800 dark:text-hot-pink rounded-lg shadow-md py-2 px-4 mb-4';

  return (
    <ContainerBlock
      title="lisa k's secret garden"
      description='sweet portfolio website'
    >
      <animated.div style={fade} className='flex flex-col items-center gap-4'>
        <h1 className='font-synthetique text-3xl font-bold mb-4 mt-6'>
          contact me
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <input
            className={styling}
            type='text'
            placeholder='Full Name'
            name='user_name'
            required
          />
          <input
            className={styling}
            type='email'
            placeholder='Email'
            name='user_email'
            required
          />
          <input
            className={styling}
            type='text'
            placeholder='Subject'
            name='subject'
            required
          />
          <textarea
            className={styling}
            name='message'
            cols='50'
            rows='10'
          ></textarea>
          <button className='bg-light-gray-100 text-kelly-green dark:bg-dark-gray-800 dark:text-hot-pink py-2 px-4 self-center shadow-md rounded-lg mb-6 '>
            Submit
          </button>
        </form>
      </animated.div>
    </ContainerBlock>
  );
}
