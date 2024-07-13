/* eslint-disable max-len */

import React from "react";
const Header = () => {

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between py-4 lg:px-4" aria-label="Global">
                <div className="flex lg:flex-1">
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <span className="text-sm font-semibold leading-6 text-gray-900">HOME</span>
                    <span className="text-sm font-semibold leading-6 text-gray-900">ABOUT</span>
                    <span className="text-sm font-semibold leading-6 text-gray-900">CONTACT US</span>

                </div>

            </nav>

        </header>
    );
};

export default Header;