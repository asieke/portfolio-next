import React, { useState } from 'react';
import { Navbar, Dropdown, Avatar, Button } from 'flowbite-react';
import Link from 'next/link';

import { useSession, signIn, signOut } from 'next-auth/react';

import dynamic from 'next/dynamic';
const SignUpModal = dynamic(() => import('./modals/SignUpModal'), {
  ssr: false,
});
const SignInModal = dynamic(() => import('./modals/SignInModal'), {
  ssr: false,
});

const HeaderProfile = () => {
  const [modal, setModal] = useState(0);
  const { data: session } = useSession();

  console.log(session);
  return (
    <>
      <SignInModal
        show={modal === 1}
        onSignupClick={() => setModal(2)}
        onGoogleClick={() => signIn('google')}
        onClose={() => setModal(0)}
      />
      <SignUpModal
        show={modal === 2}
        onClose={() => setModal(0)}
        onGoogleClick={() => signIn('google')}
      />
      {session && session.user ? (
        <>
          <div className='flex md:order-2'>
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt='User settings'
                  img={session.user.image as string}
                  bordered={true}
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className='block text-sm'>{session.user.name}</span>
                <span className='block truncate text-sm font-medium'>{session.user.email}</span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
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
        </>
      ) : (
        <div className='flex flex-wrap gap-2'>
          <Button onClick={() => setModal(1)}>Sign in</Button>
          <Button onClick={() => setModal(2)}>Sign up</Button>
        </div>
      )}
    </>
  );
};

export default HeaderProfile;

/*

        */
