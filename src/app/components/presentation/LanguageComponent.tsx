

import { Code2, FileCode, FileText, Atom, LucideProps } from 'lucide-react';

interface LanguageProps {
    name: string;
    icon: React.ComponentType<LucideProps>;
    color: string;
}

const LanguageComponent: React.FC<LanguageProps> = ({ name, icon: Icon, color }) => {
    return (
        <div className='min-h-10 rounded-lg divide-x divide-li dark:divide-impact flex items-center justify-center md:justify-normal hover:bg-li300/10 dark:hover:bg-impact300/10 transition-colors duration-200'>
            <div className='pr-6 mb-6 md:mb-0 flex items-center justify-center'>
                <Icon 
                    size={64} 
                    className={`${color} hover:text-li300 dark:hover:text-impact300 transition-colors duration-200`}
                />
            </div>
            <div className='hidden lg:block text-lt dark:text-primary pl-6'>
                <h2 className='text-4xl'>{name}</h2>
            </div>
        </div>
    );
}

export default LanguageComponent;