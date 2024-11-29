import Image from 'next/image';
import Button from '../Button';

interface CardProjectProps {
    id: number;
    image: string;
    alt: string;
    technology: string;
    description: string;
    github: string;
    demo: string;
    priority: boolean;
}


const CardProject: React.FC<CardProjectProps> = ({priority,image, alt, technology, description, github, demo}) => {
    return (
    <>
        <div id='wrapper' className='relative grid group' >
            <div className='flex flex-wrap'>
                <div className=" w-full">
                    <div 
                    className='
                    relative 
                    h-96 w-full 
                    overflow-hidden 
                    border border-li
                    dark:border-impact'>
                        <Image 
                        priority={priority}
                            className='
                            w-full
                            h-full
                            object-cover
                            transform 
                            group-hover:scale-110 
                            transition-all 
                            duration-500
                            grayscale
                            group-hover:grayscale-0
                           '
                            src={image}
                            alt={alt}
                            width={500}
                            height={300}
                            />
                        <div 
                        id='overlay' 
                        className='
                        absolute 
                        inset-0 
                        bg-li opacity-40  
                        dark:bg-impact dark:opacity-40 
                        transition-all 
                        duration-500 
                        group-hover:opacity-0'>
                        </div>
                        <div id="box-container" className='absolute left-0 bottom-4  w-full '>
                            <div
                            id='box'
                            className='
                            m-auto
                            w-11/12
                            px-4
                            py-2
                            shadow-sm
                            shadow-gray-900
                            bg-gray-900
                            bg-opacity-80'>
                                <h2
                                className='mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px'>{technology}</h2>
                                <p className="font-heading font-semibold text-lg text-primary" id='description'>{description}</p>
                                <div className=' ' >
                                    <Button noLeftMargin 
                                    className="text-primary">
                                        <a target="_blank" href={github}>ディレクトリ</a>
                                    </Button>
                                    <Button
                                    className="text-primary">
                                        <a target="_blank" href={demo}>公開版へ</a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default CardProject;
