import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-pink-50 text-kelly-green dark:bg-dark-gray-800 p-4 dark:text-hot-pink border-t-2 border-pink-300 dark:border-hot-pink text-center'>
      <div>© {new Date().getFullYear()}.</div>
    </footer>
  );
}
