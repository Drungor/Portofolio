import React, { ReactNode } from 'react';
import Button from '../Button';

interface ContactProps {
    id: string;
}


const Contact = ({id}:ContactProps) => {

    const insistOnWords = 'text-li300 dark:text-impact300 font-medium'
    const classNameButton = `text-xl sm:text-2xl md:text-3xl lg:text-4xl 
    px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5
    border border-li300 dark:border-impact300 rounded-none
    hover:border-li dark:hover:border-impact
    justify-center items-center
    pr-2`

    return (
    <>
        <section 
        id={id}
        className='mb-10'>
            <div>
            <h2 className="text-2xl lg:text-3xl sm:mb-6">コンタクト</h2>
                <section className='grid grid-flow-row  md:grid-flow-col md:grid-cols-2 gap-4 sm:gap-6'>
                    <div className="text-lg sm:block">
                        <p>
                        私は現在、福岡でフロントエンド開発者として働ける仕事を探しています。<br/>
                        <span className={insistOnWords} >HTML、CSS、JavaScript </span>を中心に、
                        <span className={insistOnWords}>ReactやTailwind CSS</span>を使用したプロジェクト
                        を友人と取り組んできました。
                        また、<span className={insistOnWords}>PhotoshopやFigma </span>の知識を活かし、デザイン
                        の意図を正確にコードに反映できます。<br/>
                        <span className={insistOnWords}>フランス語、英語、日本語 </span>の三言語を話せるため、
                        国際的な環境でも柔軟に対応可能です。学習意欲が高く、成長しながら貢献したいと考えています。
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center m-auto gap-12'>
                        <Button className={classNameButton}>
                            <a href="/メタ履歴書.pdf"  target="_blank" rel="noopener noreferrer">履歴書</a>
                        </Button>
                        <Button className={classNameButton}>
                            <a href="/メタ職務経歴書.pdf"  target="_blank" rel="noopener noreferrer">職務経歴書</a>
                        </Button>
                    </div>
                </section>   
            </div>
        </section>
    </>
    );
}

export default Contact;