import Dropdown from './Dropdown';

const Header = () => {
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
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default Header;
