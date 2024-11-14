"use client";
import { Link } from 'react-scroll';
import LinkNav from './LinkNav';
import { useState } from 'react';

const Header = () => {
    const [logoLanguage, setLogoLanguage] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenuOnCellphone = () => { setIsMenuOpen(false) };


    return (
        <header className="flex flex-row justify-between items-center mt-6">
            <div
            className='relative w-60 h-10 overflow-hidden text-center'
            onMouseEnter={() => setLogoLanguage(true)}
            onMouseLeave={() => setLogoLanguage(false)}
            >
                <div
                className={`absolute inset-0 flex items-center justify-left transition-all duration-500 ${
                    logoLanguage ? "translate-y-0 opacity-100" : "-translate-y-full opacity-40"
                  }`}
                >
                    <span className="block">Leopold Antoine Maitre </span>
                </div>
                <div
               className={`absolute inset-0 flex items-center justify-left transition-all duration-500 ${
                logoLanguage ? "translate-y-full opacity-40" : "-translate-y-0 opacity-100"
              }`}
                >
                    <span className="block">メタ　レオポルド　アントワネ</span>
            </div>
            </div>

           {/* mobile view */}
            <button
                className="md:hidden flex items-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>

            {/* dekstop view*/}
            <nav className="hidden md:flex">
                <ul className="flex flex-row gap-6">
                    <LinkNav  to="projects">プロジェクト</LinkNav>
                    <LinkNav  to="resume">経歴</LinkNav>
                    <LinkNav  to="contact">コンタクト</LinkNav>
                </ul>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="md:hidden absolute top-16 left-0 w-full bg-transparent">
                    <ul className="flex flex-col items-end gap-4 p-4">
                        <LinkNav 
                        onClick={closeMenuOnCellphone}
                        to="projects">
                            プロジェクト
                        </LinkNav>
                        <LinkNav 
                        onClick={closeMenuOnCellphone}
                        to="resume">
                            経歴
                        </LinkNav>
                        <LinkNav 
                        onClick={closeMenuOnCellphone}
                        to="contact">
                            コンタクト
                        </LinkNav>
                    </ul>
                </nav>
            )}
        </header>
    );
};


export default Header;