import Image from 'next/image';

interface LanguageProps {
    light: string;
    dark: string;
    alt: string;
    name: string;
}

const LanguageComponent: React.FC<LanguageProps> = ({light,dark, alt, name}) => {
    return (
        <div className='min-h-10 rounded-lg divide-x  divide-li  dark:divide-impact flex items-center justify-center md:justify-normal'>
        <div className='pr-6 mb-6 md:mb-0'>
          <Image
          src={light}
          alt={alt}
          width={100}
          height={100}
          className="block dark:hidden"
          />
           <Image
          src={dark}
          alt={alt}
          width={100}
          height={100}
          className="hidden dark:block"
          />
        </div>
        <div className='hidden lg:block text-lt dark:text-primary pl-6'>
          <h2 className='text-4xl'>{name}</h2>
        </div>
      </div>
    );
}

export default LanguageComponent;