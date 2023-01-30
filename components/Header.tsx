import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from 'flowbite-react';

import HeaderProfile from './HeaderProfile';

const Header = () => {
  return (
    <Navbar fluid={true} className='fixed w-full'>
      <Link href='/' className='flex'>
        <Image
          src='https://flowbite.com/docs/images/logo.svg'
          className='h-6 sm:h-9 mr-1'
          alt='Flowbite Logo'
          width={48}
          height={48}
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Portfolio Lab
        </span>
      </Link>
      <HeaderProfile />
    </Navbar>
  );
};

export default Header;

/*        <div className='flex space-x-4'>
          <Dropdown />
        </div> */
