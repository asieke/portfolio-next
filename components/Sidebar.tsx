import Link from 'next/link';
import { useRouter } from 'next/router';

import { FaHome, FaLock, FaAddressCard, FaChartLine } from 'react-icons/fa';

//create types for hred, icon, and name
type ListItemProps = {
  href: string;
  icon: React.ComponentType;
  name: string;
};

const ListItem = ({ href, icon: Icon, name }: ListItemProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  console.log(router.pathname, href);

  return (
    <li className='mb-2'>
      <Link
        href={href}
        className='flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-600'
      >
        <Icon />
        <span className='ml-2 text-gray-200 text-sm font-normal'>{name}</span>
      </Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className='h-full px-3 py-4 overflow-y-auto'>
      <ul className='space-y-2'>
        <ListItem href='/' icon={FaChartLine} name='Home' />
        <ListItem href='/about' icon={FaHome} name='About' />
        <ListItem href='/about/contact' icon={FaAddressCard} name='Contact' />
        <ListItem href='/about/privacy' icon={FaLock} name='Privacy' />
      </ul>
    </div>
  );
};

export default Sidebar;
