import React, { ReactNode } from 'react';

interface ContactProps {
    children: ReactNode;
    id: string;
}


const Contact = ({children, id}:ContactProps) => {
    return (
        <>
        <section id={id}>
        {children}
        </section>
        </>
    );
}

export default Contact;