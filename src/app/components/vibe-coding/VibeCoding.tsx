import { Server, MessageSquare, FileCode, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <div className="group p-6 border border-li dark:border-impact hover:border-li300 dark:hover:border-impact300 transition-all duration-300 hover:bg-li300/5 dark:hover:bg-impact300/5">
            <div className="flex items-center gap-4 mb-4">
                <Icon
                    size={32}
                    className="text-li dark:text-impact group-hover:text-li300 dark:group-hover:text-impact300 transition-colors duration-300"
                />
                <h3 className="text-xl font-medium">{title}</h3>
            </div>
            <p className="text-lt/80 dark:text-primary/80 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

const features = [
    {
        icon: Server,
        title: "MCP & CLI",
        description: "MCPサーバーでAIとデータを接続。CLIで作業を自動化。"
    },
    {
        icon: MessageSquare,
        title: "プロンプト管理",
        description: "Cursor・Claude Desktop・Antigravityで効率的にコードを生成。"
    },
    {
        icon: FileCode,
        title: "Spec-Driven Dev",
        description: "Spec Kitで仕様を書き、AIがコードに変換。"
    }
];

const VibeCoding: React.FC = () => {
    return (
        <section className="md:mb-16 mb-10">
            <h2 className="text-2xl lg:text-3xl mb-4">AIアシスト開発</h2>
            <p className="text-lg text-lt/70 dark:text-primary/70 mb-8 max-w-2xl">
                最新のAIツールで、より速く、より良いコードを書く。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default VibeCoding;
