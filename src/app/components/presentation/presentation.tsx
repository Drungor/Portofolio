import LanguageComponent from './LanguageComponent';
import imageLanguage from '../../data/imageData';
import { Code2, Code, Database, Atom, LucideIcon } from 'lucide-react';

const Presentation: React.FC = () => {
  const iconMap: Record<string, LucideIcon> = {
    Database,
    Code,
    Code2,
    Atom
  };

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
              9月から現在まで主にSQL、C#、Reactを中心に学習を進めてきました。<br />
              最近はフロントエンドとバックエンドの両方をコーディングできるように Next.jsの学習を開始しました。
              これからは、さらにスキルを向上させ、将来的にはフルスタックエンジニアになることを目指しています。<br />
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
              name={lang.name}
              icon={iconMap[lang.icon]}
              color={lang.color}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Presentation;