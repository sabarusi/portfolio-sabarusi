import React from 'react'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const About = ({locale}) => {
   const description = {
      en:"Self-taught Frontend Developer, focused on React and NextJS. Passionate about making new and perfomant stuff. Currently learning and working as freelance. Feel free to contact me.",
      es:"Frontend Developer, enfocado en React y NextJS. Me apasiona trabajar en cosas nuevas y orientadas a la perfomance. Actualmente me encuentro aprendiendo y trabajando como freelance. Pueden contactarme por mis redes."
      }
    return  <section id="about" className="snap-start flex flex-col min-h-screen w-full items-center justify-center bg-primary py-2">
             <div className="flex flex-col p-2 space-y-1.5">
             <h1 className="text-stroke text-transparent stroke-color-indigo text-center text-5xl sm:text-6xl">My name is Ignacio Casaburi</h1>
             <h1 className="text-stroke text-transparent stroke-color-white text-center text-3xl sm:text-4xl">..but everybody calls me Nacho</h1>
             </div>
             <div className="text-white max-w-3xl text-justify text-lg sm:text-3xl py-4 px-6 font-sans">
                <span>{description[locale]}</span>
             </div>
             <div className ="flex flex-row max-w-3xl w-full text-white text-3xl space-x-10 justify-center py-2">
              <a aria-label="Github profile" href="https://github.com/sabarusi"><FaGithub/></a>
              <a aria-label="Linkedin profile" href="https://www.linkedin.com/in/ignaciocasaburi/"><FaLinkedinIn/></a>
             </div>
            </section>
    
}

export default About
