import React from 'react'

export const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Cliente 1',
            company: 'Empresa 1',
            quote:
                'El trabajo realizado por [tu nombre] fue excepcional y nos ayudó a alcanzar nuestros objetivos de manera eficiente.',
        },
        {
            id: 2,
            name: 'Cliente 2',
            company: 'Empresa 2',
            quote:
                '[Tu nombre] demostró habilidades sobresalientes en el desarrollo de nuestro proyecto y siempre estuvo dispuesto a ayudar.',
        },
        // ... Agrega más testimonios aquí
    ];

    return (
        <div className="bg-black text-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-white">Testimonios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-gray-300 mb-2">{testimonial.quote}</p>
                        <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-gray-500">{testimonial.company}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
