import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ContactPage() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='overflow-hidden'>
          <div className='px-8 py-5 lg:py-8 bg-gray-900'>
            <div className='container mx-auto'>
              <div className='flex items-center justify-between'>
                <div className='w-auto'>
                  <div className='flex flex-wrap items-center'>
                    <div className='w-auto mr-14'>
                      <a href='#'>
                        <img
                          src='gradia-assets/logos/gradia-name-white.svg'
                          alt=''
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='w-auto'>
                  <div className='flex flex-wrap items-center'>
                    <div className='w-auto hidden lg:block'>
                      <ul className='flex items-center mr-10'>
                        <li className='font-heading mr-9 text-white hover:text-gray-200 text-lg'>
                          <a href='#'>Features</a>
                        </li>
                        <li className='font-heading mr-9 text-white hover:text-gray-200 text-lg'>
                          <a href='#'>Solutions</a>
                        </li>
                        <li className='font-heading mr-9 text-white hover:text-gray-200 text-lg'>
                          <a href='#'>Resources</a>
                        </li>
                        <li className='font-heading text-white hover:text-gray-200 text-lg'>
                          <a href='#'>Pricing</a>
                        </li>
                      </ul>
                    </div>
                    <div className='w-auto lg:hidden'>
                      <a href='#'>
                        <svg
                          className='navbar-burger text-gray-800'
                          width={51}
                          height={51}
                          viewBox='0 0 56 56'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            width={56}
                            height={56}
                            rx={28}
                            fill='currentColor'
                          />
                          <path
                            d='M37 32H19M37 24H19'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-80' />
            <nav className='relative z-10 px-9 py-8 bg-gray-900 h-full'>
              <div className='flex flex-wrap justify-between h-full'>
                <div className='w-full'>
                  <div className='flex items-center justify-between -m-2'>
                    <div className='w-auto p-2'>
                      <a className='inline-block' href='#'>
                        <img
                          src='gradia-assets/logos/gradia-name-white.svg'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='w-auto p-2'>
                      <a className='navbar-burger' href='#'>
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6 18L18 6M6 6L18 18'
                            stroke='#ffffff'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col items-center text-center justify-center py-8 w-full'>
                  <ul>
                    <li className='mb-12'>
                      <a
                        className='font-heading font-medium text-lg text-white hover:text-gray-200'
                        href='#'
                      >
                        Features
                      </a>
                    </li>
                    <li className='mb-12'>
                      <a
                        className='font-heading font-medium text-lg text-white hover:text-gray-200'
                        href='#'
                      >
                        Solutions
                      </a>
                    </li>
                    <li className='mb-12'>
                      <a
                        className='font-heading font-medium text-lg text-white hover:text-gray-200'
                        href='#'
                      >
                        Resources
                      </a>
                    </li>
                    <li>
                      <a
                        className='font-heading font-medium text-lg text-white hover:text-gray-200'
                        href='#'
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='flex flex-col justify-end w-full'>
                  <div className='flex flex-wrap'>
                    <div className='w-full mb-3'>
                      <button className='p-0.5 font-heading block w-full text-lg text-white font-medium rounded-10'>
                        <div className='py-2 px-5 rounded-10'>
                          <p>Login</p>
                        </div>
                      </button>
                    </div>
                    <div className='w-full'>
                      <button className='group relative p-0.5 font-heading block w-full text-lg text-white font-medium bg-gradient-cyan overflow-hidden rounded-10'>
                        <div className='absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500' />
                        <div className='py-2 px-5 bg-gray-900 rounded-lg'>
                          <p className='relative z-10'>Start Free Trial</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <section className='pt-24 pb-32 bg-black overflow-hidden'>
          <div className='container mx-auto px-4'>
            <div className='max-w-lg mx-auto text-center mb-14'>
              <h2 className='mb-5 font-heading font-semibold text-6xl sm:text-7xl text-white'>
                Get in touch
              </h2>
              <p className='text-gray-400 text-lg'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.
              </p>
            </div>
            <div className='flex flex-wrap max-w-xl mx-auto -m-2.5'>
              <div className='w-full p-2.5'>
                <input
                  className='w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 rounded'
                  type='text'
                  placeholder='Your full name'
                />
              </div>
              <div className='w-full p-2.5'>
                <input
                  className='w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 rounded'
                  type='text'
                  placeholder='Your email address'
                />
              </div>
              <div className='w-full p-2.5'>
                <textarea
                  className='w-full h-40 px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 resize-none rounded'
                  type='text'
                  placeholder='Write message'
                  defaultValue={''}
                />
              </div>
              <div className='w-full p-2.5'>
                <div className='group relative'>
                  <div className='absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300' />
                  <button className='p-1 w-full font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded-md'>
                    <div className='relative p-5 px-11 bg-gradient-green overflow-hidden rounded-md'>
                      <div className='absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500' />
                      <p className='relative z-10'>Send message</p>
                    </div>
                  </button>
                </div>
              </div>
              <div className='w-full p-2.5'>
                <p className='text-sm text-gray-500 text-center'>
                  <span>By clicking the send button, you agree with our</span>
                  <a
                    className='pb-1 hover:text-gray-400 border-b border-gray-500'
                    href='#'
                  >
                    Terms &amp; Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='relative pt-24 pb-36 bg-black overflow-hidden'>
          <img
            className='absolute right-0 top-0'
            src='gradia-assets/elements/teams/radial.svg'
            alt=''
          />
          <div className='relative z-10 container mx-auto px-4'>
            <div className='max-w-xl'>
              <h2 className='mb-6 font-heading font-bold text-6xl sm:text-7xl text-white'>
                Team Members
              </h2>
              <p className='mb-20 text-lg text-gray-400'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className='flex flex-wrap -m-3'>
              <div className='w-full md:w-1/2 xl:w-1/4 p-3'>
                <div className='p-10 text-center transform hover:-translate-y-3 bg-white transition ease-out duration-1000'>
                  <img
                    className='mb-7 mx-auto'
                    src='gradia-assets/images/teams/avatar-oval-md.png'
                    alt=''
                  />
                  <h3 className='mb-1 font-bold text-gray-900 text-xl'>
                    Eleanor Pena
                  </h3>
                  <p className='pb-8 text-sm text-gray-500 border-b border-gray-200'>
                    Team Leader
                  </p>
                  <a
                    className='inline-block pt-8 font-heading font-semibold text-xs uppercase text-gray-900 hover:text-gray-700'
                    href='#'
                  >
                    Contact us
                  </a>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/4 p-3'>
                <div className='p-10 text-center transform hover:-translate-y-3 bg-white transition ease-out duration-1000'>
                  <img
                    className='mb-7 mx-auto'
                    src='gradia-assets/images/teams/avatar-oval-md2.png'
                    alt=''
                  />
                  <h3 className='mb-1 font-bold text-gray-900 text-xl'>
                    Cameron Williamson
                  </h3>
                  <p className='pb-8 text-sm text-gray-500 border-b border-gray-200'>
                    Software Developer
                  </p>
                  <a
                    className='inline-block pt-8 font-heading font-semibold text-xs uppercase text-gray-900 hover:text-gray-700'
                    href='#'
                  >
                    Contact us
                  </a>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/4 p-3'>
                <div className='p-10 text-center transform hover:-translate-y-3 bg-white transition ease-out duration-1000'>
                  <img
                    className='mb-7 mx-auto'
                    src='gradia-assets/images/teams/avatar-oval-md3.png'
                    alt=''
                  />
                  <h3 className='mb-1 font-bold text-gray-900 text-xl'>
                    Kathryn Murphy
                  </h3>
                  <p className='pb-8 text-sm text-gray-500 border-b border-gray-200'>
                    Scrum Master
                  </p>
                  <a
                    className='inline-block pt-8 font-heading font-semibold text-xs uppercase text-gray-900 hover:text-gray-700'
                    href='#'
                  >
                    Contact us
                  </a>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/4 p-3'>
                <div className='p-10 text-center transform hover:-translate-y-3 bg-white transition ease-out duration-1000'>
                  <img
                    className='mb-7 mx-auto'
                    src='gradia-assets/images/teams/avatar-oval-md4.png'
                    alt=''
                  />
                  <h3 className='mb-1 font-bold text-gray-900 text-xl'>
                    Bessie Cooper
                  </h3>
                  <p className='pb-8 text-sm text-gray-500 border-b border-gray-200'>
                    UI/UX Designer
                  </p>
                  <a
                    className='inline-block pt-8 font-heading font-semibold text-xs uppercase text-gray-900 hover:text-gray-700'
                    href='#'
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-16 bg-black overflow-hidden'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap lg:items-center -m-6'>
              <div className='w-full md:w-auto p-6'>
                <img src='gradia-assets/logos/gradia-name-white.svg' alt='' />
              </div>
              <div className='w-full md:w-1/2 p-6'>
                <ul className='flex flex-wrap -m-5'>
                  <li className='p-5'>
                    <a
                      className='font-heading text-base text-white hover:text-gray-200'
                      href='#'
                    >
                      Features
                    </a>
                  </li>
                  <li className='p-5'>
                    <a
                      className='font-heading text-base text-white hover:text-gray-200'
                      href='#'
                    >
                      Pricing
                    </a>
                  </li>
                  <li className='p-5'>
                    <a
                      className='font-heading text-base text-white hover:text-gray-200'
                      href='#'
                    >
                      Affiliate Program
                    </a>
                  </li>
                  <li className='p-5'>
                    <a
                      className='font-heading text-base text-white hover:text-gray-200'
                      href='#'
                    >
                      Press Kit
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-auto md:ml-auto p-6'>
                <div className='flex flex-wrap items-center -m-1.5'>
                  <div className='w-auto p-1.5'>
                    <svg
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z'
                        stroke='white'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <div className='w-auto p-1.5'>
                    <h3 className='font-heading font-medium text-base text-white'>
                      info@gradia.com
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='py-9'>
              <div className='border-b border-gray-800' />
            </div>
            <div className='flex flex-wrap items-center justify-between -m-6'>
              <div className='w-auto p-6'>
                <p className='text-sm text-gray-300'>
                  © Copyright 2022. All Rights Reserved by Gradia.
                </p>
              </div>
              <div className='w-auto p-6'>
                <div className='flex flex-wrap -m-6'>
                  <div className='w-auto p-6'>
                    <a
                      className='text-gray-300 hover:text-gray-400 text-sm'
                      href='#'
                    >
                      Privacy Policy
                    </a>
                  </div>
                  <div className='w-auto p-6'>
                    <a
                      className='text-gray-300 hover:text-gray-400 text-sm'
                      href='#'
                    >
                      Terms &amp; Conditions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

