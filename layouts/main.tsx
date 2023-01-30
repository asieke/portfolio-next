//create a type for children
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
  if (pathname.includes('privacy') || pathname.includes('signin') || pathname.includes('terms')) {
    showSidebar = false;
  }

  return (
    <div className='flex flex-col bg-gray-200 dark'>
      <Header />
      <div className='flex flex-row mt-[60px]'>
        {showSidebar && (
          <div id='sidebar' className='w-48 bg-gray-700 flex-none'>
            <Sidebar />
          </div>
        )}
        <div className='grow bg-gray-200 p-6' style={{ minHeight: 'calc(100vh - 120px)' }}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
