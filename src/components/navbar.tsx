'use client';
import { useEffect, useState, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import menuItems from '../../public/menuItems.json';
import Container from '@/components/container';
import Image from 'next/image';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setAtTop(currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className={`fixed top-0 w-full transition-all duration-500 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}  z-50`}>
      <nav className={`font-roboto bg-[#FD7317] ${atTop ? 'opacity-100' : 'opacity-80'}`}>
        <Container>
          <div className='flex max-w-screen-xl flex-wrap items-center justify-between py-4'>
            <div className='flex items-center'>
              <div className=''>
                <Image src='/whiteSuit.png' alt='Logo SerenityLink' width={246} height={99} className='p2 mr-3 h-8 w-auto md:h-10' />
              </div>
            </div>
            <button
              onClick={toggleNavbar}
              type='button'
              className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  md:hidden'
              aria-controls='navbar-default'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg className='h-5 w-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
              </svg>
            </button>
            <div className={`w-full md:block md:w-auto ${isNavbarOpen ? 'block' : 'hidden'} z-10`} id='navbar-default'>
              <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-transparent p-4 font-medium  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 '>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>
                      <div className={`px-1 py-2 ${pathname === item.href ? 'border-b-2 border-white' : ''}`}>
                        <span className={`block rounded font-medium capitalize text-white transition duration-300 md:border-0 md:p-0 ${pathname === item.href ? 'border border-b-2 border-blue-500 font-semibold' : ''}`}>{item.name}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
