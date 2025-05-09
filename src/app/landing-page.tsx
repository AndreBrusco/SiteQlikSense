// src/app/landing-page/page.tsx (para Next 13+ com App Directory)
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
    return (
        <div className="bg-white">
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

            <section id="sobre" className="bg-green-100 py-16 px-4 text-gray-800 text-center rounded-md">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">Aprenda Qlik Sense e Domine a Análise de Dados</h2>
                    <p className="text-lg mb-6">
                        Este curso completo irá guiá-lo desde os conceitos básicos até técnicas avançadas de Qlik Sense.
                        Aprenda a criar visualizações interativas, dashboards e aplicativos analíticos poderosos.
                    </p>
                    <a href="#matricula" className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out">
                        Matricule-se Agora
                    </a>
                </div>
            </section>

            <section id="conteudo" className="bg-white py-16 px-4 text-gray-800 text-center rounded-md">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold text-green-700 mb-8">Conteúdo do Curso</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-green-50 shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-green-600 mb-4">Módulo 1: Introdução ao Qlik Sense</h3>
                            <p className="text-gray-700 mb-4">Conceitos básicos, instalação e interface.</p>
                        </div>
                        <div className="bg-green-50 shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-green-600 mb-4">Módulo 2: Modelagem de Dados</h3>
                            <p className="text-gray-700 mb-4">Carregamento, transformação e associação de dados.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-800 text-white py-4 text-center rounded-md">
                <p>© 2023 Curso de Qlik Sense. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
