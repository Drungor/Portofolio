import React, { ReactNode } from 'react';
import CardProject from './CardProject';
import projectData from '../../data/projectData';

interface ProjectsProps {
    id: string;
}


const Projects = ({ id }: ProjectsProps) => {
    return (
        <>
            <section id={id}>
                <h1 className='text-3xl mb-8'>プロジェクト</h1>
            </section>
            <section className=' md:mb-12 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 justify-center' >
                {projectData.map((project) => (
                    <CardProject
                        id={project.id}
                        key={project.id}
                        image={project.image}
                        alt={project.alt}
                        technology={project.technology}
                        description={project.description}
                        github={project.GitHub}
                        demo={project.demo}
                        priority={project.priority}
                    />
                ))}
            </section>
        </>
    );
}



export default Projects;
