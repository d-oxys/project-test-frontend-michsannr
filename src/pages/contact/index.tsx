import React from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

function contactme() {
  return (
    <div>
      <Navbar />
      <div className='relative inset-x-0 mt-24 bg-[#F7F7F7] '>
        <div className=' px-4 py-20 md:px-20'>
          <div className='animate__fadeIn animate__animated animate__delay-1s box-border rounded-3xl bg-white px-4 py-8 drop-shadow md:p-20'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center'>
                <div className='h-[0.15rem] w-16 bg-blue-600'></div>
                <div className='ml-4 text-2xl font-medium text-blue-600'>Say Hello</div>
              </div>
            </div>
            <h2 className='mt-4 text-4xl font-semibold leading-tight text-black md:text-[64px]'>
              Lets work
              <br /> together
            </h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12'>
              <div className='md:col-span-1'>
                <div className='flex flex-col gap-5'>
                  <p className='mt-8 text-black'>Have some project? or maybe just want to discuss your project, I help you as much as I can.</p>
                  <div className='flex items-center gap-2 transition duration-200 md:gap-4'>
                    <i className='fa-solid fa-envelope text-blue-600'></i>
                    <span className='text-sm text-black sm:text-base'>mochamadichsannr@gmail.com</span>
                  </div>
                  <div className='flex items-center gap-2 transition duration-200 md:gap-4'>
                    <i className='fa-solid fa-location-dot text-blue-600'></i>
                    <span className='text-sm text-black sm:text-base'>Kp.rancawaas kec. Majalaya, Kab. Bandung</span>
                  </div>
                  <div className='flex items-center gap-2 transition duration-200 md:gap-4'>
                    <i className='fa-solid fa-phone text-blue-600'></i>
                    <span className='text-sm text-black sm:text-base'>087710110434</span>
                  </div>
                </div>
              </div>
              <div className='md:col-span-1'>
                <div className='px-0 py-6 md:px-8'>
                  <form className='flex flex-col gap-6' action='#'>
                    <div className='flex w-full items-center rounded-xl bg-gray-100 px-6 py-3 md:max-w-md'>
                      <input className='focus: w-full bg-gray-100 text-black outline-0' type='name' placeholder='name' />
                      <i className='fa-regular fa-user text-black'></i>
                    </div>
                    <div className='flex w-full items-center rounded-xl bg-gray-100 px-6 py-3 md:max-w-md'>
                      <input className='focus: w-full bg-gray-100 text-black outline-0' type='email' placeholder='email' />
                      <i className='fa-regular fa-paper-plane text-black'></i>
                    </div>
                    <div className='flex w-full items-center rounded-xl bg-gray-100 px-6 py-3 md:max-w-md'>
                      <textarea className='focus: w-full bg-gray-100 text-black outline-0' rows={3} placeholder='message' name='message' />
                      <i className='fa-solid fa-message text-black'></i>
                    </div>
                    <button type='button' className='my-5 mb-2 mr-2 w-full rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 md:w-[170px] dark:bg-blue-600 dark:hover:bg-blue-700'>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-span-1 mt-4 flex justify-evenly md:col-span-2'>
              <a href='https://www.instagram.com/m.ichsannr/' target='_blank' className='flex items-center gap-4 rounded-xl px-3 py-3 text-slate-500 transition duration-200 ease-out hover:bg-blue-600 hover:text-white sm:px-8 sm:py-3'>
                <i className='fab fa-instagram fill-current'></i>
                <span className='hidden text-xl font-semibold transition duration-200 ease-out lg:block'>Instagram</span>
              </a>
              <a href='https://github.com/D-oxys' target='_blank' className='flex items-center gap-4 rounded-xl px-3 py-3 text-slate-500 transition duration-200 ease-out hover:bg-blue-600 hover:text-white sm:px-8 sm:py-3'>
                <i className='fa-brands fa-github fill-current'></i>
                <span className='hidden text-xl font-semibold transition duration-200 ease-out lg:block'>Github</span>
              </a>
              <a href='https://www.linkedin.com/in/michsannr/' target='_blank' className='flex items-center gap-4 rounded-xl px-3 py-3 text-slate-500 transition duration-200 ease-out hover:bg-blue-600 hover:text-white sm:px-8 sm:py-3'>
                <i className='fa-brands fa-linkedin fill-current'></i>
                <span className='hidden text-xl font-semibold transition duration-200 ease-out lg:block'>Linkedin</span>
              </a>
              <a href='https://www.facebook.com/sansan.squrepants/' target='_blank' className='flex items-center gap-4 rounded-xl px-3 py-3 text-slate-500 transition duration-200 ease-out hover:bg-blue-600 hover:text-white sm:px-8 sm:py-3'>
                <i className='fa-brands fa-facebook fill-current'></i>
                <span className='hidden text-xl font-semibold transition duration-200 ease-out lg:block'>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default contactme;
