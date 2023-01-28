import dynamic from 'next/dynamic';

const DynamicSignin = dynamic(() => import('../components/Signin'), {
  ssr: false,
});
export default function Home() {
  return (
    <div>
      <h1 className='text-xl font-semibold'>Main Dashboard</h1>
      <DynamicSignin />
    </div>
  );
}
