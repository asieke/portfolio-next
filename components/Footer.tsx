import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2023{' '}
        <Link href='/' className='hover:underline'>
          Portfolio Lab™
        </Link>
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
        <li>
          <Link href='/about/terms' className='mr-4 hover:underline md:mr-6 '>
            Terms of Service
          </Link>
        </li>
        <li>
          <Link href='/about/privacy' className='mr-4 hover:underline md:mr-6'>
            Privacy Policy
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
