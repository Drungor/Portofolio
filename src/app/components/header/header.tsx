"use client";

import LinkNav from './LinkNav';
import { useState, useEffect, useRef } from 'react';
import LightSwitchButton from './LightSwitchButton';
import { motion, AnimatePresence } from 'motion/react'



const Header = () => {
    const [logoLanguage, setLogoLanguage] = useState(false);
    const [Open, setOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null); // Create a ref for the mobile menu

    const closeMenuOnCellphone = () => {
        setOpen(false);
    };

    // Close menu when clicking outside

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <header className="flex flex-row items-center justify-between mt-1 md:mt-4 mb-12 md:mb-16">
            {/* Mobile Menu Button */}
            <motion.button
            whileTap={{ scale: 0.60 }}
            onClick={() => setOpen(!Open)}
            className="md:hidden flex items-center"
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
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                    />
                </svg>
            </motion.button>

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
                    <span className="block">Leopold Maitre</span>
                </div>
                <div
                    className={`absolute inset-0 flex items-center ${
                        logoLanguage ? "translate-y-full opacity-40" : "-translate-y-0 opacity-100"
                    } transition-transform duration-500`}
                >
                    <span className="block">メタ　レオポルド</span>
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex ml-auto">
                <ul className="flex flex-row gap-6">
                    <LinkNav to="projects">プロジェクト</LinkNav>
                    <LinkNav to="about">自己紹介</LinkNav>
                    <LightSwitchButton/>
                </ul>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
            {Open && (
                <motion.nav
                    key={1}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    exit={{ opacity: 0, y: -5 }}
                    ref={menuRef} // Attach ref to the mobile menu
                    className="md:hidden absolute top-24 left-5 w-auto backdrop-blur-sm dabg-black/5 border border-li300 dark:border-impact300 border-opacity-40 shadow-md"
                >
                        <motion.ul
                        className="flex flex-row items-start gap-4 p-4">
                            <motion.li>
                                <LightSwitchButton className="px-2" />
                            </motion.li>
                                <LinkNav className="px-2" onClick={closeMenuOnCellphone} to="projects">
                                    プロジェクト
                                </LinkNav>
                                <LinkNav className="px-2" onClick={closeMenuOnCellphone} to="about">
                                    自己紹介
                                </LinkNav>
                        </motion.ul>
                </motion.nav>
            )}
            </AnimatePresence>
        </header>
    );
};

export default Header;