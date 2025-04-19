import Link from "next/link";
import React from "react";

const Navbar = () =>{      
    return (
        <nav className="bg-gray-900 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-gray-200 text-2xl font-bold hover:text-white transition duration-300">
                    Bitlinks!
                </div>
                <ul className="flex items-center space-x-6">
                    <Link href="/" legacyBehavior>
                        <a className="text-gray-300 text-sm hover:text-white transition duration-300">Home</a>
                    </Link>
                    <Link href="/about" legacyBehavior>
                        <a className="text-gray-300 text-sm hover:text-white transition duration-300">About</a>
                    </Link>
                    <Link href="/shorten" legacyBehavior>
                        <a className="text-gray-300 text-sm hover:text-white transition duration-300">Generate</a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                        <a className="text-gray-300 text-sm hover:text-white transition duration-300">Contact</a>
                    </Link>
                    <li className="flex items-center gap-4">
                        <Link href="/shorten" legacyBehavior>
                            <button className="bg-gray-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 shadow-md">
                                Try Now
                            </button>
                        </Link>
                        <Link href="/github">
                            <button className="bg-gray-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 shadow-md">
                                GitHub
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
    }   
    export default Navbar;