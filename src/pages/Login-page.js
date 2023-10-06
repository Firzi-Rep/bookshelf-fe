import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function LoginPage() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section className="relative pt-16 pb-36 bg-gradient-gray2 overflow-hidden">
        <img
          className="absolute top-0 transform left-1/2 -translate-x-1/2"
          src="gradia-assets/elements/sign-up/radial2.svg"
          alt=""
        />
        <div className="relative z-10 container mx-auto px-4">
          <img
            className="mx-auto mb-40"
            src="gradia-assets/logos/gradia-name-black.svg"
            alt=""
          />
          <div className="flex flex-wrap -m-6">
            <div className="w-full p-6">
              <div className="md:max-w-xl text-center mx-auto">
                <h2 className="mb-4 font-heading font-bold text-gray-900 text-6xl sm:text-7xl">
                  Login to get access
                </h2>
                <p className="mb-11 text-lg text-gray-500">
                  Lorem ipsum dolor sit ame.
                </p>
                <div className="flex flex-wrap max-w-md mx-auto -m-2 mb-5">
                  <div className="w-full p-2">
                    <input
                      className="w-full px-5 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-indigo-500 border border-gray-200 rounded-lg"
                      type="text"
                      placeholder="Email address"
                      name="email"
                    />
                  </div>
                  <div className="w-full p-2">
                    <input
                      className="w-full px-5 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-indigo-500 border border-gray-200 rounded-lg"
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <div className="w-full p-2">
                    <div className="group relative">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-blue opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300" />
                      <button className="p-1 w-full font-heading font-medium text-base text-white overflow-hidden rounded-md">
                        <div className="relative py-4 px-9 bg-gradient-blue overflow-hidden rounded-md">
                          <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gray-900 transition ease-in-out duration-500" />
                          <p className="relative z-10">Sign In</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-base text-gray-600">
                  <span>Don’t have an account?</span>
                  <a
                    className="text-gray-900 hover:text-gray-700"
                    href="registerpage"
                  >
                    Create free account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
