import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Httpresponse() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section
        className='pt-20 pb-64 bg-black overflow-hidden'
        style={{
          backgroundImage: 'url("gradia-assets/images/http-codes/bg.png")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <div className='container mx-auto px-4'>
          <img
            className='mb-44'
            src='gradia-assets/logos/gradia-name-white.svg'
            alt=''
          />
          <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 md:ml-auto'>
              <div className='md:max-w-lg'>
                <h2 className='mb-8 max-w-max font-heading font-bold text-9xl sm:text-11xl xl:text-13xl text-white'>
                  404 Error
                </h2>
                <p className='mb-11 text-gray-200 text-xl'>
                  The page you are looking for is not found! Try something else
                  or go back to homepage.
                </p>
                <div className='flex flex-wrap -m-2.5'>
                  <div className='w-full lg:w-auto p-2'>
                    <div className='p-px bg-gradient-cyan rounded-lg'>
                      <button className='group relative font-heading py-5 px-6 block w-full text-xs text-white font-semibold uppercase tracking-px bg-gray-900 overflow-hidden rounded-lg'>
                        <div className='absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-cyan' />
                        <p className='relative z-10'>Go back to Homepage</p>
                      </button>
                    </div>
                  </div>
                  <div className='w-full lg:w-auto p-2'>
                    <button className='font-heading py-5 px-6 block w-full text-xs text-white font-semibold uppercase tracking-px border border-gray-700 hover:border-gray-800 rounded-lg'>
                      Try searching
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

