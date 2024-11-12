const Button = ({children,href, id}) => {
    return (
            <li>
            <a
            id={id}
            href={href} 
            className="">
                {children}
            </a>
            </li>
    )
}

export default Button;