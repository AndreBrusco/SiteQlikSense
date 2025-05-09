// src/components/Header.tsx
export default function Header() {
    return (
        <header className="bg-green-500 text-white py-4 flex justify-between items-center shadow-md sticky top-0 z-10 rounded-md">
            <div className="logo text-xl font-bold ml-4">Curso de Qlik Sense</div>
            <nav className="mr-4">
                <ul className="flex space-x-4">
                    <li><a href="#sobre" className="hover:text-green-900">Sobre</a></li>
                    <li><a href="#conteudo" className="hover:text-green-900">Conteúdo</a></li>
                    <li><a href="#instrutor" className="hover:text-green-900">Instrutor</a></li>
                    <li><a href="#depoimentos" className="hover:text-green-900">Depoimentos</a></li>
                    <li><a href="#matricula" className="hover:text-green-900">Matrícula</a></li>
                </ul>
            </nav>
        </header>
    );
}
