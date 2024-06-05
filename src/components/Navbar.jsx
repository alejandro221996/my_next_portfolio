import Link from 'next/link'
import { useState } from 'react'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white shadow-lg ">
            <div className="container mx-auto px-6 py-3 ">
                <div className="flex items-center justify-between">
                    <div className="hidden md:flex items-center space-x-8">
                        <Link className="text-gray-400 font-semibold text-2xl hover:text-gray-700 transition-colors duration-200" href="/">
                            Inicio
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            className="outline-none mobile-menu-button"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {/* Resto del código del botón */}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden mt-4">
                        <Link className="text-gray-400 font-semibold text-2xl hover:text-gray-700 transition-colors duration-200" href="/">
                            Inicio
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar