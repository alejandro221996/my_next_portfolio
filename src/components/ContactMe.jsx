import React from 'react'

export const Contactme = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, como enviar un correo electrónico o guardar los datos en una base de datos
    };

    return (
        <div className="bg-black text-white rounded-lg shadow-md p-6 mt-4 border-2 border-white">
            <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input
                        className="shadow appearance-none bg-gray-800 text-white border-2 border-gray-800 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-twitter-500 transition duration-200"
                        id="name"
                        type="text"
                        placeholder="Nombre"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                        Correo electrónico
                    </label>
                    <input
                        className="shadow appearance-none bg-gray-800 text-white border-2 border-gray-800 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-twitter-500 transition duration-200"
                        id="email"
                        type="email"
                        placeholder="Correo electrónico"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="subject">
                        Asunto
                    </label>
                    <input
                        className="shadow appearance-none bg-gray-800 text-white border-2 border-gray-800 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-twitter-500 transition duration-200"
                        id="subject"
                        type="text"
                        placeholder="Asunto"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
                        Mensaje
                    </label>
                    <textarea
                        className="shadow appearance-none bg-gray-800 text-white border-2 border-gray-800 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-twitter-500 transition duration-200"
                        id="message"
                        placeholder="Escribe tu mensaje aquí"
                        rows="6"
                        required
                    ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-twitter-500 hover:bg-twitter-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
                        type="submit"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}
