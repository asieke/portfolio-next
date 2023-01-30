import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const [modal, setModal] = useState(0);
  const { data: session } = useSession();

  return (
    <div>
      <h1 className='text-xl font-semibold'>Main Dashboard</h1>
      <pre className='whitespace-pre-wrap'>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
    </div>
  );
}
