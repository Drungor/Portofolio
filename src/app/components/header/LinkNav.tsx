import React, { ReactNode } from 'react';
import {Link} from 'react-scroll';

interface LinkProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    to: string;
}

const LinkNav = ({children, onClick, className, to}: LinkProps) => {

    return (
            <li >
                <Link
                to={to}
                onClick={onClick ? onClick : undefined}
                className={className ? className : "text-white hover:text-impact"}
                >
                    {children}
                </Link>
            </li>
    )
}

export default LinkNav;