import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from 'flowbite-react';

import HeaderProfile from './HeaderProfile';

const Header = () => {
  return (
    <Navbar fluid={true} className='fixed w-full'>
      <Link href='/' className='flex'>
        <Image src='/images/logo.png' alt='Portfolio Lab Logo' width={42} height={42} />
        <span className='self-center ml-1 whitespace-nowrap text-xl font-semibold dark:text-white'>
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
