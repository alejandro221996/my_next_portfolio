import React from 'react'

export const Aboutme = () => {
    return (
        <section className="py-6 bg-black text-white font-mono">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8 ">Sobre mí</h2>
                <div className="flex flex-col md:flex-row items-center p-4 border-2 border-white rounded-xl">
                    <div className="md:w-1/2">
                        <img
                            src="https://media.istockphoto.com/id/1368954963/es/foto/seguridad-cibern%C3%A9tica-en-verificaci%C3%B3n-en-dos-pasos-inicio-de-sesi%C3%B3n-usuario-seguridad-y.jpg?s=612x612&w=is&k=20&c=_oLHJjXm-N6a4aJuMzPkN49NatgjlCq1axC4rYLrmRA="
                            alt="Foto de perfil"
                            className="w-full h-64 object-cover rounded-lg mb-8 md:mb-0"
                        />
                    </div>
                    <div className="md:w-1/2 md:ml-8">
                        <p className="text-white text-lg mb-6">
                            Hola, mi nombre es [tu nombre] y soy un desarrollador web con
                            experiencia en Next.js y Tailwind CSS. He trabajado en varios
                            proyectos, creando soluciones eficientes y escalables para
                            clientes y empresas.
                        </p>
                        <p className="text-white text-lg mb-6">
                            Me apasiona el aprendizaje continuo y la adopción de nuevas
                            tecnologías para mejorar mis habilidades como desarrollador y
                            proporcionar soluciones innovadoras.
                        </p>
                        <p className="text-white text-lg">
                            Si deseas conocer más sobre mi trabajo o colaborar en un proyecto
                            juntos, no dudes en ponerte en contacto conmigo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
