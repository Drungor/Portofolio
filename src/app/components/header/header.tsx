"use client";

import LinkNav from './LinkNav';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import LightSwitchButton from './LightSwitchButton';

const Header = () => {
    const [logoLanguage, setLogoLanguage] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenuOnCellphone = () => {
        setIsMenuOpen(false);
    };
    
    const {theme, setTheme} = useTheme();

    return (
        <header className="flex flex-row items-center justify-between mt-8 mb-12 md:mb-16">
            {/* Mobile Menu Button */}
            <button
                className="md:hidden flex items-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="size-6">
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>

            {/* Logo */}
            <div
                className="relative w-60 h-10 overflow-hidden text-center sm:text-left ml-auto md:ml-0"
                onMouseEnter={() => setLogoLanguage(true)}
                onMouseLeave={() => setLogoLanguage(false)}
            >
                <div
                    className={`absolute inset-0 flex items-center ${
                        logoLanguage ? "translate-y-0 opacity-100" : "-translate-y-full opacity-40"
                    } transition-transform duration-500`}
                >
                    <span className="block">Leopold Antoine Maitre</span>
                </div>
                <div
                    className={`absolute inset-0 flex items-center ${
                        logoLanguage ? "translate-y-full opacity-40" : "-translate-y-0 opacity-100"
                    } transition-transform duration-500`}
                >
                    <span className="block">メタ　レオポルド　アントワネ</span>
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex ml-auto">
                <ul className="flex flex-row gap-6">
                    <LinkNav to="projects">プロジェクト</LinkNav>
                    <LinkNav to="contact">コンタクト</LinkNav>
                    <LightSwitchButton/>
                </ul>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="md:hidden absolute top-24 left-5 w-1/3 backdrop-blur-sm dabg-black/5 border border-li dark:border-impact">
                    <ul className="flex flex-col items-start gap-4 p-4">
                        < LightSwitchButton/>
                    
                        <LinkNav onClick={closeMenuOnCellphone} to="projects">
                            プロジェクト
                        </LinkNav>
                        <LinkNav onClick={closeMenuOnCellphone} to="contact">
                            コンタクト
                        </LinkNav>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;