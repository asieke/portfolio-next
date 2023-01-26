import Link from 'next/link';
import { useRouter } from 'next/router';

//create types for hred, icon, and name
type ListItemProps = {
  href: string;
  icon: string;
  name: string;
};

const ListItem = ({ href, icon, name }: ListItemProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <li
      className={`relative py-2 px-4 ${
        isActive ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'
      }`}
    >
      <Link href={href}>
        <p className='flex items-center'>
          <span className={`${icon} mr-3`}></span>
          <span className={`${isActive ? 'text-white' : 'text-gray-800'}`}>{name}</span>
        </p>
      </Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <ul className='flex flex-col'>
      <ListItem href='/' icon='fas fa-home' name='Home' />
      <ListItem href='/about/' icon='fas fa-info-circle' name='About' />
      <ListItem href='/about/contact' icon='fas fa-envelope' name='Contact' />
    </ul>
  );
};

export default Sidebar;
