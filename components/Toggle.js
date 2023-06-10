import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function Toggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.dataset.theme = 'dark';
    } else {
      document.body.dataset.theme = 'light';
    }
  }, [theme]);

  if (!mounted) return null;

  return (
    <label aria-label='Toggle Dark Mode' className='relative'>
      <input
        type='checkbox'
        value=''
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={`sr-only peer
                    ${
                      theme === 'dark'
                        ? 'dark:peer-checked:bg-hot-pink'
                        : 'peer-checked:bg-kelly-green'
                    }`}
      />
      <div
        className={`w-9 h-5 bg-kelly-green dark:bg-dark-gray-700
                    peer-focus:outline-none
                    rounded-full
                    peer
                    peer-checked:after:translate-x-full
                    peer-checked:after:border-white
                    after:content-['']
                    after:absolute
                    after:top-[2px]
                    after:left-[2px]
                    after:bg-white
                    after:border-light-gray-300 dark:after:border-dark-gray-600
                    after:rounded-full
                    after:h-4
                    after:w-4
                    after:transition-all
                    ${
                      theme === 'dark'
                        ? 'dark:peer-checked:bg-hot-pink'
                        : 'peer-checked:bg-kelly-green'
                    }`}
      ></div>
    </label>
  );
}
