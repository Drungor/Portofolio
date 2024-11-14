import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    id?: string;
    onClick?: () => void;
    className?: string;
}

const Button = ({children, id, onClick, className}: ButtonProps) => {

    return (
            <li >
                <button
                onClick={onClick ? onClick : undefined}
                id={id? id : undefined}
                className={className ? className : "text-white hover:text-impact"}
                >
                    {children}
                </button>
            </li>
    )
}

export default Button;