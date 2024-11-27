import React, { ReactNode } from 'react';

interface ContactProps {
    id: string;
}


const Contact = ({id}:ContactProps) => {
    return (
    <>
        <section 
        id={id}
        className='mb-10'>
            <div>
                <h2>コンタクト</h2>
                <p>Feel free to contact me via email 
                    <a 
                    className="pl-1"
                    href="mailto:leopold.mtr@outlook.com?subject=Hello">here</a> 
                </p>
                <div className="text-lg hidden sm:block">
                    <p>
                    2023年9月からコーディングの勉強とウェブサイトの開発を始めました。<br />
                    9月から現在まで、主にHTML、CSS、Reactを中心に学習を進めてきました。<br />
                    そして最近、フロントエンドとバックエンドの両方をコーディングできるようにするために、
                    Next.jsの使用を開始しました。<br />
                    これにより、スキルをさらに向上させ、将来的にはフルスタックJS開発者になることを目指しています。
                    </p>
                </div>    
            </div>
        </section>
    </>
    );
}

export default Contact;