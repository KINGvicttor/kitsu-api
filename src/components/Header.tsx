type Props = {
    page: string;
}

export const Header = ({ page }: Props) => {
    return (
        <header className="w-screen h-[100px]">
            <div className="container mx-auto w-full h-full flex justify-between items-center">
                <div className="w-[80px] h-[80px] border-3 border-red-800 rounded-full">
                    <img
                        className="bg-cover bg-center rounded-full"
                        src="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png" />
                </div>
                <div className="w-[1000px] h-[80px]">
                    <nav>
                        {page === 'home' &&
                            <ul className="flex items-center justify-around h-[80px]">
                                <a href="./"><li className="border-b-3 border-red-800 text-xl text-gray-300 hover:text-white">Home</li></a>
                                <a href="/favorites"><li className="border-b-3 border-transparent text-xl text-gray-300 hover:text-white hover:border-red-800">Favorites</li></a>
                                <a href="/watched"><li className="border-b-3 border-transparent text-xl text-gray-300 hover:text-white hover:border-red-800">Watched</li></a>
                                <a href="/seeLater"><li className="border-b-3 border-transparent text-xl text-gray-300 hover:text-white hover:border-red-800">See Later</li></a>
                            </ul>
                        }
                        {page === 'favorite' &&
                            <ul className="flex items-center justify-around h-[80px]">
                                <a href="./"><li className="border-b-3 border-transparent text-xl text-gray-300 hover:text-white hover:border-red-800">Home</li></a>
                                <a href="/favorites"><li className="border-b-3 border-red-800 text-xl text-gray-300 hover:text-white">Favorites</li></a>
                                <a href="/watched"><li className="border-b-3 border-transparent text-xl text-gray-300 hover:text-white hover:border-red-800">Watched</li></a>
                                <a href="/seeLater"><li className="border-b-3 border-transparent text-xl text-gray-300 hover:text-white hover:border-red-800">See Later</li></a>
                            </ul>
                        }
                        {page === 'watched' &&
                            <ul className="flex items-center justify-around h-[80px]">
                                <a href="./"><li className="border-b-3 border-transparent text-xl text-gray-300 hover:text-white hover:border-red-800">Home</li></a>
                                <a href="/favorites"><li className="border-b-3 border-transparent text-xl text-gray-300 hover:text-white">Favorites</li></a>
                                <a href="/watched"><li className="border-b-3 border-red-800 text-xl text-gray-300 hover:text-white">Watched</li></a>
                                <a href="/seeLater"><li className="border-b-3 border-transparent text-xl text-gray-300 hover:text-white hover:border-red-800">See Later</li></a>
                            </ul>
                        }
                        {page === 'seeLater' &&
                            <ul className="flex items-center justify-around h-[80px]">
                                <a href="./"><li className="border-b-3 border-transparent text-xl text-gray-300 hover:text-white hover:border-red-800">Home</li></a>
                                <a href="/favorites"><li className="border-b-3 border-transparent text-xl text-gray-300 hover:text-white">Favorites</li></a>
                                <a href="/watched"><li className="border-b-3 border-transparent text-xl text-gray-300 hover:text-white hover:border-red-800">Watched</li></a>
                                <a href="/seeLater"><li className="border-b-3 border-red-800 text-xl text-gray-300 hover:text-white">See Later</li></a>
                            </ul>
                        }
                    </nav>
                </div>
            </div>
        </header>
    )
}