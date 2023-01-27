import { useState } from 'react';

/* Header Component */
import Image from 'next/image';
import Link from 'next/link';

import { FcBusinessContact } from 'react-icons/fc';
import { FcAbout } from 'react-icons/fc';
import { CgLogOut } from 'react-icons/cg';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  return (
    <nav className='fixed top-0 bg-slate-800 h-16 w-full z-50'>
      {/* create two sections, one justified left and one justified right */}
      <div className='flex justify-between'>
        {/* left section */}
        <div className='flex space-x-4'>
          {/* logo */}
          <h1>Portfolio Labs</h1>
        </div>
        {/* right section */}
        <div className='flex space-x-4'>
          <div className='action'>
            {/* when user hovers or clicks on this then toggle the showMenu state */}
            <div className='profile' onClick={() => setShowMenu(!showMenu)}>
              <Image src='/images/profile.png' width={128} height={128} alt='profile' />
            </div>
            <div className={'menu' + (showMenu ? ' active' : '')}>
              <ul onClick={() => setShowMenu(false)}>
                <li className='list-item'>
                  <Link href='/about'>
                    <FcAbout /> About
                  </Link>
                </li>
                <li className='list-item'>
                  <Link href='/about/contact'>
                    <FcBusinessContact />
                    Contact
                  </Link>
                </li>
                <li className='list-item'>
                  <Link href='/'>
                    <CgLogOut />
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
