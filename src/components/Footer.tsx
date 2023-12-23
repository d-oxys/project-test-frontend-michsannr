'use client';
import { Footer } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLocationArrow, FaMapMarkerAlt } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import Logo from '../../public/orangeSuit.png';

const CustomFooter = () => {
  return (
    <>
      <Footer container className='mx-auto w-full bg-transparent p-4 py-6 lg:py-8'>
        <div className='mt-10 w-full'>
          <div className='flex w-full flex-col space-y-7 md:flex-row md:space-x-8'>
            <Link href='/' className='relative flex flex-row items-center justify-center sm:justify-start'>
              <Image src={Logo} className='max-w-md' width={80} height={80} priority={true} alt='Flowbite Logo' />
            </Link>

            <div className='flex w-full flex-col space-y-7 md:flex-row md:justify-evenly md:space-y-0'>
              <div className='md:max-w-[200px]'>
                <h2 className='mb-6 flex items-center space-x-3 text-lg font-semibold text-gray-500'>
                  <FaMapMarkerAlt className='mr-2 text-xl' />
                  Lokasi Kami
                </h2>

                <Footer.LinkGroup>
                  <p className='leading-relaxed'>Jl. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi.</p>
                </Footer.LinkGroup>
              </div>

              <div>
                <h2 className='mb-6 flex items-center space-x-3 text-lg font-semibold text-gray-500'>
                  <GoMail className='mr-2 text-xl' />
                  Kontak Kami
                </h2>

                <Footer.LinkGroup col>
                  <p className='text-paragraph'>mochamadichsannr@gmail.com</p>

                  <p className='text-paragraph'>+62818118888</p>
                </Footer.LinkGroup>
              </div>

              <div>
                <h2 className='mb-6 flex items-center space-x-3 text-lg font-semibold text-gray-500'>
                  <FaLocationArrow className='mr-2 text-xl' />
                  Navigasi
                </h2>

                <Footer.LinkGroup col>
                  <li>
                    <Link href='/work' className='hover:text-primary-2 duration-500'>
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link href='/about' className='hover:text-primary-2 duration-500'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href='/services' className='hover:text-primary-2 duration-500'>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href='/ideas' className='hover:text-primary-2 duration-500'>
                      Ideas
                    </Link>
                  </li>
                  <li>
                    <Link href='/careers' className='hover:text-primary-2 duration-500'>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact' className='hover:text-primary-2 duration-500'>
                      Contact
                    </Link>
                  </li>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
        </div>
      </Footer>
      <hr className=' border-gray-200 sm:mx-auto dark:border-gray-700' />
      <div className='flex items-center justify-center p-4'>
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <a href='https://www.linkedin.com/in/michsannr/' className='hover:underline'>
            MochIchsannr™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </>
  );
};

export default CustomFooter;
