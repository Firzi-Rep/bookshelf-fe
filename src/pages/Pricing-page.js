import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function PricingPage() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section className='pt-24 pb-32 bg-black overflow-hidden'>
        <div className='container mx-auto px-4'>
          <div className='mb-20 max-w-xl mx-auto'>
            <h2 className='mb-5 font-heading font-bold text-6xl sm:text-7xl text-white text-center'>
              Pricing &amp; Plans
            </h2>
            <p className='text-gray-400 text-base text-center'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className='flex flex-wrap -m-3'>
            <div className='w-full md:w-1/2 xl:w-1/4 p-3'>
              <div className='h-full py-9 px-7 text-center bg-gray-900 rounded-10'>
                <h3 className='mb-8 font-heading text-xs text-white font-bold uppercase tracking-px'>
                  Basic
                </h3>
                <p className='mb-3 font-heading font-bold text-6xl sm:text-7xl text-white'>
                  $29
                </p>
                <p className='mb-8 text-gray-400'>per month</p>
                <p className='mb-11 text-lg text-white'>
                  Book up to 10 meetings with your clients per month
                </p>
                <button className='mb-4 font-heading font-semibold py-4 px-10 text-xs uppercase text-white tracking-px border border-gray-500 hover:border-gray-600 rounded-md'>
                  Try 14 Days free trial
                </button>
                <p className='text-sm text-gray-500'>No credit card required</p>
              </div>
            </div>
            <div className='w-full md:w-1/2 xl:w-1/4 p-3'>
              <div className='h-full py-9 px-7 text-center bg-gray-900 rounded-10'>
                <h3 className='mb-8 font-heading text-xs text-white font-bold uppercase tracking-px'>
                  Standard
                </h3>
                <p className='mb-3 font-heading font-bold text-6xl sm:text-7xl text-white'>
                  $59
                </p>
                <p className='mb-8 text-gray-400'>per month</p>
                <p className='mb-11 text-lg text-white'>
                  Book up to 50 meetings with your clients per month
                </p>
                <button className='mb-4 font-heading font-semibold py-4 px-10 text-xs uppercase text-white tracking-px border border-gray-500 hover:border-gray-600 rounded-md'>
                  Try 14 Days free trial
                </button>
                <p className='text-sm text-gray-500'>No credit card required</p>
              </div>
            </div>
            <div className='w-full md:w-1/2 xl:w-1/4 p-3'>
              <div className='relative h-full py-9 px-7 text-center bg-gray-900 overflow-hidden rounded-10'>
                <img
                  className='absolute top-0 left-0 w-full'
                  src='gradia-assets/elements/pricing/radial2.svg'
                  alt=''
                />
                <div className='relative z-10'>
                  <h3 className='mb-8 font-heading text-xs text-white font-bold uppercase tracking-px'>
                    Pro
                  </h3>
                  <p className='mb-3 font-heading font-bold text-6xl sm:text-7xl text-white'>
                    $99
                  </p>
                  <p className='mb-8 text-gray-400'>per month</p>
                  <p className='mb-11 text-lg text-white'>
                    Book up to 100 meetings with your clients per month
                  </p>
                  <button className='group relative p-px mb-8 font-heading block w-full text-base text-gray-900 font-bold bg-gradient-cyan overflow-hidden rounded-md'>
                    <div className='absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full transition ease-in-out duration-500 bg-gradient-cyan' />
                    <div className='py-4 px-7 bg-gray-900 rounded-md'>
                      <p className='relative z-10 font-heading text-white text-xs tracking-px uppercase'>
                        Try 14 Days free trial
                      </p>
                    </div>
                  </button>
                  <p className='text-sm text-gray-500'>
                    No credit card required
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 xl:w-1/4 p-3'>
              <div className='h-full py-9 px-7 text-center bg-gray-900 rounded-10'>
                <h3 className='mb-8 font-heading text-xs text-white font-bold uppercase tracking-px'>
                  Enterprise
                </h3>
                <p className='mb-3 font-heading font-bold text-6xl sm:text-7xl text-white'>
                  $199
                </p>
                <p className='mb-8 text-gray-400'>per month</p>
                <p className='mb-11 text-lg text-white'>
                  Book up to 200 meetings with your clients per month
                </p>
                <button className='mb-4 font-heading font-semibold py-4 px-10 text-xs uppercase text-white tracking-px border border-gray-500 hover:border-gray-600 rounded-md'>
                  Try 14 Days free trial
                </button>
                <p className='text-sm text-gray-500'>No credit card required</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

