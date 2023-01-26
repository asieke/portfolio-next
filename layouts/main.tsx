//create a type for children
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
  //console.log the current path using next.js pattern

  const router = useRouter();
  const { pathname } = router;

  let showSidebar = true;
  //if pathname contains privacy then do not show sidebar
  if (pathname.includes('privacy')) {
    showSidebar = false;
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-row h-full'>
        {showSidebar && (
          <div id='sidebar' className='w-48	hidden md:block bg-gray-600'>
            <Sidebar />
          </div>
        )}
        <div className='grow bg-gray-200 p-6'>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
