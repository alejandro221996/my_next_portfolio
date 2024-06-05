import React from 'react'
import { FaUserFriends, FaComments, FaLightbulb, FaRunning } from 'react-icons/fa';

export const SoftSkills = () => {
    const skills = [
        {
            id: 1,
            name: 'Comunicación',
            description: 'He trabajado en proyectos colaborativos y presentado mis ideas de manera efectiva.',
            icon: <FaComments />,
        },
        {
            id: 2,
            name: 'Trabajo en equipo',
            description: 'He liderado y participado en equipos multidisciplinarios para alcanzar objetivos comunes.',
            icon: <FaUserFriends />,
        },
        {
            id: 3,
            name: 'Resolución de problemas',
            description: 'Encuentro soluciones creativas y eficientes a problemas complejos en mi trabajo diario.',
            icon: <FaLightbulb />,
        },
        {
            id: 4,
            name: 'Adaptabilidad',
            description: 'Me adapto rápidamente a nuevos entornos, tecnologías y metodologías de trabajo.',
            icon: <FaRunning />,
        },
    ];

    return (
        <div className="bg-black text-white rounded-lg shadow-md p-6 mt-4 border-2 border-white">
            <h2 className="text-2xl font-semibold mb-4">Habilidades Blandas</h2>
            <ul>
                {skills.map((skill) => (
                    <li key={skill.id} className="mb-4">
                        <div className="flex items-center">
                            <div className="text-4xl hover:text-gray-500 transition-colors duration-200 mr-4">
                                {skill.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">{skill.name}</h3>
                                <p className="text-gray-300 mt-2">{skill.description}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
