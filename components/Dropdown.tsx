import { useState } from 'react';
/* Header Component */
import Image from 'next/image';
import Link from 'next/link';

import { FaHome, FaLock, FaAddressCard, FaChartLine } from 'react-icons/fa';

//create types for hred, icon, and name
type ListItemProps = {
  href: string;
  icon: React.ComponentType;
  name: string;
};

const ListItem = ({ href, icon: Icon, name }: ListItemProps) => {
  return (
    <li className='list-item'>
      <Link
        href={href}
        className='flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-600'
      >
        <Icon />
        <span className='ml-2'>{name}</span>
      </Link>
    </li>
  );
};

const Dropdown = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className='action text-white'>
      {/* when user hovers or clicks on this then toggle the showMenu state */}
      <div className='profile' onClick={() => setShowMenu(!showMenu)}>
        <Image src='/images/profile.png' width={128} height={128} alt='profile' />
      </div>

      <div className={'bg-gray-700 menu' + (showMenu ? ' active' : '')}>
        <div className='bg-gray-700 absolute h-[20px] w-[20px] top-[-5px] right-[28px] rotate-45' />

        <ul onClick={() => setShowMenu(false)}>
          <ListItem href='/' icon={FaChartLine} name='Home' />
          <ListItem href='/about' icon={FaHome} name='About' />
          <ListItem href='/about/contact' icon={FaAddressCard} name='Contact' />
          <ListItem href='/about/privacy' icon={FaLock} name='Privacy' />
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
