import Button from './Button';

const Header = () => {
    return (
        <header className="flex flex-row justify-between mt-6">
            <div className= "">
            <h2> メタ レオポルド アントワネ</h2>
            </div>
            <nav>
                <ul className="flex flex-row gap-6">
                    <Button href="#projects" id="projects">プロジェクト</Button>
                    <Button href="#resume" id="resume">経歴</Button>
                    <Button href="#contact" id="contact">コンタクト</Button>
                </ul>
            </nav>
        </header>
    );
};

export default Header;