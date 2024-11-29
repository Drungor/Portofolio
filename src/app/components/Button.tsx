import clsx from 'clsx';
import { motion, MotionProps } from 'motion/react';
import React from 'react';

type ButtonHTMLAttributesWithoutMotionProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'>;

interface ButtonProps extends Omit<ButtonHTMLAttributesWithoutMotionProps, 'style'>, Omit<MotionProps, 'style'> {
    style?: React.CSSProperties | MotionProps['style'];
    children: React.ReactNode;
    className?: string;
    noLeftMargin?: boolean;
    whileTap?: { scale: number };
}

const Button: React.FC<ButtonProps> = ({ whileTap, children, className, noLeftMargin, ...props }) => {
    return (
        <motion.button
            whileTap={whileTap || { scale: 0.95 }}
            className={clsx(`
                m-2
                px-2
                py-1
                hover:text-li
                dark:hover:text-impact
                `,
                noLeftMargin ? 'ml-0 pl-0' : 'ml-2 pl-2',
                className)}
            {...(props as MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {children}
        </motion.button>
    );
}

export default Button;