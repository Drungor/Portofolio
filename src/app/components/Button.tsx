import clsx from 'clsx';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    noLeftMargin?: boolean;
}


const Button: React.FC<ButtonProps> = ({children, className,noLeftMargin, ...props}) => {
    return (
        <button 
            className= {clsx(`
                m-2
                px-2
                py-1
                hover:text-li
                dark:hover:text-impact
                `,
                noLeftMargin ? 'ml-0 pl-0' : 'ml-2 pl-2',
                className)}
            {...props}
        >{children}
        </button>
    );
}

export default Button;