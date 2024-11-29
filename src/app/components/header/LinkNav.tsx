import React, { ReactNode } from 'react';
import {Link} from 'react-scroll';
import clsx from 'clsx';

interface LinkProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    to: string;
    smooth?: boolean;
    duration?: number;
    offset?: number;
}


const LinkNav = ({className , children, onClick, to}: LinkProps) => {
    return (

                <Link
                to={to}
                smooth={true}
                duration={700}
                offset={-100}
                onClick={onClick ? onClick : undefined}
                className= {clsx(`
                    text-lt dark:text-primary hover:text-li dark:hover:text-impact 
                    cursor-pointer`
                    ,className)}
                >
                    {children}
                </Link>
    )
}

export default LinkNav;