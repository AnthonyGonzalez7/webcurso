import Link from "next/link";
import React, { FC }  from "react";
import Image from 'next/image'

export const Nav:FC = () =>{
    return(

            
        <nav className="px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/" className="flex items-center">
                <img src='/images/logo.png' className="mr-3 h-6 sm:h-9" alt="Logo Automoviles" />
                </Link>
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                        <Link href="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
                </li>
                <li>
                        <Link href="/carros" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Autos</Link>
                </li>
                </ul>
        </div>
        </nav>

    );
};