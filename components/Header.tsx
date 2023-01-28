import Image from 'next/image';
import Link from 'next/link';

import { Navbar, Dropdown, Avatar } from 'flowbite-react';

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
      <div className='flex md:order-2'>
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar alt='User settings' img='/images/profile.png' bordered={true} rounded={true} />
          }
        >
          <Dropdown.Header>
            <span className='block text-sm'>Bonnie Green</span>
            <span className='block truncate text-sm font-medium'>name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link href='/' className='text-white hover:text-gray-400'>
          Home
        </Link>
        <Link href='/about' className='text-white hover:text-gray-400'>
          About
        </Link>
        <Link href='/about/privacy' className='text-white hover:text-gray-400'>
          Privacy
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

/*        <div className='flex space-x-4'>
          <Dropdown />
        </div> */
