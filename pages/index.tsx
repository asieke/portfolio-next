import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import dynamic from 'next/dynamic';

const DynamicSignin = dynamic(() => import('../components/Signin'), {
  ssr: false,
});
const DynamicSignup = dynamic(() => import('../components/Signup'), {
  ssr: false,
});

export default function Home() {
  const [modal, setModal] = useState(0);

  return (
    <div>
      <h1 className='text-xl font-semibold'>Main Dashboard</h1>
      <div className='flex flex-wrap gap-2'>
        <Button onClick={() => setModal(1)} color={'dark'}>
          Sign in
        </Button>
        <Button onClick={() => setModal(2)} color={'dark'}>
          Sign up
        </Button>
        <DynamicSignin
          show={modal === 1}
          onSignupClick={() => setModal(2)}
          onClose={() => setModal(0)}
        />
        <DynamicSignup show={modal === 2} onClose={() => setModal(0)} />
      </div>
    </div>
  );
}
