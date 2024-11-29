import React, { ReactNode } from 'react';
import Button from '../Button';

interface aboutProps {
    id: string;
}


const about = ({id}:aboutProps) => {

    const insistOnWords = 'text-li300 dark:text-impact300 font-medium'
    const classNameButton = `
        text-xl
        px-4 py-2
        border border-li300 dark:border-impact300
        hover:border-li dark:hover:border-impact
        justify-center items-center
        pr-2 <pl-2></pl-2>
        `

    return (
    <>
        <section 
        id={id}
        className='mb-10'>
            <div>
            <h2 className="text-2xl lg:text-3xl  mb-6 ">自己紹介</h2>
                <div className='lg:grid lg:grid-cols-2'>
                    <div className='flex flex-col gap-4 sm:gap-6 lg:col-span-1'>
                        <div className="text-lg sm:block ">
                            <p>
                            現在、福岡でフロントエンドエンジニアとして働ける仕事を探しています。<br/>
                            <span className={insistOnWords} >HTML、CSS、JavaScript </span>を中心に、<span className={insistOnWords}>React</span> や <span className={insistOnWords}>Tailwind CSS </span>を使用したプロジェクトを友人と取り組んでいます。
                            また、<span className={insistOnWords}>Photoshop </span>や <span className={insistOnWords}>Figma </span> の知識を活かし、デザイナーのニードに的確に応えることができます。
                            また、<span className={insistOnWords}>フランス語、英語、日本語 </span> の三言語を話せるため、 国際的な環境でも柔軟に対応可能です。<br/>
                            就職後も継続的に学習し、成長しながら会社に貢献していきたいと考えています。
                            </p>
                        </div>
                        <div className='flex flex-col md:flex-row justify-left gap-2 lg:gap-6'>
                            <Button noLeftMargin className={classNameButton}>
                                <a className="pl-2" href="/履歴書.pdf"  download>履歴書</a>
                            </Button>
                            <Button noLeftMargin className={classNameButton}>
                                <a className="pl-2" href="/職務経歴書.pdf"  download>職務経歴書</a>
                            </Button>
                        </div>
                    </div>
                    <div className='hidden lg:block md:col-span-1 relative w-full overflow-visible'> 
                        <div 
                        className='
                        absolute 
                        top-8 right-36
                        w-64 h-48 
                        bg-li dark:bg-impact 
                        rounded-full filter blur-2xl
                        mix-blend-multiply dark:mix-blend-lighten
                        opacity-70 dark:opacity-55  
                        animate-blob dark:animate-blob '
                        ></div>
                        <div 
                        className='
                        absolute 
                        top-0.5 -right-1.5
                        w-64 h-48 
                        bg-li300 dark:bg-impact300
                         rounded-full filter blur-2xl
                        mix-blend-multiply dark:mix-blend-lighten
                        opacity-70 dark:opacity-55  
                        animate-blob
                        animation-delay-2000'
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}

export default about;