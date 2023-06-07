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

  return (
    <label
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label='Toggle Dark Mode'
    >
      <input
        type='checkbox'
        value=''
        className={`sr-only peer
                    ${
                      theme === 'dark'
                        ? 'dark:peer-checked:bg-hot-pink'
                        : 'peer-checked:bg-kelly-green'
                    }`}
      />
      <div
        className={`w-9 h-5 bg-light-gray-100 dark:bg-dark-gray-700
                    peer-focus:outline-none
                    peer-focus:ring-4
                    peer-focus:ring-kelly-green dark:peer-focus:ring-hot-pink
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
