//create a type for children
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex flex-row h-full'>
        <div id='sidebar' className='w-48	hidden md:block bg-gray-600'>
          <Sidebar />
        </div>
        <div className='grow bg-gray-200 p-6'>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
