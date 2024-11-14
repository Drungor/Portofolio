import React, { ReactNode } from 'react';

interface ResumeProps {
    children: ReactNode;
    id: string;
}


const Resume = ({children, id}:ResumeProps) => {
    return (
        <>
        <section id={id}>
        {children}
        </section>
        </>
    );
}
export default Resume;