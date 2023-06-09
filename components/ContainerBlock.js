import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: 'Lisa Kraisriwatana - Developer, Thrifter, Poet',
    description: `I'm a current developer and former molecular biology researcher. Let's connect!`,
    type: 'website',
    ...customMeta,
  };

  return (
    <div className='flex flex-col flex-grow'>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Lisa Kraisriwatana' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <main className='bg-pink-100 dark:bg-gray-800 w-full'>
        <Navbar />
        <div className='flex-grow'>{children}</div>
        {/* <Footer /> */}
      </main>
    </div>
  );
}
