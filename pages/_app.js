import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='light' attribute='class'>
      <div className='flex flex-col min-h-screen bg-pink-50 dark:bg-dark-gray-800'>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
