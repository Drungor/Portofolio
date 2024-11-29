

import LanguageComponent from './LanguageComponent';
import imageLanguage from '../../data/imageData';

const Presentation: React.FC = () => {
  return (
    <>
      <section className="grid sm:grid-cols-12 md:mb-16 mb-8">
        <div 
        id="small-presentation" 
        className="text-xl col-span-6 md:self-center ml-0 pl-0"
        >
          <h2 className="text-2xl lg:text-3xl sm:mb-6 mt-4 mb-6 md:mb-6 sm:mt-0">プログラミング言語</h2>
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
        <div className="col-span-1"></div>
          <div
          id="language"
          className="grid grid-cols-2 gap-4 col-span-5"
          >
            {imageLanguage.map((lang) => (
              <LanguageComponent
                key={lang.id}
                light={lang.light}
                dark={lang.dark}
                alt={lang.alt}
                name={lang.name}
              />
            ))}
          </div>
      </section>
    </>
  );
};

export default Presentation;