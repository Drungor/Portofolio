import React, { ReactNode } from 'react';

interface ProjectsProps {
    children: ReactNode;
    id: string;
}


const projects = ({children, id}:ProjectsProps) => {
    return (
        <>
        <section id={id}>
        {children}
        </section>
        </>
    );
}

export default projects;