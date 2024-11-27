import React, { ReactNode } from 'react';
import {Link} from 'react-scroll';

interface LinkProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    to: string;
    smooth?: boolean;
    duration?: number;
    offset?: number;
}

const LinkNav = ({children, onClick, to}: LinkProps) => {
    return (
            <li >
                <Link
                to={to}
                smooth={true}
                duration={700}
                offset={-100}
                onClick={onClick ? onClick : undefined}
                className="text-lt dark:text-primary hover:text-li dark:hover:text-impact cursor-pointer"
                >
                    {children}
                </Link>
            </li>
    )
}

export default LinkNav;