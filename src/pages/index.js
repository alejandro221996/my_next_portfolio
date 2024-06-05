import { Aboutme } from '@/components/AboutMe'
import { Contactme } from '@/components/ContactMe'
import Navbar from '@/components/NavBar'
import { SoftSkills } from '@/components/SoftSkills'
import { Testimonials } from '@/components/Testimonials'
import { WorkExperience } from '@/components/WorkExperience'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const projects = [
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1',
    image: 'https://1.bp.blogspot.com/-GBtj64vGfzw/Wu0RA50shgI/AAAAAAAAFgk/OxFO2qKSqcEtLTSIEfRmnzGXMarNUq-TACLcBGAs/s1600/Ejemplo%2Bpresupuesto%2Bproyecto%2Bsoftware.png',
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description: 'Descripción del Proyecto 2',
    image: 'https://1.bp.blogspot.com/-GBtj64vGfzw/Wu0RA50shgI/AAAAAAAAFgk/OxFO2qKSqcEtLTSIEfRmnzGXMarNUq-TACLcBGAs/s1600/Ejemplo%2Bpresupuesto%2Bproyecto%2Bsoftware.png',
  },
  // Agrega más proyectos aquí
]
const inter = Inter({ subsets: ['latin'] })

// Resto del código

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Mi Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-12 font-mono">
        <Navbar />
        <Aboutme />
        <h1 className="text-4xl font-bold text-center mb-8">
          Mis proyectos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 border-2 border-white rounded-xl ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="transition-all duration-300 ease-in-out transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 ease-in-out hover:bg-opacity-30"></div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <WorkExperience />
        <SoftSkills />
        <Testimonials />
        <Contactme />
      </main>
    </div>
  )
}

