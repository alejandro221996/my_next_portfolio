import React from 'react'

export const WorkExperience = () => {
    const experiences = [
        {
            id: 1,
            position: 'Desarrollador Frontend',
            company: 'Empresa 1',
            duration: 'Enero 2020 - Diciembre 2021',
            responsibilities: [
                'Creación y mantenimiento de interfaces de usuario utilizando React y Vue.',
                'Implementación de diseños responsive con Tailwind CSS y Bootstrap.',
                'Colaboración con el equipo de diseño para mejorar la experiencia de usuario.',
            ],
        },
        {
            id: 2,
            position: 'Desarrollador Full Stack',
            company: 'Empresa 2',
            duration: 'Enero 2018 - Diciembre 2019',
            responsibilities: [
                'Desarrollo de aplicaciones web utilizando Node.js, Express y MongoDB.',
                'Creación de API RESTful para ser consumidas por aplicaciones frontend.',
                'Implementación de soluciones de autenticación y autorización con JWT.',
            ],
        },
        // Agrega más experiencias aquí
    ];

    return (
        <div className="bg-black text-white rounded-lg shadow-md p-6 border-2 border-white mt-4 font-mono">
            <h2 className="text-2xl font-semibold mb-4 text-white">Experiencia laboral</h2>
            {experiences.map((experience) => (
                <div key={experience.id} className="mb-8">
                    <h3 className="text-xl font-semibold">{experience.position}</h3>
                    <p className="text-gray-400">{experience.company}</p>
                    <p className="text-gray-500 italic">{experience.duration}</p>
                    <ul className="list-disc list-inside mt-2">
                        {experience.responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-gray-300">
                                {responsibility}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
